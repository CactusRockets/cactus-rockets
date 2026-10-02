import { useEffect, useState } from 'react'
import { DetailedFlowDiagram } from '../../components/flow/DetailedFlowDiagram'
import { MacroProcessMap } from '../../components/flow/MacroProcessMap'
import {
  diagramProcesses,
  detailDiagrams,
  mainProcessId,
  macroProcessDetailMap,
  processParentMap,
} from '../../data/avionicsHierarchy'
import { sectors } from '../../data/sectors'
import { projectName } from '../../data/projectMeta'

export function FlowchartPage() {
  const [navigationStack, setNavigationStack] = useState([mainProcessId])
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null)
  const [activeFlowTab, setActiveFlowTab] = useState<'macro' | 'detalhado'>('macro')

  const activeProcessId = navigationStack[navigationStack.length - 1] ?? mainProcessId
  const activeProcess = diagramProcesses[activeProcessId] ?? diagramProcesses[mainProcessId]
  const activeDiagram = detailDiagrams[activeProcessId] ?? detailDiagrams[mainProcessId]
  const rootProcessId = navigationStack[0] ?? mainProcessId
  const rootProcess = diagramProcesses[rootProcessId] ?? diagramProcesses[mainProcessId]
  const activeSector = sectors.find((s) => s.id === activeProcess.sectorId)

  useEffect(() => {
    const firstRelevantNode =
      activeDiagram.nodes.find((node) => node.type !== 'start' && node.type !== 'end')?.id ?? null
    setSelectedNodeId(firstRelevantNode)
  }, [activeDiagram])

  const breadcrumbItems = navigationStack
    .map((processId) => diagramProcesses[processId])
    .filter(Boolean)

  const handleOpenProcess = (processId: string) => {
    setNavigationStack((current) => {
      const parentId = processParentMap[processId]
      if (!parentId) return [processId]
      const existingIndex = current.indexOf(processId)
      if (existingIndex >= 0) return current.slice(0, existingIndex + 1)
      const parentIndex = current.indexOf(parentId)
      if (parentIndex >= 0) return [...current.slice(0, parentIndex + 1), processId]
      return [parentId, processId]
    })
  }

  const handleGoBack = () => {
    setNavigationStack((current) => (current.length > 1 ? current.slice(0, -1) : current))
  }

  const handleOpenMacroProcess = (nodeId: string) => {
    const processId = macroProcessDetailMap[nodeId] ?? mainProcessId
    handleOpenProcess(processId)
    setActiveFlowTab('detalhado')
  }

  return (
    <div className="flex h-full flex-col overflow-hidden bg-[#0d1812] text-cactus-50">
      {/* Topbar */}
      <header className="flex shrink-0 items-center justify-between gap-2 md:gap-4 border-b border-white/8 px-3 md:px-5 py-2 md:py-3">
        <div className="flex items-center gap-2 md:gap-3 min-w-0 flex-1">
          <span className="text-xs md:text-sm font-semibold tracking-tight text-white shrink-0">
            {projectName}
          </span>
          <span className="h-4 w-px shrink-0 bg-white/15 hidden sm:block" />
          {activeSector && (
            <span
              className="shrink-0 rounded-full border px-2 py-0.5 text-[10px] md:text-[11px] font-medium hidden md:inline-block"
              style={{
                borderColor: activeSector.accent + '55',
                backgroundColor: activeSector.softAccent,
                color: activeSector.accent,
              }}
            >
              {activeSector.name}
            </span>
          )}
          <span className="truncate text-xs md:text-sm text-white/50">{activeProcess.name}</span>
        </div>

        <div className="flex shrink-0 items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1">
          <button
            type="button"
            onClick={() => setActiveFlowTab('macro')}
            className={`rounded-full px-2 md:px-3 py-1 text-[10px] md:text-xs font-medium transition ${
              activeFlowTab === 'macro'
                ? 'bg-white/10 text-white'
                : 'text-white/45 hover:text-white/70'
            }`}
          >
            <span className="hidden sm:inline">Visão geral</span>
            <span className="sm:hidden">Geral</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveFlowTab('detalhado')}
            className={`rounded-full px-2 md:px-3 py-1 text-[10px] md:text-xs font-medium transition ${
              activeFlowTab === 'detalhado'
                ? 'bg-white/10 text-white'
                : 'text-white/45 hover:text-white/70'
            }`}
          >
            <span className="hidden sm:inline">Fluxo detalhado</span>
            <span className="sm:hidden">Detalhado</span>
          </button>
        </div>
      </header>

      {/* Breadcrumb bar — only in detailed view */}
      {activeFlowTab === 'detalhado' && (
        <div className="flex shrink-0 items-center gap-2 border-b border-white/6 px-3 md:px-5 py-1.5 md:py-2 overflow-x-auto">
          <div className="flex min-w-0 flex-1 items-center gap-1 text-[10px] md:text-xs text-white/40">
            {breadcrumbItems.map((item, index) => (
              <span key={item?.id} className="flex items-center gap-1 min-w-0">
                <button
                  type="button"
                  onClick={() => item && handleOpenProcess(item.id)}
                  className={`truncate transition hover:text-white/70 max-w-[80px] md:max-w-none ${
                    index === breadcrumbItems.length - 1 ? 'text-white/70' : ''
                  }`}
                >
                  {item?.name}
                </button>
                {index < breadcrumbItems.length - 1 && (
                  <span className="shrink-0 opacity-40">/</span>
                )}
              </span>
            ))}
          </div>

          <div className="flex shrink-0 items-center gap-1">
            {navigationStack.length > 1 && (
              <button
                type="button"
                onClick={handleGoBack}
                className="rounded-md border border-white/8 bg-white/[0.03] px-2 md:px-3 py-1 text-[10px] md:text-xs text-white/45 transition hover:border-white/15 hover:text-white/70 whitespace-nowrap"
              >
                ← Voltar
              </button>
            )}
            {activeProcess.id !== rootProcess.id && (
              <button
                type="button"
                onClick={() => handleOpenProcess(rootProcess.id)}
                className="rounded-md border border-white/8 bg-white/[0.03] px-2 md:px-3 py-1 text-[10px] md:text-xs text-white/45 transition hover:border-white/15 hover:text-white/70 whitespace-nowrap hidden sm:inline"
              >
                Início
              </button>
            )}
          </div>
        </div>
      )}

      {/* Canvas */}
      <div className="min-h-0 flex-1">
        {activeFlowTab === 'detalhado' ? (
          <DetailedFlowDiagram
            diagram={activeDiagram}
            activeNodeId={selectedNodeId}
            onSelectNode={setSelectedNodeId}
            onOpenProcess={handleOpenProcess}
          />
        ) : (
          <MacroProcessMap onOpenProcess={handleOpenMacroProcess} />
        )}
      </div>
    </div>
  )
}
