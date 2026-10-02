type DetailGroupProps = {
  title: string
  items: string[]
  emptyLabel?: string
}

export function DetailGroup({
  title,
  items,
  emptyLabel = 'Nada registrado ate o momento.',
}: DetailGroupProps) {
  return (
    <section className="rounded-[1.35rem] border border-white/8 bg-black/20 p-4">
      <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-cactus-200/70">
        {title}
      </h3>
      {items.length > 0 ? (
        <ul className="mt-3 space-y-2">
          {items.map((item) => (
            <li
              key={item}
              className="rounded-2xl bg-white/[0.04] px-3 py-2 text-sm leading-6 text-cactus-50/82"
            >
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-3 text-sm leading-6 text-cactus-100/[0.6]">
          {emptyLabel}
        </p>
      )}
    </section>
  )
}
