import shuffleArray from '../../../../src/utils/shuffle-array.js';
import wait from '../../../../src/utils/wait.js';

/**
 * @typedef Picks
 * @prop {Card} first The first card that was picked
 * @prop {Card} second The second card that was picked
 */

/**
 * @typedef Status
 * @prop {number} matches The number of matches found
 * @prop {number} tries The number of tries taken
 */

//* Constants
/** Base path of the folder where images can be found */
const IMAGE_PATH_BASE = 'cards/';

/** Path to the image of a card back */
const CARD_BACK_IMG_PATH = `${IMAGE_PATH_BASE}black_back.jpg`;

/** How long to wait before resetting a round */
const ROUND_WAIT_TIME_MS = 1000;

/**
 * A single card on the game board
 */
class Card {
  /**
   * The board that this card is on
   * @type {Board}
   */
  board = null;

  /**
   * The HTML element that represents the card
   * @type {HTMLElement}
   */
  element = null;

  /**
   * If this card is enabled
   */
  enabled = false;

  /**
   * The ID of this card
   */
  id = -1;

  /**
   * The filename of this card's front image
   */
  imageName = '';

  /**
   * If this card has been removed from the board
   */
  removed = false;

  /**
   * Enable this card
   */
  enable = () => {
    this.enabled = true;
    this.element.onclick = this.handleCardClick;
    this.element.classList.add('pointer');
  };

  /**
   * Disable this card
   */
  disable = () => {
    this.enabled = false;
    this.element.onclick = null;
    this.element.classList.remove('pointer');
  };

  /**
   * Show the back of the card
   */
  showBack = () => {
    this.element.style.backgroundImage = `url(${CARD_BACK_IMG_PATH})`;
  };

  /**
   * Show the front of the card
   */
  showFront = () => {
    this.element.style.backgroundImage = `url(${this.imageName})`;
  };

  /**
   * Remove the card from the board
   */
  removeCard = () => {
    this.element.style.backgroundImage = 'none';
    this.removed = true;
  };

  /**
   * Handler for when the user clicks on a card
   *
   * @this {Card} The card that was clicked
   */
  handleCardClick = () => {
    this.disable();
    this.showFront();

    const picks = this.board.game.picks;

    if (picks.first === null) {
      picks.first = this;
    } else {
      picks.second = this;
      this.board.game.checkPicks();
    }
  };

  /**
   * @param {Card} props Properties to apply to the card
   */
  constructor(props) {
    this.board = props.board;
    this.id = props.id;
    this.imageName = props.imageName;

    this.element = document.getElementById(this.id);
  }
}

/**
 * The game board upon which cards are placed
 */
class Board {
  /**
   * The game that is managing this board
   * @type {Game}
   */
  game = null;

  /**
   * All the cards on the board
   * @type {Card[]}
   */
  cards = [];

  /**
   * Enable all the cards on the board
   */
  enableAllCards = () => {
    this.cards.forEach((card) => {
      card.enable();
    });
  };

  /**
   * Disable all the cards on the board
   */
  disableAllCards = () => {
    this.cards.forEach((card) => {
      card.disable();
    });
  };

  /**
   * Show all the card backs on the board
   */
  showAllCardBacks = () => {
    this.cards.forEach((card) => {
      card.showBack();
    });
  };

  /**
   * Enable all the cards that have not yet been removed from the board
   */
  enableAllRemainingCards = () => {
    this.cards.forEach((card) => {
      if (!card.removed) {
        card.enable();
      }
    });
  };

  /**
   * Generate a return a shuffled array of card image names
   */
  generateShuffledImageNames = () => {
    const values = ['a', 'k', 'q', 'j', 't', '9', '8', '7', '6', '5'];
    const suits = ['h', 's'];
    const images = [];

    let index = 0;
    values.forEach((value) => {
      suits.forEach((suit) => {
        images[index] = `${IMAGE_PATH_BASE}card${value}${suit}.jpg`;
        index++;
      });
    });

    return shuffleArray(images);
  };

  /**
   * Initialize the cards on the board
   */
  initializeCards = () => {
    const shuffledImageNames = this.generateShuffledImageNames();
    shuffledImageNames.forEach((imageName, id) => {
      const card = new Card({imageName, id, board: this});
      this.cards.push(card);
    });
  };

  /**
   * Initialize the board
   */
  init = () => {
    this.initializeCards();
    this.enableAllCards();
    this.showAllCardBacks();
  };

  /**
   * @param {Board} props
   */
  constructor(props) {
    this.game = props.game;
  }
}

/**
 * Game manager
 */
class Game {
  /**
   * The board of cards
   * @type {Board}
   */
  board = null;

  /**
   * The current game status
   * @type {Status}
   */
  status = {
    matches: 0,
    tries: 0,
  };

  /**
   * The HTML element that shows the status of the game
   * @type {HTMLElement}
   */
  statusElement = null;

  /**
   * @type {Picks}
   */
  picks = {
    first: null,
    second: null,
  };

  /**
   * Check if two picked cards are a match. Returns true if they are a match, false otherwise
   *
   * @param {Picks} picks The cards that were picked
   */
  isMatch(picks) {
    const {first: firstCard, second: secondCard} = picks;

    const cardValueRegex = /\/card(.).\.jpg$/;
    const firstCardValue = cardValueRegex.exec(firstCard.imageName)[1];
    const secondCardValue = cardValueRegex.exec(secondCard.imageName)[1];

    return firstCardValue === secondCardValue;
  }

  /**
   * Check the current picks to see if they are a match, then adjust the game state accordingly
   */
  checkPicks = async () => {
    this.board.disableAllCards();

    // Wait a little bit so the user can see the revealed cards
    await wait(ROUND_WAIT_TIME_MS);

    this.status.tries++;
    const isMatch = this.isMatch(this.picks);
    if (isMatch) {
      // It's a match!
      this.status.matches++;
      this.picks.first.removeCard();
      this.picks.second.removeCard();

      // Check win condition
      if (this.status.matches >= 10) {
        alert('You win!');
      } else {
        this.board.enableAllRemainingCards();
      }

    } else {
      // It's not a match, reset the turn :(
      this.picks.first.showBack();
      this.picks.second.showBack();
      this.board.enableAllRemainingCards();
    }

    // Show the current game state and reset the picks for the next turn
    this.showMatches();
    this.picks.first = null;
    this.picks.second = null;
  };

  /**
   * Display the current number of matches and tries on the page in the status element
   */
  showMatches = () => {
    this.statusElement.innerHTML = `Matches: ${this.status.matches} Tries: ${this.status.tries}`;
  };

  /**
   * Run the game!
   */
  run = () => {
    this.board = new Board({game: this});
    this.board.init();
  };

  constructor() {
    this.statusElement = document.getElementById('status');
  }
}

// Create and run the game on load
window.onload = async () => {
  const game = new Game();
  window.game = game;

  game.run();
};
