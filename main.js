var grid = document.querySelector('.grid-container');
var currentTurnDisplay = document.getElementById('current-players-turn');
var player1WinCountDisplay = document.getElementById('player-1-win-count');
var player2WinCountDisplay = document.getElementById('player-2-win-count');

var player1 = new Player(1, 'X', 0);
var player2 = new Player(2, 'O', 0);
var currentGame = new Game(player1, player2);

var gameBoard = currentGame.gameBoard;
var currentBox = null;

currentTurnDisplay.innerText = `It's ${player1.token}'s Turn`;
player1WinCountDisplay.innerText = player1.wins + ' Wins';
player2WinCountDisplay.innerText = player2.wins + ' Wins';

console.log(currentGame);

grid.addEventListener('click', markBox);

function markBox() {

    var currentId = event.target.id;

    if (currentGame.gameBoard[currentId] === null) {
        var currentPlayer = currentGame.getCurrentPlayer();
        currentGame.gameBoard[currentId] = currentPlayer.token;
        currentGame.play();
    }

    var winner = currentGame.checkForWin()

    if (winner === currentGame.player1) {
        currentGame.player1.increaseWins();
        currentGame.reset();
    } else if (winner === currentGame.player2) {
        currentGame.player2.increaseWins();
        currentGame.reset();
    }


    console.log(currentGame.checkForWin());

    console.log(currentGame);
}