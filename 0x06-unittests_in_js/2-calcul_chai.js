/**
 * Function that rounds two numbers and returns their sum
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} - The sum of rounded a and b
 */
const calculateNumber = (type, a, b) => {
    if (type === 'SUM') {
      return Math.round(a) + Math.round(b);
    }
    if (type === 'SUBTRACT') {
      return Math.round(a) - Math.round(b);
    }
    if (type === 'DIVIDE') {
      return Math.round(b) === 0 ? 'Error' : Math.round(a) / Math.round(b);
    }
    return 0;
  };

  module.exports = calculateNumber;
