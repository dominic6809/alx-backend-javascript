/**
 * Simulates an API call to get a payment token
 * @param {boolean} success - Whether the API call is successful or not
 * @returns {Promise} - A promise that resolves with a response if successful
 */
const getPaymentTokenFromAPI = (success) => new Promise((resolve, _reject) => {
    if (success) {
      resolve({data: 'Successful response from the API'});
    }
  });

  module.exports = getPaymentTokenFromAPI;
