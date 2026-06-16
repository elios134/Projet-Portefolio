// Titre de section avec le contour orange repris de la prod (-webkit-text-stroke)
export default function SectionTitle({ children }) {
  return (
    <h2
      className="text-3xl font-bold uppercase tracking-[0.16em]"
      style={{ WebkitTextStroke: '1px #FF840A' }}
    >
      {children}
    </h2>
  )
}
