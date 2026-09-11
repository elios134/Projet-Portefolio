import { projects } from '../data/projects'
import SectionTitle from './SectionTitle'

function ArchiveCard({ project, index }) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group overflow-hidden border border-line bg-panel transition-all hover:-translate-y-1 hover:border-line-strong"
    >
      <div className="aspect-[16/10] overflow-hidden border-b border-line">
        <img
          src={project.image}
          alt={`Capture du projet ${project.title}`}
          loading="lazy"
          className="h-full w-full object-cover opacity-85 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100"
        />
      </div>
      <div className="p-4">
        <div className="font-mono text-[10px] tracking-[0.2em] text-content-dim">
          {String(index + 1).padStart(2, '0')}
        </div>
        <h3 className="my-1 font-display text-lg font-semibold">{project.title}</h3>
        <p className="text-[13px] text-content-muted">{project.description}</p>
        <span className="mt-3 inline-block font-mono text-[11px] uppercase tracking-[0.14em] text-hud-cyan">
          Ouvrir ↗
        </span>
      </div>
    </a>
  )
}

export default function Projects() {
  return (
    <section id="autres" className="mx-auto max-w-container px-7 py-24">
      <SectionTitle
        index="04"
        kicker="RÉALISATIONS"
        title="Exercices JavaScript"
        right={<>Projets<br />d'apprentissage</>}
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ArchiveCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}
