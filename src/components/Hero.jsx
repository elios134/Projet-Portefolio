const telemetry = [
  { v: '02', k: 'Apps desktop' },
  { v: 'Rust', k: 'Back-end natif' },
  { v: 'TS', k: 'TypeScript strict' },
]

export default function Hero() {
  return (
    <section id="top" className="px-7 pb-24 pt-20">
      <div className="mx-auto grid max-w-container grid-cols-1 items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="kick">
            <span className="b">[</span> 01 <span className="b">//</span> PROFIL <span className="b">]</span>
          </div>
          <h1 className="my-5 font-display text-5xl font-bold leading-[0.98] md:text-7xl">
            Développeur
            <br />
            <span className="bg-gradient-to-r from-hud-cyan to-hud-blue bg-clip-text text-transparent">
              Web &amp; Desktop
            </span>
          </h1>
          <p className="max-w-xl text-lg text-content-muted">
            Je conçois des <b className="font-semibold text-content">applications complètes</b>, de
            l'architecture au produit fini — <b className="font-semibold text-content">React ·
            TypeScript · Rust/Tauri</b>. Mes projets récents : deux applications desktop pour les
            joueurs de <b className="font-semibold text-content">Star Citizen</b>.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a className="btn btn-cyan" href="#projets">▸ Voir mes projets</a>
            <a className="btn btn-ghost" href="#contact">Me contacter</a>
          </div>

          <div className="mt-11 grid grid-cols-3 gap-px border border-line bg-line">
            {telemetry.map((t) => (
              <div key={t.k} className="bg-panel px-4 py-4">
                <div className="font-display text-[26px] font-bold leading-none text-hud-ice">
                  {t.v}
                </div>
                <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-content-dim">
                  {t.k}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Aperçu écran */}
        <div className="viewport hud order-first lg:order-none">
          <div className="bar">
            <span>SC FLEET MANAGER</span>
            <span className="flex gap-1.5">
              <i />
              <i />
              <i />
            </span>
          </div>
          <img src="./assets/imgs/scfm-header.png" alt="Aperçu de l'application SC Fleet Manager" />
          <div className="scan" />
        </div>
      </div>
    </section>
  )
}
