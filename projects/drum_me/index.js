// Detecting button clicks
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    soundEvents(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

// Detecting keyboard press
document.addEventListener("keydown", function (event) {
  var pressed = event.key;
  soundEvents(pressed);
  buttonAnimation(pressed);
});

// Generate sounds based on mouse click\button press
function soundEvents(e) {
  switch (e) {
    case "w":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play().length;
      break;

    case "a":
      var snare = new Audio("sounds/snare.mp3");
      snare.play().length;
      break;

    case "s":
      var crash = new Audio("sounds/crash.mp3");
      crash.play().length;
      break;

    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play().length;
      break;

    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play().length;
      break;

    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play().length;
      break;

    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play().length;
      break;

    default:
      console.log(e);
  }
}

// Button animation

function buttonAnimation(key) {
  var activeButton = document.querySelector("." + key);

  switch (key) {
    case "w":
    case "a":
    case "s":
    case "d":
    case "j":
    case "k":
    case "l":
      activeButton.classList.add("pressed");
      break;

    default:
      alert("Invalid key pressed, try again!");
  }

  setTimeout(() => {
    switch (key) {
      case "w":
      case "a":
      case "s":
      case "d":
      case "j":
      case "k":
      case "l":
        activeButton.classList.remove("pressed");
        break;

      default:
        console.log(key);
    }
  }, "100");
}
