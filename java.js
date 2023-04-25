function randomInt(max) {
    return Math.floor(Math.random() * max)
}

let choice = randomInt(3);
    
    function getComputerChoice() {
    if (choice == 0) return "rock";
    if (choice == 1) return "paper";
    if (choice == 2) return "scissors";
}

let computerSelection = getComputerChoice();
let playerSelection = prompt("Choose between rock, paper, or scissors.")
let srtingPlayerSelection = String(playerSelection);
let lowerPlayerSelection = String(playerSelection).toLowerCase();
console.log(computerSelection);
console.log(lowerPlayerSelection);

function playRound(lowerPlayerSelection, computerSelection) {
    
    if (lowerPlayerSelection === "rock") {
        if (computerSelection === "rock") {
            console.log("Draw!");
        }
        else if(computerSelection === "paper") {
            console.log("You Lose!");
        } else {
            console.log("You Win!");
        }
    } else if (lowerPlayerSelection === "paper") {
        if (computerSelection === "rock") {
            console.log("You win!");
        } else if (computerSelection === "paper") {
            console.log("Draw!");
        } else {
            console.log("You lose!")
        }
    } else {
        if (computerSelection === "rock") {
            console.log("You Lose!");
        } else if (computerSelection === "paper") {
            console.log("You Win!")
        } else {
            console.log("Draw!")
        }
    }
    }

console.log(playRound(lowerPlayerSelection, computerSelection));
