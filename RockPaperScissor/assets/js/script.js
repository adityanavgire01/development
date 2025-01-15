// Variables to track scores
let playerScore = 0;
let computerScore = 0;

// Get references to DOM elements
const resultMessage = document.createElement('p'); // For round results
const scoreBoard = document.createElement('div'); // For displaying scores

// Function to get a random computer choice
function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

// Function to determine the winner of a round
function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  }
  if (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Scissors" && computerChoice === "Paper")
  ) {
    playerScore++;
    return `You win! ${playerChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    return `You lose! ${computerChoice} beats ${playerChoice}`;
  }
}

// Function to reset the game
function resetGame() {
  playerScore = 0;
  computerScore = 0;
  resultMessage.textContent = "Game reset. Let's play again!";
  updateScoreBoard();
}

// Function to update the score display
function updateScoreBoard() {
  scoreBoard.innerHTML = `
    <p>Player Score: ${playerScore}</p>
    <p>Computer Score: ${computerScore}</p>
  `;
}

// Initial setup
function initGame() {
  const main = document.querySelector('main');
  const buttonContainer = document.createElement('div');
  const resetButton = document.createElement('button');

  // Create and style buttons
  ["Rock", "Paper", "Scissors"].forEach((choice) => {
    const button = document.createElement('button');
    button.textContent = choice;
    button.addEventListener('click', () => {
      const computerChoice = getComputerChoice();
      const roundResult = playRound(choice, computerChoice);
      resultMessage.textContent = roundResult;
      updateScoreBoard();

      // Check if game over
      if (playerScore === 3 || computerScore === 3) {
        resultMessage.textContent += ` ${
          playerScore === 3 ? "You" : "Computer"
        } win the game!`;
        buttonContainer.style.display = 'none';
        resetButton.style.display = 'inline-block';
      }
    });
    buttonContainer.appendChild(button);
  });

  // Add reset button
  resetButton.textContent = "Play Again";
  resetButton.style.display = 'none';
  resetButton.addEventListener('click', () => {
    resetGame();
    buttonContainer.style.display = 'flex';
    resetButton.style.display = 'none';
  });

  // Append elements to the DOM
  main.appendChild(scoreBoard);
  main.appendChild(resultMessage);
  main.appendChild(buttonContainer);
  main.appendChild(resetButton);

  updateScoreBoard();
}

initGame();
