let playerScore = 0;
let computerScore = 0;
let currentRound = 1;

const MAX_ROUNDS = 5;
const VALID_MOVES = ['rock', 'paper', 'scissor'];

const choices = document.querySelector("#choices");
const results = document.querySelector("#results");
const finalScore = document.querySelector("#final_score");

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    return VALID_MOVES[randomNumber];
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "tie";
    }

    if (
        (playerChoice === 'rock' && computerChoice === 'scissor') ||
        (playerChoice === 'scissor' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'rock')
    ) {
        return "player";
    }

    return "computer";
}

function handleRound(playerChoice, round) {
    if (round === MAX_ROUNDS) {
        updateScore(playRound(playerChoice, getComputerChoice()), round);
        showFinalScore();
        return false;
    }

    const computerChoice = getComputerChoice();
    const result = playRound(playerChoice, computerChoice);
    console.log(`${playerChoice} - ${computerChoice} = ${result} wins`);

    updateScore(result, round);

    return true;
}

function updateScore(result, round) {
    if (result === "player") {
        playerScore++;
        results.textContent = `Round ${round}: Player wins!`;
    }
    else if (result === "computer") {
        computerScore++;
        results.textContent = `Round ${round}: Computer wins!`;
    } else {
        results.textContent = `Round ${round}: It's a tie!`;
    }
}

function showFinalScore() {
    if (playerScore > computerScore) {
        finalScore.textContent = `You win the game! 
        Your score: ${playerScore} 
        Computer score: ${computerScore}`;
    } else if (computerScore > playerScore) {
        finalScore.textContent = `Computer wins the game! 
        Your score: ${playerScore} 
        Computer score: ${computerScore}`;
    } else {
        finalScore.textContent = `It's a tie game!
        Your score: ${playerScore} 
        Computer score: ${computerScore}`;
    }
}

choices.addEventListener("click", (e) => {
    if (VALID_MOVES.includes(e.target.id)) {
        if (handleRound(e.target.id, currentRound)) {
            currentRound++;
        }
    } else {
        console.error(`${e.target.id} is not a valid game option! - Valid moves: ${VALID_MOVES.join(', ')}`)
    }
});