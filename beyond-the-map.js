document.addEventListener("DOMContentLoaded", function(){
  const cover=document.getElementById("book-cover");
  const enter=document.getElementById("enter-book");
  const stage=document.getElementById("book-stage");
  const turn=document.getElementById("turn-1");
  const backPage=document.getElementById("story-back-page");
  const video=document.getElementById("travel-video");

  function openBook(){
    cover.classList.add("open");
    setTimeout(()=>stage.scrollIntoView({behavior:"smooth",block:"center"}),180);
  }
  enter.addEventListener("click",openBook);
  cover.addEventListener("click",openBook);

  turn.addEventListener("click",function(){
    turn.classList.toggle("flipped");
    backPage.classList.add("visible");
    backPage.scrollIntoView({behavior:"smooth",block:"center"});
    window.setTimeout(()=>{
      if(window.instgrm && window.instgrm.Embeds){window.instgrm.Embeds.process();}
    },500);
  });

  document.querySelectorAll(".chapter-links button").forEach(btn=>{
    btn.addEventListener("click",()=>{
      openBook();
      if(btn.dataset.chapter==="kannur"){
        turn.classList.add("flipped");
        backPage.classList.add("visible");
      }else{
        turn.classList.remove("flipped");
        backPage.classList.remove("visible");
      }
      window.setTimeout(()=>{
        if(window.instgrm && window.instgrm.Embeds){window.instgrm.Embeds.process();}
      },400);
    });
  });

  // Try to start the ambient travel video. Muted inline video is normally
  // permitted to autoplay by mobile browsers.
  if(video){
    const play=()=>video.play().catch(()=>{});
    play();
    document.addEventListener("touchstart",play,{once:true,passive:true});
  }
});