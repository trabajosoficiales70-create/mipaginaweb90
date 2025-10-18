document.addEventListener("DOMContentLoaded", function() {
  let listItems = document.querySelectorAll(".list li");
  if(listItems && listItems.length){
    for(let i=0;i<listItems.length;i++){
      listItems[i].addEventListener("mouseenter", function(){
        listItems[i].style.transform = "scale(1.05)";
        listItems[i].style.boxShadow = "0 0 15px #ff00ff";
        listItems[i].style.borderColor = "#00ffff";
      });
      listItems[i].addEventListener("mouseleave", function(){
        listItems[i].style.transform = "scale(1)";
        listItems[i].style.boxShadow = "none";
        listItems[i].style.borderColor = "#ff00ff";
      });
    }
  }

  let icons = document.querySelectorAll(".list .icon");
  if(icons && icons.length){
    for(let j=0;j<icons.length;j++){
      icons[j].addEventListener("mouseenter", function(){
        icons[j].style.transform = "scale(1.2)";
        icons[j].style.filter = "drop-shadow(0 0 10px #00ffff)";
      });
      icons[j].addEventListener("mouseleave", function(){
        icons[j].style.transform = "scale(1)";
        icons[j].style.filter = "none";
      });
    }
  }
});