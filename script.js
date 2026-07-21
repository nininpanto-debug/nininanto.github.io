function enterWorld() {

        const intro = document.getElementById("intro");
            const main = document.getElementById("main");

                intro.style.transition = "all 1.5s ease";
                    intro.style.opacity = "0";
                        intro.style.transform = "scale(1.2)";
                            intro.style.filter = "blur(15px)";

                                setTimeout(() => {
                                        intro.style.display = "none";
                                                main.classList.remove("hidden");
                                                        main.classList.add("show");
                                                            }, 1500);

                                                            }

