const board = document.getElementById("board");
const cells = document.querySelectorAll('cell');
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
