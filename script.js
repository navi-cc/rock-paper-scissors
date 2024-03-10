const playButton = document.querySelector('#play-button')
const mainMenu = document.querySelector('.main-menu');
const game = document.querySelector('.game-container')

playButton.addEventListener('click', () => {
    mainMenu.style.display = 'none';
    game.style.display = 'flex';
});



let playerScoreHolder = 0;
let computerScoreHolder = 0;
let round = 0;

function resetGame() {
    playerScoreHolder = 0;
    computerScoreHolder = 0;
    round = 0;

    playerScoreDisplay.textContent = 0;
    computerScoreDisplay.textContent = 0;
    stateRoundWinner.textContent = '';
}



const playerChoice = document.querySelector('.choices-container');
playerChoice.addEventListener('click', (e) => {

    let target = e.target;
    let computerChoice = getComputerChoice(); 

    switch (target.id) {

        case 'rock':
        gameScoring('rock', computerChoice);    
        break;

        case 'paper':
        gameScoring('paper', computerChoice);
        break;

        case 'scissors':
        gameScoring('scissors', computerChoice);
        break;
        
    }

});



const playerScoreDisplay = document.querySelector('#player-score');
const computerScoreDisplay = document.querySelector('#computer-score');

const winnerHolder = document.querySelector('.winner-holder');
const winner = document.querySelector('#winner');
const playAgainButton = document.querySelector('#play-again-btn');

function stateGameWinner()  {

    if (playerScoreHolder === 5) {
        winner.textContent = 'Player Wins The Game!';
    } winner.textContent = 'Computer Wins The Game!';

    if (playerScoreHolder === 5 || computerScoreHolder === 5) {
        document.body.style.backgroundColor = '#202020';
        game.style.display = 'none';
        winnerHolder.style.display = 'flex';
    }
    

    playAgainButton.addEventListener('click', () => {

        document.body.style.backgroundColor = '#fdfdfd';
        winnerHolder.style.display = 'none';
        game.style.display = 'flex';
        resetGame();
            
    });

}



const stateRoundWinner = document.querySelector('#round-winner');
function gameScoring(playerChoice, computerChoice) {

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
        playerScoreDisplay.textContent = playerScoreHolder;
        stateGameWinner();

    } else {
        ++computerScoreHolder;
        ++round;
        stateRoundWinner.textContent = `Computer wins in Round ${round}!`;
        computerScoreDisplay.textContent = computerScoreHolder;
        stateGameWinner();
    }

}



function getComputerChoice() {
    const choice = ["rock", "paper", "scissors"];
    const randomized = Math.floor(Math.random() * choice.length);
    return choice[randomized];
}