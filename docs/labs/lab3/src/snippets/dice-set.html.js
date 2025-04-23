//? Joshua Evans - 2025-04-22
/** @typedef {import('../ten-thousand/classes/player.js').default} Player */

/**
 * @typedef DiceSetHtmlParams
 * @prop {Player} player The game object representing the player responsible for this dice set
 */

/**
 * This function generates the HTML for the dice set belonging to a particular player. This method
 * assumes that the player has already rolled all their dice
 *
 * @param {DiceSetHtmlParams} params
 */
const diceSetHtml = (params) => {
  const {player} = params;
  const {id} = player;
  const turnScoreElementId = `turn-score`;

  const html = /*html*/`
<div id="p${id}-wrapper" class="mt-3 player-wrapper">
  <h2>Player ${id + 1}'s Turn</h2>
  <h3>Current Turn Score: <span id="${turnScoreElementId}">${player.turnScore}</span></h3>
  <div class="row justify-content-center">
    ${
      player.dice.map((dieValue, index) => {
        return /*html*/`<div id="p${id}-dice-${index}" die-index="${index}" name="die" class="die die-${dieValue} clickable col-sm-2 border border-2"></div>`;
      }).join('')
    }
  </div>
  <button type="button" id="save-selections-button" class="mt-1 btn btn-primary">Select Dice</button>
  <button type="button" id="reroll-dice-button" class="mt-1 btn btn-secondary">Reroll</button>
  <button type="button" id="end-turn-button" class="mt-1 btn btn-success">End Turn</button>
</div>`;

  // By utilizing the custom event on the player object, we can automatically update the turn score
  player.onUpdateTurnScore = (turnScore) => {
    const turnScoreElement = document.getElementById(turnScoreElementId);
    if (turnScoreElement) {
      turnScoreElement.innerText = turnScore;
    }
  };

  return html;
};

export default diceSetHtml;
