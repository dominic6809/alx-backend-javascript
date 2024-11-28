const Utils = {
  /**
   * Function that performs arithmetic operations on two rounded numbers
   * @param {string} type - The operation type (SUM, SUBTRACT, DIVIDE)
   * @param {number} a - First number
   * @param {number} b - Second number
   * @returns {number|string} - The result of the operation or "Error" for invalid division
   */
    calculateNumber(type, a, b) {
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
    },
  };

  module.exports = Utils;
