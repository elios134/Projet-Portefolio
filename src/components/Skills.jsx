import SectionTitle from './SectionTitle'

const skills = [
  { label: 'HTML5', img: './assets/imgs/logo-Html.png' },
  { label: 'CSS3', img: './assets/imgs/logo-Css.png' },
  { label: 'JavaScript', img: './assets/imgs/logo-js.png' },
  { label: 'Node.js', img: './assets/imgs/nodejs-logo.png' },
  { label: 'PHP', img: './assets/imgs/logo-php.png' },
  { label: 'Figma', img: './assets/imgs/Figma_logo.png' },
]

export default function Skills() {
  return (
    <section id="competences" className="mx-auto max-w-container px-6 py-24">
      <div className="mb-12 text-center">
        <SectionTitle>Compétences</SectionTitle>
        <p className="mx-auto mt-3 max-w-xl text-content-muted">
          Les technologies que j'utilise pour construire des interfaces modernes et robustes.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
        {skills.map((skill) => (
          <div
            key={skill.label}
            className="group glass-card flex flex-col items-center gap-4 rounded-xl p-6 transition-all hover:border-accent"
          >
            <img
              src={skill.img}
              alt={`Logo ${skill.label}`}
              className="h-14 w-14 object-contain transition-transform group-hover:scale-110"
            />
            <span className="text-sm font-semibold">{skill.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
