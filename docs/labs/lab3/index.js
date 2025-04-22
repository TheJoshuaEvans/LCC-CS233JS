//* Joshua Evans - 2025-04-21
/** @typedef {import('./src/ten-thousand/classes/player.js').default} Player */

// These are "ES6/Javascript Modules", which lets us break code up into files without having to fetch
// all the scripts in the HTML file. This functionality is only available in modern browsers, so anybody
// running IE8 or whatever will not be able to play. Honestly, I think that's fine :P
import StyleHandler from './src/style/style-handler.js';

import diceSetHtml from './src/snippets/dice-set.html.js';
import scoresHtml from './src/snippets/scores.html.js';

import Game from './src/ten-thousand/classes/game.js';

//* A NOTE ON COMMENTS THROUGHOUT THIS PROJECT
// All methods and properties are documented using JSDoc comments - this is how I "use JavaScript while
// pretending it's typescript". The JSDoc documentation lives here:
// https://jsdoc.app/
// The docs are pretty well put together and can explain any particular "Block Tags" (with the @) that
// I use throughout the project. Doing this gives me full intellisense support in VSCode, which is not
// only convenient, but goes a tremendously long way towards avoiding simple typos

// I am also very fond of the "Better Comments" VSCode extension, which allows me to color my comments
// to make the actual file look better and be easier to read. Extension link here:
// https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments

/**
 * How long, in milliseconds, the dice should animate for when it is a player's turn
 */
const DICE_ROLL_ANIMATION_TIME_MS = 1000;

// Note: When storing a value with a particular unit, it is always smart to make the unit part of the
// variable name - _especially_ when it comes to units of time. I tried resisting this advice for so
// long, but have been burned my hubris

/** @type {Game} */
let game;

/**
 * Animate all the dice on the page for a given amount of time
 *
 * @param {number} animationTimeMs The time in milliseconds to animate the dice
 */
const animateDice = (animationTimeMs = DICE_ROLL_ANIMATION_TIME_MS) => {
  const diceElements = Array.from(document.getElementsByClassName('die'));
  diceElements.forEach((die) => {
    // Add the 'die-animate' class to make the die animate
    die.classList.add('die-animated');

    // Set a timer that will remove the animation classes after the animation time
    setTimeout(() => {
      die.classList.remove('die-animated');
    }, animationTimeMs);
  });
};

/**
 * Renders the dice selector for a given player
 *
 * @param {Player} player The player to render the dice for
 */
const renderPlayerDice = (player) => {
  // Get and clear the dice wrapper. This should destroy any existing handler connections
  const diceWrapper = document.getElementById('dice-wrapper');
  diceWrapper.innerHTML = '';

  // Create the dice set element and insert it into the wrapper
  const playerDiceElement = document.createElement('div');
  playerDiceElement.innerHTML = diceSetHtml({player});
  playerDiceElement.addEventListener('click', handleClickDice);
  diceWrapper.appendChild(playerDiceElement);

  // Add the event handler for the "Select Dice" button
  const selectDiceButton = document.getElementById('save-selections');
  selectDiceButton.addEventListener('click', handleSelectDice);

  // Run the style handler to handle visual class changes
  const styleHandler = new StyleHandler();
  window.styleHandler = styleHandler;

  // Animate the die for a little bit to simulate rolling
  animateDice();
};

//* ---- GAME HANDLERS ---- */
/**
 * The indexes of the dice that are currently selected by the user
 * @type {number[]}
 */
const selectedDiceIndexes = [];
window.selectedDiceIndexes = selectedDiceIndexes;

/**
 * Handle the clicking of a die element
 *
 * @param {Event} event
 */
const handleClickDice = (event) => {
  const target = event.target;

  // Toggle the "selected" class
  target.classList.toggle('selected');

  // Manage the selected dice indexes
  const dieIndex = target.getAttribute('die-index');
  if (target.classList.contains('selected')) {
    // Add this die index to the selected dice indexes
    selectedDiceIndexes.push(dieIndex);
  } else {
    // Remove this die index from the selected dice indexes
    const index = selectedDiceIndexes.indexOf(dieIndex);
    if (index > -1) {
      selectedDiceIndexes.splice(index, 1);
    }
  }
};

/**
 * Handle the clicking of the "Select Dice" button, which will score the selected dice
 */
const handleSelectDice = () => {
  if (selectedDiceIndexes.length === 0) {
    // If no dice are selected, display an alert and short circuit
    alert('Please select at least one die to score, or end your turn');
    return;
  }

  console.log('Selecting dice');

  game.selectDice(selectedDiceIndexes, (errorMessage) => {
    // If an error occurs, display it to the user
    alert(errorMessage);
  });
};

/**
 * Handle starting the game by taking the player number input value and using it to instantiate a new game,
 * then setting up the page for the game
 */
const handleStartGame = () => {
  const numPlayers = Number(document.getElementById('player-number-input').value);

  // The game itself can throw errors which will break the game, so be sure to catch them, but also
  // inform the user they are happening
  try {
    game = new Game(numPlayers);

    // Add the game to the window so we can access it in the console for debugging - or cheating ;)
    window.game = game;

    // Set up the total score elements
    game.players.forEach((player) => {
      const scoresWrapper = document.getElementById(`scores-wrapper`);
      scoresWrapper.innerHTML += scoresHtml({player});
    });

    // Roll the first player's dice automatically and then render the dice selectors
    game.rollDice();
    renderPlayerDice(game.currentPlayer);

    // Hide the player number input now that it's not needed
    const introSection = document.getElementById('player-num-input');
    introSection.classList.add('d-none');
  } catch(e) {
    // If ANY error occurs, display an alert with the error message and allow the process to continue
    // Quick and dirty :3
    alert(e.message);
    return;
  }
};

/**
 * Set up the "Start Game" button event handler, which is where the game really begins!
 */
window.onload = () => {
  // Add the start game button event handler
  const startGameButton = document.getElementById('start-game-button');
  startGameButton.addEventListener('click', handleStartGame);
};
