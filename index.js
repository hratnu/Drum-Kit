
//implementing mouse Listener;
var buttonList=document.querySelectorAll("button.drum");
var length=buttonList.length;

for(var c=0; c<length;  c=c+1){
  buttonList[c].addEventListener("click", gotClicked);
}


function gotClicked(){
  var buttonName= this.innerHTML;
  playSound(buttonName);
  buttonAnimation(buttonName);
}


//implementing keyListener

document.addEventListener("keydown", function(event){
var buttonName= event.key;
console.log(buttonName);
playSound(buttonName);
buttonAnimation(buttonName);
});






function playSound(buttonName){
  switch (buttonName) {
    case "w":
    var sound= new Audio("sounds/tom-1.mp3")
    break;
    case "a":
    var sound= new Audio("sounds/tom-2.mp3")
    break;
    case "s":
    var sound= new Audio("sounds/tom-3.mp3")
    break;
    case "d":
    var sound= new Audio("sounds/tom-4.mp3")
    break;
    case "j":
    var sound= new Audio("sounds/crash.mp3")
    break;
    case "k":
    var sound= new Audio("sounds/kick-bass.mp3")
    break;
    case "l":
    var sound= new Audio("sounds/snare.mp3")
    break;
    default:

  }

      sound.play();
}



function buttonAnimation(buttonName){
var activeButton= document.querySelector("."+buttonName);
activeButton.classList.add("pressed");
setTimeout(function(){activeButton.classList.remove("pressed")}, 100);

}
