const request = require('request');
const { expect } = require('chai');

describe('Index page', () => {
  let server;

  // Start the server before tests
  before((done) => {
    server = require('./api'); // Import and start the server
    done();
  });

  // Stop the server after tests
  after((done) => {
    server.close(done);
  });

  it('should return a 200 status code', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return "Welcome to the payment system"', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

// Test suite for /cart/:id
describe('Cart page', () => {
  it('should return a 200 status code when :id is a number', (done) => {
    request('http://localhost:7865/cart/12', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('should return a 404 status code when :id is NOT a number', (done) => {
    request('http://localhost:7865/cart/hello', (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      expect(body).to.include('Not Found');
      done();
    });
  });

  it('should return a 404 status code when :id is an empty string', (done) => {
    request('http://localhost:7865/cart/', (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      expect(body).to.include('Not Found');
      done();
    });
  });
});
