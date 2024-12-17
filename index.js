const startButton = document.getElementById("start-button");
const restartButton = document.getElementById("restart-button");
const startPage = document.getElementById("start-page");
const gamePage = document.getElementById("game");
const gameOverPage = document.getElementById("game-over");
const choices = document.querySelectorAll(".choice");
const playerChoiceDisplay = document.getElementById("player-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const winnerDisplay = document.getElementById("winner");

const options = ["rock", "paper", "scissors"];

// Show game page and hide start page on start button click
startButton.addEventListener("click", () => {
  startPage.style.display = "none";
  gamePage.style.display = "block";
});

// Restart the game
restartButton.addEventListener("click", () => {
  gameOverPage.style.display = "none";
  startPage.style.display = "block";
});

// Game logic
choices.forEach(choice => {
  choice.addEventListener("click", () => {
    const playerChoice = choice.dataset.choice;
    const computerChoice = getComputerChoice();
    const winner = determineWinner(playerChoice, computerChoice);

    playerChoiceDisplay.textContent = capitalize(playerChoice);
    computerChoiceDisplay.textContent = capitalize(computerChoice);
    winnerDisplay.textContent = winner;

    // If the player loses, show the Game Over page
    if (winner === "Computer Wins!") {
      setTimeout(() => {
        gamePage.style.display = "none";
        gameOverPage.style.display = "block";
      }, 1000); // Delay to show the result briefly
    }
  });
});

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

function determineWinner(player, computer) {
  if (player === computer) return "It's a Tie!";
  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "You Win!";
  } else {
    return "Computer Wins!";
  }
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
