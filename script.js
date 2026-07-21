function enterWorld() {
        const intro = document.getElementById("intro");
            const main = document.getElementById("main");

                intro.style.opacity = "0";
                    intro.style.transition = "1s";

                        setTimeout(() => {
                                intro.style.display = "none";
                                        main.classList.remove("hidden");
                                                main.classList.add("show");
                                                    }, 1000);
                                                    }
