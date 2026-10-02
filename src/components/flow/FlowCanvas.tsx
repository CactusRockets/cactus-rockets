import {
  Background,
  Controls,
  MiniMap,
  ReactFlow,
  ReactFlowProvider,
  useReactFlow,
  type Edge,
} from '@xyflow/react'
import { useEffect } from 'react'
import type { FlowNodeData, ProcessFlowNode } from '../../types/flow'
import { ProcessNode } from './ProcessNode'

type FlowCanvasProps = {
  nodes: ProcessFlowNode[]
  edges: Edge[]
  selectedProcessId: string | null
  onSelectProcess: (processId: string) => void
}

const nodeTypes = {
  process: ProcessNode,
}

function FlowViewport({
  edges,
  nodes,
  onSelectProcess,
  selectedProcessId,
}: FlowCanvasProps) {
  const reactFlow = useReactFlow()

  useEffect(() => {
    if (nodes.length === 0) {
      return
    }

    if (!selectedProcessId) {
      reactFlow.fitView({ duration: 500, padding: 0.2 })
      return
    }

    const selectedNode = nodes.find((node) => node.id === selectedProcessId)

    if (!selectedNode) {
      reactFlow.fitView({ duration: 500, padding: 0.2 })
      return
    }

    const isMainProcess = selectedNode.data.process.kind === 'processo'

    reactFlow.setCenter(
      selectedNode.position.x + (isMainProcess ? 180 : 160),
      selectedNode.position.y + (isMainProcess ? 145 : 124),
      {
        duration: 500,
        zoom: isMainProcess ? 0.7 : 0.8,
      },
    )
  }, [nodes, reactFlow, selectedProcessId])

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      nodeTypes={nodeTypes}
      minZoom={0.24}
      maxZoom={1.45}
      fitView
      fitViewOptions={{ duration: 500, padding: 0.18 }}
      colorMode="dark"
      nodesDraggable={false}
      onNodeClick={(_, node) => onSelectProcess(node.id)}
    >
      <Background gap={28} size={1.2} color="rgba(143, 197, 141, 0.12)" />
      <MiniMap
        pannable
        zoomable
        nodeColor={(node) => {
          const data = node.data as FlowNodeData
          return data.process.accent ?? data.sector.accent
        }}
        maskColor="rgba(9, 17, 12, 0.68)"
      />
      <Controls position="bottom-left" showInteractive={false} />
    </ReactFlow>
  )
}

export function FlowCanvas(props: FlowCanvasProps) {
  if (props.nodes.length === 0) {
    return (
      <div className="flex h-[72vh] min-h-[680px] items-center justify-center rounded-[1.75rem] border border-dashed border-white/12 bg-[#15221c]/70 p-8 text-center xl:h-[78vh] xl:min-h-[760px]">
        <div className="max-w-md">
          <p className="text-xs uppercase tracking-[0.24em] text-cactus-300">
            Sem resultados
          </p>
          <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white">
            Nenhum processo encontrado com esse filtro.
          </h3>
          <p className="mt-3 text-sm leading-7 text-cactus-100/[0.72]">
            Ajuste a busca para voltar a visualizar o fluxo completo.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="h-[72vh] min-h-[680px] overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#132019]/88 xl:h-[78vh] xl:min-h-[760px]">
      <ReactFlowProvider>
        <FlowViewport {...props} />
      </ReactFlowProvider>
    </div>
  )
}
