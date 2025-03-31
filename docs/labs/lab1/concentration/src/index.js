/*  Overview
    This application simulates a concentration or memory game of 20 cards.
    The game begins with 20 (10 pairs of 2) cards "face down" on the board.
    The user clicks 2 cards at a time.  The cards are displayed "face up".
    After a brief pause the cards are removed from the board if they match
    or are turned "face down" if they are not.  The game is over when the
    user has cleared all 20 cards from the board.

    There are 6 global variables that are used to keep track of the "state"
    of the application.
    -  imagePath - the folder where the cards are stored
    -  images - an array of 20 card file names
    -  firstPick - the 0 based index of the first card picked by the user
    -  secondPick - the 0 based index of the 2nd card picked by the user
    -  matches - the number of matches the user has removed from the board so far
    -  tries - the number of pairs of cards the user has selected so far

    The function handleClick is associated with the click event handler for each card.

    There are lots of  "helper" functions.  Comments in the code describe each of these functions.
    I've written more functions that I might have done to make each function as simple as possible.
*/

import shuffleArray from '../../../../src/utils/shuffle-array.js';

const CARD_BACK_IMG_PATH = 'cards/black_back.jpg';

// start with these global variables
// the folder where your card images are stored
const imagePath = 'cards/';
// an array that stores the images for each card
let images = Array(20).fill(null);
// the index of the first card picked by the user
let firstPick = -1;
// the index of the second card picked by the user
let secondPick = -1;
// statistics about this "round"
let matches = 0;
let tries = 0;

// --------------------------------- PART 1 --------------------------------------- //
/**
 * Initializes the page
 */
function init()
{
  // fill the array of images by calling fillImages
  fillImages();
  // shuffle them by calling shuffle images
  shuffleImages();
  // show the number of matches on the page by calling showMatches
  showMatches();
  // enable all of the card elements on the page by calling enableAllCards
  enableAllCards();
  // show the backs of all of the cards by calling showAllBacks
  showAllBacks();
}

/**
 * Display the current number of matches and tries on the page
 */
function showMatches() {
  // update the element on the page to display the variable matches and tries
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

  // create a variable called index and set it to 0
  let index = 0;

  // create a for loop that iterates through each value in the values array
  values.forEach((value) => {

    // create a for loop that iterates through each suit in the suits array
    suits.forEach((suit) => {
      // set the element in the images array at index to a string that contains card + value + suit + .jpg
      images[index] = `${imagePath}card${value}${suit}.jpg`;
      // increment the index
      index++;
    }); // end for loop for the suits
  }); // end for loop for the values
}

/**
 * Shuffle the elements in the images array
 */
function shuffleImages() {
  images = shuffleArray(images);
}

/**
 * "Enable" all the cards by assigning the handleClick function to the onclick event for all cards and
 * sets the cursor type to 'pointer'
 */
function enableAllCards() {
  const cards = Array.from(document.getElementsByName('card'));

  cards.forEach((card) => {
    card.onclick = handleClick;
    card.style.cursor = 'pointer';
  });
}

/**
 * Enable only the cards that have a background image set to anything other than "none"
 */
function enableAllRemainingCards() {
  const remainingCards = Array.from(document.getElementsByName('card')).filter((card) => {
    return card.style.backgroundImage !== 'none';
  });

  remainingCards.forEach((card) => {
    card.onclick = handleClick;
    card.style.cursor = 'pointer';
  });
}

/**
 * Shows the back of a card by setting the background image to the "back-of-card" image
 *
 * @param {number} index The index of the card to show the back of
 */
function showBack(index) {
  // create a variable card and set it equal to the ui element with an id of index
  const card = document.getElementById(index);
  // set the style.backgroundImage of card to the filename for the back of a card
  card.style.backgroundImage = `url(${CARD_BACK_IMG_PATH})`;
}

/**
 * Iterate through all cards and shows the backs of each one
 */
function showAllBacks() {
  // create a loop that iterates through indices 0 to 19
  for (let index = 0; index <= 19; index++) {
    // call the function showBack for the current index
    showBack(index);
  }
}
// END PART 1 - TEST THIS FAR //

// --------------------------------- PART 2 --------------------------------------- //
// this is the function that fires when the user clicks on a card
function handleClick() {
  console.log('Clicked', this);
  // declare the variable index and assign it to the current card's id attribute
  // declare cardImage and assign it to the image for this card
  // set the backgroundImage to the url of the cardImage
  // disable the card
  // if this is the first card picked
  //      assign firstPick to index
  // else
  //      assign secondPick to index
  //      disable all of the cards
  //      set a timer for 2 seconds.  Call checkCards when it fires.
  // end if
}

// disable one card based on it's index
function disableCard(index) {
  const card = document.getElementById(index);
  card.onclick = () => {};
  card.style.cursor = 'none';
}

// disable all of the cards
function disableAllCards() {

}
// END PART 2 - TEST TO HERE //

// --------------------------------- PART 3 --------------------------------------- //
// checks the 2 cards that have been picked for matches
function checkCards() {
  // increment the number of tries
  // if the 2 cards match
  //      increment the number of matches
  //      remove the first(pick) card from the board
  //      remove the second(pick) card from the board
  //      if there are cards on the board
  //          enable all of the remaining cards
  //      end if
  // else
  //      turn the first(pick) card back over
  //      turn the second(pick) card back over
  //      enable all of the remaining cards
  // end if
  // update the matches and tries on the page
  // reset the firstpick to -1
  // reset the secondpick to -1
}

// determines if the images in firstPick and secondPick are a matches
// 2 cards are a match if they have the same value
// cardvs.jpg is the pattern for card file names
function isMatch() {

}

// removes one card from the board based on it's index
// set the backgroundImage to 'none' to remove the card
function removeCard(index) {

}
// END PART 3 - TEST THE ENTIRE APP //

// when the page loads, call the function init
window.onload = init;
