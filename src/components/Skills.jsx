import SectionTitle from './SectionTitle'

const groups = [
  {
    name: 'Front-end',
    n: '01',
    items: [
      ['React 19', 90],
      ['TypeScript', 85],
      ['Tailwind', 88],
    ],
  },
  {
    name: 'Desktop / Back',
    n: '02',
    items: [
      ['Tauri 2', 82],
      ['Rust', 65],
      ['SQLite', 78],
    ],
  },
  {
    name: 'Outils',
    n: '03',
    items: [
      ['Vite', 85],
      ['Git / CI', 80],
      ['Three.js', 60],
    ],
  },
]

export default function Skills() {
  return (
    <section id="competences" className="mx-auto max-w-container px-7 py-24">
      <SectionTitle index="03" kicker="COMPÉTENCES" title="Compétences" right={<>Stack<br />technique</>} />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {groups.map((g) => (
          <div key={g.name} className="border border-line bg-panel p-5">
            <h4 className="mb-4 flex justify-between font-mono text-xs uppercase tracking-[0.16em] text-hud-cyan">
              {g.name} <span className="text-content-dim">//{g.n}</span>
            </h4>
            {g.items.map(([label, val]) => (
              <div key={label} className="mb-3">
                <div className="mb-1.5 flex justify-between font-mono text-xs text-content-muted">
                  <span>{label}</span>
                  <span>{val}%</span>
                </div>
                <div className="h-1.5 overflow-hidden bg-hud-blue/10">
                  <div
                    className="h-full bg-gradient-to-r from-hud-blue to-hud-cyan"
                    style={{ width: `${val}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
