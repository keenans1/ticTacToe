class Game {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this.player1Turn = true;
        this.player2Turn = false;
        this.draw = false;
        this.gameBoard = {
            1: null,
            2: null,
            3: null,
            4: null,
            5: null,
            6: null,
            7: null,
            8: null,
            9: null
        };
        this.turnCount = 1;
        this.startingPlayer = this.player1;
    }

    getCurrentPlayer() {
        if (this.player1Turn) {
            return this.player1;
        } else {
            return this.player2;
        }
    }

    play() {
        if (this.player1Turn) {
            this.player1Turn = false;
            this.player2Turn = true;
        } else {
            this.player1Turn = true;
            this.player2Turn = false;
        }
    }

    checkForWin() {
        var winner = null;
        if (this.gameBoard[1] === this.player1.token && this.gameBoard[2] === this.player1.token && this.gameBoard[3] === this.player1.token ||
            this.gameBoard[4] === this.player1.token && this.gameBoard[5] === this.player1.token && this.gameBoard[6] === this.player1.token ||
            this.gameBoard[7] === this.player1.token && this.gameBoard[8] === this.player1.token && this.gameBoard[9] === this.player1.token ||
            this.gameBoard[1] === this.player1.token && this.gameBoard[4] === this.player1.token && this.gameBoard[7] === this.player1.token ||
            this.gameBoard[2] === this.player1.token && this.gameBoard[5] === this.player1.token && this.gameBoard[8] === this.player1.token ||
            this.gameBoard[3] === this.player1.token && this.gameBoard[6] === this.player1.token && this.gameBoard[9] === this.player1.token ||
            this.gameBoard[1] === this.player1.token && this.gameBoard[5] === this.player1.token && this.gameBoard[9] === this.player1.token ||
            this.gameBoard[3] === this.player1.token && this.gameBoard[5] === this.player1.token && this.gameBoard[7] === this.player1.token) {
            winner = this.player1;
        } else if (this.gameBoard[1] === this.player2.token && this.gameBoard[2] === this.player2.token && this.gameBoard[3] === this.player2.token ||
            this.gameBoard[4] === this.player2.token && this.gameBoard[5] === this.player2.token && this.gameBoard[6] === this.player2.token ||
            this.gameBoard[7] === this.player2.token && this.gameBoard[8] === this.player2.token && this.gameBoard[9] === this.player2.token ||
            this.gameBoard[1] === this.player2.token && this.gameBoard[4] === this.player2.token && this.gameBoard[7] === this.player2.token ||
            this.gameBoard[2] === this.player2.token && this.gameBoard[5] === this.player2.token && this.gameBoard[8] === this.player2.token ||
            this.gameBoard[3] === this.player2.token && this.gameBoard[6] === this.player2.token && this.gameBoard[9] === this.player2.token ||
            this.gameBoard[1] === this.player2.token && this.gameBoard[5] === this.player2.token && this.gameBoard[9] === this.player2.token ||
            this.gameBoard[3] === this.player2.token && this.gameBoard[5] === this.player2.token && this.gameBoard[7] === this.player2.token) {
            winner = this.player2;
        }
        return winner;
    }

    checkDraw() {
        if (this.turnCount === 10) {
            this.draw = true;
        }
        return this.draw;
    }

    reset() {
        this.draw = false;
        this.turnCount = 1;
        for (var i = 1; i < 10; i++) {
            this.gameBoard[i] = null;
        }
    }

    swapStartingPlayer() {
        if (this.startingPlayer === this.player1) {
            this.startingPlayer = this.player2;
            this.player1Turn = false;
            this.player2Turn = true;
        } else {
            this.startingPlayer = this.player1;
            this.player1Turn = true;
            this.player2Turn = false;
        }
    }
}