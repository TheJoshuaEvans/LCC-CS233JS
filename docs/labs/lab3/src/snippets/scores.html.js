//? Joshua Evans - 2025-04-22
/** @typedef {import('../ten-thousand/classes/player.js').default} Player */

/**
 * @typedef ScoresHtmlParams
 * @prop {Player} player The game object representing the player
 */

/**
 * This function generates the HTML for a player's current score, which will automatically update as
 * their score changes
 *
 * @param {ScoresHtmlParams} params
 */
const scoresHtml = (params) => {
  const {player} = params;
  const {id} = player;
  const elementId = `p${id}-dice-set`;

  const html = /*html*/`<h3>Player ${id+1} total Score: <span id="${elementId}">${player.totalScore}</span></h3>`;

  // Whenever the player's total score is updated, update the "Total Score" element. This method may be
  // called before the html is added to the DOM, so be aware of that
  player.onUpdateTotalScore = (totalScore) => {
    const totalScoreElement = document.getElementById(elementId);
    if (totalScoreElement) {
      totalScoreElement.innerText = totalScore;
    }
  };

  return html;
};

export default scoresHtml;

