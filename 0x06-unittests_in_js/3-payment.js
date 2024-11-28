const Utils = require('./utils');

/**
 * Sends a payment request to the API
 * @param {number} totalAmount - Total amount
 * @param {number} totalShipping - Total shipping cost
 */
const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  const totalCost = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${totalCost}`);
};

module.exports = sendPaymentRequestToApi;
