const choices = ["rock", "paper", "scissors"];

function computerChoice() {
    // Randomize the choice corresponding to the const choices 
    return choices[Math.floor(Math.random() * choices.length)];
}

function playerChoice() {
    let validChoice = false;
    let playerChoiceIndex;
  
    while (!validChoice) {
      playerChoiceIndex = parseInt(prompt("Enter a number [1-3, Rock(1), Paper(2), Scissors(3)] corresponding to your choice:"));
  
      // Check if the input is a valid number within the choices array range 
      if (
        !isNaN(playerChoiceIndex) &&
        playerChoiceIndex >= 1 &&
        playerChoiceIndex <= choices.length
      ) {
        validChoice = true;
        // Subtract 1 from the index to match the array index
        playerChoiceIndex--;
      } else {
        alert("Invalid input. Please enter a number between 1 and 3.");
      }
    }
  
    return choices[playerChoiceIndex]; // Return the selected choice from the array
}

// Function for deciding the game's outcome
function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a draw!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    return "You win!";
  } else {
    return "Computer wins!";
  }
}

// Play a single round
function playRound() {
  const computerPick = computerChoice();
  const playerPick = playerChoice();

  console.log("Computer chose:", computerPick);
  console.log("You chose:", playerPick);

  const outcome = determineWinner(playerPick, computerPick);
  console.log(outcome);
}

// Main game loop
function playGame() {
  do {
    playRound();
  } while (confirm("Play another round?"));

  console.log("Thanks for playing!");
}

playGame();
