/** @typedef {import('../ten-thousand/classes/game.js').default} Game */

/**
 * @typedef TurnPhaseHtmlParams
 * @prop {Game} game The main game object
 */

/**
 * This function generates the HTML indicating the current turn phase the game is in
 *
 * @param {TurnPhaseHtmlParams} params
 */
const turnPhaseHtml = (params) => {
  const {game} = params;
  const elementId = `turn-phase`;

  const html = /*html*/`<h3>Turn Phase: <span id="${elementId}">${game.totalScore}</span></h3>`;

  // Whenever the game's total score is updated, update the "Total Score" element. This method may be
  // called before the html is added to the DOM, so be aware of that
  // game.onUpdateTurnPhase = (totalScore) => {
  //   const totalScoreElement = document.getElementById(elementId);
  //   if (totalScoreElement) {
  //     totalScoreElement.innerText = totalScore;
  //   }
  // };

  return html;
};

export default turnPhaseHtml;

