import shuffleArray from '../../../../src/utils/shuffle-array.js';

//* Constants
/** Path to the image of a card back */
const CARD_BACK_IMG_PATH = 'cards/black_back.jpg';
/** How long to wait before resetting a round */
const ROUND_WAIT_TIME_MS = 1000;

//* Global variables
/** The folder where your card images are stored */
const imagePath = 'cards/';

/** An array that stores the images for each card */
let images = Array(20).fill(null);

/** The index of the first card picked by the user */
let firstPick = -1;

/** The index of the second card picked by the user */
let secondPick = -1;

/** The current number of discovered matches */
let matches = 0;

/** The current number of match attempts */
let tries = 0;

/**
 * Initializes the page
 */
function init()
{
  // Do a bunch of initialization tasks
  fillImages();
  shuffleImages();
  showMatches();
  enableAllCards();
  showAllBacks();
}

/**
 * Display the current number of matches and tries on the page
 */
function showMatches() {
  const statusElem = document.getElementById('status');
  statusElem.innerHTML = `Matches: ${matches} Tries: ${tries}`;
}

/**
 * Fills the images array with 10 pre-set pairs of card filenames. Card filenames follow this pattern:
 * "card{v}{s}.jpg" where v is the first char of the value of the card and s is the first char of the
 * suit of the card. Example: "cardjh.jpg" is the jack of hearts
 */
function fillImages() {
  const values = ['a', 'k', 'q', 'j', 't', '9', '8', '7', '6', '5'];
  const suits = ['h', 's'];

  let index = 0;
  values.forEach((value) => {
    suits.forEach((suit) => {
      images[index] = `${imagePath}card${value}${suit}.jpg`;
      index++;
    });
  });
}

/**
 * Shuffle the elements in the images array
 */
function shuffleImages() {
  images = shuffleArray(images);
}

/**
 * "Enable" the provided cards by assigning the handleClick function to the onclick event for all cards
 * and sets the cursor type to 'pointer'
 *
 * @param {HTMLElement[]} cards An array of card elements to enable
 */
function enableCards(cards) {
  cards.forEach((card) => {
    card.onclick = handleClick;
    card.classList.add('pointer');
  });
}

/**
 * Enable all the cards
 */
function enableAllCards() {
  const cards = Array.from(document.getElementsByName('card'));

  enableCards(cards);
}

/**
 * Enable only the cards that have a background image set to anything other than "none"
 */
function enableAllRemainingCards() {
  const remainingCards = Array.from(document.getElementsByName('card')).filter((card) => {
    return card.style.backgroundImage !== 'none';
  });

  enableCards(remainingCards);
}

/**
 * Disable the provided single card by doing the inverse of "enableCards"
 *
 * @param {HTMLElement} card An array of card elements to enable
 */
function disableCard(card) {
  card.onclick = null;
  card.classList.remove('pointer');
}

/**
 * Disable the provided cards by doing the inverse of "enableCards"
 *
 * @param {HTMLElement[]} cards An array of card elements to enable
 */
function disableCards(cards) {
  cards.forEach((card) => {
    disableCard(card);
  });
}

/**
 * Disable all the cards
 */
function disableAllCards() {
  const cards = Array.from(document.getElementsByName('card'));
  disableCards(cards);
}

/**
 * Completely "remove" a card from the board by setting the background image to "none"
 *
 * @param {HTMLElement} card The card to remove from the board
 */
function removeCard(card) {
  card.style.backgroundImage = 'none';
}

/**
 * Remove a card from the board by its index
 *
 * @param {number} index The index of the card to retrieve
 */
function removeCardByIndex(index) {
  const card = document.getElementById(index);
  removeCard(card);
}

/**
 * Show the back of a particular card by setting the background image accordingly
 *
 * @param {HTMLElement} card The card to show
 */
function showBack(card) {
  card.style.backgroundImage = `url(${CARD_BACK_IMG_PATH})`;
}

/**
 * Shows the back of a card by setting the background image to the "back-of-card" image
 *
 * @param {number} index The index of the card to show the back of
 */
function showBackByIndex(index) {
  const card = document.getElementById(index);
  card.style.backgroundImage = `url(${CARD_BACK_IMG_PATH})`;
}

/**
 * Iterate through all cards and shows the backs of each one
 */
function showAllBacks() {
  const cards = Array.from(document.getElementsByName('card'));
  cards.forEach((card) => {
    showBack(card);
  });
}

/**
 * Function that fires when the user clicks on a card. Will perform game logic depending on if this is
 * the first or second card clicked
 */
function handleClick() {
  const index = this.id;
  const cardImage = images[index];

  this.style.backgroundImage = `url(${cardImage})`;
  disableCard(this);

  if (firstPick === -1) {
    firstPick = index;
  } else {
    secondPick = index;
    disableAllCards();
    setTimeout(checkCards, ROUND_WAIT_TIME_MS);
  }
}

/**
 * Determines if the cards indicated by the firstPick and secondPick variables are a match
 *
 * @returns {boolean} True if the two cards are a match, false otherwise
 */
function isMatch() {
  const firstCard = images[firstPick];
  const secondCard = images[secondPick];

  const cardValueRegex = /\/card(.).\.jpg$/;
  const firstCardValue = cardValueRegex.exec(firstCard)[1];
  const secondCardValue = cardValueRegex.exec(secondCard)[1];

  return firstCardValue === secondCardValue;
}

/**
 * Check the two cards that have been picked for matches and act accordingly. Resets the turn and triggers
 * victory if the required number of matches has been reached
 */
function checkCards() {
  tries++;

  if (isMatch()) {
    // This is a match! Increment the match counter and remove the cards from the board
    matches++;
    removeCardByIndex(firstPick);
    removeCardByIndex(secondPick);

    // Check for win condition
    if (matches < 10) {
      enableAllRemainingCards();
    } else {
      alert('You win!');
    }
  } else {
    // Not a match! Turn the cards back over
    showBackByIndex(firstPick);
    showBackByIndex(secondPick);
    enableAllRemainingCards();
  }

  // Show the current game state and reset the picks for the next turn
  showMatches();
  firstPick = -1;
  secondPick = -1;
}

// when the page loads, call the function init
window.onload = init;
