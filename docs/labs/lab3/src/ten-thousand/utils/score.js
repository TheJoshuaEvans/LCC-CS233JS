//* Joshua Evans - 2025-04-19
import getDiceCounts from './get-dice-counts.js';

/**
 * Calculate the score for a given set of dice values in the game of Ten Thousand
 *
 * @param {number[]} diceValues An array of up to six numbers between 1 and 6 representing the dice values
 * @returns {number} The score for the given dice values
 */
const score = (diceValues) => {
  const diceCounts = getDiceCounts(diceValues);
  let score = 0;

  // ---- ERROR HANDLING ----
  // Check for too many dice
  if (diceValues.length > 6) {
    throw new Error('Too many dice. Must be <= 6. Received: ' + diceValues.length);
  }

  // Check for invalid dice values
  for (let i = 0; i < diceValues.length; i++) {
    if (diceValues[i] < 1 || diceValues[i] > 6) {
      throw new Error('Invalid die value. Must be between 1 and 6. Received: ' + diceValues[i]);
    }
  }
  // ---- /END ERROR HANDLING ----

  // ---- SHORT CIRCUITS ----
  // A straight is the easiest to detect, and prevents any other scores from being possible
  if (diceCounts.containsStraight()) {
    return 3000;
  }

  // If there are three pairs, that means all the dice are being used for the score method and no
  // additional scoring will be possible
  if (diceCounts.getTotalPairs() === 3) {
    return 1500;
  }
  // ---- /END SHORT CIRCUITS ----

  while (true) {
    // Check for three of a kind, if one is found add it to the score and remove it from the die
    // count, then re-run the score loop
    // Start with 1, since it's special
    if (diceCounts[1] >= 3) {
      score += 1000;
      diceCounts[1] -= 3;
      continue;
    }

    // Now use a loop for the rest
    for (let i = 2; i <= 6; i++) {
      if (diceCounts[i] >= 3) {
        score += i * 100;
        diceCounts[i] -= 3;
        continue;
      }
    }

    // Check for individual 1s and 5s
    if (diceCounts[1] > 0) {
      score += diceCounts[1] * 100;
      diceCounts[1] = 0;
    }
    if (diceCounts[5] > 0) {
      score += diceCounts[5] * 50;
      diceCounts[5] = 0;
    }

    // There remains no more scoring opportunities
    break;
  }

  return score;
};

export default score;
