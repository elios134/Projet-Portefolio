import { featuredProjects } from '../data/featuredProjects'
import SectionTitle from './SectionTitle'

function Panel({ project, reverse }) {
  return (
    <article className="mb-10 border border-line bg-gradient-to-b from-panel to-bg-alt">
      {/* En-tête de panneau */}
      <div className="flex items-center justify-between gap-4 border-b border-line bg-hud-blue/[0.04] px-5 py-3.5 font-mono text-[11px] uppercase tracking-[0.18em] text-content-muted">
        <span>
          <span className="text-hud-cyan">{project.tag.split(' · ')[0]}</span>
          {project.tag.includes(' · ') && ` · ${project.tag.split(' · ').slice(1).join(' · ')}`}
        </span>
        <span className="flex items-center gap-2 text-hud-ok">
          <span className="dot-ok" />
          {project.status}
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Média */}
        <div
          className={`flex items-center border-line p-6 ${
            reverse ? 'lg:order-2 lg:border-l' : 'lg:border-r'
          } max-lg:border-b`}
          style={{ background: 'radial-gradient(500px 300px at 50% 0, rgba(34,211,238,0.08), transparent 70%)' }}
        >
          <div className="viewport hud w-full">
            <div className="bar">
              <span>{project.barLabel}</span>
              <span className="flex gap-1.5">
                <i />
                <i />
                <i />
              </span>
            </div>
            <img
              src={project.image}
              alt={`Aperçu de ${project.title}`}
              loading="lazy"
              className={project.imageContain ? 'aspect-video bg-[#050a12] object-contain p-[8%]' : ''}
            />
          </div>
        </div>

        {/* Infos */}
        <div className="p-8">
          <h3 className="font-display text-[32px] font-bold tracking-wide">{project.title}</h3>
          <div className="mb-5 font-mono text-xs tracking-wide text-hud-cyan">{project.role}</div>

          <div className="mb-5 border-l border-line pl-[18px]">
            {project.log.map((l) => (
              <div key={l.t} className="mb-3.5">
                <div className="mb-1 font-mono text-[10px] uppercase tracking-[0.24em] text-content-dim">
                  <span className="text-hud-cyan">▸ </span>
                  {l.t}
                </div>
                <div className="text-[14.5px]">{l.d}</div>
              </div>
            ))}
          </div>

          <div className="mb-5 flex flex-wrap gap-[7px]">
            {project.tech.map((t) => (
              <span
                key={t}
                className="border border-line-strong bg-hud-blue/5 px-2.5 py-[5px] font-mono text-[11px] text-hud-ice"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-5 py-3 font-mono text-xs uppercase tracking-[0.1em] transition-all ${
                  link.solid
                    ? 'bg-hud-cyan font-bold text-[#04121a] hover:shadow-glow'
                    : 'border border-line-strong text-hud-ice hover:border-hud-cyan'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}

export default function FeaturedProjects() {
  return (
    <section id="projets" className="mx-auto max-w-container px-7 py-24">
      <SectionTitle index="02" kicker="PROJETS PHARES" title="Projets phares" right={<>2 applications<br />en production</>} />
      {featuredProjects.map((project, i) => (
        <Panel key={project.title} project={project} reverse={i % 2 === 1} />
      ))}
    </section>
  )
}
