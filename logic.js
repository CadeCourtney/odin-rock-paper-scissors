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
    let playerChoice = player, computerChoice = computer.toLowerCase();
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

function game(choice) {
    // const result = document.querySelector(".result")
    const body = document.querySelector('body');
    // if(result != null) {
    //     body.removeChild(result);
    // }
    let winner, playerScore = 0, computerScore = 0, tieScore = 0;
        // let playerSelection = prompt("Rock, Paper, or Scissors...");
        let computerSelection = getComputerChoice();
        winner = playRound(choice, computerSelection);
        console.log(winner);
        if (winner == 0) {
            const win = document.querySelector(".result");
            // win.classList.add("result");
            win.textContent="You Win!";
            body.appendChild(win);
            playerScore++;
        } 
        else if (winner == 1) {
            const lose = document.querySelector(".result");
            // lose.classList.add("result");
            lose.textContent="You Lose!";
            body.appendChild(lose);
            computerScore++;
            const score = document.querySelector(".score");
        }
        else {
            const tie = document.querySelector(".result");
            // tie.classList.add("result");
            tie.textContent="Tie!";
            body.appendChild(tie);
            // tieScore++;
        }
    
    if (playerScore > computerScore) {
        // console.log("You win!");
        // return "You win!";
    }
    else {
        // console.log("You lose!");
        // return "You lose!";
    }
}


function removeTransition(e) {
    if (e.propertyName !== 'background-color') return;
    e.target.classList.remove('clicked');
  }

function playerSelection(e) {
    console.log(e.target.id);
    const choice = document.querySelector(`img[id=${e.target.id}]`);
    choice.classList.add('clicked');
    game(e.target.id.toString());
}

const choices = Array.from(document.querySelectorAll('.choice'))
// choices.forEach(choice => choice.addEventListener('transitionend', removeTransition));
choices.forEach(choice => choice.addEventListener('click', playerSelection))
choices.forEach(choice => choice.addEventListener('transitionend', removeTransition));

// game();
// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(computerSelection)
// console.log(playRound(playerSelection, computerSelection)); 