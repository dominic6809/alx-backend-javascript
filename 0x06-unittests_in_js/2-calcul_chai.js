/**
 * Function that rounds two numbers and returns their sum
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} - The sum of rounded a and b
 */
function calculateNumber(a, b) {
  return Math.round(a) + Math.round(b);
}

module.exports = calculateNumber;
