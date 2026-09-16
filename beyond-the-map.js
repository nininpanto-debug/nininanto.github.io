document.addEventListener('DOMContentLoaded',()=>{
  const cover=document.getElementById('cover');
  const kollam=document.getElementById('kollam-sheet');
  const kannur=document.getElementById('kannur-sheet');
  const open=document.getElementById('open-book');
  const prev=document.getElementById('prev-page');
  const next=document.getElementById('next-page');
  const controls=document.getElementById('book-controls');
  const status=document.getElementById('page-status');
  const hint=document.getElementById('gesture-hint');
  let state=0; // 0 cover, 1 Kollam front, 2 Kollam video, 3 Kannur front, 4 Kannur video

  function processInstagram(){
    if(window.instgrm && window.instgrm.Embeds) window.instgrm.Embeds.process();
  }
  function update(){
    cover.classList.toggle('open',state>0);
    kollam.classList.toggle('show',state>0);
    kollam.classList.toggle('flipped',state>=2);
    kannur.classList.toggle('show',state>=3);
    kannur.classList.toggle('flipped',state>=4);
    controls.hidden=state===0;
    const labels=['','KOLLAM · 01','KOLLAM · 01','KANNUR · 02','KANNUR · 02'];
    status.textContent=labels[state];
    hint.innerHTML=state===0?'<i class="fa-regular fa-hand-pointer"></i> Tap the cover to begin':'<i class="fa-regular fa-hand-pointer"></i> Tap a page corner to turn';
    setTimeout(processInstagram,180);
  }
  function go(n){state=Math.max(0,Math.min(4,n));update();}
  open.addEventListener('click',()=>go(1));
  next.addEventListener('click',()=>go(state+1));
  prev.addEventListener('click',()=>go(state-1));
  document.querySelectorAll('[data-action="next"]').forEach(b=>b.addEventListener('click',e=>{e.stopPropagation();go(state+1)}));
  document.querySelectorAll('[data-action="prev"]').forEach(b=>b.addEventListener('click',e=>{e.stopPropagation();go(state-1)}));
  // Clicking the visible page edge also turns the page, as requested.
  document.querySelectorAll('.paper').forEach(p=>p.addEventListener('click',e=>{
    if(e.target.closest('button,a,blockquote')) return;
    const r=p.getBoundingClientRect();
    if(e.clientX-r.left>r.width*.72) go(state+1);
    else if(e.clientX-r.left<r.width*.28) go(state-1);
  }));
  // Give Instagram's embed script time to load on first visit.
  setTimeout(processInstagram,800);
  window.addEventListener('load',()=>setTimeout(processInstagram,500));
});
