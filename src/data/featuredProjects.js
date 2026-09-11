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
]
