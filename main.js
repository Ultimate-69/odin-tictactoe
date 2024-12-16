const board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let turn = 1;

function playTurn(position) {
    if (board[position] === 0) {
        board[position] = turn;

        if  (turn === 1) {
            turn = 2;
        }
        else {
            turn = 1;
        }
    
        console.log(board);
        const win = checkWin();
        if (win === 1) {
            console.log('player 1 wins!');
        }
        else if (win === 2) {
            console.log('player 2 wins!');
        }
        else if (win === 3) {
            console.log('tie!');
        }
    }

}

function checkWin() {
    if (board[0] === board[1] && board[0] === board[2] && board[0] != 0) {
        if (board[0] === 1) {
            return 1;
        }
        else {
            return 2;
        }
    }
    else if (board[0] === board[3] && board[0] === board[6] && board[0] != 0) {
        if (board[0] === 1) {
            return 1;
        }
        else {
            return 2;
        }
    }
    else if (board[0] === board[4] && board[0] === board[8] && board[0] != 0) {
        if (board[0] === 1) {
            return 1;
        }
        else {
            return 2;
        }
    }
    else if (board[1] === board[4] && board[1] === board[7] && board[1] != 0) {
        if (board[1] === 1) {
            return 1;
        }
        else {
            return 2;
        }
    }
    else if (board[2] === board[5] && board[2] === board[8] && board[2] != 0) {
        if (board[2] === 1) {
            return 1;
        }
        else {
            return 2;
        }
    }
    else if (board[2] === board[4] && board[2] === board[6] && board[2] != 0) {
        if (board[2] === 1) {
            return 1;
        }
        else {
            return 2;
        }
    }
    else if (board[3] === board[4] && board[3] === board[5] && board[3] != 0) {
        if (board[3] === 1) {
            return 1;
        }
        else {
            return 2;
        }
    }
    else if (board[6] === board[7] && board[6] === board[8] && board[6] != 0) {
        if (board[6] === 1) {
            return 1;
        }
        else {
            return 2;
        }
    }

    board.forEach((value) => {
        if (value === 0) {
            return 0;
        }
        else {
            return 3;
        }
    })
}