document.addEventListener("DOMContentLoaded", function() {
  let hero = document.querySelector(".hero");
  if(hero){
    let hue = 180;
    function animateHero() {
      hue += 0.5;
      hero.style.background = "linear-gradient(135deg, hsl(" + hue + ",100%,30%), hsl(" + ((hue+60)%360) + ",100%,20%))";
      requestAnimationFrame(animateHero);
    }
    animateHero();
  }

  let btn = document.querySelector(".btn");
  if(btn){
    btn.addEventListener("mouseenter", function(){
      btn.style.transform = "scale(1.1)";
      btn.style.boxShadow = "0 0 20px #00ffff";
    });
    btn.addEventListener("mouseleave", function(){
      btn.style.transform = "scale(1)";
      btn.style.boxShadow = "none";
    });
  }
});