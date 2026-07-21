/* ==========================================
   ANIMATIONS.JS
      The World of Ninin Anto
      ========================================== */

      document.addEventListener("DOMContentLoaded", () => {

          // ===== Logo Parallax =====
              const logo = document.querySelector(".logo, .main-logo");

                  if (logo) {
                          document.addEventListener("mousemove", (e) => {

                                      const x = (window.innerWidth / 2 - e.clientX) / 60;
                                                  const y = (window.innerHeight / 2 - e.clientY) / 60;

                                                              logo.style.transform = `translate(${x}px, ${y}px)`;

                                                                      });
                                                                          }

                                                                              // ===== Card Hover =====
                                                                                  const cards = document.querySelectorAll(".card, .world-card");

                                                                                      cards.forEach(card => {

                                                                                              card.addEventListener("mouseenter", () => {
                                                                                                          card.style.transform = "translateY(-10px)";
                                                                                                                  });

                                                                                                                          card.addEventListener("mouseleave", () => {
                                                                                                                                      card.style.transform = "translateY(0)";
                                                                                                                                              });

                                                                                                                                                  });

                                                                                                                                                      // ===== Button Glow =====
                                                                                                                                                          const buttons = document.querySelectorAll(".gold-btn, button");

                                                                                                                                                              buttons.forEach(button => {

                                                                                                                                                                      button.addEventListener("mouseenter", () => {
                                                                                                                                                                                  button.style.boxShadow = "0 0 25px rgba(212,175,55,.6)";
                                                                                                                                                                                          });

                                                                                                                                                                                                  button.addEventListener("mouseleave", () => {
                                                                                                                                                                                                              button.style.boxShadow = "none";
                                                                                                                                                                                                                      });

                                                                                                                                                                                                                          });

                                                                                                                                                                                                                              // ===== Fade-in on Scroll =====
                                                                                                                                                                                                                                  const sections = document.querySelectorAll(
                                                                                                                                                                                                                                          ".hero, .page-hero, .content, .cards, .quote"
                                                                                                                                                                                                                                              );

                                                                                                                                                                                                                                                  const observer = new IntersectionObserver((entries) => {

                                                                                                                                                                                                                                                          entries.forEach(entry => {

                                                                                                                                                                                                                                                                      if (entry.isIntersecting) {

                                                                                                                                                                                                                                                                                      entry.target.style.opacity = "1";
                                                                                                                                                                                                                                                                                                      entry.target.style.transform = "translateY(0)";
                                                                                                                                                                                                                                                                                                                  }

                                                                                                                                                                                                                                                                                                                          });

                                                                                                                                                                                                                                                                                                                              }, {
                                                                                                                                                                                                                                                                                                                                      threshold: 0.2
                                                                                                                                                                                                                                                                                                                                          });

                                                                                                                                                                                                                                                                                                                                              sections.forEach(section => {

                                                                                                                                                                                                                                                                                                                                                      section.style.opacity = "0";
                                                                                                                                                                                                                                                                                                                                                              section.style.transform = "translateY(40px)";
                                                                                                                                                                                                                                                                                                                                                                      section.style.transition = "all .8s ease";

                                                                                                                                                                                                                                                                                                                                                                              observer.observe(section);

                                                                                                                                                                                                                                                                                                                                                                                  });

                                                                                                                                                                                                                                                                                                                                                                                  });