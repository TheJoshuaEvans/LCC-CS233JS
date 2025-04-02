// Joshua Evans - 2025-04-01
/*  Overview
    This application simulates a tic tac toe game.

    Global variables are used to handle the game state and the function handleClick is associated with the
    click event handler for each square on the board.

    There are lots of  "helper" functions.  Comments in the code describe each of these functions
*/

/** If it is X's turn */
let xIsNext = true;

/**
 * The game data, represents the 9 square of the board. This array does NOT contain
 * UI elements, just strings
 *
 * @type {string[]}
 **/
const squares = Array(9).fill(null);

/** The winning line. An empty array if there is no winner */
let winningLine = [];

/** Array containing all possible winning square combinations representing lines */
const victoryLines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// --------------------------------- PART 1 --------------------------------------- //
/**
 * Initializes the game by binding the click event to all squares
 */
function init()
{
  const uiSquares = Array.from(document.getElementsByName('square'));

  uiSquares.forEach((square) => {
    square.onclick = handleClick;
  });
}
// END PART 1 - TEST THIS FAR //

// --------------------------------- PART 2 --------------------------------------- //
/**
 * Get the current player, X or O
 * @returns {string} - The current player
 */
function getCurrentPlayer() {
  return xIsNext ? 'X' : 'O';
}

/**
 * Set the value of the status bar element
 *
 * @param {string} text The desired contents of the status element
 */
function setStatusText(text) {
  const status = document.getElementById('status');
  status.innerHTML = text;
}

/**
 * Swap the current player, going between X and O. Also updates status text
 */
function swapPlayer() {
  xIsNext = !xIsNext;

  const currentPlayer = getCurrentPlayer();
  setStatusText(`Next player: ${currentPlayer}`);
}

/**
 * Handle the click event for a square
 *
 * @this {HTMLElement} this - the square that was clicked
 */
function handleClick() {
  const index = Number(this.id);
  const currentPlayer = getCurrentPlayer();

  squares[index] = currentPlayer;
  this.innerHTML = currentPlayer;
  this.onclick = null;

  // Perform win condition check
  const isWinner = calculateWinner();
  const isDraw = calculateDraw();

  if (isWinner) {
    highlightWinner();
    disableAll();
    setStatusText(`${currentPlayer} is the winner! Well done!`);

  } else if (isDraw) {
    disableAll();
    setStatusText('It\'s a draw! Reload to play again!');

  } else {
    // No winner, no draw, continue the game
    swapPlayer();
  }
}

/**
 * Determine if there is a winner
 *
 * @returns {boolean} - true if there is a winner, false otherwise
 */
function calculateWinner() {
  let isWinner = false;
  for (let i = 0; i < victoryLines.length; i++) {
    const a = victoryLines[i][0];
    const b = victoryLines[i][1];
    const c = victoryLines[i][2];

    const allSquaresMatch = squares[a] && squares[a] === squares[b] && squares[a] === squares[c];
    if (allSquaresMatch) {
      winningLine = victoryLines[i];
      isWinner = true;
      break;
    }
  }

  return isWinner;
}

/**
 * Identify if there is a draw
 *
 * @returns {boolean} - true if there is a draw, false otherwise
 */
function calculateDraw() {
  // It is a draw if all squares are filled but there is no winner
  const allSquaresFilled = squares.every((square) => typeof square === 'string');
  return allSquaresFilled && calculateWinner() === false;
}

// --------------------------------- PART 3 --------------------------------------- //
/**
 * Highlight all the winning squares by turning them red - assuming there are winning squares
 */
function highlightWinner() {
  winningLine.forEach((index) => {
    const square = document.getElementById(index);
    square.classList.add('red');
  });
}

/**
 * Disable all squares by removing their click event handlers
 */
function disableAll() {
  const allSquares = Array.from(document.getElementsByName('square'));
  allSquares.forEach((square) => {
    square.onclick = null;
  });
}
// END PART 3 - TEST THE ENTIRE APP//

window.onload = init;
