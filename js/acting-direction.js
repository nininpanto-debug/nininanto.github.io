// ==========================
// ACTING & DIRECTION
// NININ ANTO
// ==========================

document.addEventListener("DOMContentLoaded", () => {

    // ==========================
        // Smooth Scroll
            // ==========================

                document.querySelectorAll('a[href^="#"]').forEach(link => {

                        link.addEventListener("click", function(e) {

                                    e.preventDefault();

                                                const target = document.querySelector(this.getAttribute("href"));

                                                            if(target){

                                                                            target.scrollIntoView({

                                                                                                behavior:"smooth"

                                                                                                                });

                                                                                                                            }

                                                                                                                                    });

                                                                                                                                        });

                                                                                                                                            // ==========================
                                                                                                                                                // Fade In Animation
                                                                                                                                                    // ==========================

                                                                                                                                                        const sections = document.querySelectorAll("section");

                                                                                                                                                            const observer = new IntersectionObserver(entries => {

                                                                                                                                                                    entries.forEach(entry => {

                                                                                                                                                                                if(entry.isIntersecting){

                                                                                                                                                                                                entry.target.classList.add("show");

                                                                                                                                                                                                            }

                                                                                                                                                                                                                    });

                                                                                                                                                                                                                        },{

                                                                                                                                                                                                                                threshold:0.2

                                                                                                                                                                                                                                    });

                                                                                                                                                                                                                                        sections.forEach(section=>{

                                                                                                                                                                                                                                                section.classList.add("hidden");

                                                                                                                                                                                                                                                        observer.observe(section);

                                                                                                                                                                                                                                                            });

                                                                                                                                                                                                                                                                // ==========================
                                                                                                                                                                                                                                                                    // Active Navigation
                                                                                                                                                                                                                                                                        // ==========================

                                                                                                                                                                                                                                                                            const navLinks = document.querySelectorAll("nav ul li a");

                                                                                                                                                                                                                                                                                window.addEventListener("scroll",()=>{

                                                                                                                                                                                                                                                                                        let current="";

                                                                                                                                                                                                                                                                                                sections.forEach(section=>{

                                                                                                                                                                                                                                                                                                            const top=section.offsetTop-150;

                                                                                                                                                                                                                                                                                                                        const height=section.offsetHeight;

                                                                                                                                                                                                                                                                                                                                    if(scrollY>=top){

                                                                                                                                                                                                                                                                                                                                                    current=section.getAttribute("id");

                                                                                                                                                                                                                                                                                                                                                                }

                                                                                                                                                                                                                                                                                                                                                                        });

                                                                                                                                                                                                                                                                                                                                                                                navLinks.forEach(link=>{

                                                                                                                                                                                                                                                                                                                                                                                            link.classList.remove("active");

                                                                                                                                                                                                                                                                                                                                                                                                        if(link.getAttribute("href")==="#" + current){

                                                                                                                                                                                                                                                                                                                                                                                                                        link.classList.add("active");

                                                                                                                                                                                                                                                                                                                                                                                                                                    }

                                                                                                                                                                                                                                                                                                                                                                                                                                            });

                                                                                                                                                                                                                                                                                                                                                                                                                                                });

                                                                                                                                                                                                                                                                                                                                                                                                                                                    // ==========================
                                                                                                                                                                                                                                                                                                                                                                                                                                                        // Hero Animation
                                                                                                                                                                                                                                                                                                                                                                                                                                                            // ==========================

                                                                                                                                                                                                                                                                                                                                                                                                                                                                const hero=document.querySelector(".hero-content");

                                                                                                                                                                                                                                                                                                                                                                                                                                                                    if(hero){

                                                                                                                                                                                                                                                                                                                                                                                                                                                                            hero.style.opacity="0";

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    hero.style.transform="translateY(40px)";

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            setTimeout(()=>{

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        hero.style.transition="all 1s ease";

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    hero.style.opacity="1";

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                hero.style.transform="translateY(0)";

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        },300);

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            }

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            });

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            // ==========================
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            // Back To Top Button
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            // ==========================

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            const topBtn=document.createElement("button");

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            topBtn.innerHTML="↑";

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            topBtn.id="topBtn";

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            document.body.appendChild(topBtn);

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            topBtn.onclick=()=>{

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                window.scrollTo({

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        top:0,

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                behavior:"smooth"

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    });

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    };

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    window.addEventListener("scroll",()=>{

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        if(window.scrollY>500){

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                topBtn.style.opacity="1";

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        topBtn.style.visibility="visible";

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            }else{

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    topBtn.style.opacity="0";

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            topBtn.style.visibility="hidden";

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                }

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                });