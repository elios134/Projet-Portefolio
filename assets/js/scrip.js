const projects = [
  {
    title: "Space Invaders",
    description:
      "Mini-jeu Space Invaders réalisé en JavaScript avec gestion des collisions, contrôles clavier et contrôles tactiles.",
    image: "/assets/imgs/Capture space-invader.png",
    tools: ["HTML5", "CSS3", "JavaScript"],
    link: "https://github.com/elios134/SpaceInvader"
  },
  {
    title: "Island Choice",
    description:
      "Island Choice est un jeu de style labyrinthe où vous devez faire des choix pour explorer cette île pleine de mystères.",
    image: "/assets/imgs/Capture Island-choice.png",
    tools: ["HTML5", "CSS3", "JavaScript"],
    link: "https://github.com/elios134/Island-Choice"
  },
  {
    title: "War of Lutin",
    description:
      "War of Lutin est un jeu de combat tour par tour où le joueur et l'ordinateur partagent les mêmes attaques, chacune avec ses caractéristiques propres.",
    image: "/assets/imgs/Capture War-of-lutin.png",
    tools: ["HTML5", "CSS3", "JavaScript"],
    link: "https://github.com/elios134/War-of-Lutin"
  },
  {
    title: "Morpion/Puissance-4",
    description:
      "Ce projet consiste à recréer un jeu de Morpion et de Puissance-4 en JavaScript pour gérer toutes les fonctionnalités de jeu.",
    image: "/assets/imgs/Morpion-Puissance4.png",
    tools: ["HTML5", "CSS3", "JavaScript"],
    link: "https://github.com/elios134/Morpion-Project"
  },
  {
    title: "Le Pendu",
    description:
      "Réalisation du célèbre jeu du pendu qu'on a tous connu à l'école, en utilisant JavaScript pour toutes les fonctionnalités du jeu.",
    image: "/assets/imgs/Capture-Pendu.png",
    tools: ["HTML5", "CSS3", "JavaScript"],
    link: "https://github.com/elios134/Pendu-js-td5"
  },
];

let currentIndex = 0;

const projectImage = document.getElementById("projectImage");
const projectTitle = document.getElementById("projectTitle");
const projectDescription = document.getElementById("projectDescription");
const projectToolsContainer = document.getElementById("projectTools");
const projectLink = document.getElementById("projectLink");

const prevBtn = document.getElementById("prevProject");
const nextBtn = document.getElementById("nextProject");

// 👉 la carte entière
const projectCard = document.querySelector(".project-card");

function renderProject(index) {
  const project = projects[index];

  // Lancer le fade-out
  projectCard.classList.add("fade-out");

  setTimeout(() => {
    // Mettre à jour le contenu
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

    // Remplacer fade-out par fade-in
    projectCard.classList.remove("fade-out");
    projectCard.classList.add("fade-in");

    // Nettoyage de la classe après l'anim
    setTimeout(() => {
      projectCard.classList.remove("fade-in");
    }, 400); // même durée que la transition CSS
  }, 200); // moitié du temps pour que le fondu soit smooth
}

// Navigation
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + projects.length) % projects.length;
  renderProject(currentIndex);
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % projects.length;
  renderProject(currentIndex);
});

// Init
renderProject(currentIndex);

// Scroll smooth nav
document.addEventListener("click", (event) => {
  const target = event.target;
  if (target.matches('nav a[href^="#"]')) {
    event.preventDefault();
    const href = target.getAttribute("href");
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
});
