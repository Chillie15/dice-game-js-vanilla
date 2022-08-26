function diceGame() {
  //Generating two random number of dice
  var randomDice1 = Math.floor(Math.random() * 6) + 1;
  var randomDice2 = Math.floor(Math.random() * 6) + 1;

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
