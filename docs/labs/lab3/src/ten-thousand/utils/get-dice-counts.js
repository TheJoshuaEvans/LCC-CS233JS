//? Joshua Evans - 2025-04-22
/**
 * Class that represents the number of each die value in a set of up to six dice. Works just like a
 * regular dictionary, but with some helpers for counting pairs and stuff
 */
class DiceCounts {
  constructor() {
    this[1] = 0;
    this[2] = 0;
    this[3] = 0;
    this[4] = 0;
    this[5] = 0;
    this[6] = 0;
  }

  /**
   * Count the number of pairs in the dice counts. A 4 of a kind is considered two separate pairs. A 6 of
   * a kind is considered three separate pairs EXCEPT for 1s, which will still be considered two pairs,
   * since two triple 1s are worth more than three pairs (1000 + 1000 = 2000 > 1500)
   */
  countPairs() {
    const pairCounts = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0};
    const diceCounts = {...this};
    for (let i = 1; i <= 6; i++) {
      while (diceCounts[i] >= 2) {
        pairCounts[i] = Math.floor(diceCounts[i] / 2);
        diceCounts[i] -= pairCounts[i] * 2;
      }

      if (i === 1 && pairCounts[i] > 2) {
        pairCounts[i] = 2;
      }
    }

    return pairCounts;
  }

  /**
   * Get the total number of pairs in the dice counts, according to the `countPairs` method
   *
   * @returns {number} The number of pairs in the dice count
   */
  getTotalPairs() {
    const pairCounts = this.countPairs();
    let totalPairs = 0;
    for (let i = 1; i <= 6; i++) {
      totalPairs += pairCounts[i];
    }
    return totalPairs;
  }

  /**
   * Check if the dice counts contain a straight
   *
   * @returns {boolean} True if the dice counts contain a straight (1, 2, 3, 4, 5, 6)
   */
  containsStraight() {
    return (
      this[1] === 1 &&
      this[2] === 1 &&
      this[3] === 1 &&
      this[4] === 1 &&
      this[5] === 1 &&
      this[6] === 1
    );
  }
};

/**
 * Takes an array of dice values and returns an object with the counts of each die value.
 *
 * @param {number[]} diceValues An array of up to six numbers between 1 and 6 representing the dice values
 * @returns {DiceCounts} An enhanced dictionary object with the counts of each die value
 */
const getDiceCounts = (diceValues) => {
  const counts = new DiceCounts;
  diceValues.forEach((dieValue) => {
    if (dieValue >= 1 && dieValue <= 6) {
      counts[dieValue]++;
    }
  });

  return counts;
};

export default getDiceCounts;
