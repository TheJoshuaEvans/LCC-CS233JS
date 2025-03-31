/**
 * Takes a number and pads the front of it so that it fits a desired length
 *
 * @param {number} number The number to pad
 * @param {number} [digits] The number of digits to pad to. Default is 2
 * @returns {string} The padded number as a string
 */
function pad(number, digits = 2) {
  return number.toString().padStart(digits, '0');
}

export default pad;
