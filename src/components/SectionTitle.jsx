// En-tête de section HUD : étiquette numérotée + titre + info à droite.
export default function SectionTitle({ index, kicker, title, right }) {
  return (
    <div className="mb-12 flex items-end justify-between gap-5 border-b border-line pb-5">
      <div>
        <div className="kick">
          <span className="b">[</span> {index} <span className="b">//</span> {kicker}{' '}
          <span className="b">]</span>
        </div>
        <h2 className="mt-2 font-display text-3xl font-bold tracking-wide md:text-[42px]">
          {title}
        </h2>
      </div>
      {right && (
        <div className="text-right font-mono text-[11px] uppercase tracking-[0.2em] text-content-dim">
          {right}
        </div>
      )}
    </div>
  )
}
