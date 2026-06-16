export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[820px] items-center overflow-hidden bg-hero-glow px-6 pt-20"
    >
      {/* Motif technique en fond */}
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(#ffb347 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="mx-auto grid w-full max-w-container grid-cols-1 items-center gap-8 lg:grid-cols-12">
        <div className="space-y-8 lg:col-span-8">
          {/* Badge disponibilité */}
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-accent">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Disponible pour de nouveaux projets
          </div>

          <h1 className="text-5xl font-bold leading-none md:text-7xl">
            Développeur <br />
            <span className="text-accent">Web</span>
          </h1>

          <p className="max-w-2xl text-lg text-content-muted">
            Développeur Web JavaScript et React, passionné par la création d'expériences
            modernes, fluides et orientées utilisateur.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#projets"
              className="rounded-full bg-accent px-8 py-4 font-bold text-bg transition-all hover:shadow-glow"
            >
              Voir mes projets
            </a>
            <a
              href="#contact"
              className="rounded-full border border-accent px-8 py-4 font-bold text-accent transition-all hover:bg-accent/10"
            >
              Me contacter
            </a>
          </div>
        </div>

        {/* Carte décorative flottante */}
        <div className="hidden lg:col-span-4 lg:block">
          <div className="glass-card flex aspect-square w-full animate-float flex-col justify-center gap-6 rounded-xl p-8">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-white/5 bg-bg-card">
                <span className="material-symbols-outlined text-accent">code</span>
              </div>
              <div className="h-2 w-32 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-2/3 bg-accent" />
              </div>
            </div>
            <div className="flex items-center justify-end gap-4">
              <div className="h-2 w-48 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-3/4 bg-accent-orange" />
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-white/5 bg-bg-card">
                <span className="material-symbols-outlined text-accent-orange">database</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-white/5 bg-bg-card">
                <span className="material-symbols-outlined text-accent">terminal</span>
              </div>
              <div className="h-2 w-40 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-1/2 bg-accent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
