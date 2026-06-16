import { projects } from '../data/projects'
import SectionTitle from './SectionTitle'

function ProjectCard({ project }) {
  return (
    <article className="group glass-card overflow-hidden rounded-xl transition-all duration-300 hover:border-accent hover:shadow-glow">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={`Capture du projet ${project.title}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg to-transparent opacity-60" />
      </div>

      <div className="space-y-4 p-6">
        <div className="flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-accent/40 bg-accent/10 px-2.5 py-0.5 text-[11px] uppercase tracking-widest text-accent"
            >
              {tool}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="text-sm text-content-muted">{project.description}</p>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link inline-flex items-center gap-2 pt-2 font-semibold text-accent"
        >
          Voir sur GitHub
          <span className="material-symbols-outlined transition-transform group-hover/link:translate-x-1">
            arrow_forward
          </span>
        </a>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section id="projets" className="mx-auto max-w-container px-6 py-24">
      <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <SectionTitle>Projets</SectionTitle>
          <p className="mt-3 text-content-muted">
            Une sélection de mes réalisations récentes en développement web.
          </p>
        </div>
        <div className="hidden h-px flex-grow bg-white/10 md:mx-8 md:block" />
        <div className="text-sm uppercase tracking-widest text-content-muted">Portfolio</div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}
