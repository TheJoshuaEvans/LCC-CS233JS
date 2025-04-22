import score from '../utils/score.js';

/**
 * Class handles player data and some basic logic. This class does not enforce game rules
 */
class Player {
  //* ---- VARIABLES ---- */
  /**
   * The player's numeric ID, typically their index in the players array
   * @type {number}
   */
  id;

  //* ---- PROPERTIES ---- */
  /**
   * @private
   * The dice the player has rolled
   * @type {number[]}
   */
  _dice;

  /**
   * The dice the player has rolled
   */
  get dice() {
    return this._dice;
  }

  /**
   * @private
   * The score the player has earned so far on this turn
   * @type {number}
   */
  _turnScore;

  /**
   * The score the player has earned so far on this turn
   */
  get turnScore() {
    return this._turnScore;
  }

  /**
   * @private
   * The player's total score
   * @type {number}
   */
  _totalScore;

  /**
   * The player's total score
   */
  get totalScore() {
    return this._totalScore;
  }

  //* ---- EVENTS ---- */
  /**
   * This event method is called whenever the player's total score is updated
   * @type {function(number): void}
   */
  onUpdateTotalScore = () => {};

  /**
   * This event method is called whenever the player's turn score is updated
   */
  onUpdateTurnScore = () => {};

  /**
   * @private
   * Private proxy handler that runs whenever a property is set on the Game object
   *
   * @param {Player} obj The player object the handler is attached to
   * @param {string} prop The name of the property being set
   * @param {number} value The new value of the property
   */
  _handleProxySet = (obj, prop, value) => {
    // Run the appropriate event handler when properties are set
    console.log('handleProxySet', prop);
    if (prop === '_totalScore') {
      this.onUpdateTotalScore(value);
    } else if (prop === '_turnScore') {
      this.onUpdateTurnScore(value);
    }

    // Always set the value!
    obj[prop] = value;
    return true;
  };

  //* ---- METHODS ---- */
  /**
   * Roll a given number of dice, adding them to the player and returning the rolled values
   *
   * @param {number} numToRoll The number of dice to roll
   * @returns {number[]} The rolled dice
   */
  rollDice = (numToRoll) => {
    // Roll the dice!
    this._dice = [];
    for (let i = 0; i < numToRoll; i++) {
      this._dice[i] = Math.floor(Math.random() * 6) + 1;
    }
    return this._dice;
  };

  /**
   * Pick a set of previously rolled dice for scoring. The score will automatically be calculated and
   * added to the `turnScore`. Returns the score of the selected dice
   *
   * @param {number[]} diceIndexes
   */
  selectDice = (diceIndexes) => {
    const selectedDice = diceIndexes.map((index) => this._dice[index]);
    const diceScore = score(selectedDice);

    this._turnScore += diceScore;
    return this._turnScore;
  };

  /**
   * Bank the player's current score and reset their dice
   */
  endTurn = () => {
    this._totalScore += this._turnScore;
    this._turnScore = 0;
    this._dice = [];
    return this._totalScore;
  };

  /**
   * Reset the player's state, deleting all data
   */
  reset = () => {
    this._dice = [];
    this._turnScore = 0;
    this._totalScore = 0;
  };

  /**
   * @param {number} id A numeric ID for the player
   */
  constructor(id) {
    this.id = id;
    this.reset();

    // Instead of allowing the constructor to end naturally, return a proxy object that uses `this` as
    // a base, which lets us watch for property changes and run event handlers when properties are set
    // Proxies are cool! https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy

    // Fun JS Fact: The "constructor" is really a function that returns an object, it just has a special
    // name and the engine will automatically add an "implicit" `return this;` to the end (in much the
    // same way it handles semicolons). We can override this behavior by returning a different object,
    // which is what we're doing here :D
    const proxyHandler = {
      set: this._handleProxySet,
    };
    return new Proxy(this, proxyHandler);
  }
}

export default Player;
