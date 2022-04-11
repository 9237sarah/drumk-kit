var numOfDrums = document.querySelectorAll(".drum").length;
// alert(numOfDrums);
for (var i = 0; i < numOfDrums; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    MakeSound(buttonInnerHTML);

  })
}

document.addEventListener("keypress", function(event) {
  MakeSound(event.key);
})

function MakeSound(key) {
  switch (key) {
    case "w":
      var audio1 = new Audio("sounds/tom-1.mp3");
      audio1.play();
    case "a":
      var audio2 = new Audio("sounds/tom-2.mp3");
      audio2.play();
    case "s":
      var audio3 = new Audio("sounds/tom-3.mp3");
      audio3.play();
    case "d":
      var audio4 = new Audio("sounds/tom-4.mp3");
      audio4.play();
    case "j":
      var audio5 = new Audio("sounds/crash.mp3");
      audio5.play();
    case "k":
      var audio6 = new Audio("sounds/kick-bass.mp3");
      audio6.play();
    case "l":
      var audio7 = new Audio("sounds/snare.mp3");
      audio7.play();
      break;
    default:

  }
}
