const table = document.querySelector('.table');
const restart = document.querySelector('.restart');
const score = document.querySelector('.score');
const scoreButton = document.querySelector('.show-score');

const player1Input = document.querySelector('.player1name');
const player2Input = document.querySelector('.player2name');

let player1Name = "Player 1";
let player2Name = "Player 2";

let player1Score = 0;
let player2Score = 0;

const board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let turn = 1;
let canPlay = true;

scoreButton.addEventListener('click', () => {
    displayScore();
})

restart.addEventListener('click', () => {
    board.forEach((value, index) => {
        board[index] = 0;
    })
    canPlay = true;
    turn = 1;
    const result = document.querySelector('.result');
    result.innerHTML = "";
    renderTableHtml();
})

player1Input.addEventListener('input', () => {
    if (player1Input.value.trim() !== "") {
        player1Name = player1Input.value;
    }
    else {
        player1Name = "Player 1";
    }
})

player2Input.addEventListener('input', () => {
    if (player2Input.value.trim() !== "") {
        player2Name = player2Input.value;
    }
    else {
        player2Name = "Player 2";
    }
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
    
        const win = checkWin();
        if (win === 1) {
            const result = document.querySelector('.result');
            result.innerHTML = `${player1Name} wins!`
            player1Score++;
            displayScore();
            canPlay = false;
        }
        else if (win === 2) {
            const result = document.querySelector('.result');
            result.innerHTML = `${player2Name} wins!`
            player2Score++;
            displayScore();
            canPlay = false;
        }
        else if (win === 3) {
            const result = document.querySelector('.result');
            result.innerHTML = "Tie!"
            displayScore();
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

function displayScore() {
    score.showModal();
    score.innerHTML = 
    `
    <div>
        ${player1Name}: ${player1Score}
        <br>
        ${player2Name}: ${player2Score}
        <button onclick="closeScore()">Close</button>
    </div>
    `;
}

function closeScore() {
    score.close();
}