/**
 * Simulates an API call to get a payment token
 * @param {boolean} success - Whether the API call is successful or not
 * @returns {Promise} - A promise that resolves with a response if successful
 */
function getPaymentTokenFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ data: 'Successful response from the API' });
    } else {
      // Reject the promise if not successful (no response)
      reject(new Error('API call failed'));
    }
  });
}

module.exports = getPaymentTokenFromAPI;
