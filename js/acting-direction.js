document.addEventListener('DOMContentLoaded',()=>{
  const header=document.querySelector('.site-header');
  const toggle=document.querySelector('.menu-toggle');
  const nav=document.querySelector('.main-nav');
  const updateHeader=()=>header&&header.classList.toggle('scrolled',window.scrollY>24);
  updateHeader(); window.addEventListener('scroll',updateHeader,{passive:true});
  if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',open?'true':'false');});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false')}));}
  document.querySelectorAll('.video-card').forEach(card=>{card.addEventListener('click',e=>{if(e.target.closest('button')||e.target.closest('.video-link')){const url=card.dataset.videoUrl;if(url)window.open(url,'_blank','noopener');}});const btn=card.querySelector('.video-link');if(btn)btn.addEventListener('click',e=>e.stopPropagation());});
  const story=document.getElementById('full-story'); const storyBtn=document.querySelector('.story-toggle');
  if(story&&storyBtn){storyBtn.addEventListener('click',()=>{const open=!story.hasAttribute('hidden'); if(open){story.setAttribute('hidden','');storyBtn.setAttribute('aria-expanded','false');storyBtn.innerHTML='Read My Story <i class="fa-solid fa-arrow-down"></i>';}else{story.removeAttribute('hidden');storyBtn.setAttribute('aria-expanded','true');storyBtn.innerHTML='Close Story <i class="fa-solid fa-arrow-up"></i>';}});}
});
