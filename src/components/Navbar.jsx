import { useState } from 'react'

const links = [
  { label: 'Projets', href: '#projets' },
  { label: 'Compétences', href: '#competences' },
  { label: 'Réalisations', href: '#autres' },
  { label: 'À propos', href: '#apropos' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-container items-center justify-between gap-6 px-7">
        {/* Identité */}
        <a href="#top" className="flex items-center gap-3">
          <img
            src="./assets/imgs/logo.png"
            alt="Logo André Bribanick"
            className="h-9 w-9 rounded-md border border-line-strong object-contain p-0.5 shadow-[inset_0_0_14px_rgba(34,211,238,0.25)]"
          />
          <span className="leading-tight">
            <b className="block font-display text-[15px] font-bold tracking-[0.14em]">
              ANDRÉ BRIBANICK
            </b>
            <small className="block font-mono text-[10px] tracking-[0.28em] text-content-dim">
              DÉVELOPPEUR WEB &amp; DESKTOP
            </small>
          </span>
        </a>

        {/* Liens bureau */}
        <div className="hidden items-center gap-[26px] font-mono text-xs uppercase tracking-[0.14em] md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-content-muted transition-colors hover:text-hud-ice">
              {l.label}
            </a>
          ))}
        </div>

        {/* Statut */}
        <div className="hidden items-center gap-2 rounded-full border border-hud-ok/30 bg-hud-ok/[0.06] px-3 py-1.5 font-mono text-[11px] tracking-[0.18em] text-hud-ok md:flex">
          <span className="dot-ok" />
          DISPONIBLE
        </div>

        {/* Menu mobile */}
        <button
          type="button"
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="font-mono text-sm text-hud-ice md:hidden"
        >
          {open ? 'FERMER' : 'MENU'}
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-bg/95 px-7 py-4 md:hidden">
          <div className="flex flex-col gap-4 font-mono text-xs uppercase tracking-[0.14em]">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-content-muted transition-colors hover:text-hud-cyan"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
