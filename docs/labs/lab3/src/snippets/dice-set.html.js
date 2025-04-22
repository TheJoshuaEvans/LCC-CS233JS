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
  <button type="button" id="save-selections" class="mt-1 btn btn-primary">Select Dice</button>
</div>`;

  player.onUpdateTurnScore = (turnScore) => {
    const turnScoreElement = document.getElementById(turnScoreElementId);
    console.log(turnScoreElement);
    if (turnScoreElement) {
      turnScoreElement.innerText = turnScore;
    }
  };

  return html;
};

export default diceSetHtml;
