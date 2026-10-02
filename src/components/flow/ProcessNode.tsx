import { Handle, Position, type NodeProps } from '@xyflow/react'
import type { ProcessFlowNode } from '../../types/flow'

function clampText(value: string, limit: number) {
  if (value.length <= limit) {
    return value
  }

  return `${value.slice(0, limit).trim()}...`
}

export function ProcessNode({
  data,
  selected,
}: NodeProps<ProcessFlowNode>) {
  const { process, sector, isMuted, onAddProcess, onEditProcess } = data
  const accent = process.accent ?? sector.accent
  const softAccent = process.softAccent ?? sector.softAccent
  const glow = process.glow ?? sector.glow
  const isMainProcess = process.kind === 'processo'
  const previewItems = isMainProcess
    ? process.subprocesses.slice(0, 4)
    : process.activities.slice(0, 3)
  const rootWidth = isMainProcess ? 'w-[360px]' : 'w-[320px]'
  const rootMinHeight = isMainProcess ? 'min-h-[290px]' : 'min-h-[248px]'
  const titleSize = isMainProcess ? 'text-[1.75rem] leading-8' : 'text-xl leading-7'

  return (
    <div className="group relative">
      <div className="absolute -right-3 -top-3 z-20 flex gap-2 opacity-0 transition duration-200 group-hover:opacity-100 group-focus-within:opacity-100">
        <button
          type="button"
          className="nodrag nopan inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#1c2b23] text-white shadow-[0_12px_30px_rgba(0,0,0,0.25)] transition hover:bg-[#22342b]"
          aria-label={`Adicionar processo a partir de ${process.name}`}
          title="Adicionar novo quadrado"
          onClick={(event) => {
            event.stopPropagation()
            onAddProcess(process.id)
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M12 5V19M5 12H19"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <button
          type="button"
          className="nodrag nopan inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#1c2b23] text-white shadow-[0_12px_30px_rgba(0,0,0,0.25)] transition hover:bg-[#22342b]"
          aria-label={`Editar processo ${process.name}`}
          title="Editar processo"
          onClick={(event) => {
            event.stopPropagation()
            onEditProcess(process.id)
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M4 20H8L18.5 9.5C19.3284 8.67157 19.3284 7.32843 18.5 6.5V6.5C17.6716 5.67157 16.3284 5.67157 15.5 6.5L5 17V20Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div
        className={`relative ${rootWidth} ${rootMinHeight} rounded-[2rem] border bg-[#16231cf2] p-5 backdrop-blur-xl transition duration-200`}
        style={{
          opacity: isMuted ? 0.32 : 1,
          borderColor: selected ? accent : 'rgba(255, 255, 255, 0.08)',
          boxShadow: selected
            ? `0 0 0 1px ${accent}, 0 26px 80px ${glow}`
            : '0 22px 60px rgba(0, 0, 0, 0.32)',
          transform: selected ? 'translateY(-2px)' : undefined,
          background: `linear-gradient(180deg, ${softAccent} 0%, rgba(18, 29, 24, 0.95) 48%, rgba(17, 31, 24, 0.98) 100%)`,
        }}
      >
        <Handle
          type="target"
          position={Position.Left}
          className="!h-3 !w-3 !border-2 !border-[#09110c]"
          style={{ backgroundColor: accent }}
        />

        <div className="flex h-full flex-col">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className="inline-flex rounded-full border px-2.5 py-1 text-[10px] uppercase tracking-[0.24em]"
              style={{
                borderColor: accent,
                backgroundColor: softAccent,
                color: accent,
              }}
            >
              {isMainProcess ? 'Processo principal' : 'Subprocesso'}
            </span>
            <span className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-cactus-100/68">
              {sector.name}
            </span>
          </div>

          <p className="mt-4 text-[11px] uppercase tracking-[0.22em] text-cactus-100/58">
            {process.stage}
          </p>

          <h3 className={`mt-3 font-semibold tracking-[-0.04em] text-white ${titleSize}`}>
            {process.name}
          </h3>

          <p className="mt-3 text-sm leading-6 text-cactus-50/82">
            {clampText(process.description, isMainProcess ? 190 : 170)}
          </p>

          <div className="mt-4 rounded-[1.3rem] border border-white/8 bg-black/15 p-4">
            <p className="text-[10px] uppercase tracking-[0.22em]" style={{ color: accent }}>
              {isMainProcess ? 'Mapa do processo' : 'Como fazer'}
            </p>

            {previewItems.length > 0 ? (
              <div className="mt-3 space-y-2">
                {previewItems.map((item) => (
                  <div key={item} className="flex gap-2 text-sm leading-5 text-cactus-50/76">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: accent }} />
                    <span>{clampText(item, isMainProcess ? 56 : 58)}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="mt-3 text-sm leading-6 text-cactus-50/64">
                Nenhuma etapa resumida cadastrada.
              </p>
            )}
          </div>

          <div className="mt-auto flex flex-wrap gap-2 pt-4 text-[11px] uppercase tracking-[0.18em] text-cactus-100/56">
            {process.duration ? (
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5">
                {process.duration}
              </span>
            ) : null}
            {process.collaborators ? (
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5">
                {process.collaborators}
              </span>
            ) : !isMainProcess ? null : (
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5">
                {process.subprocesses.length} subprocessos
              </span>
            )}
          </div>
        </div>

        <Handle
          type="source"
          position={Position.Right}
          className="!h-3 !w-3 !border-2 !border-[#09110c]"
          style={{ backgroundColor: accent }}
        />
      </div>

      <div className="pointer-events-none absolute bottom-[calc(100%+14px)] left-1/2 z-20 w-[300px] -translate-x-1/2 rounded-[1.25rem] border border-white/10 bg-[#17251ef2] p-4 text-left opacity-0 shadow-[0_20px_50px_rgba(0,0,0,0.3)] backdrop-blur-xl transition duration-200 group-hover:opacity-100 group-focus-within:opacity-100">
        <p className="text-[10px] uppercase tracking-[0.24em]" style={{ color: accent }}>
          Descricao breve
        </p>
        <p className="mt-2 text-sm leading-6 text-cactus-50/82">
          {process.description}
        </p>
        {process.objective ? (
          <p className="mt-3 text-sm leading-6 text-cactus-100/72">
            {process.objective}
          </p>
        ) : null}
        <p className="mt-3 text-[11px] uppercase tracking-[0.18em] text-cactus-100/52">
          Clique para detalhar, use + para adicionar ou lapis para alterar
        </p>
      </div>
    </div>
  )
}
