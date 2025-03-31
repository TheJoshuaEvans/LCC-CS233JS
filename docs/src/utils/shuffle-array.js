/**
 * Takes an array and returns a new array with the element order randomized
 *
 * @param {object[]} arr Array to shuffle
 */
function shuffleArray(arr) {
  // An extremely clever little algorithm curtesy of @superluminary
  // https://stackoverflow.com/a/46545530
  const shuffled = arr
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  return shuffled;
}

export default shuffleArray;
