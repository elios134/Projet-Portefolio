import { useState } from 'react'

const links = [
  { label: 'Projets', href: '#projets' },
  { label: 'Compétences', href: '#competences' },
  { label: 'À propos', href: '#apropos' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 z-50 h-20 w-full border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-full max-w-container items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-3">
          <img src="./assets/imgs/logo.png" alt="Logo André Bribanick" className="h-12 w-12" />
          <span className="text-lg font-bold tracking-wide">André Bribanick</span>
        </a>

        {/* Liens bureau */}
        <div className="hidden items-center gap-8 text-sm uppercase tracking-widest md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-content-muted transition-colors hover:text-accent"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full border border-accent bg-accent-deep px-5 py-2 font-semibold text-white transition-all hover:bg-transparent hover:text-accent"
          >
            Me contacter
          </a>
        </div>

        {/* Bouton menu mobile */}
        <button
          type="button"
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="text-content md:hidden"
        >
          <span className="material-symbols-outlined text-3xl">{open ? 'close' : 'menu'}</span>
        </button>
      </nav>

      {/* Menu mobile déroulant */}
      {open && (
        <div className="border-t border-white/10 bg-black/95 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4 text-sm uppercase tracking-widest">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-content-muted transition-colors hover:text-accent"
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
