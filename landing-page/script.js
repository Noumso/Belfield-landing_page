// Apparition du texte dans le hero
window.addEventListener("load", () => {
  document.querySelectorAll(".fade-in").forEach((el) => {
    setTimeout(() => el.classList.add("visible"), 200);
  });
  // Active les sections visibles dès le chargement
  revealOnScroll();
});

// Effet scroll reveal pour sections
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");
  const triggerPoint = window.innerHeight * 0.85;

  reveals.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    if (top < triggerPoint) {
      el.classList.add("active");
    }
  });
}

// Listener de scroll passif pour de meilleures perfs
window.addEventListener("scroll", revealOnScroll, { passive: true });
