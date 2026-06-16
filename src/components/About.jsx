import SectionTitle from './SectionTitle'

export default function About() {
  return (
    <section id="apropos" className="mx-auto max-w-container px-6 py-24">
      <div className="mb-12 text-center">
        <SectionTitle>À propos</SectionTitle>
      </div>

      <div className="glass-card grid grid-cols-1 items-center gap-10 rounded-xl p-8 md:grid-cols-[0.8fr_1.4fr] md:p-12">
        <div className="flex justify-center">
          <div
            className="h-44 w-44 rounded-full p-1.5 shadow-soft"
            style={{ background: 'radial-gradient(circle at top, #ffb347, #111)' }}
          >
            <img
              src="./assets/imgs/Moi(emoji.png"
              alt="Photo d'André Bribanick"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
        </div>

        <div className="text-center md:text-left">
          <h3 className="text-2xl font-semibold">André Bribanick</h3>
          <p className="mb-4 text-accent">Développeur Web</p>
          <p className="text-content-muted">
            Je conçois des sites et applications web modernes, performants et centrés sur
            l'expérience utilisateur.
          </p>

          <div className="mt-6 flex justify-center gap-3 md:justify-start">
            <a
              href="https://www.linkedin.com/in/andre-bribanick-7a016412b/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-accent bg-accent-deep px-5 py-2 text-xs font-semibold uppercase tracking-widest text-white transition-all hover:bg-transparent hover:text-accent"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/elios134?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-accent bg-accent-deep px-5 py-2 text-xs font-semibold uppercase tracking-widest text-white transition-all hover:bg-transparent hover:text-accent"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
