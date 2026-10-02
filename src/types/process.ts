export type ProcessKind =
  | 'macroprocesso'
  | 'processo'
  | 'subprocesso'
  | 'atividade'

export type ProcessStatus = 'ativo' | 'atencao' | 'planejado'

export type ProcessComplexity = 'baixa' | 'media' | 'alta'

export type ActivityDetail = {
  title: string
  description: string
  objective?: string
  tools?: string[]
  duration?: string
  collaborators?: string
  projectRisks?: string[]
  safetyRisks?: string[]
  indicators?: string[]
  skills?: string[]
  sourcePages?: number[]
}

export type ProcessRecord = {
  id: string
  name: string
  sectorId: string
  kind: ProcessKind
  stage: string
  description: string
  objective: string
  owner: string
  status: ProcessStatus
  complexity: ProcessComplexity
  inputs: string[]
  outputs: string[]
  subprocesses: string[]
  activities: string[]
  activityDetails?: ActivityDetail[]
  tags: string[]
  duration?: string
  collaborators?: string
  tools?: string[]
  projectRisks?: string[]
  safetyRisks?: string[]
  indicators?: string[]
  skills?: string[]
  sourceReference?: string
  sourcePages?: number[]
  accent?: string
  softAccent?: string
  glow?: string
}
