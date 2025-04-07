// Joshua Evans - 2025-04-07
/**
 * @typedef WinnerData
 * @prop {string|null} winner The winner of the game. Will be null if there is no winner
 * @prop {string[]} winningLine The winning line. Will be an empty array if there is no winner
 */

/** Array containing all possible winning square combinations representing lines */
const VICTORY_LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

/** String that represents the X player */
const PLAYER_X = 'X';

/** String that represents the O player */
const PLAYER_O = 'O';

/**
 * Class that handles the game logic for Tic Tac Toe
 */
class TicTacToe {
  /**
   * Instance of the input handler class
   * @type {InputHandler}
   */
  inputHandler = null;

  /**
   * The current player, either 'X' or 'O'
   * @type {PLAYER_X|PLAYER_O}
   */
  currentPlayer = PLAYER_X;

  /**
   * The game data, represents the 9 square of the board. This array does NOT contain
   * UI elements, just strings
   *
   * @type {string[]}
   **/
  squares = Array(9).fill(null);

  /**
   * Determine if the game has a winner
   *
   * @returns {WinnerData} Winner data object
   */
  calculateWinner() {
    let winner = null;
    let winningLine = [];

    for (let i = 0; i < VICTORY_LINES.length; i++) {
      const a = VICTORY_LINES[i][0];
      const b = VICTORY_LINES[i][1];
      const c = VICTORY_LINES[i][2];

      const allSquaresMatch = this.squares[a] && this.squares[a] === this.squares[b] && this.squares[a] === this.squares[c];
      if (allSquaresMatch) {
        winningLine = VICTORY_LINES[i];
        winner = this.squares[a];
        break;
      }
    }

    return {
      winner, winningLine,
    };
  }

  /**
   * Identify if there is a draw
   *
   * @param {WinnerData} [winnerData] The latest winner data, if available
   * @returns {boolean} True if there is a draw, false otherwise
   */
  calculateDraw(winnerData) {
    // It is a draw if all squares are filled but there is no winner
    const allSquaresFilled = this.squares.every((square) => typeof square === 'string');

    // Don't recalculate the winner if we have already done that
    winnerData = typeof winnerData !== 'undefined' ? winnerData : this.calculateWinner();

    return allSquaresFilled && winnerData.winner === null;
  }

  /**
   * Swap the current player and update the status text
   */
  swapPlayer = () => {
    this.currentPlayer = this.currentPlayer === PLAYER_X ? PLAYER_O : PLAYER_X;
    this.inputHandler.setStatusText(`Current player: ${this.currentPlayer}`);
  };

  /**
   * Handle the user selecting a square
   *
   * @param {HTMLElement} square The square that was clicked
   */
  handleSelectSquare = (square) => {
    const index = Number(square.id);
    const currentPlayer = this.currentPlayer;

    this.squares[index] = currentPlayer;
    this.inputHandler.setSquareText(square, currentPlayer);
    this.inputHandler.disableSquare(square);

    // Perform win condition check
    const winnerData = this.calculateWinner();
    const isDraw = this.calculateDraw(winnerData);

    if (winnerData.winner) {
      this.inputHandler.highlightWinningLine(winnerData.winningLine);
      this.inputHandler.disableAllSquares();
      this.inputHandler.setStatusText(`${winnerData.winner} is the winner! Well done!`);

    } else if (isDraw) {
      this.inputHandler.disableAllSquares();
      this.inputHandler.setStatusText(`It's a draw! Reload to play again!`);

    } else {
      // No winner, no draw, continue the game
      this.swapPlayer();
    }
  };

  /**
   * Run the game!
   */
  run = () => {
    this.inputHandler.onClickSquare = this.handleSelectSquare;
  };

  /**
   * @param {InputHandler} inputHandler
   */
  constructor(inputHandler) {
    this.inputHandler = inputHandler;
  }
}

/**
 * Class that handles user input
 */
class InputHandler {
  /**
   * The HTML element that will display the status of the game
   * @type {HTMLElement}
   */
  statusTextElement = null;

  /**
   * Function that will be called when a square is clicked. The function will be passed the HTML element
   * that triggered the function
   *
   * @type {(HTMLElement) => void}
   */
  onClickSquare = (target) => {console.log('Square clicked', target);};

  /**
   * Sets the text of a particular square element
   *
   * @param {HTMLElement} square
   * @param {string} text
   */
  setSquareText = (square, text) => {
    square.innerHTML = text;
  };

  /**
   * Takes a square and disables the click handler on it
   *
   * @param {HTMLElement} square
   */
  disableSquare = (square) => {
    square.onclick = null;
  };

  /**
   * Disable all click handlers on all squares
   */
  disableAllSquares = () => {
    const squareElements = Array.from(document.getElementsByName('square'));

    squareElements.forEach((squareElement) => {
      this.disableSquare(squareElement);
    });
  };

  /**
   * Set the text of the status element
   *
   * @param {string} text The new status text
   */
  setStatusText = (text) => {
    this.statusTextElement.innerHTML = text;
  };

  /**
   * Highlight the winning line of squares
   *
   * @param {number[]} winningLine The line of squares that won the game
   */
  highlightWinningLine = (winningLine) => {
    winningLine.forEach((id) => {
      const square = document.getElementById(id);
      square.classList.add('red');
    });
  };

  constructor() {
    const uiSquares = Array.from(document.getElementsByName('square'));

    uiSquares.forEach((square) => {
      square.onclick = (event => this.onClickSquare(event.target));
    });

    this.statusTextElement = document.getElementById('status');
  }
}

// Create and run the game on load
window.onload = async () => {
  const ticTacToe = new TicTacToe(new InputHandler());
  window.ticTacToe = ticTacToe;

  ticTacToe.run();
};
