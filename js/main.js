/* ==========================================
   THE WORLD OF NININ ANTO
      Main JavaScript
         Version 1.0
         ========================================== */

         document.addEventListener("DOMContentLoaded", () => {

                /* ==========================
                       Loader
                           ========================== */

                               const loader = document.getElementById("loader");

                                   window.addEventListener("load", () => {

                                            setTimeout(() => {

                                                            loader.style.opacity = "0";
                                                                        loader.style.visibility = "hidden";

                                            }, 1500);

                                        });

                                            /* ==========================
                                                   Scroll Reveal
                                                       ========================== */

                                                           const revealElements = document.querySelectorAll(
                                                                    "section, .card, article"
                                                           );

                                                               function revealOnScroll() {

                                                                        const trigger = window.innerHeight * 0.85;

                                                                                revealElements.forEach((element) => {

                                                                                                const top = element.getBoundingClientRect().top;

                                                                                                            if (top < trigger) {

                                                                                                                                element.classList.add("active");

                                                                                                            }

                                                                                                        });

                                                                                                    }

                                                                                                        revealElements.forEach((element) => {

                                                                                                                    element.classList.add("reveal");

                                                                                                        });

                                                                                                            window.addEventListener("scroll", revealOnScroll);

                                                                                                                revealOnScroll();

                                                                                                                    /* ==========================
                                                                                                                           Sticky Navigation
                                                                                                                               ========================== */

                                                                                                                                   const nav = document.querySelector("nav");

                                                                                                                                       window.addEventListener("scroll", () => {

                                                                                                                                                if (window.scrollY > 80) {

                                                                                                                                                                nav.style.background = "rgba(5,5,5,.95)";
                                                                                                                                                                            nav.style.boxShadow = "0 10px 30px rgba(0,0,0,.4)";

                                                                                                                                                } else {

                                                                                                                                                                nav.style.background = "rgba(10,10,10,.85)";
                                                                                                                                                                            nav.style.boxShadow = "none";

                                                                                                                                                }

                                                                                                                                            });

                                                                                                                                                /* ==========================
                                                                                                                                                       Active Navigation
                                                                                                                                                           ========================== */

                                                                                                                                                               const sections = document.querySelectorAll("section");

                                                                                                                                                                   const navLinks = document.querySelectorAll("nav a");

                                                                                                                                                                       window.addEventListener("scroll", () => {

                                                                                                                                                                                let current = "";

                                                                                                                                                                                        sections.forEach((section) => {

                                                                                                                                                                                                        const sectionTop = section.offsetTop - 120;

                                                                                                                                                                                                                    if (window.scrollY >= sectionTop) {

                                                                                                                                                                                                                                        current = section.getAttribute("id");

                                                                                                                                                                                                                    }

                                                                                                                                                                                                                });

                                                                                                                                                                                                                        navLinks.forEach((link) => {

                                                                                                                                                                                                                                        link.classList.remove("active");

                                                                                                                                                                                                                                                    if (link.getAttribute("href") === "#" + current) {

                                                                                                                                                                                                                                                                        link.classList.add("active");

                                                                                                                                                                                                                                                    }

                                                                                                                                                                                                                                                });

                                                                                                                                                                                                                                            });

                                                                                                                                                                                                                                                /* ==========================
                                                                                                                                                                                                                                                       Smooth Anchor Scroll
                                                                                                                                                                                                                                                           ========================== */

                                                                                                                                                                                                                                                               document.querySelectorAll('a[href^="#"]').forEach(anchor => {

                                                                                                                                                                                                                                                                        anchor.addEventListener("click", function(e){

                                                                                                                                                                                                                                                                                        e.preventDefault();

                                                                                                                                                                                                                                                                                                    const target = document.querySelector(
                                                                                                                                                                                                                                                                                                                        this.getAttribute("href")
                                                                                                                                                                                                                                                                                                    );

                                                                                                                                                                                                                                                                                                                if(target){

                                                                                                                                                                                                                                                                                                                                    target.scrollIntoView({

                                                                                                                                                                                                                                                                                                                                                            behavior:"smooth"

                                                                                                                                                                                                                                                                                                                                    });

                                                                                                                                                                                                                                                                                                                                }

                                                                                                                                                                                                                                                                                                                            });

                                                                                                                                                                                                                                                                                                                        });

                                                                                                                                                                                                                                                                                                                            /* ==========================
                                                                                                                                                                                                                                                                                                                                   Back To Top Button
                                                                                                                                                                                                                                                                                                                                       ========================== */

                                                                                                                                                                                                                                                                                                                                           const backTop = document.createElement("button");

                                                                                                                                                                                                                                                                                                                                               backTop.innerHTML = "↑";

                                                                                                                                                                                                                                                                                                                                                   backTop.id = "backToTop";

                                                                                                                                                                                                                                                                                                                                                       document.body.appendChild(backTop);

                                                                                                                                                                                                                                                                                                                                                           backTop.style.position = "fixed";
                                                                                                                                                                                                                                                                                                                                                               backTop.style.right = "25px";
                                                                                                                                                                                                                                                                                                                                                                   backTop.style.bottom = "25px";
                                                                                                                                                                                                                                                                                                                                                                       backTop.style.width = "50px";
                                                                                                                                                                                                                                                                                                                                                                           backTop.style.height = "50px";
                                                                                                                                                                                                                                                                                                                                                                               backTop.style.borderRadius = "50%";
                                                                                                                                                                                                                                                                                                                                                                                   backTop.style.border = "none";
                                                                                                                                                                                                                                                                                                                                                                                       backTop.style.cursor = "pointer";
                                                                                                                                                                                                                                                                                                                                                                                           backTop.style.background = "#D4AF37";
                                                                                                                                                                                                                                                                                                                                                                                               backTop.style.color = "#000";
                                                                                                                                                                                                                                                                                                                                                                                                   backTop.style.fontSize = "22px";
                                                                                                                                                                                                                                                                                                                                                                                                       backTop.style.display = "none";
                                                                                                                                                                                                                                                                                                                                                                                                           backTop.style.zIndex = "999";

                                                                                                                                                                                                                                                                                                                                                                                                               window.addEventListener("scroll", () => {

                                                                                                                                                                                                                                                                                                                                                                                                                        if(window.scrollY > 600){

                                                                                                                                                                                                                                                                                                                                                                                                                                        backTop.style.display = "block";

                                                                                                                                                                                                                                                                                                                                                                                                                        }else{

                                                                                                                                                                                                                                                                                                                                                                                                                                        backTop.style.display = "none";

                                                                                                                                                                                                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                                                                                                                                                                                                    });

                                                                                                                                                                                                                                                                                                                                                                                                                        backTop.addEventListener("click", () => {

                                                                                                                                                                                                                                                                                                                                                                                                                                    window.scrollTo({

                                                                                                                                                                                                                                                                                                                                                                                                                                                    top:0,

                                                                                                                                                                                                                                                                                                                                                                                                                                                                behavior:"smooth"

                                                                                                                                                                                                                                                                                                                                                                                                                                    });

                                                                                                                                                                                                                                                                                                                                                                                                                                });

                                                                                                                                                                                                                                                                                                                                                                                                                                    /* ==========================
                                                                                                                                                                                                                                                                                                                                                                                                                                           Hero Parallax
                                                                                                                                                                                                                                                                                                                                                                                                                                               ========================== */

                                                                                                                                                                                                                                                                                                                                                                                                                                                   const heroVideo = document.querySelector(".hero-video");

                                                                                                                                                                                                                                                                                                                                                                                                                                                       window.addEventListener("scroll", () => {

                                                                                                                                                                                                                                                                                                                                                                                                                                                                if(heroVideo){

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                heroVideo.style.transform =
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                "translateY(" + (window.scrollY * 0.25) + "px)";

                                                                                                                                                                                                                                                                                                                                                                                                                                                                }

                                                                                                                                                                                                                                                                                                                                                                                                                                                            });

                                                                                                                                                                                                                                                                                                                                                                                                                                                        });
                                                                                                                                                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                                                                                                                                                       })
                                                                                                                                                                                                                                                                                                                                                                                                                                    })
                                                                                                                                                                                                                                                                                                                                                                                                                        })
                                                                                                                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                                                                                                               })
                                                                                                                                                                                                                                                                                                                                    })
                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                    )
                                                                                                                                                                                                                                                                        })
                                                                                                                                                                                                                                                               })
                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                        })
                                                                                                                                                                                                                    }
                                                                                                                                                                                        })
                                                                                                                                                                       })
                                                                                                                                                }
                                                                                                                                                }
                                                                                                                                       })
                                                                                                        })
                                                                                                            }
                                                                                })
                                                               }
                                                           )
                                            })
                                   })
         })