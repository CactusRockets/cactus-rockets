export type DiagramNodeType =
  | 'start'
  | 'end'
  | 'task'
  | 'decision'
  | 'message'
  | 'system'
  | 'subprocess'

export type DiagramAnchor = 'top' | 'right' | 'bottom' | 'left'

export type OverviewStep = {
  id: string
  processId: string
  title: string
  subtitle: string
  description: string
  accent: string
  isMain?: boolean
}

export type DiagramLane = {
  id: string
  name: string
  description: string
  accent: string
}

export type DiagramNode = {
  id: string
  laneId: string
  type: DiagramNodeType
  title: string
  subtitle?: string
  description: string
  x: number
  y: number
  accent: string
  metaLabel?: string
  activityItems?: string[]
  linkedProcessId?: string
}

export type DiagramEdge = {
  id: string
  source: string
  target: string
  label?: string
  color?: string
  sourceAnchor?: DiagramAnchor
  targetAnchor?: DiagramAnchor
}

export type DiagramDefinition = {
  processId: string
  title: string
  summary: string
  helperText: string
  lanes: DiagramLane[]
  nodes: DiagramNode[]
  edges: DiagramEdge[]
}
