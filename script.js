const playButton = document.querySelector('#play-button')
const foo = document.querySelector('.game');
const faa = document.querySelector('.game-container')

playButton.addEventListener('click', () => {
    foo.style.display = 'none';
    faa.style.display = 'flex';
});


let playerScoreHolder = 0;
let computerScoreHolder = 0;

const playerChoice = document.querySelector('.choices-container');

playerChoice.addEventListener('click', (e) => {

    let target = e.target;
    let computerChoice;  

    const playerScore = document.querySelector('#player-score');
    const computerScore = document.querySelector('#computer-score');

    switch (target.id) {

        case 'rock':
        computerChoice = getComputerChoice();
        scoring('rock', computerChoice);
        stateGameWinner(playerScoreHolder, computerScoreHolder);
        playerScore.textContent = playerScoreHolder;
        computerScore.textContent = computerScoreHolder;

        break;

        case 'paper':
        computerChoice = getComputerChoice();
        scoring('paper', computerChoice);
        stateGameWinner(playerScoreHolder, computerScoreHolder);
        playerScore.textContent = playerScoreHolder;
        computerScore.textContent = computerScoreHolder;

        break;

        case 'scissors':
        computerChoice = getComputerChoice();
        scoring('scissors', computerChoice);
        stateGameWinner(playerScoreHolder, computerScoreHolder);
        playerScore.textContent = playerScoreHolder;
        computerScore.textContent = computerScoreHolder;
        
        break;
    }
});



const winnerHolder = document.querySelector('.winner-holder');
const winner = document.querySelector('#winner');
const playAgainButton = document.querySelector('#play-again-btn');



function stateGameWinner(playerScoreHolder, computerScoreHolder) {
    
    if (playerScoreHolder === 5) {

        document.body.style.backgroundColor = '#202020';
        faa.style.display = 'none';
        winnerHolder.style.display = 'flex';

        winner.textContent = 'Player Wins The Game!'

        playAgainButton.addEventListener('click', () => {
            document.body.style.backgroundColor = '#fdfdfd';
            playerScoreHolder = 0;
            computerScoreHolder = 0;

            winnerHolder.style.display = 'none';
            faa.style.display = 'flex';
        });

    }

    if (computerScoreHolder === 5) {

        document.body.style.backgroundColor = '#202020';
        faa.style.display = 'none';
        winnerHolder.style.display = 'flex';

        winner.textContent = 'Computer Wins The Game!'

        playAgainButton.addEventListener('click', () => {
            document.body.style.backgroundColor = '#fdfdfd';
            
            playerScoreHolder = 0;
            computerScoreHolder = 0;

            winnerHolder.style.display = 'none';
            faa.style.display = 'flex';
        });

    }

}




const stateRoundWinner = document.querySelector('#round-winner');
let round = 0;

function scoring(playerChoice, computerChoice) {

    if (playerChoice === computerChoice) {
        ++round;
        stateRoundWinner.textContent = `Tie in Round ${round}!`;
    } else if ((playerChoice === "paper" && computerChoice === "rock") ||
               (playerChoice === "scissors" && computerChoice === "paper") ||
               (playerChoice === "rock") && computerChoice === "scissors") 
    {
        ++playerScoreHolder;
        ++round;
        stateRoundWinner.textContent = `Player wins in Round ${round}!`;

    } else {

        ++computerScoreHolder;
        ++round;
        stateRoundWinner.textContent = `Computer wins in Round ${round}!`;

    }

}


function getComputerChoice() {

    const choice = ["rock", "paper", "scissors"];
    const randomized = Math.floor(Math.random() * choice.length);

    return choice[randomized];
}








































