export type MacroFlowNode = {
  id: string
  title: string
  subtitle: string
  description: string
  accent: string
  softAccent: string
  x: number
  y: number
  kind: 'macroprocesso' | 'setor' | 'processo' | 'subprocesso'
}

export type MacroFlowEdge = {
  id: string
  source: string
  target: string
  label?: string
  color: string
}

export type MacroSectorProcessMap = Record<string, string[]>

export type MacroProcessSubprocessMap = Record<string, string[]>
