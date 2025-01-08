// The options for the game
const VALID_MOVES = ['rock', 'paper', 'scissors'];

// Get the player's choice
function getPlayerChoice() {
    let playerChoice;

    do {
        playerChoice = prompt("Enter: rock, paper or scissors").toLowerCase();
    } while (!VALID_MOVES.includes(playerChoice));

    return playerChoice;
}

// Get the computer's choice
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    return VALID_MOVES[randomNumber];
}

// Determine the winner of a round
function playRound(playerChoice, computerChoice) {
    // Check if it's a tie
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    }

    // Test if the player wins
    if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'scissors' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'rock')
    ) {
        return "Player wins!";
    }

    // If it isn't a tie, and the player doesn't win
    // Then the computer wins
    return "Computer wins!";
}

// The game loop
function game() {
    let playerScore = 0;
    let computerScore = 0;

    // We play 5 rounds
    for (let round = 1; round <= 5; round++) {
        // Get the player's choice and the computer's choice
        const playerChoice = getPlayerChoice();
        const computerChoice = getComputerChoice();

        // Play the round
        const result = playRound(playerChoice, computerChoice);

        // Update the scores
        if (result === "Player wins!") {
            playerScore++;
        } else if (result === "Computer wins!") {
            computerScore++;
        }

        // Show the round result
        console.log(`Round ${round}: 
            Player chose: ${playerChoice}
            Computer chose: ${computerChoice}
            ${result}`);
    }

    // Show the final scores and the winner
    if (playerScore > computerScore) {
        console.log(`You win the game! 
            Your score: ${playerScore} 
            Computer score: ${computerScore}`);
    } else if (computerScore > playerScore) {
        console.log(`Computer wins the game! 
            Your score: ${playerScore} 
            Computer score: ${computerScore}`);
    } else {
        console.log("It's a tie game!");
    }
}

// Start the game
game();