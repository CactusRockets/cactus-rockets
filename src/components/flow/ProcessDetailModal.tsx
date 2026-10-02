import { useEffect } from 'react'
import type { ProcessRecord } from '../../types/process'
import type { Sector } from '../../types/sector'

type ProcessDetailModalProps = {
  process: ProcessRecord
  sector: Sector
  relatedProcesses: ProcessRecord[]
  onEdit: () => void
  onClose: () => void
}

function DetailBlock({
  title,
  items,
}: {
  title: string
  items: string[]
}) {
  return (
    <section className="rounded-[1.35rem] border border-white/8 bg-white/[0.04] p-4">
      <p className="text-[11px] uppercase tracking-[0.22em] text-cactus-300">
        {title}
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.length > 0 ? (
          items.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-cactus-50/82"
            >
              {item}
            </span>
          ))
        ) : (
          <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-cactus-50/62">
            Nenhum item registrado
          </span>
        )}
      </div>
    </section>
  )
}

function MetricCard({
  label,
  value,
}: {
  label: string
  value: string
}) {
  return (
    <div className="rounded-2xl bg-black/20 p-4">
      <p className="text-[11px] uppercase tracking-[0.18em] text-cactus-100/55">
        {label}
      </p>
      <p className="mt-1 text-base font-semibold text-white">
        {value}
      </p>
    </div>
  )
}

export function ProcessDetailModal({
  process,
  sector,
  relatedProcesses,
  onEdit,
  onClose,
}: ProcessDetailModalProps) {
  const accent = process.accent ?? sector.accent
  const softAccent = process.softAccent ?? sector.softAccent
  const metrics = [
    { label: 'Responsavel', value: process.owner },
    { label: 'Complexidade', value: process.complexity },
    { label: 'Duracao', value: process.duration },
    { label: 'Equipe', value: process.collaborators },
  ].filter((metric): metric is { label: string; value: string } => Boolean(metric.value))

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#08110dcc] px-4 py-6 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="max-h-[92vh] w-full max-w-6xl overflow-auto rounded-[2rem] border border-white/10 bg-[#15221cf5] p-5 shadow-[0_30px_120px_rgba(0,0,0,0.42)] sm:p-6"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex flex-col gap-4 border-b border-white/10 pb-5 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-2">
              <span
                className="rounded-full border px-3 py-1 text-[11px] uppercase tracking-[0.24em]"
                style={{
                  borderColor: accent,
                  backgroundColor: softAccent,
                  color: accent,
                }}
              >
                {sector.name}
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-cactus-100/65">
                {process.kind}
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-cactus-100/65">
                {process.stage}
              </span>
              {process.sourceReference ? (
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-cactus-100/65">
                  {process.sourceReference}
                </span>
              ) : null}
            </div>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-white">
              {process.name}
            </h2>
            <p className="mt-4 text-sm leading-7 text-cactus-50/82">
              {process.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={onEdit}
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-cactus-50/78 transition hover:border-white/20 hover:bg-white/[0.08]"
            >
              Editar processo
            </button>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-cactus-50/78 transition hover:border-white/20 hover:bg-white/[0.08]"
            >
              Fechar
            </button>
          </div>
        </div>

        <div className="mt-5 grid gap-4 xl:grid-cols-[1.15fr_0.85fr]">
          <section className="space-y-4">
            <article
              className="rounded-[1.5rem] border p-5"
              style={{
                borderColor: accent,
                background: `linear-gradient(180deg, ${softAccent} 0%, rgba(9, 17, 12, 0.24) 100%)`,
              }}
            >
              <p className="text-[11px] uppercase tracking-[0.24em]" style={{ color: accent }}>
                Objetivo do processo
              </p>
              <p className="mt-3 text-sm leading-7 text-cactus-50/84">
                {process.objective}
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {metrics.map((metric) => (
                  <MetricCard key={metric.label} label={metric.label} value={metric.value} />
                ))}
              </div>
            </article>

            <div className="grid gap-4 lg:grid-cols-2">
              <DetailBlock title="Entradas" items={process.inputs} />
              <DetailBlock title="Saidas" items={process.outputs} />
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              <DetailBlock title="Subprocessos" items={process.subprocesses} />
              <DetailBlock title="Atividades" items={process.activities} />
            </div>

            {process.tools?.length ? (
              <DetailBlock title="Ferramentas e materiais" items={process.tools} />
            ) : null}

            {process.projectRisks?.length || process.safetyRisks?.length ? (
              <div className="grid gap-4 lg:grid-cols-2">
                <DetailBlock
                  title="Riscos de projeto"
                  items={process.projectRisks ?? []}
                />
                <DetailBlock
                  title="Riscos de seguranca"
                  items={process.safetyRisks ?? []}
                />
              </div>
            ) : null}

            {process.indicators?.length || process.skills?.length ? (
              <div className="grid gap-4 lg:grid-cols-2">
                <DetailBlock
                  title="Indicadores de desempenho"
                  items={process.indicators ?? []}
                />
                <DetailBlock
                  title="Habilidades necessarias"
                  items={process.skills ?? []}
                />
              </div>
            ) : null}
          </section>

          <section className="space-y-4">
            <article className="rounded-[1.5rem] border border-white/8 bg-white/[0.04] p-5">
              <p className="text-[11px] uppercase tracking-[0.22em] text-cactus-300">
                Tags e classificacao
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {process.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-cactus-50/82"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>

            <article className="rounded-[1.5rem] border border-white/8 bg-white/[0.04] p-5">
              <p className="text-[11px] uppercase tracking-[0.22em] text-cactus-300">
                Processos conectados
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {relatedProcesses.length > 0 ? (
                  relatedProcesses.map((relatedProcess) => (
                    <span
                      key={relatedProcess.id}
                      className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-cactus-50/82"
                    >
                      {relatedProcess.name}
                    </span>
                  ))
                ) : (
                  <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-cactus-50/62">
                    Nenhuma conexao encontrada
                  </span>
                )}
              </div>
            </article>

            <article className="rounded-[1.5rem] border border-white/8 bg-white/[0.04] p-5">
              <p className="text-[11px] uppercase tracking-[0.22em] text-cactus-300">
                Como usar
              </p>
              <ul className="mt-3 space-y-3 text-sm leading-7 text-cactus-100/[0.78]">
                <li>O quadrado maior representa o processo principal da fase 2.</li>
                <li>Cada subprocesso ja mostra um resumo direto no fluxograma.</li>
                <li>O clique abre este detalhamento com os dados extraidos do PDF.</li>
                <li>Use o hover para ler rapidamente a descricao e o objetivo.</li>
              </ul>
            </article>
          </section>
        </div>
      </div>
    </div>
  )
}
