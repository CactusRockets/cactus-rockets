import type { DiagramNode } from '../../types/diagram'
import type { ProcessRecord } from '../../types/process'

type ActivityInspectorProps = {
  process: ProcessRecord
  selectedNode: DiagramNode | null
  isMainProcess: boolean
  onOpenProcess: (processId: string) => void
  onBackToMain: () => void
}

function ChipGroup({
  title,
  items,
}: {
  title: string
  items: string[]
}) {
  return (
    <section className="space-y-3">
      <p className="text-[11px] uppercase tracking-[0.22em] text-cactus-300">
        {title}
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.length > 0 ? (
          items.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-cactus-50/80"
            >
              {item}
            </span>
          ))
        ) : (
          <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-cactus-50/56">
            Nenhum item registrado
          </span>
        )}
      </div>
    </section>
  )
}

export function ActivityInspector({
  process,
  selectedNode,
  isMainProcess,
  onOpenProcess,
  onBackToMain,
}: ActivityInspectorProps) {
  const accent = process.accent ?? '#9ad38e'
  const relatedAction =
    selectedNode?.linkedProcessId && selectedNode.linkedProcessId !== process.id

  return (
    <aside className="space-y-4 rounded-[1.6rem] bg-[#112019]/52 p-1">
      <section className="rounded-[1.45rem] border border-white/8 bg-[#112019]/86 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.16)]">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className="rounded-full border px-3 py-1 text-[10px] uppercase tracking-[0.24em]"
            style={{
              borderColor: accent,
              backgroundColor: `${accent}18`,
              color: accent,
            }}
          >
            {isMainProcess ? 'Visao 3 | Navegacao' : 'Visao 3 | Atividades'}
          </span>

          {!isMainProcess ? (
            <button
              type="button"
              onClick={onBackToMain}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-cactus-50/74 transition hover:border-white/20 hover:bg-white/[0.08]"
            >
              Voltar ao fluxo principal
            </button>
          ) : null}
        </div>

        <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-white">
          {selectedNode?.title ?? process.name}
        </h3>

        <p className="mt-3 text-sm leading-7 text-cactus-50/82">
          {selectedNode?.description ?? process.objective}
        </p>

        {relatedAction ? (
          <button
            type="button"
            onClick={() => onOpenProcess(selectedNode.linkedProcessId!)}
            className="mt-4 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-cactus-50/78 transition hover:border-white/20 hover:bg-white/[0.08]"
          >
            Abrir detalhamento deste subprocesso
          </button>
        ) : null}
      </section>

      <section className="rounded-[1.45rem] border border-white/8 bg-[#112019]/86 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.16)]">
        <div className="space-y-5">
          {selectedNode?.activityItems?.length ? (
            <ChipGroup title="Atividades deste bloco" items={selectedNode.activityItems} />
          ) : null}

          <ChipGroup title="Atividades cadastradas" items={process.activities} />
          <ChipGroup title="Entradas" items={process.inputs} />
          <ChipGroup title="Saidas" items={process.outputs} />

          {process.tools?.length ? (
            <ChipGroup title="Ferramentas e materiais" items={process.tools} />
          ) : null}

          {process.projectRisks?.length ? (
            <ChipGroup title="Riscos de projeto" items={process.projectRisks} />
          ) : null}

          {process.sourceReference ? (
            <section className="space-y-3">
              <p className="text-[11px] uppercase tracking-[0.22em] text-cactus-300">
                Referencia de origem
              </p>
              <p className="mt-3 text-sm leading-6 text-cactus-50/80">
                {process.sourceReference}
              </p>
            </section>
          ) : null}
        </div>
      </section>
    </aside>
  )
}
