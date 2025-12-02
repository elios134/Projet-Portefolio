const projects = [
  {
    title: "Space Invaders",
    description:
      "Mini-jeu Space Invaders réalisé en JavaScript avec gestion des collisions et contrôles clavier et controles tactiles.",
    image: "/assets/imgs/Capture space-invader.png",
    tools: ["HTML5", "CSS3", "JavaScript"],
    link: "https://github.com/elios134/SpaceInvader"
  },
  {
    title: "Island Choice",
    description:
      "Island Choice est un jeux de style labyrinthe ou vous devez faire des choix pour exploré cette ile plein de mystere.",
    image: "/assets/imgs/Capture Island-choice.png",
    tools: ["HTML5", "CSS3", "JavaScript"],
    link: "https://github.com/elios134/Island-Choice"
  },
  {
    title: "War of Lutin",
    description:
      "War of Lutin est un jeux de combat tour par tour ou le joueur et l'ordinateur partages les memes attaques avec chacune leur caraterique précise.",
    image: "/assets/imgs/Capture War-of-lutin.png",
    tools: ["HTML5", "CSS3", "JavaScript"],
    link: "https://github.com/elios134/War-of-Lutin"
  },
  {
    title: "Morpion/Puissance-4",
    description:
      "Ce projet consiste a refaire un jeux de Morpion et de Puissance-4 en utilisant le Js pour toute les fonctionnalité des jeux",
    image: "/assets/imgs/Morpion-Puissance4.png",
    tools: ["HTML5", "CSS3", "JavaScript"],
    link: "https://github.com/elios134/Morpion-Project"
  },
  {
    title: "Le Pendu",
    description:
      "Réalisation du célebre jeux du pendu qu'on a tous connu pendant notre enfance a l'école, utilisant le Js pour toute les fonctionnalité du jeux",
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

// -------------------------
// FONCTION D'AFFICHAGE
// -------------------------
function renderProject(index) {
  const project = projects[index];

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
}

// -------------------------
// NAVIGATION
// -------------------------
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + projects.length) % projects.length;
  renderProject(currentIndex);
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % projects.length;
  renderProject(currentIndex);
});

// Init au chargement
renderProject(currentIndex);
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

