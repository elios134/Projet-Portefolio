// Projets phares présentés en panneaux "case-study" (Problème → Solution → Résultat).
export const featuredProjects = [
  {
    title: 'SC Fleet Manager',
    tag: 'SC FLEET MANAGER · v2.5',
    status: 'PUBLIÉ',
    barLabel: 'APPLICATION WINDOWS · TAURI 2',
    role: 'Application de gestion · conception & développement complet',
    image: './assets/imgs/scfm-header.png',
    log: [
      {
        t: 'Problème',
        d: 'Les joueurs jonglent entre 5+ sites externes pour gérer leur flotte, leurs achats et leur navigation.',
      },
      {
        t: 'Ma solution',
        d: "Import du hangar RSI, comparateur de vaisseaux, chaînes d'upgrade CCU, routes commerciales, catalogue géolocalisé, carte galactique et visualisation 3D à la première personne (91 vaisseaux).",
      },
      {
        t: 'Résultat',
        d: '100 % hors-ligne (SQLite, 33 migrations), multi-comptes, bilingue FR/EN, mises à jour signées.',
      },
    ],
    tech: ['React 19', 'TypeScript', 'Tauri 2', 'Rust', 'Three.js', 'SQLite'],
    links: [
      { label: '▸ Télécharger', href: 'https://github.com/elios134/sc-fleet-manager-v2/releases/latest', solid: true },
      { label: 'Code ↗', href: 'https://github.com/elios134/sc-fleet-manager-v2', solid: false },
    ],
  },
  {
    title: 'SC MFD',
    tag: 'SC MFD · APPLICATION COMPANION',
    status: 'ACTIF',
    barLabel: 'DESKTOP + ANDROID · MONOREPO',
    role: 'Application companion · architecture temps réel PC ↔ tablette',
    image: './assets/imgs/scmfd-logo.png',
    imageContain: true,
    log: [
      {
        t: 'Problème',
        d: 'Contrôler de nombreuses fonctions du jeu sans surcharger le clavier.',
      },
      {
        t: 'Ma solution',
        d: "Une tablette Android devient un panneau tactile : une application « pont » sur le PC (serveur WebSocket + émulation clavier), connexion automatique par mDNS ou QR code. 4 écrans, 2 thèmes.",
      },
      {
        t: 'Résultat',
        d: 'Monorepo (protocole TypeScript partagé, keymap Rust générée) ; crée un profil de touches dédié sans modifier la configuration du joueur.',
      },
    ],
    tech: ['React 19', 'Tauri 2', 'Rust', 'Capacitor 8', 'WebSocket', 'mDNS'],
    links: [
      { label: '▸ Voir le projet', href: 'https://github.com/elios134/sc-mfd', solid: true },
      { label: 'Doc ↗', href: 'https://github.com/elios134/sc-mfd#readme', solid: false },
    ],
  },
  {
    title: 'Garage Martin',
    tag: 'GARAGE MARTIN · SITE + PRISE DE RDV',
    status: 'DÉMO',
    barLabel: 'SITE VITRINE + RÉSERVATION · NEXT.JS 16',
    role: 'Site vitrine & prise de rendez-vous · conception & développement full-stack',
    image: './assets/imgs/Capture-garage-accueil.png',
    log: [
      {
        t: 'Problème',
        d: "Un garage a besoin d'une vitrine moderne ET d'un vrai flux de prise de rendez-vous — devis, validation, planning — sans jongler entre téléphone, mails et cahier.",
      },
      {
        t: 'Ma solution',
        d: "Site full-stack : demande de devis (invité ou compte), devis détaillés par lignes avec PDF généré et envoyé par email, flux devis → RDV, espace client (véhicules, historique) et espace staff (planning FullCalendar, tableau de bord, fiches clients, archivage).",
      },
      {
        t: 'Résultat',
        d: "Auth par rôles (client/staff), base SQLite via Prisma, design sombre cinématographique (scroll parallax). Aperçu front déployé sur GitHub Pages.",
      },
    ],
    tech: ['Next.js 16', 'TypeScript', 'Prisma', 'SQLite', 'NextAuth', 'Tailwind'],
    links: [
      { label: '▸ Voir la démo', href: 'https://elios134.github.io/garage-site/', solid: true },
      { label: 'Code ↗', href: 'https://github.com/elios134/garage-site', solid: false },
    ],
  },
]
