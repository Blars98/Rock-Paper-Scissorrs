let playerScore = 0;
let computerScore = 0;


function game(){

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
    let lowerPlayerSelection = String(playerSelection).toLowerCase();
    console.log(computerSelection);
    console.log(lowerPlayerSelection);

    function playRound(lowerPlayerSelection, computerSelection) {

        if (lowerPlayerSelection === "rock") {
            if (computerSelection === "rock") {
                return "Draw!";
            }
            else if(computerSelection === "paper") {
                computerScore++ ;
                return "You Lose!"
            } else {
                playerScore++ ;
                return "You Win!";
            }
        } else if (lowerPlayerSelection === "paper") {
            if (computerSelection === "rock") {
                playerScore++ ;
                return "You Win!";
            } else if (computerSelection === "paper") {
                return "Draw!";
            } else {
                computerScore++ ;
                return "You Lose!";
            }
        } else {
            if (computerSelection === "rock") {
                computerScore++ ;
                return "You Lose!";
            } else if (computerSelection === "paper") {
                playerScore++ ;
                return "You Win!";
            } else {
                return "Draw!"
            }
        }
        }

        console.log(playRound(lowerPlayerSelection, computerSelection));
    
    function scoreKeeper() {
        if(playerScore >= 5) {
            return "You win the game!"
        } else if(computerScore >= 5) {
            return "The computer wins the game!"
        } else {
            return "Next Round!"
        }
    }

        console.log(playerScore);
        console.log(computerScore);
        console.log(scoreKeeper());
    }

game();
game();
game();
game();
game();