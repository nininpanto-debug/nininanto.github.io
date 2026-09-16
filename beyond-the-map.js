document.addEventListener("DOMContentLoaded", () => {
  const cover = document.getElementById("bookCover");
  const page = document.getElementById("turnPage");
  const front = document.getElementById("pageFront");
  const back = document.getElementById("pageBack");
  const prev = document.getElementById("prevBtn");
  const next = document.getElementById("nextBtn");
  const counter = document.getElementById("pageCounter");
  const note = document.getElementById("tapNote");

  // 0 = cover, 1 = Kollam intro, 2 = Kollam Reel, 3 = Kannur intro, 4 = Kannur Reel
  let state = 0;
  let busy = false;

  const pages = {
    kollamIntro: `
      <div class="page-content">
        <span class="page-number">01</span>
        <p class="chapter-kicker">THE FIRST CHAPTER</p>
        <h2 class="chapter-title">Kollam</h2>
        <p class="chapter-sub">A place is more than a point on a map.</p>
        <p class="story-note">Look closer. Listen longer. Every road carries a memory.</p>
        <button class="corner-next" data-next aria-label="Open Kollam story"><i class="fa-solid fa-chevron-right"></i></button>
      </div>`,
    kollamReel: `
      <div class="page-content reel-page">
        <div class="reel-title"><h2>Kollam</h2><span>CHAPTER 01</span></div>
        <div class="instagram-frame">
          <iframe src="https://www.instagram.com/reel/DbnCj0BJLEo/embed/" title="Kollam — Beyond the Map" loading="eager" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
        </div>
        <a class="reel-link" href="https://www.instagram.com/reel/DbnCj0BJLEo/" target="_blank" rel="noopener"><i class="fa-brands fa-instagram"></i> Open this Reel on Instagram</a>
        <button class="corner-prev" data-prev aria-label="Back to Kollam introduction"><i class="fa-solid fa-chevron-left"></i></button>
        <button class="corner-next" data-next aria-label="Next story"><i class="fa-solid fa-chevron-right"></i></button>
      </div>`,
    kannurIntro: `
      <div class="page-content">
        <span class="page-number">02</span>
        <p class="chapter-kicker">THE NEXT CHAPTER</p>
        <h2 class="chapter-title">Kannur</h2>
        <p class="chapter-sub">Turn the page. Another story begins.</p>
        <p class="story-note">Another road. Another memory. Another side of Kerala waiting to be seen.</p>
        <button class="corner-prev" data-prev aria-label="Previous story"><i class="fa-solid fa-chevron-left"></i></button>
        <button class="corner-next" data-next aria-label="Open Kannur story"><i class="fa-solid fa-chevron-right"></i></button>
      </div>`,
    kannurReel: `
      <div class="page-content reel-page">
        <div class="reel-title"><h2>Kannur</h2><span>CHAPTER 02</span></div>
        <div class="instagram-frame">
          <iframe src="https://www.instagram.com/reel/DbsXbMupsbx/embed/" title="Kannur — Beyond the Map" loading="eager" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
        </div>
        <a class="reel-link" href="https://www.instagram.com/reel/DbsXbMupsbx/" target="_blank" rel="noopener"><i class="fa-brands fa-instagram"></i> Open this Reel on Instagram</a>
        <button class="corner-prev" data-prev aria-label="Back to Kannur introduction"><i class="fa-solid fa-chevron-left"></i></button>
      </div>`
  };

  function setPageContent(which) {
    const content = pages[which] || pages.kollamIntro;
    front.innerHTML = content;
    back.innerHTML = content;
    bindCornerButtons();
  }

  function updateUI() {
    const labels = ["COVER","KOLLAM • 01","KOLLAM • REEL","KANNUR • 02","KANNUR • REEL"];
    counter.textContent = labels[state];
    prev.disabled = state === 0 || busy;
    next.disabled = state === 4 || busy;
    note.textContent =
      state === 0 ? "Tap the cover to begin" :
      state === 1 ? "Tap the right page corner to open Kollam" :
      state === 2 ? "Turn the page to continue the journey" :
      state === 3 ? "Tap the right page corner to open Kannur" :
      "Turn the page to return";
  }

  function pageSound(direction) {
    try {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return;
      const ctx = new Ctx();
      const now = ctx.currentTime;

      // Layered paper-rustle: filtered noise + short soft transients.
      const buffer = ctx.createBuffer(1, ctx.sampleRate * 0.55, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < data.length; i++) {
        const t = i / data.length;
        const envelope = Math.pow(1 - t, 2.2);
        data[i] = (Math.random() * 2 - 1) * envelope * 0.32;
      }
      const source = ctx.createBufferSource();
      const filter = ctx.createBiquadFilter();
      const gain = ctx.createGain();
      source.buffer = buffer;
      filter.type = "bandpass";
      filter.frequency.setValueAtTime(direction > 0 ? 1800 : 1350, now);
      filter.Q.value = 0.55;
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(0.18, now + 0.035);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.48);
      source.connect(filter).connect(gain).connect(ctx.destination);
      source.start(now);
      source.stop(now + 0.5);

      const click = ctx.createOscillator();
      const clickGain = ctx.createGain();
      click.type = "sine";
      click.frequency.setValueAtTime(direction > 0 ? 115 : 92, now);
      click.frequency.exponentialRampToValueAtTime(48, now + 0.12);
      clickGain.gain.setValueAtTime(0.0001, now);
      clickGain.gain.exponentialRampToValueAtTime(0.055, now + 0.01);
      clickGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.14);
      click.connect(clickGain).connect(ctx.destination);
      click.start(now);
      click.stop(now + 0.15);

      setTimeout(() => ctx.close().catch(() => {}), 800);
    } catch (_) {}
  }

  function renderState(nextState, direction) {
    if (busy || nextState < 0 || nextState > 4) return;
    busy = true;
    pageSound(direction);

    if (state === 0) {
      state = 1;
      setPageContent("kollamIntro");
      page.classList.add("visible");
      cover.classList.add("open");
      note.textContent = "Opening the journal…";
      setTimeout(() => {
        busy = false;
        updateUI();
      }, 1150);
      return;
    }

    const names = ["kollamIntro","kollamReel","kannurIntro","kannurReel"];
    const target = names[nextState - 1];

    // Put the next story on the hidden back face, then turn the physical sheet.
    back.innerHTML = pages[target];
    page.classList.remove("flip-next","flip-prev");
    void page.offsetWidth;

    if (direction > 0) {
      page.classList.add("flip-next");
    } else {
      page.classList.add("flip-prev");
    }

    setTimeout(() => {
      front.innerHTML = pages[target];
      page.classList.remove("flip-next","flip-prev");
      state = nextState;
      bindCornerButtons();
      busy = false;
      updateUI();
    }, 960);
  }

  function bindCornerButtons() {
    front.querySelectorAll("[data-next]").forEach(b => b.addEventListener("click", e => {
      e.stopPropagation(); renderState(Math.min(4, state + 1), 1);
    }));
    front.querySelectorAll("[data-prev]").forEach(b => b.addEventListener("click", e => {
      e.stopPropagation(); renderState(Math.max(0, state - 1), -1);
    }));
    back.querySelectorAll("[data-next]").forEach(b => b.addEventListener("click", e => {
      e.stopPropagation(); renderState(Math.min(4, state + 1), 1);
    }));
    back.querySelectorAll("[data-prev]").forEach(b => b.addEventListener("click", e => {
      e.stopPropagation(); renderState(Math.max(0, state - 1), -1);
    }));
  }

  cover.addEventListener("click", () => renderState(1, 1));
  next.addEventListener("click", () => {
    if (state === 0) renderState(1, 1);
    else renderState(Math.min(4, state + 1), 1);
  });
  prev.addEventListener("click", () => {
    if (state > 1) renderState(state - 1, -1);
  });

  // Swipe left/right on the physical page.
  let startX = null;
  page.addEventListener("touchstart", e => {
    if (e.touches.length === 1) startX = e.touches[0].clientX;
  }, {passive:true});
  page.addEventListener("touchend", e => {
    if (startX === null) return;
    const dx = e.changedTouches[0].clientX - startX;
    startX = null;
    if (Math.abs(dx) > 65) {
      if (dx < 0) renderState(Math.min(4, state + 1), 1);
      else renderState(Math.max(1, state - 1), -1);
    }
  }, {passive:true});

  setPageContent("kollamIntro");
  updateUI();
});
