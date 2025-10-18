document.addEventListener("DOMContentLoaded", function() {
  let contentImg = document.querySelector(".content-img");
  if(contentImg){
    contentImg.addEventListener("mouseenter", function(){
      contentImg.style.transform = "scale(1.05)";
      contentImg.style.boxShadow = "0 0 20px #00ff80";
    });
    contentImg.addEventListener("mouseleave", function(){
      contentImg.style.transform = "scale(1)";
      contentImg.style.boxShadow = "none";
    });
  }
});