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
var currentPlayer = currentGame.startingPlayer;

currentTurnDisplay.innerText = `It's ${player1.token}'s Turn`;
player1WinCountDisplay.innerText = player1.wins + ' Wins';
player2WinCountDisplay.innerText = player2.wins + ' Wins';

grid.addEventListener('click', markBox);

function markBox() {
    var currentId = event.target.id;
    if (currentGame.gameBoard[currentId] === null) {
        displayUserToken(currentId, currentPlayer);
        currentGame.gameBoard[currentId] = currentPlayer.token;
        alternateCurrentPlayer();
        currentGame.play();
        displayTurn(currentPlayer);
        currentGame.turnCount++;
    }
    var winner = currentGame.checkForWin()
    if (winner === currentGame.player1) {
        runWinner(currentGame.player1);
    } else if (winner === currentGame.player2) {
        runWinner(currentGame.player2);
    } else if (currentGame.checkDraw()) {
        currentTurnDisplay.innerText = `It's a draw!`;
        currentGame.swapStartingPlayer();
        currentPlayer = currentGame.getCurrentPlayer();
        setTimeout(() => {
            currentGame.reset();
            clearDisplayBoard();
            return displayTurn(currentPlayer);
        }, 2000)
    }
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

function disableBoard() {
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].disabled = true;
    }
}

function enableBoard() {
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].disabled = false;
    }
}

function displayTurn(currentPlayer) {
    if (currentPlayer === currentGame.player1) {
        currentTurnDisplay.innerText = `It's ${currentGame.player1.token}'s Turn`;
    } else {
        currentTurnDisplay.innerText = `It's ${currentGame.player2.token}'s Turn`;
    }
}

function displayWinner(winner) {
    currentTurnDisplay.innerText = `Player ${winner.token} has won!`;
}

function alternateCurrentPlayer() {
    if (currentPlayer === currentGame.player1) {
        currentPlayer = currentGame.player2;
    } else {
        currentPlayer = currentGame.player1;
    }
}

function runWinner(winningPlayer) {
    currentGame.swapStartingPlayer();
    currentPlayer = currentGame.getCurrentPlayer();
    disableBoard();
    winningPlayer.increaseWins();
    currentGame.reset();
    displayWinner(winningPlayer);
    setTimeout(() => {
        clearDisplayBoard();
        return [enableBoard(), displayTurn(currentPlayer)];
    }, 2000)
}