const Utils = require('./utils');

/**
 * Sends a payment request to the API
 * @param {number} totalAmount - Total amount
 * @param {number} totalShipping - Total shipping cost
 */
function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const result = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${result}`);
}

module.exports = sendPaymentRequestToApi;
