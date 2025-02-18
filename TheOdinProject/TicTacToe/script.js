const board = document.getElementById("board");
const cells = document.querySelectorAll('.cell');
const status = document.getElementById("status");
const restartButton = document.getElementById("restartButton");

let currentPlayer = 'X';
let gameActive = true;
let gameState = ['','','','','','','','',''];

const winningCombinations = [
    // 0 1 2 
    // 3 4 5
    // 6 7 8
    [0, 1, 2], [3, 4, 5], [6, 7, 8] // rows
    ,[0, 3, 6], [1, 4, 7], [2, 5, 8] // columns
    ,[0, 4, 8], [2, 4, 6] //diagonals
]

function handleCellClick(e) {
    let cell = e.target;
    let cellIndex = Array.from(cells).indexOf(cell);

    if (gameState[cellIndex] !== '' || !gameActive) return;

    gameState[cellIndex] = currentPlayer;
    cell.textContent = currentPlayer;

    if (checkWin()) {
        gameActive = false;
        status.textContent = `Player ${currentPlayer} wins!`;
        return;
    }

    if (checkDraw()) {
        gameActive = false;
        status.textContent = "Game ended in a draw!";
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    status.textContent = `Player ${currentPlayer}'s turn`;

    function checkWin() {
        return winningCombinations.some(combination => {
            return combination.every(index => {
                return gameState[index] === currentPlayer;
            });
        });
    }

    function checkDraw() {
        return gameState.every(cell => cell !== '');
    }

    
    
}

// Event listener
cells.forEach(cell => {
    cell.addEventListener('click', handleCellClick)
})
