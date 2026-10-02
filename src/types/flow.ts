import type { Node } from '@xyflow/react'
import type { ProcessRecord } from './process'
import type { Sector } from './sector'

export type FlowRelationType = 'entrada' | 'handoff' | 'controle' | 'feedback'

export type FlowRelation = {
  id: string
  source: string
  target: string
  label: string
  type: FlowRelationType
}

export type FlowLayout = Record<
  string,
  {
    x: number
    y: number
  }
>

export type FlowNodeData = {
  process: ProcessRecord
  sector: Sector
  isMuted: boolean
  onAddProcess: (sourceProcessId: string) => void
  onEditProcess: (processId: string) => void
}

export type ProcessFlowNode = Node<FlowNodeData, 'process'>
