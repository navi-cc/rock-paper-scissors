let playerScore = 0;
let computerScore = 0;

playRound();

function getComputerChoice() {

    const choice = ["rock", "paper", "scissors"];
    const randomized = Math.floor(Math.random() * 3);

    return choice[randomized];
}


function playRound() {

    let promptPlayerChoice;
    let playerChoice;
    let computerChoice;
    let results;

        
    while (playerScore <= 5 && computerScore <= 5) {

        promptPlayerChoice = prompt("Rock, Paper, or Scissors?");

            if (promptPlayerChoice) {

                playerChoice = promptPlayerChoice.toLowerCase();
                computerChoice = getComputerChoice();
                results = scoring(playerChoice, computerChoice);

                alert(results);

                alert("Scoreboard:\nPlayer: "+ playerScore + 
                "\nComputer:" + " " + computerScore);

                if (playerScore === 5) {

                    alert("PLAYER WINS!");
                    break;

                    
                } else if (computerScore === 5) {

                    alert("COMPUTER WINS");
                    break;
            
                }

        } else continue;


    }  

}


function scoring(playerChoice, computerChoice) {

    if (playerChoice == computerChoice) {
        return "Tie!";
    } else if ((playerChoice == "paper" && computerChoice == "rock") ||
               (playerChoice == "scissors" && computerChoice == "paper") ||
               (playerChoice == "rock") && computerChoice == "scissors") 
    {
        ++playerScore;
        return "Player Wins this round!"

    } else {

        ++computerScore;
        return "Computer Wins this round"

    }


}