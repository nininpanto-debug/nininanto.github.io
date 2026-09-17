/* The World of Ninin Anto — card interaction */

(function(){
  "use strict";

  const intro = document.getElementById("world-intro");
  const enterButton = document.getElementById("enter-world");
  const transition = document.getElementById("world-transition");
  const transitionImage = transition?.querySelector(".transition-image");
  const transitionTitle = transition?.querySelector(".transition-title");
  const transitionSubtitle = transition?.querySelector(".transition-subtitle");
  const cards = document.querySelectorAll(".world-card");

  // Intro button: reveal the world selection area.
  enterButton?.addEventListener("click", () => {
    intro?.classList.add("intro-leaving");
    window.scrollTo({top: window.innerHeight, behavior:"smooth"});
  });

  // Clicking anywhere on a card enters that world.
  cards.forEach(card => {
    card.addEventListener("click", function(event){
      const url = this.getAttribute("href");
      if(!url) return;

      event.preventDefault();

      const image = getComputedStyle(this).getPropertyValue("--world-image").trim();
      const title = this.dataset.title || "";
      const subtitle = this.dataset.subtitle || "";

      transition.style.setProperty("--transition-image", image);
      transitionImage.style.backgroundImage = image;
      transitionTitle.textContent = title;
      transitionSubtitle.textContent = subtitle;

      document.body.classList.add("is-transitioning");
      transition.classList.add("active");

      // Give the cinematic transition enough time to be seen before navigation.
      window.setTimeout(() => {
        window.location.href = url;
      }, 1050);
    });
  });

  // If a card image is missing, keep a beautiful dark gradient rather than
  // showing a broken-image icon.
  cards.forEach(card => {
    const raw = getComputedStyle(card).getPropertyValue("--world-image").trim();
    const match = raw.match(/url\(["']?(.*?)["']?\)/);
    if(!match) return;

    const img = new Image();
    img.onerror = () => card.classList.add("image-missing");
    img.src = match[1];
  });

  // Keep keyboard users fully supported.
  cards.forEach(card => {
    card.addEventListener("keydown", e => {
      if(e.key === "Enter" || e.key === " "){
        e.preventDefault();
        card.click();
      }
    });
  });
})();
