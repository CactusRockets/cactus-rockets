import type { OverviewStep } from '../../types/diagram'

type OverviewFlowProps = {
  steps: OverviewStep[]
  activeProcessId: string
  onSelectProcess: (processId: string) => void
}

export function OverviewFlow({
  steps,
  activeProcessId,
  onSelectProcess,
}: OverviewFlowProps) {
  return (
    <div className="overflow-x-auto pb-2">
      <div className="flex min-w-max items-center gap-5 px-1 py-3">
        <div className="flex items-center gap-3 text-cactus-100/65">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-cactus-300/35 bg-cactus-400/10 text-xs uppercase tracking-[0.22em] text-cactus-200">
            IN
          </span>
          <div className="h-px w-14 bg-linear-to-r from-cactus-300/60 to-white/8" />
        </div>

        {steps.map((step, index) => {
          const isActive = activeProcessId === step.processId
          const showConnector = index < steps.length - 1

          return (
            <div key={step.id} className="flex items-center gap-5">
              <button
                type="button"
                onClick={() => onSelectProcess(step.processId)}
                className="group relative text-left"
              >
                <div
                  className={`w-[220px] rounded-[1.5rem] border bg-[#132019]/90 p-4 transition duration-200 ${
                    step.isMain ? 'min-h-[138px]' : 'min-h-[126px]'
                  }`}
                  style={{
                    borderColor: isActive ? step.accent : 'rgba(255,255,255,0.08)',
                    boxShadow: isActive
                      ? `0 0 0 1px ${step.accent}, 0 20px 48px ${step.accent}33`
                      : '0 18px 40px rgba(0,0,0,0.22)',
                    transform: isActive ? 'translateY(-2px)' : undefined,
                  }}
                >
                  <span
                    className="inline-flex rounded-full border px-2.5 py-1 text-[10px] uppercase tracking-[0.24em]"
                    style={{
                      borderColor: step.accent,
                      backgroundColor: `${step.accent}18`,
                      color: step.accent,
                    }}
                  >
                    {step.isMain ? 'Processo principal' : 'Processo'}
                  </span>

                  <p className="mt-3 text-[11px] uppercase tracking-[0.18em] text-cactus-100/56">
                    {step.subtitle}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold leading-6 text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-xs uppercase tracking-[0.18em] text-cactus-100/50">
                    Hover = descricao | Clique = abrir fluxo
                  </p>
                </div>

                <div className="pointer-events-none absolute bottom-[calc(100%+16px)] left-1/2 z-10 w-[280px] -translate-x-1/2 rounded-[1.2rem] border border-white/10 bg-[#15231cf2] p-4 opacity-0 shadow-[0_18px_40px_rgba(0,0,0,0.28)] transition duration-200 group-hover:opacity-100">
                  <p className="text-[10px] uppercase tracking-[0.24em]" style={{ color: step.accent }}>
                    Descricao breve
                  </p>
                  <p className="mt-2 text-sm leading-6 text-cactus-50/84">
                    {step.description}
                  </p>
                </div>
              </button>

              {showConnector ? (
                <div className="flex items-center gap-3 text-cactus-100/55">
                  <div className="h-px w-14 bg-linear-to-r from-white/10 to-cactus-300/55" />
                  <svg width="18" height="12" viewBox="0 0 18 12" fill="none" aria-hidden="true">
                    <path
                      d="M1 6H16M11 1L16 6L11 11"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              ) : null}
            </div>
          )
        })}

        <div className="flex items-center gap-3 text-cactus-100/65">
          <div className="h-px w-14 bg-linear-to-r from-cactus-300/60 to-white/8" />
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] text-xs uppercase tracking-[0.22em] text-cactus-100/72">
            OUT
          </span>
        </div>
      </div>
    </div>
  )
}
