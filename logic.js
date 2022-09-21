function getComputerChoice() {
    let choice = (Math.floor(Math.random() * 100) + 1) % 3;
    // console.log(choice);
    switch(choice) {
        case 0:
            return "rock";
        case 1: 
            return "paper";
        case 2:
            return "scissors";
    }
}

function playRound(player, computer) {
    let playerChoice = player.toLowerCase(), computerChoice = computer.toLowerCase();
    switch(true) {
        case(playerChoice === computerChoice):
            // return "Tie!";
            return 2;
        case(playerChoice == "rock" && computerChoice == "paper"):
            // return "You lose! Paper beats Rock";
            return 0;
        case(playerChoice == "rock" && computerChoice == "scissors"):
            // return "You win! Rock beats Scissors";
            return 1;
        case(playerChoice == "paper" && computerChoice == "rock"):
            // return "You win! Paper beats Rock";
            return 1;
        case(playerChoice == "paper" && computerChoice == "scissors"):
            // return "You lose! Scissors beats Paper";
            return 0;
        case(playerChoice == "scissors" && computerChoice == "rock"):
            // return "You lose! Rock beats Scissors";
            return 0;
        case(playerChoice == "scissors" && computerChoice == "paper"):
            // return "You win! Scissors beats Paper";
            return 1;
        default:
            // return "What have you done?";
            return 2;
    }
}

function game() {
    let winner, playerScore = 0, computerScore = 0;
    for(var i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, Paper, or Scissors...");
        let computerSelection = getComputerChoice();
        winner = playRound(playerSelection, computerSelection);
        if (winner == 0) {
            playerScore++;
        } 
        else if (winner == 1) {
            computerScore++;
        }
        // else {
        //     ii--;
        // }
    }
    if (playerScore > computerScore) {
        console.log("You win!");
        // return "You win!";
    }
    else {
        console.log("You lose!");
        // return "You lose!";
    }
}

game();
// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(computerSelection)
// console.log(playRound(playerSelection, computerSelection)); 