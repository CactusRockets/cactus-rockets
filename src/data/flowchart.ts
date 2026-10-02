import type { FlowLayout, FlowRelation } from '../types/flow'

export const flowLayout: FlowLayout = {
  'desenvolvimento-da-avionica': { x: 60, y: 430 },
  'definicao-projeto-teorico-avionica': { x: 540, y: 40 },
  'simulacao-e-planejamento': { x: 540, y: 360 },
  'testes-basicos': { x: 540, y: 680 },
  'testes-avancados-e-refinamento': { x: 980, y: 170 },
  'producao-fisica-e-montagem': { x: 980, y: 500 },
  'integracao-com-outros-setores': { x: 980, y: 830 },
}

export const flowRelations: FlowRelation[] = [
  {
    id: 'edge-1',
    source: 'desenvolvimento-da-avionica',
    target: 'definicao-projeto-teorico-avionica',
    label: 'base conceitual',
    type: 'entrada',
  },
  {
    id: 'edge-2',
    source: 'desenvolvimento-da-avionica',
    target: 'simulacao-e-planejamento',
    label: 'planejar e validar',
    type: 'handoff',
  },
  {
    id: 'edge-3',
    source: 'desenvolvimento-da-avionica',
    target: 'testes-basicos',
    label: 'provar em bancada',
    type: 'controle',
  },
  {
    id: 'edge-4',
    source: 'desenvolvimento-da-avionica',
    target: 'testes-avancados-e-refinamento',
    label: 'integrar e depurar',
    type: 'feedback',
  },
  {
    id: 'edge-5',
    source: 'desenvolvimento-da-avionica',
    target: 'producao-fisica-e-montagem',
    label: 'materializar o sistema',
    type: 'handoff',
  },
  {
    id: 'edge-6',
    source: 'desenvolvimento-da-avionica',
    target: 'integracao-com-outros-setores',
    label: 'validar no foguete',
    type: 'controle',
  },
]
