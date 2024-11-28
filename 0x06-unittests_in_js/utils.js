/**
 * Utility module for mathematical operations
 */
const Utils = {
  /**
   * Function that performs arithmetic operations on two rounded numbers
   * @param {string} type - The operation type (SUM, SUBTRACT, DIVIDE)
   * @param {number} a - First number
   * @param {number} b - Second number
   * @returns {number|string} - The result of the operation or "Error" for invalid division
   */
  calculateNumber: (type, a, b) => {
    const roundedA = Math.round(a);
    const roundedB = Math.round(b);

    switch (type) {
      case 'SUM':
        return roundedA + roundedB;
      case 'SUBTRACT':
        return roundedA - roundedB;
      case 'DIVIDE':
        if (roundedB === 0) return 'Error';
        return roundedA / roundedB;
      default:
        throw new Error('Invalid operation type');
    }
  }
};

module.exports = Utils;
