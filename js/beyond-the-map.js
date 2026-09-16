document.addEventListener('DOMContentLoaded', function(){
  const cover=document.getElementById('cover-sheet');
  const kollam=document.getElementById('kollam-sheet');
  const kannur=document.getElementById('kannur-sheet');
  const open=document.getElementById('open-book');
  const prev=document.getElementById('prev-page');
  const next=document.getElementById('next-page');
  const controls=document.getElementById('journal-controls');
  const status=document.getElementById('page-status');
  const hint=document.getElementById('gesture-hint');
  let page=0;
  let audioContext=null;

  function flipSound(){
    try{
      const AC=window.AudioContext||window.webkitAudioContext;
      if(!AC)return;
      if(!audioContext)audioContext=new AC();
      if(audioContext.state==='suspended')audioContext.resume();
      const duration=.32, rate=audioContext.sampleRate;
      const buffer=audioContext.createBuffer(1,Math.floor(rate*duration),rate);
      const data=buffer.getChannelData(0);
      for(let i=0;i<data.length;i++){
        const t=i/data.length;
        const envelope=Math.pow(1-t,1.7)*(0.45+0.55*Math.sin(t*Math.PI));
        data[i]=(Math.random()*2-1)*envelope;
      }
      const src=audioContext.createBufferSource();
      const filter=audioContext.createBiquadFilter();
      const gain=audioContext.createGain();
      filter.type='bandpass';filter.frequency.value=1900;filter.Q.value=.65;
      gain.gain.value=.13;
      src.buffer=buffer;src.connect(filter).connect(gain).connect(audioContext.destination);src.start();
    }catch(e){}
  }

  function processEmbeds(){
    if(window.instgrm&&window.instgrm.Embeds){
      try{window.instgrm.Embeds.process();}catch(e){}
    }
  }

  function render(){
    cover.classList.toggle('flipped',page>=1);
    kollam.classList.toggle('flipped',page>=2);
    kannur.classList.toggle('flipped',page>=3);
    controls.hidden=page===0;
    const labels=['','KOLLAM · 01','KOLLAM · 01','KANNUR · 02'];
    status.textContent=labels[page]||'';
    if(page===0)hint.innerHTML='<i class="fa-regular fa-hand-pointer"></i> Tap the cover to begin';
    if(page===1)hint.innerHTML='<i class="fa-regular fa-hand-pointer"></i> Tap the right edge to turn the page';
    if(page===2)hint.innerHTML='<i class="fa-regular fa-hand-pointer"></i> Turn back or continue to Kannur';
    if(page===3)hint.innerHTML='<i class="fa-regular fa-hand-pointer"></i> Turn left to return to Kollam';
    if(page>0){window.setTimeout(processEmbeds,200);window.setTimeout(processEmbeds,900);}
  }

  function go(target){
    target=Math.max(0,Math.min(3,target));
    if(target===page)return;
    flipSound();
    page=target;
    render();
  }

  open.addEventListener('click',()=>go(1));
  next.addEventListener('click',()=>go(page+1));
  prev.addEventListener('click',()=>go(page-1));
  document.querySelectorAll('[data-action="next"]').forEach(btn=>btn.addEventListener('click',e=>{e.stopPropagation();go(page+1);}));
  document.querySelectorAll('[data-action="prev"]').forEach(btn=>btn.addEventListener('click',e=>{e.stopPropagation();go(page-1);}));
  render();
  window.setTimeout(processEmbeds,1000);
});
