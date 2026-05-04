const projects = [
  {
    title: "Space Invaders",
    description:
      "Mini-jeu Space Invaders réalisé en JavaScript avec gestion des collisions, contrôles clavier et contrôles tactiles.",
    image: "./assets/imgs/Capture space-invader.png", // Chemin relatif corrigé
    tools: ["HTML5", "CSS3", "JavaScript"],
    link: "https://github.com/elios134/SpaceInvader"
  },
  {
    title: "Island Choice",
    description:
      "Island Choice est un jeu de style labyrinthe où vous devez faire des choix pour explorer cette île pleine de mystères.",
    image: "./assets/imgs/Capture Island-choice.png", // Chemin relatif corrigé
    tools: ["HTML5", "CSS3", "JavaScript"],
    link: "https://github.com/elios134/Island-Choice"
  },
  {
    title: "War of Lutin",
    description:
      "War of Lutin est un jeu de combat tour par tour où le joueur et l'ordinateur partagent les mêmes attaques, chacune avec ses caractéristiques propres.",
    image: "./assets/imgs/Capture War-of-lutin.png", // Chemin relatif corrigé
    tools: ["HTML5", "CSS3", "JavaScript"],
    link: "https://github.com/elios134/War-of-Lutin"
  },
  {
    title: "Morpion/Puissance-4",
    description:
      "Ce projet consiste à recréer un jeu de Morpion et de Puissance-4 en JavaScript pour gérer toutes les fonctionnalités de jeu.",
    image: "./assets/imgs/Morpion-Puissance4.png", // Chemin relatif corrigé
    tools: ["HTML5", "CSS3", "JavaScript"],
    link: "https://github.com/elios134/Morpion-Project"
  },
  {
    title: "Le Pendu",
    description:
      "Réalisation du célèbre jeu du pendu qu'on a tous connu à l'école, en utilisant JavaScript pour toutes les fonctionnalités du jeu.",
    image: "./assets/imgs/Capture-Pendu.png", // Chemin relatif corrigé
    tools: ["HTML5", "CSS3", "JavaScript"],
    link: "https://github.com/elios134/Pendu-js-td5"
  },
];

const projectImage = document.getElementById("projectImage");
const projectTitle = document.getElementById("projectTitle");
const projectDescription = document.getElementById("projectDescription");
const projectToolsContainer = document.getElementById("projectTools");
const projectLink = document.getElementById("projectLink");

const prevBtn = document.getElementById("prevProject");
const nextBtn = document.getElementById("nextProject");

let currentIndex = 0;
// Nouvelle variable pour suivre la direction de l'animation
let direction = 1; // 1 pour Suivant, -1 pour Précédent

const projectCard = document.querySelector(".project-card");

function renderProject(index) {
  const project = projects[index];
  // Déterminer la classe d'animation d'entrée
  const entranceClass = direction === 1 ? "slide-in-right" : "slide-in-left";
  // Déterminer la classe d'animation de sortie
  const exitClass = direction === 1 ? "slide-out-left" : "slide-out-right";

  // 1. Lancer l'animation de sortie (la carte actuelle glisse)
  projectCard.classList.remove("slide-in-right", "slide-in-left");
  projectCard.classList.add(exitClass);

  setTimeout(() => {
    // Mettre à jour le contenu (à la fin de l'animation de sortie)
    projectImage.src = project.image;
    projectImage.alt = `Capture du projet ${project.title}`;
    projectTitle.textContent = project.title;
    projectDescription.textContent = project.description;
    projectLink.href = project.link;

    projectToolsContainer.innerHTML = "";
    project.tools.forEach(tool => {
      const span = document.createElement("span");
      span.className = "tool-pill";
      span.textContent = tool;
      projectToolsContainer.appendChild(span);
    });

    // 2. Lancer l'animation d'entrée (la nouvelle carte glisse)
    projectCard.classList.remove(exitClass);
    projectCard.classList.add(entranceClass);

    // Nettoyage de la classe après l'anim
    setTimeout(() => {
      projectCard.classList.remove(entranceClass);
    }, 700); 
  }, 700); 
}

// Navigation
prevBtn.addEventListener("click", () => {
  direction = -1; // Animation vers la droite
  currentIndex = (currentIndex - 1 + projects.length) % projects.length;
  renderProject(currentIndex);
});

nextBtn.addEventListener("click", () => {
  direction = 1; // Animation vers la gauche
  currentIndex = (currentIndex + 1) % projects.length;
  renderProject(currentIndex);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    direction = -1; 
    currentIndex = (currentIndex - 1 + projects.length) % projects.length;
    renderProject(currentIndex);
  } else if (e.key === "ArrowRight") {
    direction = 1; 
    currentIndex = (currentIndex + 1) % projects.length;
    renderProject(currentIndex);
  }
});

// Init
renderProject(currentIndex);