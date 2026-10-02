import { useEffect, useState } from 'react'
import type { FlowRelationType } from '../../types/flow'
import type {
  ProcessComplexity,
  ProcessKind,
  ProcessStatus,
} from '../../types/process'
import type { Sector } from '../../types/sector'

export type ProcessEditorValues = {
  name: string
  sectorId: string
  kind: ProcessKind
  stage: string
  description: string
  objective: string
  owner: string
  status: ProcessStatus
  complexity: ProcessComplexity
  inputs: string
  outputs: string
  subprocesses: string
  activities: string
  tags: string
  relationLabel: string
  relationType: FlowRelationType
}

type ProcessEditorModalProps = {
  initialValues: ProcessEditorValues
  mode: 'create' | 'edit'
  sectors: Sector[]
  sourceProcessName?: string
  onClose: () => void
  onSave: (values: ProcessEditorValues) => void
}

const kindOptions: ProcessKind[] = [
  'macroprocesso',
  'processo',
  'subprocesso',
  'atividade',
]

const statusOptions: ProcessStatus[] = ['ativo', 'atencao', 'planejado']
const complexityOptions: ProcessComplexity[] = ['baixa', 'media', 'alta']
const relationTypeOptions: FlowRelationType[] = [
  'handoff',
  'entrada',
  'controle',
  'feedback',
]

function FieldLabel({ children }: { children: string }) {
  return (
    <span className="mb-2 block text-[11px] uppercase tracking-[0.22em] text-cactus-300">
      {children}
    </span>
  )
}

export function ProcessEditorModal({
  initialValues,
  mode,
  sectors,
  sourceProcessName,
  onClose,
  onSave,
}: ProcessEditorModalProps) {
  const [values, setValues] = useState(initialValues)

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [onClose])

  const handleChange = (
    field: keyof ProcessEditorValues,
    value: string,
  ) => {
    setValues((current) => ({ ...current, [field]: value }))
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#08110dcc] px-4 py-6 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="max-h-[92vh] w-full max-w-5xl overflow-auto rounded-[2rem] border border-white/10 bg-[#15221cf5] p-5 shadow-[0_30px_120px_rgba(0,0,0,0.42)] sm:p-6"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex flex-col gap-4 border-b border-white/10 pb-5 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-cactus-300/30 bg-cactus-400/10 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-cactus-200">
                {mode === 'create' ? 'Novo processo' : 'Editar processo'}
              </span>
              {sourceProcessName ? (
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-cactus-100/65">
                  vinculado a {sourceProcessName}
                </span>
              ) : null}
            </div>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-white">
              {mode === 'create'
                ? 'Adicionar novo quadrado no fluxo'
                : 'Alterar dados do quadrado selecionado'}
            </h2>
            <p className="mt-3 text-sm leading-7 text-cactus-100/[0.78]">
              Preencha os dados do processo. Nesta fase tudo e salvo localmente no
              navegador, como um comportamento tipo Bizagi para modelagem rapida.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-cactus-50/78 transition hover:border-white/20 hover:bg-white/[0.08]"
          >
            Fechar
          </button>
        </div>

        <form
          className="mt-5 space-y-5"
          onSubmit={(event) => {
            event.preventDefault()
            onSave(values)
          }}
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <label className="block">
              <FieldLabel>Nome do processo</FieldLabel>
              <input
                required
                value={values.name}
                onChange={(event) => handleChange('name', event.target.value)}
                className="w-full rounded-[1.1rem] border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none placeholder:text-cactus-100/45"
                placeholder="Ex: Analise de aprovacao"
              />
            </label>

            <label className="block">
              <FieldLabel>Setor</FieldLabel>
              <select
                value={values.sectorId}
                onChange={(event) => handleChange('sectorId', event.target.value)}
                className="w-full rounded-[1.1rem] border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none"
              >
                {sectors.map((sector) => (
                  <option key={sector.id} value={sector.id}>
                    {sector.name}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="grid gap-4 lg:grid-cols-4">
            <label className="block">
              <FieldLabel>Tipo</FieldLabel>
              <select
                value={values.kind}
                onChange={(event) => handleChange('kind', event.target.value)}
                className="w-full rounded-[1.1rem] border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none"
              >
                {kindOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <FieldLabel>Etapa</FieldLabel>
              <input
                required
                value={values.stage}
                onChange={(event) => handleChange('stage', event.target.value)}
                className="w-full rounded-[1.1rem] border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none"
              />
            </label>

            <label className="block">
              <FieldLabel>Status</FieldLabel>
              <select
                value={values.status}
                onChange={(event) => handleChange('status', event.target.value)}
                className="w-full rounded-[1.1rem] border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none"
              >
                {statusOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <FieldLabel>Complexidade</FieldLabel>
              <select
                value={values.complexity}
                onChange={(event) => handleChange('complexity', event.target.value)}
                className="w-full rounded-[1.1rem] border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none"
              >
                {complexityOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <label className="block">
              <FieldLabel>Descricao breve</FieldLabel>
              <textarea
                required
                value={values.description}
                onChange={(event) => handleChange('description', event.target.value)}
                rows={4}
                className="w-full rounded-[1.1rem] border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none placeholder:text-cactus-100/45"
                placeholder="Texto curto que aparece no hover."
              />
            </label>

            <label className="block">
              <FieldLabel>Objetivo</FieldLabel>
              <textarea
                required
                value={values.objective}
                onChange={(event) => handleChange('objective', event.target.value)}
                rows={4}
                className="w-full rounded-[1.1rem] border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none placeholder:text-cactus-100/45"
                placeholder="Detalhamento do objetivo do processo."
              />
            </label>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <label className="block">
              <FieldLabel>Responsavel</FieldLabel>
              <input
                required
                value={values.owner}
                onChange={(event) => handleChange('owner', event.target.value)}
                className="w-full rounded-[1.1rem] border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none"
                placeholder="Ex: Gestao operacional"
              />
            </label>

            <label className="block">
              <FieldLabel>Tags</FieldLabel>
              <input
                value={values.tags}
                onChange={(event) => handleChange('tags', event.target.value)}
                className="w-full rounded-[1.1rem] border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none placeholder:text-cactus-100/45"
                placeholder="Separar por virgula"
              />
            </label>
          </div>

          {mode === 'create' ? (
            <div className="grid gap-4 lg:grid-cols-2">
              <label className="block">
                <FieldLabel>Texto da conexao</FieldLabel>
                <input
                  value={values.relationLabel}
                  onChange={(event) =>
                    handleChange('relationLabel', event.target.value)
                  }
                  className="w-full rounded-[1.1rem] border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none"
                  placeholder="Ex: proxima etapa"
                />
              </label>

              <label className="block">
                <FieldLabel>Tipo da conexao</FieldLabel>
                <select
                  value={values.relationType}
                  onChange={(event) =>
                    handleChange('relationType', event.target.value)
                  }
                  className="w-full rounded-[1.1rem] border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none"
                >
                  {relationTypeOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          ) : null}

          <div className="grid gap-4 lg:grid-cols-2">
            <label className="block">
              <FieldLabel>Entradas</FieldLabel>
              <textarea
                value={values.inputs}
                onChange={(event) => handleChange('inputs', event.target.value)}
                rows={3}
                className="w-full rounded-[1.1rem] border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none placeholder:text-cactus-100/45"
                placeholder="Separar por virgula"
              />
            </label>

            <label className="block">
              <FieldLabel>Saidas</FieldLabel>
              <textarea
                value={values.outputs}
                onChange={(event) => handleChange('outputs', event.target.value)}
                rows={3}
                className="w-full rounded-[1.1rem] border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none placeholder:text-cactus-100/45"
                placeholder="Separar por virgula"
              />
            </label>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <label className="block">
              <FieldLabel>Subprocessos</FieldLabel>
              <textarea
                value={values.subprocesses}
                onChange={(event) =>
                  handleChange('subprocesses', event.target.value)
                }
                rows={3}
                className="w-full rounded-[1.1rem] border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none placeholder:text-cactus-100/45"
                placeholder="Separar por virgula"
              />
            </label>

            <label className="block">
              <FieldLabel>Atividades</FieldLabel>
              <textarea
                value={values.activities}
                onChange={(event) =>
                  handleChange('activities', event.target.value)
                }
                rows={3}
                className="w-full rounded-[1.1rem] border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none placeholder:text-cactus-100/45"
                placeholder="Separar por virgula"
              />
            </label>
          </div>

          <div className="flex flex-wrap justify-end gap-3 border-t border-white/10 pt-5">
            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm text-cactus-50/78 transition hover:border-white/20 hover:bg-white/[0.08]"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="rounded-full bg-linear-to-r from-cactus-300 to-sand-300 px-5 py-2.5 text-sm font-semibold text-cactus-950 shadow-[0_14px_30px_rgb(232_201_130_/_0.18)] transition hover:brightness-105"
            >
              {mode === 'create' ? 'Adicionar ao fluxo' : 'Salvar alteracoes'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
