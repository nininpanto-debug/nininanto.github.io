document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".section, .look-card, .detail-card, .experience-list article, .casting-contact");

  items.forEach(item => item.classList.add("reveal"));

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });

    items.forEach(item => observer.observe(item));
  } else {
    items.forEach(item => item.classList.add("visible"));
  }
});
