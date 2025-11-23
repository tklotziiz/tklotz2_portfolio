// Global variables
var randomNumber1 = 6;
var randomNumber2 = 6;

function randomNum() {
  var n = Math.floor(Math.random() * 6) + 1;
  return n;
}

function updateDice() {
  // Dice 1
  const dice1 = document.querySelector(".img1");
  if (dice1) {
    const newSrc = `./images/dice${randomNumber1}.png`;
    dice1.src = newSrc;
    console.log("Updated dice1 to:", newSrc);
  }

  // Dice 2
  const dice2 = document.querySelector(".img2");
  if (dice2) {
    const newSrc = `./images/dice${randomNumber2}.png`;
    dice2.src = newSrc;
    console.log("Updated dice2 to:", newSrc);
  }

  // Display winner or draw
  const h1 = document.querySelector("h1");
  if (h1) {
    if (randomNumber1 > randomNumber2) {
      h1.innerHTML = "🏆 Player 1 Wins! ";
    } else if (randomNumber1 < randomNumber2) {
      h1.innerHTML = "Player 2 Wins! 🏆";
    } else {
      h1.innerHTML = "It's a draw!";
    }
  }
}

// Global functions for inline onclick handlers
function rollPlayer1() {
  console.log("rollPlayer1() called!");
  randomNumber1 = randomNum();
  console.log("Player 1 rolled:", randomNumber1);
  updateDice();
}

function rollPlayer2() {
  console.log("rollPlayer2() called!");
  randomNumber2 = randomNum();
  console.log("Player 2 rolled:", randomNumber2);
  updateDice();
}

// Debug: Check if script is loading
console.log("Dice game script loaded!");

// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM Content Loaded!");


  // Initial display
  updateDice();

  // Player 1 button click
  const player1Btn = document.getElementById("player1Btn");
  console.log("Player 1 button:", player1Btn);
  if (player1Btn) {
    console.log("Adding click listener to Player 1 button");
    player1Btn.addEventListener("click", function(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log("Player 1 button clicked!");
      randomNumber1 = randomNum();
      console.log("Player 1 rolled:", randomNumber1);
      updateDice();
    });
  } else {
    console.error("Player 1 button not found!");
  }

  // Player 2 button click
  const player2Btn = document.getElementById("player2Btn");
  console.log("Player 2 button:", player2Btn);
  if (player2Btn) {
    console.log("Adding click listener to Player 2 button");
    player2Btn.addEventListener("click", function(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log("Player 2 button clicked!");
      randomNumber2 = randomNum();
      console.log("Player 2 rolled:", randomNumber2);
      updateDice();
    });
  } else {
    console.error("Player 2 button not found!");
  }
  
  console.log("Event listeners attached!");
});
