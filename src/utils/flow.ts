import { MarkerType, type Edge } from '@xyflow/react'
import type { FlowLayout, FlowRelation, ProcessFlowNode } from '../types/flow'
import type { ProcessRecord } from '../types/process'
import type { Sector } from '../types/sector'

const relationColors = {
  entrada: '#8fc58d',
  handoff: '#e8c982',
  controle: '#7ad7c4',
  feedback: '#f2a97b',
}

type BuildNodesOptions = {
  layout: FlowLayout
  processes: ProcessRecord[]
  relations: FlowRelation[]
  sectors: Sector[]
  selectedProcessId: string | null
  onAddProcess: (sourceProcessId: string) => void
  onEditProcess: (processId: string) => void
}

type BuildEdgesOptions = {
  processes: ProcessRecord[]
  relations: FlowRelation[]
  selectedProcessId: string | null
}

export function filterProcesses(
  processes: ProcessRecord[],
  activeSectorId: string,
  searchTerm: string,
) {
  const normalizedQuery = searchTerm.trim().toLowerCase()

  return processes.filter((process) => {
    const matchesSector =
      activeSectorId === 'all' || process.sectorId === activeSectorId

    if (!matchesSector) {
      return false
    }

    if (!normalizedQuery) {
      return true
    }

    const haystack = [
      process.name,
      process.description,
      process.objective,
      process.stage,
      process.owner,
      ...process.inputs,
      ...process.outputs,
      ...process.activities,
      ...process.subprocesses,
      ...process.tags,
      ...(process.tools ?? []),
      ...(process.projectRisks ?? []),
      ...(process.indicators ?? []),
      ...(process.skills ?? []),
    ]
      .join(' ')
      .toLowerCase()

    return haystack.includes(normalizedQuery)
  })
}

export function getConnectedProcessIds(
  processId: string,
  relations: FlowRelation[],
) {
  const connectedIds = new Set<string>([processId])

  relations.forEach((relation) => {
    if (relation.source === processId) {
      connectedIds.add(relation.target)
    }

    if (relation.target === processId) {
      connectedIds.add(relation.source)
    }
  })

  return connectedIds
}

export function buildFlowNodes({
  layout,
  processes,
  relations,
  sectors,
  selectedProcessId,
  onAddProcess,
  onEditProcess,
}: BuildNodesOptions): ProcessFlowNode[] {
  const sectorById = new Map(sectors.map((sector) => [sector.id, sector]))
  const focusIds = selectedProcessId
    ? getConnectedProcessIds(selectedProcessId, relations)
    : null

  return processes.map((process) => ({
    id: process.id,
    type: 'process',
    position: layout[process.id] ?? { x: 0, y: 0 },
    data: {
      process,
      sector: sectorById.get(process.sectorId) ?? sectors[0],
      isMuted: focusIds ? !focusIds.has(process.id) : false,
      onAddProcess,
      onEditProcess,
    },
  }))
}

export function buildFlowEdges({
  processes,
  relations,
  selectedProcessId,
}: BuildEdgesOptions): Edge[] {
  const visibleProcessIds = new Set(processes.map((process) => process.id))
  const processById = new Map(processes.map((process) => [process.id, process]))
  const focusIds = selectedProcessId
    ? getConnectedProcessIds(selectedProcessId, relations)
    : null

  return relations
    .filter(
      (relation) =>
        visibleProcessIds.has(relation.source) &&
        visibleProcessIds.has(relation.target),
    )
    .map((relation) => {
      const isFocused = focusIds
        ? focusIds.has(relation.source) && focusIds.has(relation.target)
        : true
      const targetProcess = processById.get(relation.target)
      const color = targetProcess?.accent ?? relationColors[relation.type]

      return {
        id: relation.id,
        source: relation.source,
        target: relation.target,
        type: 'smoothstep',
        animated: relation.type === 'feedback',
        label: relation.label,
        labelShowBg: true,
        labelBgPadding: [8, 4],
        labelBgBorderRadius: 999,
        labelBgStyle: {
          fill: 'rgba(9, 17, 12, 0.84)',
          fillOpacity: isFocused ? 1 : 0.45,
          stroke: 'rgba(255, 255, 255, 0.08)',
        },
        labelStyle: {
          fill: isFocused ? '#eff7ef' : 'rgba(239, 247, 239, 0.45)',
          fontSize: 12,
          fontWeight: 600,
        },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color,
        },
        style: {
          stroke: color,
          strokeWidth: isFocused ? 2.4 : 1.3,
          opacity: isFocused ? 0.94 : 0.2,
        },
      }
    })
}
