var grid = document.querySelector('.grid-container');
var boxes = document.querySelectorAll('.grid-item');
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
    var currentPlayer = currentGame.getCurrentPlayer();

    if (currentGame.gameBoard[currentId] === null) {
        displayUserToken(currentId, currentPlayer);
        currentGame.gameBoard[currentId] = currentPlayer.token;
        currentGame.play();
        currentGame.turnCount++;
    }

    var winner = currentGame.checkForWin()

    if (winner === currentGame.player1) {
        currentGame.player1.increaseWins();
        currentGame.reset();
        clearDisplayBoard();
        //updateWinCountDisplay();
        //updatePageText(currentPlayer);
    } else if (winner === currentGame.player2) {
        currentGame.player2.increaseWins();
        currentGame.reset();
        clearDisplayBoard();
        //updateWinCountDisplay();
        //updatePageText(currentPlayer);
    }

    console.log(currentGame.checkForWin());
    console.log(currentGame);

    currentGame.callDraw();
    updateWinCountDisplay();
}

function updateWinCountDisplay() {
    player1WinCountDisplay.innerText = player1.wins + ' Wins';
    player2WinCountDisplay.innerText = player2.wins + ' Wins';
}

function displayUserToken(currentId, currentPlayer) {
    for (var i = 0; i < boxes.length; i++) {
        if (boxes[i].id === currentId) {
            boxes[i].innerText = currentPlayer.token;
        }
    }
}

function clearDisplayBoard() {
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].innerText = '';
    }
}