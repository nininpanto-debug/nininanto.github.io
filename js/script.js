/* ==========================================
   SCRIPT.JS
      The World of Ninin Anto
      ========================================== */

      document.addEventListener("DOMContentLoaded", () => {

          /* ==========================
                 Enter the World
                     ========================== */

                         const enterButton = document.querySelector(".gold-btn");

                             if (enterButton) {

                                     enterButton.addEventListener("click", function (event) {

                                                 event.preventDefault();

                                                             const home = document.querySelector("#home");

                                                                         if (home) {

                                                                                         home.scrollIntoView({
                                                                                                             behavior: "smooth"
                                                                                                                             });

                                                                                                                                         }

                                                                                                                                                 });

                                                                                                                                                     }

                                                                                                                                                         /* ==========================
                                                                                                                                                                Reveal on Scroll
                                                                                                                                                                    ========================== */

                                                                                                                                                                        const revealElements = document.querySelectorAll(
                                                                                                                                                                                ".hero, .about, .worlds, .card, footer"
                                                                                                                                                                                    );

                                                                                                                                                                                        const observer = new IntersectionObserver((entries) => {

                                                                                                                                                                                                entries.forEach(entry => {

                                                                                                                                                                                                            if (entry.isIntersecting) {

                                                                                                                                                                                                                            entry.target.style.opacity = "1";
                                                                                                                                                                                                                                            entry.target.style.transform = "translateY(0)";

                                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                                                });

                                                                                                                                                                                                                                                                    }, {
                                                                                                                                                                                                                                                                            threshold: 0.15
                                                                                                                                                                                                                                                                                });

                                                                                                                                                                                                                                                                                    revealElements.forEach(element => {

                                                                                                                                                                                                                                                                                            element.style.opacity = "0";
                                                                                                                                                                                                                                                                                                    element.style.transform = "translateY(40px)";
                                                                                                                                                                                                                                                                                                            element.style.transition = "all 0.8s ease";

                                                                                                                                                                                                                                                                                                                    observer.observe(element);

                                                                                                                                                                                                                                                                                                                        });

                                                                                                                                                                                                                                                                                                                            /* ==========================
                                                                                                                                                                                                                                                                                                                                   Current Year
                                                                                                                                                                                                                                                                                                                                       ========================== */

                                                                                                                                                                                                                                                                                                                                           const footer = document.querySelector("footer p");

                                                                                                                                                                                                                                                                                                                                               if (footer) {

                                                                                                                                                                                                                                                                                                                                                       const year = new Date().getFullYear();

                                                                                                                                                                                                                                                                                                                                                               footer.innerHTML = `© ${year} Ninin Anto. All Rights Reserved.`;

                                                                                                                                                                                                                                                                                                                                                                   }

                                                                                                                                                                                                                                                                                                                                                                   });