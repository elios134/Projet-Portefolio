import SectionTitle from './SectionTitle'

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-container px-6 py-24">
      <div className="mb-12 text-center">
        <SectionTitle>Travaillons ensemble</SectionTitle>
      </div>

      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        {/* Coordonnées */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 text-2xl text-accent">
            <span className="material-symbols-outlined">call</span>
            <span>06-60-58-78-79</span>
          </div>
          <div className="flex items-center gap-3 text-2xl text-accent">
            <span className="material-symbols-outlined">mail</span>
            <a href="mailto:bribanick@hotmail.fr" className="hover:underline">
              bribanick@hotmail.fr
            </a>
          </div>
        </div>

        {/* Formulaire */}
        <form
          action="#"
          method="post"
          className="glass-card flex flex-col gap-5 rounded-lg p-8"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-base text-white">
              Nom
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="border-0 border-b-2 border-accent-deep bg-transparent px-1 py-2 text-white outline-none focus:border-accent"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-base text-white">
              Mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="border-0 border-b-2 border-accent-deep bg-transparent px-1 py-2 text-white outline-none focus:border-accent"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-base text-white">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              required
              className="rounded-lg border-2 border-accent-deep bg-bg-alt p-3 text-white outline-none focus:border-accent"
            />
          </div>

          <button
            type="submit"
            className="rounded-lg border-2 border-accent-deep bg-accent-deep py-3 text-lg font-semibold text-white transition-all hover:bg-transparent hover:text-accent"
          >
            Envoyer
          </button>
        </form>
      </div>
    </section>
  )
}
