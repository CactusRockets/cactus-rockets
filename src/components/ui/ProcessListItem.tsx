import type { ProcessRecord } from '../../types/process'
import type { Sector } from '../../types/sector'

type ProcessListItemProps = {
  process: ProcessRecord
  sector: Sector
  isSelected: boolean
  onSelect: () => void
}

export function ProcessListItem({
  process,
  sector,
  isSelected,
  onSelect,
}: ProcessListItemProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`w-full rounded-[1.45rem] border p-4 text-left transition ${
        isSelected
          ? 'bg-white/[0.07] text-white'
          : 'border-white/8 bg-black/15 text-cactus-100/[0.78] hover:border-white/18 hover:bg-white/[0.05]'
      }`}
      style={
        isSelected
          ? {
              borderColor: sector.accent,
              boxShadow: `0 18px 48px ${sector.glow}`,
            }
          : undefined
      }
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p
            className="inline-flex rounded-full border px-2.5 py-1 text-[11px] uppercase tracking-[0.22em]"
            style={{
              borderColor: sector.accent,
              backgroundColor: sector.softAccent,
              color: sector.accent,
            }}
          >
            {sector.name}
          </p>
          <h3 className="mt-3 text-base font-semibold tracking-[-0.02em] text-white">
            {process.name}
          </h3>
        </div>
        <span className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] uppercase tracking-[0.18em] text-cactus-100/60">
          {process.kind}
        </span>
      </div>

      <p className="mt-3 text-sm leading-6 text-cactus-100/[0.68]">
        {process.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2 text-xs text-cactus-100/[0.62]">
        <span className="rounded-full bg-white/[0.05] px-2.5 py-1">
          {process.stage}
        </span>
        <span className="rounded-full bg-white/[0.05] px-2.5 py-1">
          {process.inputs.length} entradas
        </span>
        <span className="rounded-full bg-white/[0.05] px-2.5 py-1">
          {process.outputs.length} saidas
        </span>
      </div>
    </button>
  )
}
