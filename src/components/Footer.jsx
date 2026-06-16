export default function Footer() {
  return (
    <footer className="mt-12 flex flex-col items-center justify-between gap-6 bg-footer-glow px-6 py-10 md:flex-row">
      <p className="font-display text-3xl text-content-muted">© André Bribanick</p>

      <a href="#top" aria-label="Retour en haut">
        <img src="./assets/imgs/logo.png" alt="Logo" className="h-28 w-28" />
      </a>

      <p className="font-display text-3xl text-content-muted">Portefolio v2</p>
    </footer>
  )
}
