const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should resolve with the correct data when success is true', (done) => {
    // Call the function with success = true
    getPaymentTokenFromAPI(true)
      .then((response) => {
        // Check if the response has the expected data
        expect(response).to.have.property('data', 'Successful response from the API');
        
        // Call done to indicate that the async test is complete
        done();
      })
      .catch(done);  // If promise is rejected, we call done with the error
  });

  it('should reject with an error when success is false', (done) => {
    // Call the function with success = false
    getPaymentTokenFromAPI(false)
      .then(() => {
        // This test should fail if the promise resolves, so we fail it manually
        done(new Error('Expected promise to be rejected'));
      })
      .catch((error) => {
        // Ensure the error message matches the expected
        expect(error.message).to.equal('API call failed');
        done();
      });
  });
});
