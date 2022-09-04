document.querySelector(".btn-shake").addEventListener("click", diceGame);

//Add flip animation to both dice image
function diceAnimation() {
  document.querySelector(".img1").classList.add("dice-flip");
  document.querySelector(".img2").classList.add("dice-flip");
}

function diceGame() {
  //Generating two random number of dice
  let randomDice1 = Math.floor(Math.random() * 6) + 1;
  let randomDice2 = Math.floor(Math.random() * 6) + 1;

  //Call diceAnimation function when click
  diceAnimation();

  //remove flip animation to dice image after 600ms
  setTimeout(function () {
    document.querySelector(".img1").classList.remove("dice-flip");
    document.querySelector(".img2").classList.remove("dice-flip");
  }, 600);

  //Changing Dice Image from 1-6 using setAttribute() method
  document.querySelector(".img1").setAttribute("src", "images/dice" + randomDice1 + ".png");
  document.querySelector(".img2").setAttribute("src", "images/dice" + randomDice2 + ".png");

  // Deciding the Winner
    // Dice equal = Draw
  if (randomDice1 === randomDice2) {
    document.querySelector("#main-section h1").textContent = "Draw!";

    // Dice Player 1 > Player 2 = Player 1 Win
  } else if (randomDice1 > randomDice2) {
    document.querySelector("#main-section h1").textContent = "Player 1 Win";

    // Dice Player 1 < Player 2 = Player 2 Win
  } else if (randomDice1 < randomDice2) {
    document.querySelector("#main-section h1").textContent = "Player 2 Win";
  }
}
