import SectionTitle from './SectionTitle'

const socials = [
  { label: 'LinkedIn ↗', href: 'https://www.linkedin.com/in/andré-bribanick-7a016412b/' },
  { label: 'GitHub ↗', href: 'https://github.com/elios134' },
  { label: 'Email ↗', href: 'mailto:andrebribanick@gmail.com' },
]

export default function About() {
  return (
    <section id="apropos" className="mx-auto max-w-container px-7 py-24">
      <SectionTitle index="05" kicker="À PROPOS" title="À propos" right={<>Profil<br />&amp; contact</>} />

      <div className="grid grid-cols-1 border border-line bg-panel md:grid-cols-[0.85fr_1.15fr]">
        <div
          className="border-line p-8 text-center max-md:border-b md:border-r"
          style={{ background: 'radial-gradient(300px 200px at 50% 0, rgba(59,157,255,0.1), transparent)' }}
        >
          <img
            src="./assets/imgs/Moi(emoji.png"
            alt="Photo d'André Bribanick"
            className="mx-auto mb-4 h-[150px] w-[150px] rounded-full border border-line-strong object-cover shadow-[0_0_30px_rgba(34,211,238,0.2)]"
          />
          <div className="font-display text-[22px] font-bold">André Bribanick</div>
          <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-hud-cyan">
            Développeur Web &amp; Desktop
          </div>
        </div>

        <div className="p-8">
          <p className="mb-4 text-content-muted">
            Je conçois des sites et applications modernes, du web au bureau, centrés sur
            l'expérience utilisateur et la robustesse. Je travaille actuellement sur des
            applications desktop React + Rust/Tauri, pensées pour un usage réel : hors-ligne,
            multi-comptes et mises à jour signées.
          </p>
          <p className="text-content-muted">
            J'aime prendre en charge un projet de l'architecture jusqu'au produit livré : back-end
            natif, base de données locale, 3D temps réel et interfaces soignées.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-line-strong px-4 py-2.5 font-mono text-xs uppercase tracking-[0.1em] text-hud-ice transition-all hover:border-hud-cyan hover:bg-hud-cyan/[0.07]"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
