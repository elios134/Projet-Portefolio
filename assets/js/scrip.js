// Scroll doux pour le bouton "Découvrir" et la nav
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

