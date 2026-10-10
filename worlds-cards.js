(() => {
  "use strict";

  const year = document.getElementById("current-year");
  if (year) year.textContent = String(new Date().getFullYear());

  const cards = Array.from(document.querySelectorAll(".world-card"));
  const overlay = document.querySelector(".world-transition");
  const overlayImage = document.querySelector(".transition-image");
  const overlayNumber = document.querySelector(".transition-number");
  const overlayTitle = document.querySelector(".transition-title");
  const overlayLabel = document.querySelector(".transition-label");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  cards.forEach((card) => {
    const imagePath = card.dataset.image;
    const image = card.querySelector(".card-image");
    if (image && imagePath) {
      image.style.backgroundImage = `url("${imagePath}")`;
    }
    card.addEventListener("click", (event) => {
      // Open normal browser behaviour for new tabs or modified clicks.
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const destination = card.getAttribute("href");
      if (!destination || destination.startsWith("#") || !overlay) return;

      event.preventDefault();
      if (reducedMotion) {
        window.location.href = destination;
        return;
      }

      const title = card.dataset.title || card.querySelector("strong")?.textContent || "Next world";
      const number = card.dataset.number || "00";
      overlayImage.style.backgroundImage = `url("${imagePath}")`;
      overlayNumber.textContent = number;
      overlayTitle.textContent = title;
      overlayLabel.textContent = "ENTERING WORLD";
      overlay.classList.add("is-active");
      document.body.classList.add("is-transitioning");
      window.setTimeout(() => { window.location.href = destination; }, 520);
    });
  });

  // Keep browser Back natural; no forced redirect to the homepage.
  window.addEventListener("pageshow", () => {
    overlay?.classList.remove("is-active");
    document.body.classList.remove("is-transitioning");
  });
})();
