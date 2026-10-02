type StatCardProps = {
  label: string
  value: string
  detail: string
}

export function StatCard({ label, value, detail }: StatCardProps) {
  return (
    <article className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5 backdrop-blur-xl">
      <p className="text-xs uppercase tracking-[0.24em] text-cactus-200/65">
        {label}
      </p>
      <strong className="mt-3 block text-2xl font-semibold tracking-[-0.04em] text-white">
        {value}
      </strong>
      <p className="mt-2 text-sm leading-6 text-cactus-100/[0.74]">{detail}</p>
    </article>
  )
}
