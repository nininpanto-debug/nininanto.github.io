document.addEventListener("DOMContentLoaded",()=>{
const cover=document.getElementById("bookCover"), left=document.getElementById("sheetLeft"), right=document.getElementById("sheetRight");
const prev=document.getElementById("prevBtn"),next=document.getElementById("nextBtn"),counter=document.getElementById("pageCounter"),note=document.getElementById("tapNote");
let state=0,busy=false;
// States: 0 cover, 1 Kollam intro, 2 Kollam reel, 3 Kannur intro, 4 Kannur reel.
const content={
1:`<div class="sheet-inner"><span class="page-number">01</span><p class="chapter-kicker">THE FIRST CHAPTER</p><h2 class="chapter-title">Kollam</h2><p class="chapter-sub">A place is more than a point on a map.</p><p class="story-note">Look closer. Listen longer. Every road carries a memory.</p><button class="corner corner-next" data-next aria-label="Open Kollam video"><i class="fa-solid fa-chevron-right"></i></button></div>`,
2:`<div class="sheet-inner reel-sheet"><div class="reel-inner"><div class="reel-heading"><h2>Kollam</h2><span>CHAPTER 01 • FILM</span></div><div class="reel-box" id="reelBox"><iframe src="https://www.instagram.com/reel/DbnCj0BJLEo/embed/" title="Kollam Reel" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; web-share" allowfullscreen></iframe></div><div class="fullscreen-row"><button class="fullscreen-btn" data-fullscreen type="button"><i class="fa-solid fa-expand"></i> Fullscreen</button><a class="watch-instagram" href="https://www.instagram.com/reel/DbnCj0BJLEo/" target="_blank" rel="noopener"><i class="fa-brands fa-instagram"></i> Open on Instagram</a></div></div><button class="corner corner-prev" data-prev aria-label="Back"><i class="fa-solid fa-chevron-left"></i></button><button class="corner corner-next" data-next aria-label="Next chapter"><i class="fa-solid fa-chevron-right"></i></button></div>`,
3:`<div class="sheet-inner"><span class="page-number">02</span><p class="chapter-kicker">THE NEXT CHAPTER</p><h2 class="chapter-title">Kannur</h2><p class="chapter-sub">Turn the page. Another story begins.</p><p class="story-note">Another road. Another memory. Another side of Kerala waiting to be seen.</p><button class="corner corner-prev" data-prev aria-label="Back"><i class="fa-solid fa-chevron-left"></i></button><button class="corner corner-next" data-next aria-label="Open Kannur video"><i class="fa-solid fa-chevron-right"></i></button></div>`,
4:`<div class="sheet-inner reel-sheet"><div class="reel-inner"><div class="reel-heading"><h2>Kannur</h2><span>CHAPTER 02 • FILM</span></div><div class="reel-box" id="reelBox"><iframe src="https://www.instagram.com/reel/DbsXbMupsbx/embed/" title="Kannur Reel" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; web-share" allowfullscreen></iframe></div><div class="fullscreen-row"><button class="fullscreen-btn" data-fullscreen type="button"><i class="fa-solid fa-expand"></i> Fullscreen</button><a class="watch-instagram" href="https://www.instagram.com/reel/DbsXbMupsbx/" target="_blank" rel="noopener"><i class="fa-brands fa-instagram"></i> Open on Instagram</a></div></div><button class="corner corner-prev" data-prev aria-label="Back"><i class="fa-solid fa-chevron-left"></i></button></div>`
};
const labels=["COVER","KOLLAM • 01","KOLLAM • REEL","KANNUR • 02","KANNUR • REEL"];

function sound(){
 try{
  const A=window.AudioContext||window.webkitAudioContext;if(!A)return;
  const c=new A(),n=c.currentTime,b=c.createBuffer(1,c.sampleRate*.42,c.sampleRate),d=b.getChannelData(0);
  for(let i=0;i<d.length;i++){let t=i/d.length;d[i]=(Math.random()*2-1)*Math.pow(1-t,1.7)*.22}
  const s=c.createBufferSource(),f=c.createBiquadFilter(),g=c.createGain();s.buffer=b;f.type="bandpass";f.frequency.value=1700;f.Q.value=.7;g.gain.setValueAtTime(.001,n);g.gain.exponentialRampToValueAtTime(.14,n+.025);g.gain.exponentialRampToValueAtTime(.001,n+.38);s.connect(f).connect(g).connect(c.destination);s.start();s.stop(n+.4);setTimeout(()=>c.close().catch(()=>{}),650);
 }catch(e){}
}
function ui(){counter.textContent=labels[state];prev.disabled=state===0||busy;next.disabled=state===4||busy;note.textContent=state===0?"Tap the cover to begin":state===1?"Turn the page to enter Kollam":state===2?"Watch the Reel or turn the page":state===3?"Turn the page to enter Kannur":"Watch the Reel or turn back";}
function bind(){
 document.querySelectorAll("[data-next]").forEach(x=>x.onclick=e=>{e.stopPropagation();go(Math.min(4,state+1),1)});
 document.querySelectorAll("[data-prev]").forEach(x=>x.onclick=e=>{e.stopPropagation();go(Math.max(1,state-1),-1)});
 document.querySelectorAll("[data-fullscreen]").forEach(x=>x.onclick=e=>fullscreen(e.currentTarget.closest(".reel-box")));
}
function fullscreen(box){
 if(!box)return;
 const frame=box.querySelector("iframe");
 try{if(document.fullscreenElement){document.exitFullscreen();return} if(box.requestFullscreen){box.requestFullscreen().catch(()=>{})} else if(frame&&frame.requestFullscreen){frame.requestFullscreen().catch(()=>{})}}catch(e){}
}
function setSheet(s){
 if(s===1||s===3) left.innerHTML=content[s];
 else left.innerHTML=content[s];
 bind();
}
function go(target,dir){
 if(busy||target<1||target>4)return;busy=true;sound();
 // Only the visible physical sheet moves forward. Backward is a clean reverse turn.
 setSheet(target);
 left.classList.remove("turn-forward","turn-back");void left.offsetWidth;
 if(dir>0)left.classList.add("turn-forward");else left.classList.add("turn-back");
 setTimeout(()=>{left.classList.remove("turn-forward","turn-back");state=target;busy=false;ui();bind()},920);
}
cover.onclick=()=>{cover.classList.add("open");setTimeout(()=>go(1,1),150)};
next.onclick=()=>state===0? (cover.click()) : go(state+1,1);
prev.onclick=()=>{if(state>1)go(state-1,-1)};
setSheet(1);left.style.display="block";left.style.opacity="0";setTimeout(()=>{left.style.opacity="1"},50);ui();
});
