import type {
  DiagramDefinition,
  DiagramEdge,
  DiagramLane,
  DiagramNode,
} from '../types/diagram'
import type { ActivityDetail, ProcessRecord } from '../types/process'
import {
  macroFlowNodes,
  macroProcessSubprocesses,
  macroSectorProcesses,
} from './macroFlow'
import {
  pdfProcessCatalog,
  type PdfProcessCatalogEntry,
  type PdfSubprocessCatalogEntry,
} from './pdfProcessCatalog'
import { processes as baseProcesses } from './processes'

export const mainProcessId = 'desenvolvimento-da-avionica'



const avionicsSubprocessIds: Record<string, string> = {
  'definicao-do-projeto-teorico-da-avionica': 'definicao-projeto-teorico-avionica',
  'simulacao-e-planejamento-do-projeto-teorico': 'simulacao-e-planejamento',
  'testes-basicos': 'testes-basicos',
  'testes-avancados-e-refinamento': 'testes-avancados-e-refinamento',
  'producao-fisica-e-montagem': 'producao-fisica-e-montagem',
  'integracao-com-outros-setores': 'integracao-com-outros-setores',
  'testes-funcionais-e-testes-de-estresse': 'testes-funcionais-e-testes-de-estresse',
  documentacao: 'documentacao-da-avionica',
}

const eeaSubprocessIds: Record<string, string> = {
  'projeto-openrocket': 'projeto-openrocket',
  'simulacoes-de-voo': 'simulacoes-de-voo',
  'simulacoes-aerodinamicas': 'simulacoes-aerodinamicas',
  'simulacoes-estruturais': 'simulacoes-estruturais',
  'manufatura-dos-tubos-de-corpos': 'manufatura-tubos-corpos',
  'manufatura-da-coifa-(manufatura-aditiva)': 'manufatura-coifa',
  'manufatura-da-coifa-(laminacao)': 'manufatura-coifa',
  'manufatura-do-boat-tail': 'manufatura-boat-tail',
  'manufatura-das-transicoes': 'manufatura-transicoes',
  'manufatura-das-aletas': 'manufatura-aletas',
  'manufatura-dos-rail-buttons': 'manufatura-rail-buttons',
  'integracao-dos-componentes-estruturais': 'integracao-componentes-estruturais',
  'integracao-dos-sistemas-internos': 'integracao-sistemas-internos',
  'montagem-do-foguete': 'montagem-do-foguete',
}

const propulsaoSubprocessIds: Record<string, string> = {
  'desenvolvimento-do-motor': 'desenvolvimento-do-motor',
}

const processAliases: Record<string, string> = {
  'projeto-teorico': 'desenvolvimento-do-projeto-teorico',
  'manufatura': 'manufaturas-dos-componentes-estruturais',
  'montagem': 'montagem-do-foguete',
  'motor': 'desenvolvimento-do-motor',
  'propelente': 'fabricacao-do-propelente-solido-knsb',
  'teste-de-queima': 'teste-de-queima',
  'bancadas-de-teste': 'bancada-de-teste-hidrostatico',
  'produto-final': 'teste-hidrostatico-do-motor',
  'paraquedas': 'desenvolvimento-de-paraquedas',
  'ejecao-pirotecnica': 'desenvolvimento-do-sistema-de-ejecao',
  'polvora': 'desenvolvimento-da-polvora',
  'cortador-de-linha': 'desenvolvimento-do-cortador-de-linha',
  'testes-estaticos': 'teste-estatico-de-ejecao',
}

function normalizeTitle(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/['`\u2018\u2019]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function formatSourceReference(sourcePages?: number[]) {
  if (!sourcePages?.length) {
    return undefined
  }

  const orderedPages = [...sourcePages].sort((left, right) => left - right)
  const firstPage = orderedPages[0]
  const lastPage = orderedPages[orderedPages.length - 1]

  if (firstPage === lastPage) {
    return `Fases1_2.pdf | pagina ${firstPage}`
  }

  return `Fases1_2.pdf | paginas ${firstPage} a ${lastPage}`
}

function buildGroups<T>(items: T[]) {
  if (items.length === 0) {
    return [[], [], []] as [T[], T[], T[]]
  }

  if (items.length <= 2) {
    return [items, [], []] as [T[], T[], T[]]
  }

  if (items.length === 3) {
    return [[items[0]], [items[1]], [items[2]]] as [T[], T[], T[]]
  }

  const baseSize = Math.floor(items.length / 3)
  const remainder = items.length % 3
  const firstSize = baseSize + (remainder > 0 ? 1 : 0)
  const secondSize = baseSize + (remainder > 1 ? 1 : 0)
  const thirdSize = items.length - firstSize - secondSize

  return [
    items.slice(0, firstSize),
    items.slice(firstSize, firstSize + secondSize),
    items.slice(firstSize + secondSize, firstSize + secondSize + thirdSize),
  ] as [T[], T[], T[]]
}

function buildActivityGroups(activities: string[]) {
  return buildGroups(activities)
}

function cloneActivityDetails(items: ActivityDetail[]) {
  return items.map((item) => ({
    ...item,
    tools: item.tools ? [...item.tools] : undefined,
    projectRisks: item.projectRisks ? [...item.projectRisks] : undefined,
    safetyRisks: item.safetyRisks ? [...item.safetyRisks] : undefined,
    indicators: item.indicators ? [...item.indicators] : undefined,
    skills: item.skills ? [...item.skills] : undefined,
    sourcePages: item.sourcePages ? [...item.sourcePages] : undefined,
  }))
}

function buildGenericLanes(process: ProcessRecord): DiagramLane[] {
  return [
    {
      id: 'preparacao',
      name: 'Preparacao',
      description: 'Entradas, estudos e alinhamentos iniciais do bloco.',
      accent: process.softAccent ?? 'rgba(154, 211, 142, 0.14)',
    },
    {
      id: 'execucao',
      name: 'Execucao',
      description: 'Trabalho tecnico principal e validacoes intermediarias.',
      accent: process.softAccent ?? 'rgba(154, 211, 142, 0.12)',
    },
    {
      id: 'evidencias',
      name: 'Evidencias e fechamento',
      description: 'Registros, consolidacao e liberacao da etapa seguinte.',
      accent: process.softAccent ?? 'rgba(154, 211, 142, 0.10)',
    },
  ]
}

function buildSubprocessDiagram(process: ProcessRecord): DiagramDefinition {
  const [prepItems, execItems, evItems] = buildActivityGroups(process.activities)
  const items = [
    ...prepItems.map(item => ({ title: item, lane: 'preparacao', y: 88 })),
    ...execItems.map(item => ({ title: item, lane: 'execucao', y: 258 })),
    ...evItems.map(item => ({ title: item, lane: 'evidencias', y: 474 }))
  ]
  
  const nodes: DiagramNode[] = [
    {
      id: `${process.id}-start`,
      laneId: 'preparacao',
      type: 'start',
      title: 'Inicio',
      description: `Entrada do subprocesso ${process.name}.`,
      x: 80,
      y: 88,
      accent: process.accent ?? '#9ad38e',
    },
  ]
  
  const edges: DiagramEdge[] = []
  
  items.forEach((item, index) => {
    const actId = `${process.id}-act-${index}`
    nodes.push({
      id: actId,
      laneId: item.lane,
      type: 'task',
      title: item.title,
      subtitle: `Atividade ${index + 1}`,
      description: process.activityDetails?.[index]?.description ?? 'Execução da atividade.',
      x: 320 + index * 280,
      y: item.y,
      accent: process.accent ?? '#9ad38e',
      metaLabel: 'Atividade',
    })
    
    edges.push({
      id: `${process.id}-edge-${index}`,
      source: index === 0 ? `${process.id}-start` : `${process.id}-act-${index - 1}`,
      target: actId,
      label: index === 0 ? 'iniciar' : 'avançar',
      color: process.accent,
    })
  })

  const lastNodeId = items.length > 0 ? `${process.id}-act-${items.length - 1}` : `${process.id}-start`
  const endX = 320 + items.length * 280 + 100

  nodes.push({
    id: `${process.id}-end`,
    laneId: 'evidencias',
    type: 'end',
    title: 'Fim',
    description: `Encerramento do subprocesso ${process.name}.`,
    x: endX,
    y: 474,
    accent: process.accent ?? '#9ad38e',
  })
  
  edges.push({
    id: `${process.id}-edge-end`,
    source: lastNodeId,
    target: `${process.id}-end`,
    label: 'concluir',
    color: process.accent,
  })

  return {
    processId: process.id,
    title: process.name,
    summary: process.description,
    helperText: 'Fluxo linear exibindo as atividades sequenciais mapeadas no catálogo.',
    lanes: buildGenericLanes(process),
    nodes,
    edges,
  }
}

function buildSubprocessNode(
  process: ProcessRecord,
  laneId: string,
  x: number,
  y: number,
): DiagramNode {
  return {
    id: process.id,
    laneId,
    type: 'subprocess',
    title: process.name,
    subtitle: process.stage,
    description: process.description,
    x,
    y,
    accent: process.accent ?? '#9ad38e',
    metaLabel: 'Fluxo interno',
    activityItems: process.activities.slice(0, 3),
    linkedProcessId: process.id,
  }
}

function buildMainProcessDiagram(
  process: ProcessRecord,
  children: ProcessRecord[],
): DiagramDefinition {
  const [planningChildren, executionChildren, deliveryChildren] = buildGroups(children)
  const items = [
    ...planningChildren.map(child => ({ child, lane: 'planejamento', y: 88 })),
    ...executionChildren.map(child => ({ child, lane: 'laboratorio', y: 250 })),
    ...deliveryChildren.map(child => ({ child, lane: 'materializacao', y: 454 }))
  ]
  
  const nodes: DiagramNode[] = [
    {
      id: `${process.id}-start`,
      laneId: 'planejamento',
      type: 'start',
      title: 'Inicio',
      description: `Entrada do processo ${process.name}.`,
      x: 80,
      y: 88,
      accent: process.accent ?? '#9ad38e',
    },
  ]
  
  const edges: DiagramEdge[] = []
  
  items.forEach((item, index) => {
    const actId = item.child.id
    nodes.push(buildSubprocessNode(item.child, item.lane, 320 + index * 310, item.y))
    
    edges.push({
      id: `${process.id}-edge-${index}`,
      source: index === 0 ? `${process.id}-start` : items[index - 1].child.id,
      target: actId,
      label: index === 0 ? 'iniciar' : 'avançar',
      color: item.child.accent ?? process.accent,
    })
  })

  const lastNodeId = items.length > 0 ? items[items.length - 1].child.id : `${process.id}-start`
  const endX = 320 + items.length * 310 + 100

  nodes.push({
    id: `${process.id}-end`,
    laneId: 'materializacao',
    type: 'end',
    title: 'Fim',
    description: `Encerramento do processo ${process.name}.`,
    x: endX,
    y: 454,
    accent: process.accent ?? '#9ad38e',
  })
  
  edges.push({
    id: `${process.id}-edge-end`,
    source: lastNodeId,
    target: `${process.id}-end`,
    label: 'concluir',
    color: process.accent,
  })

  return {
    processId: process.id,
    title: process.name,
    summary: process.description,
    helperText: 'Fluxo principal alimentado pelos subprocessos, exibidos de forma sequencial.',
    lanes: [
      {
        id: 'planejamento',
        name: 'Planejamento e definicao',
        description: 'Abertura, alinhamento e preparacao inicial do processo.',
        accent: process.softAccent ?? 'rgba(154, 211, 142, 0.14)',
      },
      {
        id: 'laboratorio',
        name: 'Execucao e validacao',
        description: 'Trabalho tecnico principal e validacoes intermediarias.',
        accent: process.softAccent ?? 'rgba(154, 211, 142, 0.12)',
      },
      {
        id: 'materializacao',
        name: 'Entrega e consolidacao',
        description: 'Fechamento do fluxo, evidencias e liberacao das saidas.',
        accent: process.softAccent ?? 'rgba(154, 211, 142, 0.1)',
      },
    ],
    nodes,
    edges,
  }
}

const sectorNodeMap = new Map(
  macroFlowNodes.filter((node) => node.kind === 'setor').map((node) => [node.id, node]),
)
const baseProcessMap = new Map(baseProcesses.map((process) => [process.id, process]))
const processCatalogMap = new Map(
  pdfProcessCatalog.map((entry) => [normalizeTitle(entry.title), entry]),
)

function resolveCatalogProcess(title: string) {
  const normalizedTitle = normalizeTitle(title)
  const directEntry = processCatalogMap.get(normalizedTitle)
  if (directEntry && directEntry.subprocesses.length > 0) {
    return directEntry
  }

  const aliasedEntry = processCatalogMap.get(processAliases[normalizedTitle] ?? '')
  if (aliasedEntry) {
    return aliasedEntry
  }

  if (directEntry) {
    return directEntry
  }

  const fuzzyEntry = pdfProcessCatalog
    .filter((entry) => {
      const entryKey = normalizeTitle(entry.title)
      return entryKey.includes(normalizedTitle) || normalizedTitle.includes(entryKey)
    })
    .sort((left, right) => right.subprocesses.length - left.subprocesses.length)[0]

  if (!fuzzyEntry) {
    throw new Error(`Processo do PDF nao encontrado: ${title}`)
  }

  return fuzzyEntry
}

function resolveCatalogSubprocess(
  processEntry: PdfProcessCatalogEntry,
  title: string,
) {
  const normalizedTitle = normalizeTitle(title)
  const directEntry = processEntry.subprocesses.find(
    (entry) => normalizeTitle(entry.title) === normalizedTitle,
  )
  if (directEntry) {
    return directEntry
  }

  const fuzzyEntry = processEntry.subprocesses.find((entry) => {
    const entryKey = normalizeTitle(entry.title)
    return entryKey.includes(normalizedTitle) || normalizedTitle.includes(entryKey)
  })

  if (!fuzzyEntry) {
    throw new Error(
      `Subprocesso do PDF nao encontrado: ${title} em ${processEntry.title}`,
    )
  }

  return fuzzyEntry
}

function getProcessId(
  macroProcessId: string,
  subprocess: PdfSubprocessCatalogEntry,
  subprocessIndex: number,
) {
  const normalizedTitle = normalizeTitle(subprocess.title)
  
  if (macroProcessId === 'eletronica-processo-1') {
    const mappedId = avionicsSubprocessIds[normalizedTitle]
    if (mappedId) {
      return mappedId
    }
  }

  if (macroProcessId.startsWith('eea-')) {
    const mappedId = eeaSubprocessIds[normalizedTitle]
    if (mappedId) {
      return mappedId
    }
  }

  if (macroProcessId.startsWith('propulsao-')) {
    const mappedId = propulsaoSubprocessIds[normalizedTitle]
    if (mappedId) {
      return mappedId
    }
  }

  return `${macroProcessId}-${normalizedTitle}-${subprocessIndex + 1}`
}

function buildRootRecord({
  id,
  processEntry,
  sectorId,
  processTitle,
  stage,
  accent,
  softAccent,
}: {
  id: string
  processEntry: PdfProcessCatalogEntry
  sectorId: string
  processTitle: string
  stage: string
  accent: string
  softAccent: string
}) {
  const baseRecord = baseProcessMap.get(id)
  const subprocessTitles = processEntry.subprocesses.map((item) => item.title)
  const activityDetails: ActivityDetail[] = processEntry.subprocesses.map((item) => ({
    title: item.title,
    description: item.description,
    sourcePages: [...item.sourcePages],
  }))

  return {
    id,
    name: processEntry.title ?? baseRecord?.name ?? processTitle,
    sectorId,
    kind: 'processo',
    stage: baseRecord?.stage ?? stage,
    description: baseRecord?.description ?? processEntry.description,
    objective: baseRecord?.objective ?? processEntry.description,
    owner:
      baseRecord?.owner ??
      `Setor de ${sectorNodeMap.get(sectorId)?.title ?? sectorId}`,
    status: baseRecord?.status ?? 'ativo',
    complexity:
      baseRecord?.complexity ??
      (processEntry.subprocesses.length >= 5 ? 'alta' : 'media'),
    inputs: baseRecord?.inputs ?? [],
    outputs: baseRecord?.outputs ?? [],
    subprocesses: subprocessTitles,
    activities: subprocessTitles,
    activityDetails,
    tags: baseRecord?.tags ?? [sectorId, 'fluxograma', 'processo'],
    duration: baseRecord?.duration ?? activityDetails[0]?.duration,
    collaborators: baseRecord?.collaborators ?? activityDetails[0]?.collaborators,
    tools: baseRecord?.tools ?? (activityDetails[0]?.tools?.length ? activityDetails[0].tools : undefined),
    projectRisks: baseRecord?.projectRisks,
    safetyRisks: baseRecord?.safetyRisks,
    indicators: baseRecord?.indicators,
    skills: baseRecord?.skills,
    sourceReference:
      baseRecord?.sourceReference ?? formatSourceReference(processEntry.sourcePages),
    sourcePages: [...processEntry.sourcePages],
    accent: baseRecord?.accent ?? accent,
    softAccent: baseRecord?.softAccent ?? softAccent,
    glow: baseRecord?.glow ?? `${accent}33`,
  } satisfies ProcessRecord
}

function buildChildRecord({
  id,
  subprocessEntry,
  sectorId,
  stage,
  accent,
  softAccent,
}: {
  id: string
  subprocessEntry: PdfSubprocessCatalogEntry
  sectorId: string
  stage: string
  accent: string
  softAccent: string
}) {
  const baseRecord = baseProcessMap.get(id)
  const activityDetails = baseRecord?.activityDetails?.length
    ? baseRecord.activityDetails
    : cloneActivityDetails(subprocessEntry.activities)

  return {
    id,
    name: subprocessEntry.title,
    sectorId,
    kind: 'subprocesso',
    stage: baseRecord?.stage ?? stage,
    description: baseRecord?.description ?? subprocessEntry.description,
    objective: baseRecord?.objective ?? subprocessEntry.description,
    owner:
      baseRecord?.owner ??
      `Setor de ${sectorNodeMap.get(sectorId)?.title ?? sectorId}`,
    status: baseRecord?.status ?? 'ativo',
    complexity:
      baseRecord?.complexity ??
      (activityDetails.length >= 4 ? 'alta' : 'media'),
    inputs: baseRecord?.inputs ?? [],
    outputs: baseRecord?.outputs ?? [],
    subprocesses: [],
    activities: activityDetails.map((item) => item.title),
    activityDetails,
    tags: baseRecord?.tags ?? [sectorId, 'fluxograma', 'subprocesso'],
    duration: baseRecord?.duration ?? activityDetails[0]?.duration,
    collaborators: baseRecord?.collaborators ?? activityDetails[0]?.collaborators,
    tools: baseRecord?.tools ?? (activityDetails[0]?.tools?.length ? activityDetails[0].tools : undefined),
    projectRisks: baseRecord?.projectRisks,
    safetyRisks: baseRecord?.safetyRisks,
    indicators: baseRecord?.indicators,
    skills: baseRecord?.skills,
    sourceReference:
      baseRecord?.sourceReference ?? formatSourceReference(subprocessEntry.sourcePages),
    sourcePages: [...subprocessEntry.sourcePages],
    accent: baseRecord?.accent ?? accent,
    softAccent: baseRecord?.softAccent ?? softAccent,
    glow: baseRecord?.glow ?? `${accent}33`,
  } satisfies ProcessRecord
}

export const diagramProcesses: Record<string, ProcessRecord> = {}
export const detailDiagrams: Record<string, DiagramDefinition> = {}
export const processParentMap: Record<string, string> = {}
export const macroProcessDetailMap: Record<string, string> = {}

Object.entries(macroSectorProcesses).forEach(([sectorId, processTitles]) => {
  const sector = sectorNodeMap.get(sectorId)
  if (!sector) {
    return
  }

  processTitles.forEach((processTitle, processIndex) => {
    const macroProcessId = `${sectorId}-processo-${processIndex + 1}`
    const rootId = macroProcessId === 'eletronica-processo-1' ? mainProcessId : macroProcessId
    const processEntry = resolveCatalogProcess(processTitle)
    const subprocessOrder =
      macroProcessSubprocesses[macroProcessId]?.length
        ? macroProcessSubprocesses[macroProcessId]
        : processEntry.subprocesses.map((item) => item.title)
    const subprocessEntries = subprocessOrder.map((subprocessTitle) =>
      resolveCatalogSubprocess(processEntry, subprocessTitle),
    )
    const rootRecord = buildRootRecord({
      id: rootId,
      processEntry,
      sectorId,
      processTitle,
      stage:
        rootId === mainProcessId
          ? 'Fase 2 | Processo principal'
          : `Processo principal | ${sector.title}`,
      accent: sector.accent,
      softAccent: sector.softAccent,
    })

    const childRecords = subprocessEntries.map((subprocessEntry, subprocessIndex) => {
      const childId = getProcessId(macroProcessId, subprocessEntry, subprocessIndex)
      const childRecord = buildChildRecord({
        id: childId,
        subprocessEntry,
        sectorId,
        stage: `Subprocesso ${String(subprocessIndex + 1).padStart(2, '0')}`,
        accent: sector.accent,
        softAccent: sector.softAccent,
      })

      diagramProcesses[childRecord.id] = childRecord
      processParentMap[childRecord.id] = rootId
      detailDiagrams[childRecord.id] = buildSubprocessDiagram(childRecord)
      return childRecord
    })

    diagramProcesses[rootRecord.id] = {
      ...rootRecord,
      activityDetails: childRecords.map((child) => ({
        title: child.name,
        description: child.description,
        sourcePages: child.sourcePages,
      })),
      activities: childRecords.map((child) => child.name),
      subprocesses: childRecords.map((child) => child.name),
    }
    detailDiagrams[rootRecord.id] = buildMainProcessDiagram(
      diagramProcesses[rootRecord.id],
      childRecords,
    )
    macroProcessDetailMap[macroProcessId] = rootId
  })
})
