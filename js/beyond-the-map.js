document.addEventListener('DOMContentLoaded', function () {
  const cover = document.getElementById('cover-leaf');
  const kollam = document.getElementById('kollam-leaf');
  const kannur = document.getElementById('kannur-leaf');
  const open = document.getElementById('open-book');
  const prev = document.getElementById('prev-page');
  const next = document.getElementById('next-page');
  const controls = document.getElementById('book-controls');
  const status = document.getElementById('page-status');
  const hint = document.getElementById('gesture-hint');
  let state = 0;
  let audioContext = null;

  function flipSound() {
    try {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      if (!audioContext) audioContext = new AC();
      if (audioContext.state === 'suspended') audioContext.resume();
      const duration = 0.18;
      const buffer = audioContext.createBuffer(1, audioContext.sampleRate * duration, audioContext.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < data.length; i++) {
        const t = i / data.length;
        data[i] = (Math.random() * 2 - 1) * Math.pow(1 - t, 2.4) * 0.34;
      }
      const source = audioContext.createBufferSource();
      const filter = audioContext.createBiquadFilter();
      const gain = audioContext.createGain();
      filter.type = 'bandpass';
      filter.frequency.value = 1350;
      filter.Q.value = 0.55;
      gain.gain.value = 0.22;
      source.buffer = buffer;
      source.connect(filter).connect(gain).connect(audioContext.destination);
      source.start();
    } catch (e) {}
  }

  function processInstagramEmbeds() {
    if (window.instgrm && window.instgrm.Embeds) {
      try { window.instgrm.Embeds.process(); } catch (e) {}
    }
  }

  function update() {
    cover.classList.toggle('open', state > 0);
    kollam.classList.toggle('show', state > 0);
    kannur.classList.toggle('show', state >= 3);

    // Each story leaf is a physical sheet: front = chapter, back = video.
    kollam.classList.toggle('flipped', state >= 2);
    kannur.classList.toggle('flipped', state >= 4);

    controls.hidden = state === 0;
    const labels = ['', 'KOLLAM · 01', 'KOLLAM · 01', 'KANNUR · 02', 'KANNUR · 02'];
    status.textContent = labels[state];

    if (state === 0) {
      hint.innerHTML = '<i class="fa-regular fa-hand-pointer"></i> Tap the cover to begin';
    } else if (state === 1) {
      hint.innerHTML = '<i class="fa-regular fa-hand-pointer"></i> Tap the right page corner to open Kollam';
    } else if (state === 2) {
      hint.innerHTML = '<i class="fa-regular fa-hand-pointer"></i> Watch Kollam · turn right for the next chapter';
    } else if (state === 3) {
      hint.innerHTML = '<i class="fa-regular fa-hand-pointer"></i> Turn right to watch Kannur';
    } else {
      hint.innerHTML = '<i class="fa-regular fa-hand-pointer"></i> Turn left to go back';
    }

    if (state >= 2) {
      window.setTimeout(processInstagramEmbeds, 250);
      window.setTimeout(processInstagramEmbeds, 1000);
    }
  }

  function go(target) {
    target = Math.max(0, Math.min(4, target));
    if (target === state) return;
    flipSound();
    state = target;
    update();
  }

  open.addEventListener('click', function () { go(1); });
  next.addEventListener('click', function () { go(state + 1); });
  prev.addEventListener('click', function () { go(state - 1); });

  document.querySelectorAll('[data-action="next"]').forEach(function (button) {
    button.addEventListener('click', function (event) {
      event.stopPropagation();
      go(state + 1);
    });
  });

  document.querySelectorAll('[data-action="prev"]').forEach(function (button) {
    button.addEventListener('click', function (event) {
      event.stopPropagation();
      go(state - 1);
    });
  });

  update();
  window.setTimeout(processInstagramEmbeds, 700);
});
