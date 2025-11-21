// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function() {
  var randomNumber1 = randomNum();
  var randomNumber2 = randomNum();

  function randomNum() {
    var n = Math.floor(Math.random() * 6) + 1;
    return n;
  }

  // Dice 1
  const dice1 = document.querySelector(".img1");
  if (dice1) {
    dice1.setAttribute("src", `./images/dice${randomNumber1}.png`);
  }

  // Dice 2
  const dice2 = document.querySelector(".img2");
  if (dice2) {
    dice2.setAttribute("src", `./images/dice${randomNumber2}.png`);
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
});
