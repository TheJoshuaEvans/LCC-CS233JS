/** @typedef {import('./player.js').SelectDiceResult} SelectDiceResult */
import Player from './player.js';

import handleError from '../utils/handle-error.js';

/**
 * The possible phases of a player's turn. These values are used to ensure that a player does not perform
 * an action that they are not allowed to do (for example, roll more than once in a row)
 */
const TURN_PHASES = {
  /**
   * The player is rolling their dice
   */
  ROLL: 'roll',

  /**
   * The player is selecting dice to score
   */
  SELECT: 'select',

  /**
   * The player has no choice but to end their turn
   */
  END: 'end',
};

/**
 * Class that packages useful information from the `endTurn` method
 */
class EndTurnResult {
  /**
   * The player's score for this turn
   * @type {number}
   */
  turnScore;

  /**
   * The total score of the player
   * @type {number}
   */
  totalScore;

  /**
   * Whether the player has won the game
   * @type {boolean}
   */
  isVictory;

  /**
   * If, in the process of ending the turn, the player's turn score was saved to their total score. This
   * will be false if the player ended their turn without selecting any scoring dice, and true otherwise
   * @type {boolean}
   */
  didSaveScore;

  /**
   * @param {EndTurnResult} props
   */
  constructor(props) {
    this.totalScore = props.totalScore;
    this.turnScore = props.turnScore;
    this.isVictory = props.isVictory;
    this.didSaveScore = props.didSaveScore;
  }
}

/**
 * Class representing a full game of Ten Thousand (AKA Farkle)
 */
class Game {
  //* ---- STATICS ---- */
  /**
   * Class used to represent result of a player ending their turn
   */
  static EndTurnResult = EndTurnResult;

  /**
   * The default number of dice that can be rolled
   */
  static DEFAULT_DICE_NUM = 6;

  /**
   * The amount of points needed to win the game
   */
  static WINNING_SCORE = 10_000;

  //* ---- PROPERTIES ---- */
  /**
   * @private
   * The current phase of the game
   */
  _currentTurnPhase = TURN_PHASES.ROLL;
  get currentTurnPhase() {return this._currentTurnPhase;}

  /**
   * @private
   * The number of dice the current player is allowed to roll
   * @type {number}
   */
  _diceToRoll = Game.DEFAULT_DICE_NUM;

  /**
   * @private
   * The players currently playing the game
   * @type {Player[]}
   */
  _players = [];
  get players() {return this._players;}

  /**
   * @private
   * The current player
   * @type {Player}
   */
  _currentPlayer;
  get currentPlayer() {return this._currentPlayer;}

  /**
   * The ID of the current player
   */
  get currentPlayerId() {return this._currentPlayer.id;}

  /**
   * The current player's total score
   */
  get currentPlayerScore() {return this._currentPlayer.totalScore;}

  /**
   * @private
   * If the current player has selected any dice yet. If the turn ends while this is false, the player's
   * turn score will not be saved
   */
  _hasSelectedDice = false;

  //* ---- METHODS ---- */
  /**
   * @private
   * Internal helper method that updates the current turn phase state
   *
   * @param {string} newPhase The desired new phase
   */
  _updatePhase(newPhase) {
    // Check if the new phase is valid
    if (!Object.values(TURN_PHASES).includes(newPhase)) {
      throw new Error('Invalid turn phase');
    }

    // Update the current phase
    this._currentTurnPhase = newPhase;
  }

  /**
   * Roll the current player's dice. They will automatically roll the amount of dice they are allowed
   *
   * @param {function(string)} onError Method to call if an error occurs
   * @returns {number[]} The rolled dice
   */
  rollDice = (onError) => {
    return handleError(() => {
      // Check if the current player is allowed to roll
      if (this.currentTurnPhase !== TURN_PHASES.ROLL) {
        throw new Error('You cannot roll the dice right now, make a selection first or end your turn');
      }

      // Roll the dice
      this._hasSelectedDice = false;
      const playerDice = this._currentPlayer.rollDice(this._diceToRoll);

      // Set the current phase to select
      this._updatePhase(TURN_PHASES.SELECT);

      // Return the rolled dice
      return playerDice;
    }, onError);
  };

  /**
   * Select previously rolled dice from the current player from scoring. If selections are made, but they
   * do not score, this method will do nothing and return 0
   *
   * @param {number[]} dice The 0-based indexes of the dice to select
   * @param {function(string)} onError Method to call if an error occurs
   * @returns {SelectDiceResult} Result data package
   */
  selectDice = (dice, onError) => {
    return handleError(() => {
      // Check if the current player is allowed to select
      if (this.currentTurnPhase !== TURN_PHASES.SELECT) {
        throw new Error('You cannot select dice right now, roll the dice first or end your turn');
      }

      if (!dice || dice.length === 0) {
        throw new Error('Please select at least one die to score, or end your turn');
      }

      // Select the dice
      const selectDiceResult = this._currentPlayer.selectDice(dice);
      const {diceScore} = selectDiceResult;

      // If the player did score, move back to the ROLL since they can roll again. Otherwise we will
      // assume they made a mistake and do nothing
      if (diceScore > 0) {
        // Also be sure to update the number dice they are allowed to roll
        this._hasSelectedDice = true;
        this._diceToRoll = this._currentPlayer.dice.length - dice.length;
        if (this._diceToRoll < 1) {
          // The player has no dice left to roll, so they get to roll all the dice again
          this._diceToRoll = Game.DEFAULT_DICE_NUM;
        }
        this._updatePhase(TURN_PHASES.ROLL);
      }

      // Return the turn score so far
      return selectDiceResult;
    }, onError);
  };

  /**
   * End the current player's turn, banking their score and moving on to the next player
   *
   * @param {function(string)} onError Method to call if an error occurs
   * @returns {EndTurnResult} Results package
   */
  endTurn = (onError) => {
    return handleError(() => {
      // Do not check for turn phase, the turn can be ended at any time
      const didSaveScore = this._hasSelectedDice;
      const turnScore = didSaveScore ? this._currentPlayer.turnScore : 0;
      const totalScore = this._currentPlayer.endTurn(didSaveScore);

      let isVictory = false;
      if (totalScore >= Game.WINNING_SCORE) {
        // The current player has won the game!
        isVictory = true;
      } else {
        // Move on to the next player
        const currentPlayerIndex = this._players.indexOf(this._currentPlayer);
        const nextPlayerIndex = (currentPlayerIndex + 1) % this._players.length;
        this._currentPlayer = this._players[nextPlayerIndex];
        this._diceToRoll = Game.DEFAULT_DICE_NUM;

        // Reset the phase to roll
        this._updatePhase(TURN_PHASES.ROLL);
      }

      return new EndTurnResult({turnScore, totalScore, isVictory, didSaveScore});
    }, onError);
  };

  /**
   * @param {number} numPlayers The number of players playing the game
   */
  constructor(numPlayers) {
    // Create players
    for (let i = 0; i < numPlayers; i++) {
      this._players.push(new Player(i));
    }

    // Set the current player to the first player
    this._currentPlayer = this._players[0];
  }
};

export default Game;
export {EndTurnResult, TURN_PHASES};
