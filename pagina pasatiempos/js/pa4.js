document.addEventListener("DOMContentLoaded", function() {
  let cards = document.querySelectorAll(".card");
  if(cards && cards.length){
    for(let i=0;i<cards.length;i++){
      cards[i].addEventListener("mousemove", function(e){
        let rect = cards[i].getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;
        cards[i].style.transform = "rotateY(" + ((x - rect.width/2)/12) + "deg) rotateX(" + (-(y - rect.height/2)/12) + "deg)";
      });
      cards[i].addEventListener("mouseleave", function(){
        cards[i].style.transform = "rotateY(0deg) rotateX(0deg)";
      });
    }
  }

  let images = document.querySelectorAll(".card img");
  if(images && images.length){
    for(let j=0;j<images.length;j++){
      images[j].addEventListener("mouseenter", function(){
        images[j].style.transform = "scale(1.08)";
        images[j].style.boxShadow = "0 0 20px #00ffcc";
      });
      images[j].addEventListener("mouseleave", function(){
        images[j].style.transform = "scale(1)";
        images[j].style.boxShadow = "none";
      });
    }
  }
});