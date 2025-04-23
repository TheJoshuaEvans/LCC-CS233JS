//? Joshua Evans - 2025-04-22
import score from '../utils/score.js';

/**
 * Class that packages useful information from the `selectDice` method
 */
class SelectDiceResult {
  /**
   * The new turn score after selecting the dice
   * @type {number}
   */
  turnScore;

  /**
   * The amount that was scored by these particular selected dice
   */
  diceScore;

  /**
   * @param {SelectDiceResult} props
   */
  constructor(props) {
    const {turnScore, diceScore} = props;

    this.turnScore = turnScore;
    this.diceScore = diceScore;
  }
}


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
  get turnScore() {return this._turnScore;}
  set turnScore(value) {
    this._turnScore = value;
    this.onUpdateTurnScore(value);
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
  get totalScore() {return this._totalScore;}
  set totalScore(value) {
    this._totalScore = value;
    this.onUpdateTotalScore(value);
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

    this.turnScore += diceScore;
    return new SelectDiceResult({diceScore, turnScore: this.turnScore});
  };

  /**
   * Bank the player's current score and reset their dice
   */
  endTurn = (earnedScore) => {
    if (earnedScore === true) {
      this.totalScore += this.turnScore;
    }
    this.turnScore = 0;
    this._dice = [];
    return this.totalScore;
  };

  /**
   * Reset the player's state, deleting all data
   */
  reset = () => {
    this._dice = [];
    this.turnScore = 0;
    this.totalScore = 0;
  };

  /**
   * @param {number} id A numeric ID for the player
   */
  constructor(id) {
    this.id = id;
    this.reset();
  }
}

export default Player;
export {SelectDiceResult};
