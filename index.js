const results = document.querySelector('.results');
const playerScoreElement = document.querySelector('.player');
const computerScoreElement = document.querySelector('.computer');
const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', game));

function game(e){
    const result = playRound(e.target.classList.value);
    results.textContent = result;
    // Update the score onto the screen
    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;
    // ANnounce a winner if a player reaches 5 points
    if (playerScore === 5 || computerScore === 5){
        if (playerScore === 5){
            results.textContent += " Congragulations, you won the game!";
        }
        else {
            results.textContent += " Sorry, you lost the game!"
        }
        // disabling the buttons
        buttons.forEach(button => button.removeEventListener('click', game));
    }
}

function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    if (choice < 1){
        return "rock";
    }
    else if (choice < 2){
        return "paper";
    }
    else{
        return "scissors";
    }
}

function playRound(playerSelection){
    playerSelection = playerSelection.toLowerCase();
    let computerSelection = getComputerChoice();
    switch (playerSelection) {
        case "rock":
            if (computerSelection == "rock"){
                return "Tie!";
            }
            else if (computerSelection == "paper"){
                computerScore++;
                return "You lose! Paper beats Rock.";
            }
            else {
                playerScore++;
                return "You win! Rock beats Scissors.";
            }
            break;
        case "paper":
            if (computerSelection == "paper"){
                return "Tie!";
            }
            else if (computerSelection == "rock"){
                playerScore++;
                return "You win! Paper beats Rock.";
            }
            else {
                computerScore++;
                return "You lose! Scissors beats Paper.";
            }
            break;
        case "scissors":
            if (computerSelection == "scissors"){
                return "Tie!";
            }
            else if (computerSelection == "paper"){
                playerScore++;
                return "You win! Scissors beats Paper.";
            }
            else {
                computerScore++;
                return "You lose! Rock beats Scissors.";
            }
            break;
    }
}

let round = 0;
let playerScore = 0;
let computerScore = 0;
