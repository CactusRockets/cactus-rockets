from __future__ import annotations

import json
import re
import unicodedata
from pathlib import Path

import pdfplumber


ROOT = Path(__file__).resolve().parents[1]
PDF_PATH = ROOT / "src" / "docs" / "Fases1_2.pdf"
OUTPUT_PATH = ROOT / "src" / "data" / "pdfProcessCatalog.ts"


def normalize(text: str) -> str:
    text = unicodedata.normalize("NFD", text or "")
    text = "".join(ch for ch in text if unicodedata.category(ch) != "Mn")
    text = text.lower().replace("\n", " ")
    text = re.sub(r"\s+", " ", text)
    return text.strip()


def clean_text(value: str | None) -> str:
    return re.sub(r"\s+", " ", (value or "").strip())


def append_text(current: str, extra: str) -> str:
    extra = clean_text(extra)
    if not extra:
        return current
    if not current:
        return extra
    if extra in current:
        return current
    if current.endswith(extra):
        return current
    return f"{current} {extra}".strip()


def split_bullets(value: str) -> list[str]:
    lines = []
    for raw_line in (value or "").splitlines():
        line = clean_text(raw_line).lstrip("•●").strip(" -")
        if line:
            lines.append(line)
    return lines


def format_source_pages(pages: set[int]) -> list[int]:
    return sorted(pages)


def make_activity(title: str, description: str, page_index: int) -> dict:
    return {
        "title": clean_text(title),
        "description": clean_text(description),
        "objective": "",
        "tools": [],
        "duration": "",
        "collaborators": "",
        "projectRisks": [],
        "safetyRisks": [],
        "indicators": [],
        "skills": [],
        "sourcePages": {page_index},
    }


def make_subprocess(title: str, description: str = "", page_index: int | None = None) -> dict:
    entry = {
        "title": clean_text(title),
        "description": clean_text(description),
        "sourcePages": set(),
        "activities": [],
    }
    if page_index is not None:
        entry["sourcePages"].add(page_index)
    return entry


def make_process(title: str, description: str = "", page_index: int | None = None) -> dict:
    entry = {
        "title": clean_text(title),
        "description": clean_text(description),
        "sourcePages": set(),
        "subprocesses": {},
    }
    if page_index is not None:
        entry["sourcePages"].add(page_index)
    return entry


def parse_general_tables() -> dict[str, dict]:
    catalog: dict[str, dict] = {}
    current_process: str | None = None

    def get_process(title: str, description: str = "", page_index: int | None = None) -> dict:
        key = normalize(title)
        if key not in catalog:
            catalog[key] = make_process(title, description, page_index)
        process = catalog[key]
        if description:
            process["description"] = append_text(process["description"], description)
        if page_index is not None:
            process["sourcePages"].add(page_index)
        return process

    with pdfplumber.open(str(PDF_PATH)) as pdf:
        for page_index, page in enumerate(pdf.pages[:83], start=1):
            for table in page.extract_tables() or []:
                rows: list[list[str]] = []
                for row in table:
                    cleaned = [clean_text(cell) for cell in row]
                    if any(cleaned):
                        rows.append(cleaned)

                if not rows:
                    continue

                first_cell = rows[0][0] if rows[0] else ""
                first_norm = normalize(first_cell)

                if first_norm.startswith("macroprocesso:"):
                    start_index = 1
                    if (
                        len(rows) > 1
                        and normalize(rows[1][0]) == "processo"
                        and len(rows[1]) > 1
                        and normalize(rows[1][1]) == "descricao"
                    ):
                        start_index = 2

                    last_title: str | None = None
                    for row in rows[start_index:]:
                        title = row[0].strip() if row else ""
                        description = row[1].strip() if len(row) > 1 else ""
                        if title:
                            last_title = title
                            get_process(title, description, page_index)
                        elif last_title and description:
                            process = get_process(last_title, page_index=page_index)
                            process["description"] = append_text(
                                process["description"], description
                            )
                    continue

                if first_norm.startswith("processo:"):
                    current_process = first_cell.split(":", 1)[1].strip()
                    process = get_process(current_process, page_index=page_index)

                    start_index = 1
                    if (
                        len(rows) > 1
                        and normalize(rows[1][0]) == "subprocesso"
                        and len(rows[1]) > 1
                        and normalize(rows[1][1]) == "descricao"
                    ):
                        start_index = 2

                    last_title: str | None = None
                    for row in rows[start_index:]:
                        title = row[0].strip() if row else ""
                        description = row[1].strip() if len(row) > 1 else ""
                        if title:
                            last_title = title
                            key = normalize(title)
                            if key not in process["subprocesses"]:
                                process["subprocesses"][key] = make_subprocess(
                                    title, description, page_index
                                )
                            subprocess = process["subprocesses"][key]
                            subprocess["description"] = append_text(
                                subprocess["description"], description
                            )
                            subprocess["sourcePages"].add(page_index)
                        elif last_title and description:
                            subprocess = process["subprocesses"][normalize(last_title)]
                            subprocess["description"] = append_text(
                                subprocess["description"], description
                            )
                            subprocess["sourcePages"].add(page_index)
                    continue

                if first_norm.startswith("subprocesso:") and current_process:
                    process = get_process(current_process, page_index=page_index)
                    subprocess_title = first_cell.split(":", 1)[1].strip()
                    subprocess_key = normalize(subprocess_title)
                    if subprocess_key not in process["subprocesses"]:
                        process["subprocesses"][subprocess_key] = make_subprocess(
                            subprocess_title, page_index=page_index
                        )
                    subprocess = process["subprocesses"][subprocess_key]
                    subprocess["sourcePages"].add(page_index)

                    start_index = 1
                    if (
                        len(rows) > 1
                        and normalize(rows[1][0]) == "atividade"
                        and len(rows[1]) > 1
                        and normalize(rows[1][1]) == "descricao"
                    ):
                        start_index = 2

                    last_activity: dict | None = None
                    for row in rows[start_index:]:
                        title = row[0].strip() if row else ""
                        description = row[1].strip() if len(row) > 1 else ""
                        if normalize(title) == "atividade":
                            continue

                        if title:
                            activity_key = normalize(title)
                            existing = next(
                                (
                                    item
                                    for item in subprocess["activities"]
                                    if normalize(item["title"]) == activity_key
                                ),
                                None,
                            )
                            if existing is None:
                                existing = make_activity(title, description, page_index)
                                subprocess["activities"].append(existing)
                            else:
                                existing["description"] = append_text(
                                    existing["description"], description
                                )
                                existing["sourcePages"].add(page_index)
                            last_activity = existing
                        elif last_activity and description:
                            last_activity["description"] = append_text(
                                last_activity["description"], description
                            )
                            last_activity["sourcePages"].add(page_index)

    return catalog


def parse_avionics_activity_profiles() -> dict[str, dict]:
    profiles: dict[str, dict] = {}
    field_map = {
        "ferramentas e materiais": "tools",
        "duracao estimada": "duration",
        "numero de colaboradores": "collaborators",
        "objetivos": "objective",
        "riscos de projeto": "projectRisks",
        "riscos de seguranca": "safetyRisks",
        "indicadores de desempenho": "indicators",
        "habilidades necessarias": "skills",
    }

    with pdfplumber.open(str(PDF_PATH)) as pdf:
        for page_index, page in enumerate(pdf.pages[83:100], start=84):
            for table in page.extract_tables() or []:
                rows: list[list[str]] = []
                for row in table:
                    cleaned = [clean_text(cell) for cell in row]
                    if any(cleaned):
                        rows.append(cleaned)

                if not rows:
                    continue

                first_cell = rows[0][0] if rows[0] else ""
                if not normalize(first_cell).startswith("atividade:"):
                    continue

                title = first_cell.split(":", 1)[1].strip()
                key = normalize(title)
                profile = profiles.setdefault(
                    key,
                    {
                        "title": clean_text(title),
                        "objective": "",
                        "tools": [],
                        "duration": "",
                        "collaborators": "",
                        "projectRisks": [],
                        "safetyRisks": [],
                        "indicators": [],
                        "skills": [],
                        "sourcePages": set(),
                    },
                )
                profile["sourcePages"].add(page_index)

                last_field: str | None = None
                for row in rows[1:]:
                    label = row[0].strip() if row else ""
                    value = row[1].strip() if len(row) > 1 else ""
                    label_key = normalize(label)

                    if not label_key and last_field and value:
                        if last_field == "tools":
                            profile["tools"].extend(split_bullets(value))
                        elif last_field in {
                            "projectRisks",
                            "safetyRisks",
                            "indicators",
                            "skills",
                        }:
                            profile[last_field].extend(split_bullets(value))
                        else:
                            profile[last_field] = append_text(profile[last_field], value)
                        continue

                    field_name = field_map.get(label_key)
                    if not field_name:
                        continue

                    last_field = field_name
                    if field_name == "tools":
                        profile[field_name].extend(split_bullets(value))
                    elif field_name in {
                        "projectRisks",
                        "safetyRisks",
                        "indicators",
                        "skills",
                    }:
                        profile[field_name].extend(split_bullets(value))
                    else:
                        profile[field_name] = append_text(profile[field_name], value)

                objective = profile["objective"]
                duration = profile["duration"]
                collaborators = profile["collaborators"]
                if (
                    objective.isdigit()
                    and re.search(r"\bhora", collaborators, flags=re.IGNORECASE)
                    and not re.search(r"\bhora", duration, flags=re.IGNORECASE)
                ):
                    profile["objective"] = duration
                    profile["duration"] = collaborators
                    profile["collaborators"] = objective

                for list_field in (
                    "tools",
                    "projectRisks",
                    "safetyRisks",
                    "indicators",
                    "skills",
                ):
                    deduplicated: list[str] = []
                    seen = set()
                    for item in profile[list_field]:
                        normalized_item = normalize(item)
                        if normalized_item and normalized_item not in seen:
                            seen.add(normalized_item)
                            deduplicated.append(item)
                    profile[list_field] = deduplicated

    return profiles


def apply_avionics_profiles(catalog: dict[str, dict], profiles: dict[str, dict]) -> None:
    avionics_titles = {
        normalize("Desenvolvimento da Aviônica"),
    }

    activity_aliases = {
        normalize("Montagem do circuito de processamento e Testes"): normalize(
            "Montagem do circuito de processamento e Teste"
        ),
        normalize("Definir esquema elétrico entre os componentes e Analisar viabilidade de simulação"): normalize(
            "Definir esquema elétrico entre componentes"
        ),
    }

    for process_key, process in catalog.items():
        if process_key not in avionics_titles:
            continue

        for subprocess in process["subprocesses"].values():
            for activity in subprocess["activities"]:
                activity_key = activity_aliases.get(
                    normalize(activity["title"]), normalize(activity["title"])
                )
                profile = profiles.get(activity_key)
                if not profile:
                    continue

                activity["description"] = append_text(
                    activity["description"], profile["objective"]
                )
                activity["objective"] = profile["objective"]
                activity["tools"] = profile["tools"]
                activity["duration"] = profile["duration"]
                activity["collaborators"] = profile["collaborators"]
                activity["projectRisks"] = profile["projectRisks"]
                activity["safetyRisks"] = profile["safetyRisks"]
                activity["indicators"] = profile["indicators"]
                activity["skills"] = profile["skills"]
                activity["sourcePages"].update(profile["sourcePages"])


def serialize_catalog(catalog: dict[str, dict]) -> list[dict]:
    ordered_processes = []
    for process in catalog.values():
        subprocesses = []
        for subprocess in process["subprocesses"].values():
            activities = []
            for activity in subprocess["activities"]:
                activities.append(
                    {
                        "title": activity["title"],
                        "description": activity["description"],
                        **(
                            {"objective": activity["objective"]}
                            if activity["objective"]
                            else {}
                        ),
                        **({"tools": activity["tools"]} if activity["tools"] else {}),
                        **(
                            {"duration": activity["duration"]}
                            if activity["duration"]
                            else {}
                        ),
                        **(
                            {"collaborators": activity["collaborators"]}
                            if activity["collaborators"]
                            else {}
                        ),
                        **(
                            {"projectRisks": activity["projectRisks"]}
                            if activity["projectRisks"]
                            else {}
                        ),
                        **(
                            {"safetyRisks": activity["safetyRisks"]}
                            if activity["safetyRisks"]
                            else {}
                        ),
                        **(
                            {"indicators": activity["indicators"]}
                            if activity["indicators"]
                            else {}
                        ),
                        **({"skills": activity["skills"]} if activity["skills"] else {}),
                        "sourcePages": format_source_pages(activity["sourcePages"]),
                    }
                )

            subprocesses.append(
                {
                    "title": subprocess["title"],
                    "description": subprocess["description"],
                    "sourcePages": format_source_pages(subprocess["sourcePages"]),
                    "activities": activities,
                }
            )

        ordered_processes.append(
            {
                "title": process["title"],
                "description": process["description"],
                "sourcePages": format_source_pages(process["sourcePages"]),
                "subprocesses": subprocesses,
            }
        )

    return ordered_processes


def build_output(processes: list[dict]) -> str:
    json_payload = json.dumps(processes, ensure_ascii=False, indent=2)
    return """import type { ActivityDetail } from '../types/process'

export type PdfSubprocessCatalogEntry = {
  title: string
  description: string
  sourcePages: number[]
  activities: ActivityDetail[]
}

export type PdfProcessCatalogEntry = {
  title: string
  description: string
  sourcePages: number[]
  subprocesses: PdfSubprocessCatalogEntry[]
}

export const pdfProcessCatalog = """ + json_payload + """ satisfies PdfProcessCatalogEntry[]
"""


def main() -> None:
    catalog = parse_general_tables()
    apply_avionics_profiles(catalog, parse_avionics_activity_profiles())
    serialized = serialize_catalog(catalog)
    OUTPUT_PATH.write_text(build_output(serialized), encoding="utf-8")
    print(
        f"generated {OUTPUT_PATH.relative_to(ROOT)} with "
        f"{len(serialized)} processes"
    )


if __name__ == "__main__":
    main()
