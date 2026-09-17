/* =========================================================
   WORLD OF NININ ANTO — CARD NAVIGATION
   Every part of a card is clickable.
   A cinematic doorway transition runs before navigation.
   ========================================================= */

(function () {
  "use strict";

  function initWorldCards() {
    const cards = document.querySelectorAll(".world-card");
    const transition = document.querySelector(".world-transition");

    if (!cards.length) return;

    cards.forEach((card) => {
      const image = card.dataset.image;
      const title = card.dataset.title || "";

      const imageLayer = card.querySelector(".world-card-image");
      if (imageLayer && image) {
        imageLayer.style.setProperty("--world-image", `url("${image}")`);
      }

      card.addEventListener("click", function (event) {
        // Let browser modifier-clicks behave normally.
        if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) {
          return;
        }

        const href = card.getAttribute("href");
        if (!href || href === "#") return;

        event.preventDefault();

        if (!transition) {
          window.location.href = href;
          return;
        }

        const transitionBg = transition.querySelector(".world-transition-bg");
        const transitionTitle = transition.querySelector(".world-transition-title");

        if (transitionBg && image) {
          transitionBg.style.backgroundImage = `url("${image}")`;
        }

        if (transitionTitle) {
          transitionTitle.textContent = title;
        }

        document.body.classList.add("world-leaving");

        // Short enough to feel immediate, long enough to see the doorway.
        window.setTimeout(function () {
          window.location.href = href;
        }, 760);
      });

      // Keyboard accessibility: Enter/Space on a focused card.
      card.addEventListener("keydown", function (event) {
        if (event.key === " " || event.key === "Enter") {
          event.preventDefault();
          card.click();
        }
      });

      // Ensure cards are keyboard reachable even if the surrounding HTML
      // was copied without changing the anchor markup.
      card.setAttribute("tabindex", "0");
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initWorldCards);
  } else {
    initWorldCards();
  }
})();
