// For eventlishner via clicking on keys on screen 
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var button_value = this.innerHTML;
    playsound(button_value);
    animation(button_value);
  });

}

// For eventlishner via clicking on Keys via keyboard  
document.addEventListener("keydown",function(event){
    playsound(event.key);
    animation(event.key);
});

// Helping Function 
function playsound(key){
  switch (key) {
    case "w":
        var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "a":
        var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "s":
      {
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
        break;

      }
    case "d":
      {
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
        break;
      }
    case "j":
      {
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
        break;
      }
    case "k":
      {
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
        break;
      }
    case "l":
      {
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
        break;
      }
    default:
      break;
  }
}

function animation(currentkey)
{
    var active_button=document.querySelector("."+currentkey);
    active_button.classList.toggle("pressed");
    setTimeout(function(){
      active_button.classList.toggle("pressed");
    },100);
    
}
