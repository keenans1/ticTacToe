class Game {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this.player1Wins = player1.wins;
        this.player2Wins = player2.wins;
        this.totalWins = 0;
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

        if (this.gameBoard[1] === this.player1.token && this.gameBoard[2] === this.player1.token && this.gameBoard[3] === this.player1.token) {
            winner = this.player1;
        } else if (this.gameBoard[4] === this.player1.token && this.gameBoard[5] === this.player1.token && this.gameBoard[6] === this.player1.token) {
            winner = this.player1;
        } else if (this.gameBoard[7] === this.player1.token && this.gameBoard[8] === this.player1.token && this.gameBoard[9] === this.player1.token) {
            winner = this.player1;
        } else if (this.gameBoard[1] === this.player1.token && this.gameBoard[4] === this.player1.token && this.gameBoard[7] === this.player1.token) {
            winner = this.player1;
        } else if (this.gameBoard[2] === this.player1.token && this.gameBoard[5] === this.player1.token && this.gameBoard[8] === this.player1.token) {
            winner = this.player1;
        } else if (this.gameBoard[3] === this.player1.token && this.gameBoard[6] === this.player1.token && this.gameBoard[9] === this.player1.token) {
            winner = this.player1;
        } else if (this.gameBoard[1] === this.player1.token && this.gameBoard[5] === this.player1.token && this.gameBoard[9] === this.player1.token) {
            winner = this.player1;
        } else if (this.gameBoard[3] === this.player1.token && this.gameBoard[5] === this.player1.token && this.gameBoard[7] === this.player1.token) {
            winner = this.player1;
        } else if (this.gameBoard[1] === this.player2.token && this.gameBoard[2] === this.player2.token && this.gameBoard[3] === this.player2.token) {
            winner = this.player2;
        } else if (this.gameBoard[4] === this.player2.token && this.gameBoard[5] === this.player2.token && this.gameBoard[6] === this.player2.token) {
            winner = this.player2;
        } else if (this.gameBoard[7] === this.player2.token && this.gameBoard[8] === this.player2.token && this.gameBoard[9] === this.player2.token) {
            winner = this.player2;
        } else if (this.gameBoard[1] === this.player2.token && this.gameBoard[4] === this.player2.token && this.gameBoard[7] === this.player2.token) {
            winner = this.player2;
        } else if (this.gameBoard[2] === this.player2.token && this.gameBoard[5] === this.player2.token && this.gameBoard[8] === this.player2.token) {
            winner = this.player2;
        } else if (this.gameBoard[3] === this.player2.token && this.gameBoard[6] === this.player2.token && this.gameBoard[9] === this.player2.token) {
            winner = this.player2;
        } else if (this.gameBoard[1] === this.player2.token && this.gameBoard[5] === this.player2.token && this.gameBoard[9] === this.player2.token) {
            winner = this.player2;
        } else if (this.gameBoard[3] === this.player2.token && this.gameBoard[5] === this.player2.token && this.gameBoard[7] === this.player2.token) {
            winner = this.player2;
        }

        // if (winner != null) {
        //     this.reset();
        // }

        return winner;
    }

    calculateTotalWins() {
        this.totalWins = player1.wins + player2.wins;
    }

    callDraw() {
        this.draw = true;
    }

    reset() {
        this.player1Turn = true;
        this.player2Turn = false;

        for (var i = 1; i < 10; i++) {
            this.gameBoard[i] = null;
        }
    }
}


// A Game should include:
// Two Player instances
// A way to keep track of which player’s turn it currently is

// A way to detect when a game is a draw (no one has won)
// A way to reset the Game’s board to begin a new game


// A way to keep track of the data for the game board
// A way to check the Game’s board data for win conditions




// data section in table
// in dex positions