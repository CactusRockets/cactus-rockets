type FilterChipProps = {
  active: boolean
  label: string
  count: number
  accent?: string
  onClick: () => void
}

export function FilterChip({
  active,
  label,
  count,
  accent = '#8fc58d',
  onClick,
}: FilterChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-3 rounded-full border px-4 py-2 text-sm transition ${
        active
          ? 'border-white/0 text-white'
          : 'border-white/10 bg-white/[0.03] text-cactus-100/[0.72] hover:border-white/20 hover:bg-white/[0.06]'
      }`}
      style={
        active
          ? {
              backgroundColor: accent,
              color: '#09110c',
              boxShadow: `0 14px 34px ${accent}33`,
            }
          : undefined
      }
    >
      <span>{label}</span>
      <span
        className={`rounded-full px-2 py-0.5 text-xs ${
          active ? 'bg-black/10 text-black/80' : 'bg-white/8 text-cactus-50/70'
        }`}
      >
        {count}
      </span>
    </button>
  )
}
