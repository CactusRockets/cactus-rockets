import { useEffect, useMemo, useRef, useState } from 'react'
import {
  macroFlowEdges,
  macroFlowNodes,
  macroSectorProcesses,
} from '../../data/macroFlow'

type Kind = 'macroprocesso' | 'setor' | 'processo' | 'subprocesso' | 'livre'

type NodeItem = {
  id: string
  parentId?: string
  title: string
  subtitle: string
  description: string
  accent: string
  softAccent: string
  kind: Kind
  centerX: number
  centerY: number
  width: number
  height: number
}

type EdgeItem = {
  id: string
  source: string
  target: string
  color: string
}



type MacroProcessMapProps = {
  onOpenProcess?: (nodeId: string) => void
}

const workspacePaddingX = 520
const workspacePaddingY = 360
const minWorkspaceWidth = 3200
const minWorkspaceHeight = 2200
const minZoom = 0.2
const maxZoom = 2.0
const defaultDesktopZoom = 0.8
const defaultMobileZoom = 0.62

const rowCenters = {
  eea: 200,
  propulsao: 440,
  recuperacao: 680,
  eletronica: 920,
  sat: 1160,
  marketing: 1400,
}

const colCenters = [320, 640, 960, 1280, 1600, 1920, 2240]

const processCenters: Record<string, Array<{ x: number; y: number }>> = {
  eea: [
    { x: colCenters[0], y: rowCenters.eea }, 
    { x: colCenters[1], y: rowCenters.eea }, 
    { x: colCenters[2], y: rowCenters.eea }, 
  ],
  propulsao: [
    { x: colCenters[0], y: rowCenters.propulsao }, 
    { x: colCenters[1], y: rowCenters.propulsao }, 
    { x: colCenters[2], y: rowCenters.propulsao }, 
    { x: colCenters[3], y: rowCenters.propulsao }, 
    { x: colCenters[4], y: rowCenters.propulsao }, 
  ],
  recuperacao: [
    { x: colCenters[0], y: rowCenters.recuperacao - 50 }, // Paraquedas
    { x: colCenters[0], y: rowCenters.recuperacao + 50 }, // Ejeção
    { x: colCenters[1], y: rowCenters.recuperacao }, // Polvora
    { x: colCenters[2], y: rowCenters.recuperacao }, // Cortador
    { x: colCenters[3], y: rowCenters.recuperacao }, // Testes
  ],
  eletronica: [0, 1, 2, 3, 4, 5].map(i => ({ x: colCenters[i], y: rowCenters.eletronica })),
  sat: [0, 1, 2, 3, 4, 5, 6].map(i => ({ x: colCenters[i], y: rowCenters.sat })),
  marketing: [0].map(i => ({ x: colCenters[i], y: rowCenters.marketing })),
}

const sectorLanes = [
  { id: 'eea', title: 'Estrutura', y: rowCenters.eea, height: 240, color: '#8ca7ff' },
  { id: 'propulsao', title: 'Propulsão', y: rowCenters.propulsao, height: 240, color: '#ff9c73' },
  { id: 'recuperacao', title: 'Recuperação', y: rowCenters.recuperacao, height: 240, color: '#c29aff' },
  { id: 'eletronica', title: 'Eletrônica', y: rowCenters.eletronica, height: 240, color: '#9ad38e' },
  { id: 'sat', title: 'Sistemas/Satélite', y: rowCenters.sat, height: 240, color: '#79d3ff' },
  { id: 'marketing', title: 'Marketing', y: rowCenters.marketing, height: 240, color: '#f4c66c' },
]

function clampText(value: string, limit: number) {
  return value.length <= limit ? value : `${value.slice(0, limit).trim()}...`
}

function sizeFor(kind: Kind) {
  if (kind === 'macroprocesso') return { width: 308, height: 184 }
  if (kind === 'setor') return { width: 236, height: 138 }
  if (kind === 'processo') return { width: 224, height: 84 }
  if (kind === 'subprocesso') return { width: 214, height: 72 }
  return { width: 232, height: 96 }
}

function buildInitialNodes(): NodeItem[] {
  return macroFlowNodes.filter((node) => node.kind === 'setor').flatMap((sector) => {
    const size = sizeFor('processo')
    return (macroSectorProcesses[sector.id] ?? []).map((title, index) => ({
      id: `${sector.id}-processo-${index + 1}`,
      parentId: sector.id,
      title,
      subtitle: 'Processo',
      description: `Fluxo principal de ${title}.`,
      accent: sector.accent,
      softAccent: sector.softAccent,
      kind: 'processo' as const,
      centerX: processCenters[sector.id]?.[index]?.x ?? colCenters[index % colCenters.length],
      centerY: processCenters[sector.id]?.[index]?.y ?? rowCenters[sector.id as keyof typeof rowCenters],
      width: size.width,
      height: size.height,
    }))
  })
}

function buildInitialEdges(): EdgeItem[] {
  return macroFlowEdges.map((edge) => ({
    id: edge.id,
    source: edge.source,
    target: edge.target,
    color: edge.color,
  }))
}

function anchor(source: Pick<NodeItem, 'centerX' | 'centerY' | 'width' | 'height'>, target: Pick<NodeItem, 'centerX' | 'centerY'>) {
  const dx = target.centerX - source.centerX
  const dy = target.centerY - source.centerY
  if (Math.abs(dx) > Math.abs(dy)) {
    return { x: source.centerX + (dx >= 0 ? source.width / 2 : -source.width / 2), y: source.centerY }
  }
  return { x: source.centerX, y: source.centerY + (dy >= 0 ? source.height / 2 : -source.height / 2) }
}

function orthogonalPath(start: { x: number; y: number }, end: { x: number; y: number }) {
  if (Math.abs(end.x - start.x) > Math.abs(end.y - start.y)) {
    const midX = start.x + (end.x - start.x) / 2
    return `M ${start.x} ${start.y} L ${midX} ${start.y} L ${midX} ${end.y} L ${end.x} ${end.y}`
  }
  const midY = start.y + (end.y - start.y) / 2
  return `M ${start.x} ${start.y} L ${start.x} ${midY} L ${end.x} ${midY} L ${end.x} ${end.y}`
}

function shiftNodeToCanvas(
  node: Pick<NodeItem, 'centerX' | 'centerY' | 'width' | 'height'>,
  offsetX: number,
  offsetY: number,
) {
  return {
    ...node,
    centerX: node.centerX + offsetX,
    centerY: node.centerY + offsetY,
  }
}






export function MacroProcessMap({ onOpenProcess }: MacroProcessMapProps) {
  const viewportRef = useRef<HTMLDivElement | null>(null)
  const draggingCanvasRef = useRef(false)
  const dragRef = useRef({ pointerX: 0, pointerY: 0, scrollLeft: 0, scrollTop: 0, nodeX: 0, nodeY: 0 })
  const [zoom, setZoom] = useState(defaultDesktopZoom)
  
  const nodes = useMemo(() => buildInitialNodes(), [])
  const edges = useMemo(() => buildInitialEdges(), [])
  const visibleNodes = nodes
  const visibleEdges = edges

  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null)
  const [selectedEdgeId, setSelectedEdgeId] = useState<string | null>(null)

  useEffect(() => {
    setZoom(typeof window !== 'undefined' && window.innerWidth < 1100 ? defaultMobileZoom : defaultDesktopZoom)
  }, [])
  const workspace = useMemo(() => {
    if (!visibleNodes.length) {
      return {
        offsetX: workspacePaddingX,
        offsetY: workspacePaddingY,
        canvasWidth: minWorkspaceWidth,
        canvasHeight: minWorkspaceHeight,
      }
    }

    const bounds = visibleNodes.reduce(
      (acc, node) => ({
        minX: Math.min(acc.minX, node.centerX - node.width / 2),
        maxX: Math.max(acc.maxX, node.centerX + node.width / 2),
        minY: Math.min(acc.minY, node.centerY - node.height / 2),
        maxY: Math.max(acc.maxY, node.centerY + node.height / 2),
      }),
      {
        minX: Number.POSITIVE_INFINITY,
        maxX: Number.NEGATIVE_INFINITY,
        minY: Number.POSITIVE_INFINITY,
        maxY: Number.NEGATIVE_INFINITY,
      },
    )

    return {
      offsetX: workspacePaddingX - bounds.minX,
      offsetY: workspacePaddingY - bounds.minY,
      canvasWidth: Math.max(bounds.maxX - bounds.minX + workspacePaddingX * 2, minWorkspaceWidth),
      canvasHeight: Math.max(bounds.maxY - bounds.minY + workspacePaddingY * 2, minWorkspaceHeight),
    }
  }, [visibleNodes])




  const applyZoom = (value: number) => {
    setZoom(Math.min(maxZoom, Math.max(minZoom, Number(value.toFixed(2)))))
  }

  const selectNode = (nodeId: string) => {
    setSelectedNodeId(nodeId)
    setSelectedEdgeId(null)
  }

  const handleNodeClick = (nodeId: string) => {
    const node = nodes.find(n => n.id === nodeId)
    if (node?.kind === 'processo' && onOpenProcess) {
      onOpenProcess(node.id)
      return
    }

    selectNode(nodeId)
  }



  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    const viewport = viewportRef.current
    if (!viewport) return
    const target = event.target as HTMLElement
    if (target.closest('[data-macro-interactive="true"]')) return
    draggingCanvasRef.current = true
    dragRef.current = { ...dragRef.current, pointerX: event.clientX, pointerY: event.clientY, scrollLeft: viewport.scrollLeft, scrollTop: viewport.scrollTop }
    viewport.setPointerCapture(event.pointerId)
  }

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const viewport = viewportRef.current
    if (!viewport) return

    if (!draggingCanvasRef.current) return
    viewport.scrollLeft = dragRef.current.scrollLeft - (event.clientX - dragRef.current.pointerX)
    viewport.scrollTop = dragRef.current.scrollTop - (event.clientY - dragRef.current.pointerY)
  }

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    draggingCanvasRef.current = false
    viewportRef.current?.releasePointerCapture(event.pointerId)
  }

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    if (!event.ctrlKey && !event.metaKey) return
    event.preventDefault()
    applyZoom(zoom + (event.deltaY < 0 ? 0.06 : -0.06))
  }

  return (
    <div className="relative h-full overflow-hidden">


      <div
        ref={viewportRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onWheel={handleWheel}
        className="macro-map-viewport h-full w-full overflow-auto cursor-grab touch-none active:cursor-grabbing"
      >
            <div className="relative" style={{ width: workspace.canvasWidth * zoom, height: workspace.canvasHeight * zoom }}>
              <div className="relative origin-top-left" style={{ width: workspace.canvasWidth, height: workspace.canvasHeight, transform: `scale(${zoom})` }}>
              <svg width={workspace.canvasWidth} height={workspace.canvasHeight} viewBox={`0 0 ${workspace.canvasWidth} ${workspace.canvasHeight}`} className="absolute inset-0" aria-hidden="true">
                <defs>
                  <marker id="macro-arrow" viewBox="0 0 12 12" refX="10" refY="6" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
                    <path d="M2 2L10 6L2 10V2Z" fill="#dbeed9" />
                  </marker>
                </defs>

                {sectorLanes.map(lane => (
                  <g key={lane.id}>
                    <rect x="80" y={lane.y - lane.height/2 + workspace.offsetY} width={workspace.canvasWidth - 160} height={lane.height} fill="rgba(255,255,255,0.01)" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                    <rect x="80" y={lane.y - lane.height/2 + workspace.offsetY} width="50" height={lane.height} fill="rgba(0,0,0,0.4)" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                    <text x="105" y={lane.y + workspace.offsetY} transform={`rotate(-90 105 ${lane.y + workspace.offsetY})`} textAnchor="middle" dominantBaseline="central" fill="rgba(255,255,255,0.6)" fontSize="14" fontWeight="bold" letterSpacing="0.2em">
                      {lane.title.toUpperCase()}
                    </text>
                  </g>
                ))}

                {/* Badge Fazer um foguete */}
                <g>
                  <rect x="80" y={workspace.offsetY - 30} width="160" height="32" rx="6" fill="#000" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                  <text x="160" y={workspace.offsetY - 14} textAnchor="middle" dominantBaseline="central" fill="white" fontSize="13" fontWeight="bold">
                    Fazer um foguete
                  </text>
                </g>

                {visibleEdges.map((edge) => {
                  const source = nodes.find(n => n.id === edge.source)
                  const target = nodes.find(n => n.id === edge.target)
                  if (!source || !target) return null
                  const sourceInCanvas = shiftNodeToCanvas(source, workspace.offsetX, workspace.offsetY)
                  const targetInCanvas = shiftNodeToCanvas(target, workspace.offsetX, workspace.offsetY)
                  const isSelected = selectedEdgeId === edge.id

                  let d = ''
                  // Custom routing para desviar dos cards
                  if (edge.id === 'edge-eea-rec') {
                    // Projeto Teórico -> Paraquedas
                    // Sai pela ESQUERDA do Projeto, desce fugindo do Motor, entra pela ESQUERDA do Paraquedas
                    const start = { x: sourceInCanvas.centerX - sourceInCanvas.width / 2, y: sourceInCanvas.centerY }
                    const end = { x: targetInCanvas.centerX - targetInCanvas.width / 2, y: targetInCanvas.centerY }
                    const detourX = start.x - 60
                    d = `M ${start.x} ${start.y} L ${detourX} ${start.y} L ${detourX} ${end.y} L ${end.x} ${end.y}`
                  } else if (edge.id === 'edge-prop-eea-end') {
                    // Produto Final -> Montagem
                    // Sai por CIMA do Produto Final, vai pra esquerda, entra por BAIXO da Montagem (desviando da Bancada de Testes)
                    const start = { x: sourceInCanvas.centerX, y: sourceInCanvas.centerY - sourceInCanvas.height / 2 }
                    const end = { x: targetInCanvas.centerX, y: targetInCanvas.centerY + targetInCanvas.height / 2 }
                    const midY = start.y - 110
                    d = `M ${start.x} ${start.y} L ${start.x} ${midY} L ${end.x} ${midY} L ${end.x} ${end.y}`
                  } else {
                    // Roteamento Ortogonal Padrão
                    d = orthogonalPath(anchor(sourceInCanvas, targetInCanvas), anchor(targetInCanvas, sourceInCanvas))
                  }

                  return (
                    <g key={edge.id}>
                      <path d={d} fill="none" stroke={edge.color} strokeWidth={source.kind === 'macroprocesso' ? 2.7 : 1.8} strokeLinecap="round" strokeLinejoin="round" markerEnd="url(#macro-arrow)" opacity={source.kind === 'macroprocesso' ? 0.94 : 0.76} />
                      <path d={d} fill="none" stroke={isSelected ? '#ffffff' : 'transparent'} strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" opacity={isSelected ? 0.18 : 0} />
                      <path d={d} fill="none" stroke="transparent" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer" onClick={() => { setSelectedEdgeId(edge.id); setSelectedNodeId(null) }} />
                    </g>
                  )
                })}
              </svg>

              {visibleNodes.map((node) => {
                const isSelected = selectedNodeId === node.id
                const isProcess = node.kind === 'processo'

                return (
                  <article
                    key={node.id}
                    data-macro-interactive="true"
                    className="absolute overflow-visible rounded-[1.45rem] border text-left"
                    style={{
                      width: node.width,
                      minHeight: node.height,
                      left: node.centerX + workspace.offsetX - node.width / 2,
                      top: node.centerY + workspace.offsetY - node.height / 2,
                      padding: isProcess ? '0.9rem 1rem' : '1.2rem 1.25rem',
                      borderColor: isSelected ? '#ffffff' : node.accent,
                      background: isProcess ? 'rgba(9, 17, 12, 0.94)' : `linear-gradient(180deg, ${node.softAccent} 0%, rgba(14, 24, 19, 0.97) 100%)`,
                      boxShadow: isSelected ? `0 0 0 1px #ffffff, 0 22px 56px ${node.softAccent}` : `0 12px 26px ${node.softAccent}`,
                      zIndex: isSelected ? 4 : 2,
                    }}
                    onClick={() => handleNodeClick(node.id)}
                  >
                    <div className="flex items-start gap-2">
                      <div className="min-w-0 flex-1">
                        <p className="text-[10px] uppercase tracking-[0.22em]" style={{ color: node.accent }}>{node.subtitle}</p>
                        <h4 className={`mt-2 font-semibold text-white ${isProcess ? 'text-sm leading-5' : 'text-[1.45rem] leading-8'}`}>{clampText(node.title, isProcess ? 36 : 42)}</h4>
                      </div>
                    </div>
                  </article>
                )
              })}
              </div>
            </div>
          </div>

      {/* Zoom controls — floating bottom-left */}
      <div className="absolute bottom-4 left-4 z-10 flex items-center gap-1">
        <button type="button" onClick={() => applyZoom(zoom - 0.08)} className="rounded-md border border-white/10 bg-[#0d1812]/90 px-2.5 py-1 text-sm text-white/60 backdrop-blur transition hover:border-white/20 hover:text-white/90">−</button>
        <span className="min-w-[52px] rounded-md border border-white/10 bg-[#0d1812]/90 px-2 py-1 text-center text-xs text-white/50 backdrop-blur">{Math.round(zoom * 100)}%</span>
        <button type="button" onClick={() => applyZoom(zoom + 0.08)} className="rounded-md border border-white/10 bg-[#0d1812]/90 px-2.5 py-1 text-sm text-white/60 backdrop-blur transition hover:border-white/20 hover:text-white/90">+</button>
      </div>
    </div>
  )
}
