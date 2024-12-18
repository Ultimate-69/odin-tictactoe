const table = document.querySelector('.table');
const restart = document.querySelector('.restart');

const board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let turn = 1;
let canPlay = true;

restart.addEventListener('click', () => {
    location.reload();
})

renderTableHtml();

function renderTableHtml() 
{
    table.innerHTML = 
    `
                <div class="part">
                    <div id="p0" class="spot">${board[0]}</div>
                    <div id="p1" class="spot">${board[1]}</div>
                    <div id="p2" class="spot">${board[2]}</div>
                </div>
                <div class="separator"></div>
                <div class="part">
                    <div id="p3" class="spot">${board[3]}</div>
                    <div id="p4" class="spot">${board[4]}</div>
                    <div id="p5" class="spot">${board[5]}</div>
                </div>
                <div class="separator"></div>
                <div class="part">
                    <div id="p6" class="spot">${board[6]}</div>
                    <div id="p7" class="spot">${board[7]}</div>
                    <div id="p8" class="spot">${board[8]}</div>
                </div>
    `;

    
    const spots = document.querySelectorAll('.spot');

    spots.forEach((spot) => {
        spot.addEventListener('click', () => {
            playTurn(parseInt(spot.id.slice(1), 10));
        });
        if (spot.innerHTML === "0") {
            spot.innerHTML = ""
        }
        else if (spot.innerHTML === "1") {
            spot.innerHTML = "X"
        }
        else if (spot.innerHTML === "2") {
            spot.innerHTML = "O"
        }
    })

}

function playTurn(position) {
    if (board[position] === 0 && canPlay) {
        board[position] = turn;

        if (turn === 1) {
            turn = 2;
        }
        else {
            turn = 1;
        }
    
        console.log(board);
        const win = checkWin();
        if (win === 1) {
            const result = document.querySelector('.result');
            result.innerHTML = "Player 1 wins!"
            canPlay = false;
        }
        else if (win === 2) {
            const result = document.querySelector('.result');
            result.innerHTML = "Player 2 wins!"
            canPlay = false;
        }
        else if (win === 3) {
            const result = document.querySelector('.result');
            result.innerHTML = "Tie!"
            canPlay = false;
        }
    }

    renderTableHtml();
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