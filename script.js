const VALID_MOVES = ['rock', 'paper', 'scissors'];

function getPlayerChoice() {
    let playerChoice;

    do {
        playerChoice = prompt("Enter: rock, paper or scissors").toLowerCase();
    } while (!VALID_MOVES.includes(playerChoice));

    return playerChoice;
}

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    return VALID_MOVES[randomNumber];
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    }

    if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'scissors' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'rock')
    ) {
        return "Player wins!";
    }

    return "Computer wins!";
}


function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let round = 1; round <= 5; round++) {
        const playerChoice = getPlayerChoice();
        const computerChoice = getComputerChoice();

        const result = playRound(playerChoice, computerChoice);

        if (result === "Player wins!") {
            playerScore++;
        } else if (result === "Computer wins!") {
            computerScore++;
        }

        console.log(`Round ${round}: 
            Player chose: ${playerChoice}
            Computer chose: ${computerChoice}
            ${result}`);
    }

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

game();