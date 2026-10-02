import { useEffect, useRef, useState } from 'react'
import { diagramProcesses } from '../../data/avionicsHierarchy'
import type {
  DiagramAnchor,
  DiagramDefinition,
  DiagramNode,
} from '../../types/diagram'
import type { ProcessRecord } from '../../types/process'

type DetailedFlowDiagramProps = {
  diagram: DiagramDefinition
  activeNodeId: string | null
  onSelectNode: (nodeId: string) => void
  onOpenProcess: (processId: string) => void
}

const laneHeight = 272
const canvasPaddingBottom = 56
const laneHeaderWidth = 176
const minZoom = 0.58
const maxZoom = 1.15
const initialDesktopZoom = 0.84
const initialMobileZoom = 0.68
const mobileBreakpoint = 768
const twoLineClampStyle = {
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical' as const,
  overflow: 'hidden',
}
const threeLineClampStyle = {
  display: '-webkit-box',
  WebkitLineClamp: 3,
  WebkitBoxOrient: 'vertical' as const,
  overflow: 'hidden',
}
type CanvasPoint = {
  x: number
  y: number
}

function useIsMobile(breakpoint = mobileBreakpoint) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < breakpoint)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [breakpoint])

  return isMobile
}

function clampText(value: string | undefined, limit: number) {
  if (!value) {
    return ''
  }

  if (value.length <= limit) {
    return value
  }

  return `${value.slice(0, limit).trim()}...`
}

function getNodeDimensions(node: DiagramNode) {
  if (node.type === 'start' || node.type === 'end') {
    return { width: 42, height: 42 }
  }

  if (node.type === 'decision') {
    return { width: 96, height: 96 }
  }

  return {
    width: node.type === 'subprocess' ? 262 : 248,
    height: node.type === 'subprocess' ? 176 : 166,
  }
}

function getAnchorPoint(node: DiagramNode, anchor: DiagramAnchor) {
  const size = getNodeDimensions(node)
  const left = node.x
  const top = node.y

  switch (anchor) {
    case 'top':
      return { x: left + size.width / 2, y: top }
    case 'bottom':
      return { x: left + size.width / 2, y: top + size.height }
    case 'left':
      return { x: left, y: top + size.height / 2 }
    case 'right':
    default:
      return { x: left + size.width, y: top + size.height / 2 }
  }
}

function getDefaultAnchors(source: DiagramNode, target: DiagramNode) {
  const verticalDistance = target.y - source.y
  const horizontalDistance = target.x - source.x

  if (Math.abs(verticalDistance) > Math.abs(horizontalDistance)) {
    return {
      sourceAnchor: verticalDistance >= 0 ? 'bottom' : 'top',
      targetAnchor: verticalDistance >= 0 ? 'top' : 'bottom',
    } as const
  }

  return {
    sourceAnchor: horizontalDistance >= 0 ? 'right' : 'left',
    targetAnchor: horizontalDistance >= 0 ? 'left' : 'right',
  } as const
}

function buildEdgePath(
  points: CanvasPoint[],
  radius = 18,
) {
  if (points.length <= 1) {
    return ''
  }

  if (points.length === 2) {
    return `M ${points[0].x} ${points[0].y} L ${points[1].x} ${points[1].y}`
  }

  let path = `M ${points[0].x} ${points[0].y}`

  for (let index = 1; index < points.length - 1; index += 1) {
    const previous = points[index - 1]
    const current = points[index]
    const next = points[index + 1]
    const previousLength = Math.hypot(current.x - previous.x, current.y - previous.y)
    const nextLength = Math.hypot(next.x - current.x, next.y - current.y)

    if (previousLength === 0 || nextLength === 0) {
      continue
    }

    const currentRadius = Math.min(radius, previousLength / 2, nextLength / 2)
    const curveStart = {
      x: current.x + ((previous.x - current.x) / previousLength) * currentRadius,
      y: current.y + ((previous.y - current.y) / previousLength) * currentRadius,
    }
    const curveEnd = {
      x: current.x + ((next.x - current.x) / nextLength) * currentRadius,
      y: current.y + ((next.y - current.y) / nextLength) * currentRadius,
    }

    path += ` L ${curveStart.x} ${curveStart.y} Q ${current.x} ${current.y} ${curveEnd.x} ${curveEnd.y}`
  }

  const lastPoint = points[points.length - 1]
  path += ` L ${lastPoint.x} ${lastPoint.y}`

  return path
}

function buildEdgeRoute(
  sourcePoint: { x: number; y: number },
  targetPoint: { x: number; y: number },
  sourceAnchor: DiagramAnchor,
) {
  if (sourceAnchor === 'top' || sourceAnchor === 'bottom') {
    const midY = sourcePoint.y + (targetPoint.y - sourcePoint.y) / 2
    return [
      sourcePoint,
      { x: sourcePoint.x, y: midY },
      { x: targetPoint.x, y: midY },
      targetPoint,
    ]
  }

  const midX = sourcePoint.x + (targetPoint.x - sourcePoint.x) / 2
  return [
    sourcePoint,
    { x: midX, y: sourcePoint.y },
    { x: midX, y: targetPoint.y },
    targetPoint,
  ]
}

function getPointAtProgress(points: CanvasPoint[], progress: number) {
  if (points.length === 0) {
    return {
      x: 0,
      y: 0,
      dx: 1,
      dy: 0,
    }
  }

  const segments = points.slice(1).map((point, index) => {
    const previous = points[index]
    const dx = point.x - previous.x
    const dy = point.y - previous.y
    return {
      start: previous,
      end: point,
      dx,
      dy,
      length: Math.hypot(dx, dy),
    }
  })
  const totalLength = segments.reduce((sum, segment) => sum + segment.length, 0)

  if (totalLength === 0) {
    return {
      x: points[0].x,
      y: points[0].y,
      dx: 1,
      dy: 0,
    }
  }

  const targetLength = totalLength * progress
  let traversed = 0

  for (const segment of segments) {
    if (segment.length === 0) {
      continue
    }

    if (traversed + segment.length >= targetLength) {
      const segmentProgress = (targetLength - traversed) / segment.length
      return {
        x: segment.start.x + segment.dx * segmentProgress,
        y: segment.start.y + segment.dy * segmentProgress,
        dx: segment.dx,
        dy: segment.dy,
      }
    }

    traversed += segment.length
  }

  const lastSegment = segments[segments.length - 1]
  return {
    x: lastSegment?.end.x ?? points[points.length - 1].x,
    y: lastSegment?.end.y ?? points[points.length - 1].y,
    dx: lastSegment?.dx ?? 1,
    dy: lastSegment?.dy ?? 0,
  }
}

function formatEdgeLabel(label: string | undefined) {
  if (!label) {
    return ''
  }

  const normalizedLabel = label.trim().toLowerCase()

  if (normalizedLabel === 'sim') {
    return 'Sim'
  }

  if (normalizedLabel === 'nao' || normalizedLabel === 'não') {
    return 'Nao'
  }

  return clampText(label, 20)
}

function getEdgeLabelTheme(label: string) {
  const normalizedLabel = label.trim().toLowerCase()

  if (normalizedLabel === 'sim') {
    return {
      border: 'rgba(125, 211, 154, 0.42)',
      background: 'rgba(10, 32, 20, 0.92)',
      text: '#d9fbe4',
      progress: 0.22,
      dashed: false,
    }
  }

  if (normalizedLabel === 'nao' || normalizedLabel === 'não') {
    return {
      border: 'rgba(251, 191, 36, 0.34)',
      background: 'rgba(37, 27, 9, 0.92)',
      text: '#fde68a',
      progress: 0.2,
      dashed: true,
    }
  }

  return {
    border: 'rgba(255,255,255,0.08)',
    background: 'rgba(10, 17, 13, 0.84)',
    text: '#eff7ef',
    progress: 0.5,
    dashed: false,
  }
}

function getEdgeLabelPosition(
  points: CanvasPoint[],
  progress: number,
) {
  const point = getPointAtProgress(points, progress)
  const horizontal = Math.abs(point.dx) >= Math.abs(point.dy)

  return {
    x: point.x + (horizontal ? 0 : 20),
    y: point.y + (horizontal ? -18 : 0),
  }
}

function EdgeLayer({
  diagram,
  width,
  height,
  zoom,
}: {
  diagram: DiagramDefinition
  width: number
  height: number
  zoom: number
}) {
  const nodeMap = new Map(diagram.nodes.map((node) => [node.id, node]))

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className="pointer-events-none absolute left-0 top-0"
      aria-hidden="true"
    >
      <defs>
        <marker
          id="flow-arrow"
          viewBox="0 0 12 12"
          refX="9.5"
          refY="6"
          markerWidth="7"
          markerHeight="7"
          orient="auto-start-reverse"
        >
          <path d="M2 2L10 6L2 10V2Z" fill="currentColor" />
        </marker>
      </defs>

      {diagram.edges.map((edge) => {
        const source = nodeMap.get(edge.source)
        const target = nodeMap.get(edge.target)

        if (!source || !target) {
          return null
        }

        const fallbackAnchors = getDefaultAnchors(source, target)
        const sourceAnchor = edge.sourceAnchor ?? fallbackAnchors.sourceAnchor
        const targetAnchor = edge.targetAnchor ?? fallbackAnchors.targetAnchor
        const sourcePoint = getAnchorPoint(source, sourceAnchor)
        const targetPoint = getAnchorPoint(target, targetAnchor)
        const routePoints = buildEdgeRoute(sourcePoint, targetPoint, sourceAnchor)
        const pathDefinition = buildEdgePath(routePoints)
        const stroke = edge.color ?? target.accent ?? '#dbeed9'
        const label = formatEdgeLabel(edge.label)
        const theme = getEdgeLabelTheme(edge.label ?? '')
        const labelPosition = getEdgeLabelPosition(routePoints, theme.progress)
        const labelWidth = Math.max(58, label.length * 7 + 22)
        const showLabel =
          Boolean(label) &&
          ((label.length <= 10 && zoom >= 0.8) ||
            zoom >= 0.96 ||
            edge.label === 'sim' ||
            edge.label === 'nao')

        return (
          <g key={edge.id} style={{ color: stroke }}>
            <path
              d={pathDefinition}
              fill="none"
              stroke={stroke}
              strokeWidth="7"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.14"
            />
            <path
              d={pathDefinition}
              fill="none"
              stroke={stroke}
              strokeWidth="2.35"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray={theme.dashed ? '8 7' : undefined}
              markerEnd="url(#flow-arrow)"
              opacity="0.95"
            />

            {showLabel ? (
              <g transform={`translate(${labelPosition.x}, ${labelPosition.y})`}>
                <rect
                  x={-labelWidth / 2}
                  y="-13"
                  width={labelWidth}
                  height="26"
                  rx="13"
                  fill={theme.background}
                  stroke={theme.border}
                />
                <text
                  textAnchor="middle"
                  dominantBaseline="central"
                  fill={theme.text}
                  fontSize="10.5"
                  fontWeight="700"
                  letterSpacing="0.08em"
                >
                  {label}
                </text>
              </g>
            ) : null}
          </g>
        )
      })}
    </svg>
  )
}

function buildNodeStyle(node: DiagramNode, isActive: boolean) {
  const size = getNodeDimensions(node)

  if (node.type === 'start' || node.type === 'end') {
    return {
      width: size.width,
      height: size.height,
      borderRadius: 999,
      border: `3px solid ${node.accent}`,
      background: node.type === 'end' ? 'rgba(232, 79, 79, 0.12)' : `${node.accent}22`,
      boxShadow: isActive
        ? `0 0 0 1px ${node.accent}, 0 18px 40px ${node.accent}26`
        : '0 16px 34px rgba(0,0,0,0.22)',
    }
  }

  if (node.type === 'decision') {
    return {
      width: size.width,
      height: size.height,
      borderRadius: 24,
      border: `2px solid ${node.accent}`,
      background: 'rgba(20, 33, 25, 0.96)',
      transform: 'rotate(45deg)',
      boxShadow: isActive
        ? `0 0 0 1px ${node.accent}, 0 16px 40px ${node.accent}2f`
        : '0 16px 34px rgba(0,0,0,0.22)',
    }
  }

  return {
    width: size.width,
    height: size.height,
    borderRadius: 28,
    border: `1px solid ${isActive ? node.accent : 'rgba(255,255,255,0.10)'}`,
    background: `linear-gradient(180deg, ${node.accent}18 0%, rgba(18, 30, 23, 0.96) 48%, rgba(15, 24, 19, 0.98) 100%)`,
    boxShadow: isActive
      ? `0 0 0 1px ${node.accent}, 0 20px 50px ${node.accent}26`
      : '0 18px 42px rgba(0,0,0,0.24)',
  }
}

function renderNodeContent(
  node: DiagramNode,
  diagramProcessId: string,
  onOpenProcess: (processId: string) => void,
) {
  if (node.type === 'start' || node.type === 'end') {
    return (
      <div className="flex h-full items-center justify-center text-[10px] font-semibold uppercase tracking-[0.24em] text-white">
        {node.type === 'start' ? 'Inicio' : 'Fim'}
      </div>
    )
  }

  if (node.type === 'decision') {
    return (
      <div className="flex h-full items-center justify-center p-3">
        <div className="-rotate-45 text-center">
          <p className="text-[10px] uppercase tracking-[0.2em]" style={{ color: node.accent }}>
            Decisao
          </p>
          <p className="mt-2 text-sm font-semibold leading-5 text-white">
            {node.title}
          </p>
        </div>
      </div>
    )
  }

  const detailHint =
    node.linkedProcessId && node.linkedProcessId !== diagramProcessId
      ? 'Clique para abrir o fluxo interno.'
      : node.activityItems?.[0] ?? node.description
  const detailCountLabel = node.activityItems?.length
    ? `${node.activityItems.length} itens`
    : node.type === 'subprocess'
      ? 'Abrir detalhe'
      : 'Detalhes'

  return (
    <div className="flex h-full flex-col overflow-hidden p-4 text-left">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <p className="text-[10px] uppercase tracking-[0.22em]" style={{ color: node.accent }}>
            {node.metaLabel ?? (node.type === 'subprocess' ? 'Subprocesso' : 'Bloco')}
          </p>
          <h3 className="mt-2 text-[16px] font-semibold leading-6 text-white" style={twoLineClampStyle}>
            {node.title}
          </h3>
        </div>

        {node.linkedProcessId && node.linkedProcessId !== diagramProcessId ? (
          <button
            type="button"
            data-flow-interactive="true"
            onClick={(event) => {
              event.stopPropagation()
              onOpenProcess(node.linkedProcessId!)
            }}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-cactus-50/74 transition hover:border-white/20 hover:bg-white/[0.08]"
            aria-label={`Abrir fluxo de ${node.title}`}
            title="Abrir fluxo interno"
          >
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M3.5 8H12.5M8.5 4L12.5 8L8.5 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        ) : null}
      </div>

      {node.subtitle ? (
        <p className="mt-2 text-[11px] uppercase tracking-[0.16em] text-cactus-100/52" style={twoLineClampStyle}>
          {clampText(node.subtitle, node.type === 'subprocess' ? 28 : 32)}
        </p>
      ) : null}

      <p className="mt-3 text-[13px] leading-5 text-cactus-50/76" style={threeLineClampStyle}>
        {detailHint}
      </p>

      <div className="mt-auto flex items-center justify-between gap-2 pt-3">
        <span className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-cactus-50/68">
          {detailCountLabel}
        </span>
        {node.linkedProcessId && node.linkedProcessId !== diagramProcessId ? (
          <span className="text-[10px] uppercase tracking-[0.18em] text-cactus-100/54">
            Abrir fluxo
          </span>
        ) : null}
      </div>
    </div>
  )
}

function DetailSection({
  title,
  items,
  variant = 'default',
}: {
  title: string
  items: string[]
  variant?: 'default' | 'danger' | 'warning' | 'success' | 'info'
}) {
  if (!items.length) {
    return null
  }

  const themes = {
    default: 'border-white/8 bg-white/[0.03] text-cactus-50/80',
    danger: 'border-red-500/20 bg-red-500/5 text-red-200/80',
    warning: 'border-amber-500/20 bg-amber-500/5 text-amber-200/80',
    success: 'border-emerald-500/20 bg-emerald-500/5 text-emerald-200/80',
    info: 'border-sky-500/20 bg-sky-500/5 text-sky-200/80',
  }

  return (
    <div className="space-y-3">
      <p className="text-[10px] uppercase tracking-[0.22em] text-cactus-300">{title}</p>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <div
            key={item}
            className={`rounded-full border px-3 py-1.5 text-xs leading-none ${themes[variant]}`}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

function DetailInspector({
  node,
  process,
  diagramProcess,
  currentProcessId,
  onOpenProcess,
}: {
  node: DiagramNode | null
  process?: ProcessRecord
  diagramProcess?: ProcessRecord
  currentProcessId: string
  onOpenProcess: (processId: string) => void
}) {
  if (!node) {
    return (
      <aside className="flex h-full w-[340px] shrink-0 flex-col border-l border-white/8 bg-[#0d1712]/84 p-5">
        <p className="text-[11px] uppercase tracking-[0.22em] text-cactus-300">Detalhes do card</p>
        <div className="mt-6 flex-1 flex items-center justify-center text-center px-4">
          <div className="max-w-[240px]">
            <div className="mx-auto w-12 h-12 rounded-full border border-dashed border-white/20 flex items-center justify-center text-white/20 mb-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 15l6 6m-11-4a7 7 0 110-14 7 7 0 010 14z" />
              </svg>
            </div>
            <p className="text-lg font-medium text-white/90">Nada selecionado</p>
            <p className="mt-2 text-sm leading-6 text-cactus-100/50">
              Clique em um card para ver descrição, atividades e contexto do fluxo.
            </p>
          </div>
        </div>
      </aside>
    )
  }

  const activityItems = process?.activities ?? node.activityItems ?? []
  const catalogDetails = process?.activityDetails ?? diagramProcess?.activityDetails ?? []
  const activityDetails =
    catalogDetails.length
      ? activityItems.length
        ? activityItems.map((title) => catalogDetails.find((d) => d.title === title) ?? { title, description: '', objective: '' })
        : catalogDetails
      : activityItems.map((item) => ({ title: item, description: '', objective: '' }))

  return (
    <aside className="h-full w-full lg:w-[420px] shrink-0 overflow-y-auto border-l px-4 py-5 sm:p-6 lg:p-7 custom-scrollbar" style={{ borderColor: node.accent + '33', backgroundColor: 'rgba(13, 24, 18, 0.5)' }}>
      <div className="space-y-6 sm:space-y-8">
        <header className="space-y-4 sm:space-y-5">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 flex-wrap mb-2">
                <p className="text-[11px] sm:text-sm uppercase tracking-[0.24em] font-bold px-2.5 py-1 rounded-full" style={{ color: node.accent, backgroundColor: node.accent + '15', border: `1px solid ${node.accent}33` }}>
                  {node.metaLabel ?? 'Card'}
                </p>
                {process?.sectorId && (
                  <span className="px-3 py-1 rounded-full text-[10px] sm:text-xs uppercase tracking-widest font-semibold hidden sm:inline" style={{ color: node.accent, backgroundColor: node.accent + '10', border: `1px solid ${node.accent}33` }}>
                    {process.sectorId}
                  </span>
                )}
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight">{node.title}</h2>
              {node.subtitle ? (
                <p className="mt-2 text-sm sm:text-base uppercase tracking-[0.18em] text-white/60 font-medium line-clamp-2">
                  {node.subtitle}
                </p>
              ) : null}
            </div>
            <span className="shrink-0 rounded-lg px-3 py-1.5 text-[11px] sm:text-xs uppercase tracking-widest font-bold text-white/70 whitespace-nowrap" style={{ backgroundColor: node.accent + '15', border: `1px solid ${node.accent}33` }}>
              {node.type}
            </span>
          </div>

          <div className="flex flex-wrap gap-2 sm:gap-3 pt-2">
            {process?.duration && (
              <div className="flex items-center gap-2 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-medium" style={{ backgroundColor: node.accent + '12', border: `1px solid ${node.accent}33` }}>
                <span className="uppercase tracking-widest text-white/60 whitespace-nowrap">Duração:</span>
                <span className="font-semibold text-white">{process.duration}</span>
              </div>
            )}
            {process?.collaborators && (
              <div className="flex items-center gap-2 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-medium" style={{ backgroundColor: node.accent + '12', border: `1px solid ${node.accent}33` }}>
                <span className="uppercase tracking-widest text-white/60 whitespace-nowrap">Pessoas:</span>
                <span className="font-semibold text-white">{process.collaborators}</span>
              </div>
            )}
          </div>

          {node.linkedProcessId && node.linkedProcessId !== currentProcessId ? (
            <button
              type="button"
              onClick={() => onOpenProcess(node.linkedProcessId!)}
              className="w-full flex items-center justify-center gap-2 mt-4 sm:mt-5 rounded-lg px-4 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-white transition active:scale-[0.98]"
              style={{ backgroundColor: node.accent + '25', border: `1.5px solid ${node.accent}55`, color: 'white' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = node.accent + '35')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = node.accent + '25')}
            >
              <span>Abrir Detalhamento</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          ) : null}
        </header>

        <div style={{ height: '1px', backgroundColor: node.accent + '20' }} />

        <div className="space-y-6 sm:space-y-7">
          {activityDetails.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-sm sm:text-base uppercase tracking-[0.22em] font-bold" style={{ color: node.accent }}>
                  Atividades
                </p>
                <span className="text-xs sm:text-sm px-2.5 py-1 rounded-full text-white/60 font-semibold" style={{ backgroundColor: node.accent + '15' }}>
                  {activityDetails.length}
                </span>
              </div>
              <div className="space-y-2.5 sm:space-y-3">
                {activityDetails.map((item, i) => (
                  <div key={i} className="rounded-lg p-3 sm:p-4 transition" style={{ backgroundColor: node.accent + '8', border: `1px solid ${node.accent}33` }}>
                    <p className="text-sm sm:text-base font-semibold text-white leading-snug">{item.title}</p>
                    {item.objective && (
                      <p className="mt-2 text-xs sm:text-sm text-white/65 leading-relaxed">{item.objective}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="space-y-4">
            {process?.tools?.length ? (
              <DetailSection title="Ferramentas e Materiais" items={process.tools} />
            ) : null}
            {process?.skills?.length ? (
              <DetailSection title="Habilidades Necessárias" items={process.skills} variant="info" />
            ) : null}
            {process?.projectRisks?.length ? (
              <DetailSection title="Riscos de Projeto" items={process.projectRisks} variant="warning" />
            ) : null}
            {process?.safetyRisks?.length ? (
              <DetailSection title="Riscos de Segurança" items={process.safetyRisks} variant="danger" />
            ) : null}
            {process?.indicators?.length ? (
              <DetailSection title="Indicadores de Desempenho" items={process.indicators} variant="success" />
            ) : null}
            {process?.inputs?.length ? (
              <DetailSection title="Entradas" items={process.inputs} variant="info" />
            ) : null}
            {process?.outputs?.length ? (
              <DetailSection title="Saídas" items={process.outputs} variant="success" />
            ) : null}
          </div>

          <div className="pt-4 border-t" style={{ borderColor: node.accent + '33' }}>
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.22em] font-bold mb-3" style={{ color: node.accent }}>Descrição do fluxo</p>
            <p className="text-sm sm:text-base leading-7 sm:leading-8 text-white/75">
              {process?.description ?? node.description}
            </p>
          </div>

          {process?.objective ? (
            <div className="rounded-xl p-4 sm:p-5" style={{ backgroundColor: node.accent + '10', border: `1px solid ${node.accent}33` }}>
              <p className="text-[11px] sm:text-xs uppercase tracking-[0.22em] font-bold" style={{ color: node.accent }}>Objetivo</p>
              <p className="mt-2.5 sm:mt-3 text-sm sm:text-base leading-6 sm:leading-7 text-white/80 italic">
                "{process.objective}"
              </p>
            </div>
          ) : null}

          {process?.sourceReference ? (
            <div className="pt-4 mt-4 border-t hidden sm:block" style={{ borderColor: node.accent + '33' }}>
              <p className="text-[11px] sm:text-xs uppercase tracking-[0.2em] font-bold" style={{ color: node.accent }}>Referência técnica</p>
              <p className="mt-2.5 text-xs sm:text-sm text-white/60 font-mono leading-relaxed">
                {process.sourceReference}
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </aside>
  )
}

export function DetailedFlowDiagram({
  diagram,
  activeNodeId,
  onSelectNode,
  onOpenProcess,
}: DetailedFlowDiagramProps) {
  const viewportRef = useRef<HTMLDivElement | null>(null)
  const draggingRef = useRef(false)
  const dragOriginRef = useRef({
    pointerX: 0,
    pointerY: 0,
    scrollLeft: 0,
    scrollTop: 0,
  })
  const [zoom, setZoom] = useState(initialDesktopZoom)
  const [showMobileDrawer, setShowMobileDrawer] = useState(false)
  const isMobile = useIsMobile()
  const selectedNode = diagram.nodes.find((node) => node.id === activeNodeId) ?? null
  const selectedProcess = selectedNode?.linkedProcessId
    ? diagramProcesses[selectedNode.linkedProcessId]
    : undefined
  const width = Math.max(
    1680,
    ...diagram.nodes.map((node) => node.x + getNodeDimensions(node).width + 80),
  )
  const height = diagram.lanes.length * laneHeight + canvasPaddingBottom

  useEffect(() => {
    const nextZoom = isMobile ? initialMobileZoom : initialDesktopZoom
    setZoom(nextZoom)
  }, [diagram.processId, isMobile])

  useEffect(() => {
    if (selectedNode && isMobile) {
      setShowMobileDrawer(true)
    }
  }, [selectedNode, isMobile])

  useEffect(() => {
    const viewport = viewportRef.current

    if (!viewport) {
      return
    }

    const targetLeft = Math.max((width * zoom - viewport.clientWidth) / 2, 0)
    const targetTop = Math.max((height * zoom - viewport.clientHeight) / 5, 0)

    viewport.scrollTo({
      left: targetLeft,
      top: targetTop,
      behavior: 'smooth',
    })
  }, [diagram.processId, width, height, zoom])

  const applyZoom = (value: number) => {
    setZoom(Math.min(maxZoom, Math.max(minZoom, Number(value.toFixed(2)))))
  }

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    const viewport = viewportRef.current

    if (!viewport) {
      return
    }

    const target = event.target as HTMLElement

    if (target.closest('[data-flow-interactive="true"]')) {
      return
    }

    draggingRef.current = true
    dragOriginRef.current = {
      pointerX: event.clientX,
      pointerY: event.clientY,
      scrollLeft: viewport.scrollLeft,
      scrollTop: viewport.scrollTop,
    }
    viewport.setPointerCapture(event.pointerId)
  }

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const viewport = viewportRef.current

    if (!viewport || !draggingRef.current) {
      return
    }

    const deltaX = event.clientX - dragOriginRef.current.pointerX
    const deltaY = event.clientY - dragOriginRef.current.pointerY

    viewport.scrollLeft = dragOriginRef.current.scrollLeft - deltaX
    viewport.scrollTop = dragOriginRef.current.scrollTop - deltaY
  }

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    const viewport = viewportRef.current

    draggingRef.current = false
    viewport?.releasePointerCapture(event.pointerId)
  }

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    if (!event.ctrlKey && !event.metaKey) {
      return
    }

    event.preventDefault()
    applyZoom(zoom + (event.deltaY < 0 ? 0.06 : -0.06))
  }

  const handleCloseDrawer = () => {
    setShowMobileDrawer(false)
  }

  return (
    <div className="flex h-full min-w-0 overflow-hidden">
      {/* Canvas principal */}
      <div className="relative flex min-h-0 flex-1 flex-col overflow-hidden">
        <div
          ref={viewportRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onWheel={handleWheel}
          className="flex-1 min-h-0 overflow-auto cursor-grab touch-none active:cursor-grabbing"
        >
          <div
            className="relative"
            style={{
              width: width * zoom,
              height: height * zoom,
            }}
          >
            <div
              className="relative origin-top-left"
              style={{
                width,
                height,
                transform: `scale(${zoom})`,
              }}
            >
              {diagram.lanes.map((lane, index) => {
                const top = index * laneHeight

                return (
                  <div
                    key={lane.id}
                    className="absolute left-0 border-b border-white/8"
                    style={{
                      top,
                      width,
                      height: laneHeight,
                      background: `linear-gradient(180deg, ${lane.accent} 0%, rgba(13, 23, 18, 0.72) 100%)`,
                    }}
                  >
                    <div
                      className="absolute inset-y-0 left-0 border-r border-white/8 bg-[#0e1914]/88 px-4 py-5"
                      style={{ width: laneHeaderWidth }}
                    >
                      <p className="text-[10px] uppercase tracking-[0.24em] text-cactus-200">
                        Raia {index + 1}
                      </p>
                      <h3 className="mt-3 text-lg font-semibold text-white">
                        {lane.name}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-cactus-100/62">
                        {clampText(lane.description, 52)}
                      </p>
                    </div>
                  </div>
                )
              })}

              <EdgeLayer diagram={diagram} width={width} height={height} zoom={zoom} />

              {diagram.nodes.map((node) => {
                const isActive = activeNodeId === node.id

                return (
                  <div
                    key={node.id}
                    role="button"
                    tabIndex={0}
                    data-flow-interactive="true"
                    onClick={() => {
                      onSelectNode(node.id)
                    }}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault()
                        onSelectNode(node.id)
                      }
                    }}
                    className="absolute overflow-hidden transition duration-200"
                    style={{
                      left: node.x,
                      top: node.y,
                      zIndex: isActive ? 3 : 2,
                      ...buildNodeStyle(node, isActive),
                    }}
                  >
                    {renderNodeContent(node, diagram.processId, onOpenProcess)}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        {/* Zoom controls — floating bottom-left */}
        {/* Botão para abrir drawer em mobile */}
        {isMobile && (
          <button
            type="button"
            onClick={() => setShowMobileDrawer(true)}
            className="absolute bottom-4 right-4 z-10 rounded-full border border-white/10 bg-[#0d1812]/90 p-3 text-white/60 backdrop-blur transition hover:border-white/20 hover:text-white/90 lg:hidden"
            style={{ display: selectedNode ? 'flex' : 'none' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 15l6 6m-11-4a7 7 0 110-14 7 7 0 010 14z" />
            </svg>
          </button>
        )}

        {/* Controles de zoom */}
        <div className="absolute bottom-4 left-4 z-10 flex items-center gap-1">
          <button
            type="button"
            onClick={() => applyZoom(zoom - 0.08)}
            className="rounded-md border border-white/10 bg-[#0d1812]/90 px-2 py-1.5 md:px-2.5 md:py-1 text-sm text-white/60 backdrop-blur transition hover:border-white/20 hover:text-white/90 touch-manipulation"
          >
            −
          </button>
          <span className="min-w-[48px] md:min-w-[52px] rounded-md border border-white/10 bg-[#0d1812]/90 px-1.5 md:px-2 py-1 text-center text-[10px] md:text-xs text-white/50 backdrop-blur">
            {Math.round(zoom * 100)}%
          </span>
          <button
            type="button"
            onClick={() => applyZoom(zoom + 0.08)}
            className="rounded-md border border-white/10 bg-[#0d1812]/90 px-2 py-1.5 md:px-2.5 md:py-1 text-sm text-white/60 backdrop-blur transition hover:border-white/20 hover:text-white/90 touch-manipulation"
          >
            +
          </button>
          <button
            type="button"
            onClick={() => applyZoom(isMobile ? initialMobileZoom : initialDesktopZoom)}
            className="hidden md:block rounded-md border border-white/10 bg-[#0d1812]/90 px-2.5 py-1 text-xs text-white/40 backdrop-blur transition hover:border-white/20 hover:text-white/70"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Desktop: painel lateral sempre visível */}
      {!isMobile && (
        <DetailInspector
          node={selectedNode}
          process={selectedProcess}
          diagramProcess={diagramProcesses[diagram.processId]}
          currentProcessId={diagram.processId}
          onOpenProcess={onOpenProcess}
        />
      )}

      {/* Mobile: drawer que desliza da direita */}
      {isMobile && showMobileDrawer && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
            onClick={handleCloseDrawer}
          />
          {/* Drawer */}
          <div className="fixed inset-y-0 right-0 z-50 w-full max-w-[340px] overflow-y-auto border-l border-white/8 bg-[#0d1712] shadow-2xl lg:hidden">
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/8 bg-[#0d1712]/95 px-4 py-3 backdrop-blur">
              <span className="text-xs uppercase tracking-wider text-white/50">Detalhes</span>
              <button
                type="button"
                onClick={handleCloseDrawer}
                className="rounded-full border border-white/10 bg-white/5 p-2 text-white/60 transition hover:border-white/20 hover:text-white"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-4">
              <DetailInspector
                node={selectedNode}
                process={selectedProcess}
                diagramProcess={diagramProcesses[diagram.processId]}
                currentProcessId={diagram.processId}
                onOpenProcess={(processId) => {
                  onOpenProcess(processId)
                  handleCloseDrawer()
                }}
              />
            </div>
          </div>
        </>
      )}
    </div>
  )
}
