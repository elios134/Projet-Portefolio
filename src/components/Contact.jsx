export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-container px-7 py-24">
      <div className="hud relative overflow-hidden border border-line-strong bg-gradient-to-b from-panel to-bg-alt px-8 py-16 text-center">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: 'radial-gradient(600px 300px at 50% 120%, rgba(34,211,238,0.15), transparent)' }}
        />
        <div className="relative">
          <div className="kick">
            <span className="b">[</span> 06 <span className="b">//</span> CONTACT <span className="b">]</span>
          </div>
          <h2 className="mb-2.5 mt-3 font-display text-[clamp(30px,5vw,48px)] font-bold">
            Travaillons ensemble
          </h2>
          <p className="mx-auto mb-7 max-w-md text-content-muted">
            Un projet web ou desktop en tête ? N'hésitez pas à me contacter.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a className="btn btn-cyan" href="mailto:andrebribanick@gmail.com">
              ▸ Envoyer un email
            </a>
            <a
              className="btn btn-ghost"
              href="https://www.linkedin.com/in/andré-bribanick-7a016412b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
