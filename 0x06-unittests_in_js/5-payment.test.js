const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let consoleSpy;

  beforeEach(() => {
    // Create a spy for console.log
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    // Restore the spy after each test to ensure no interference
    consoleSpy.restore();
  });

  it('should log "The total is: 120" when called with 100 and 20', () => {
    sendPaymentRequestToApi(100, 20);

    // Verify that console.log was called once
    expect(consoleSpy.calledOnce).to.be.true;

    // Verify that console.log was called with the correct message
    expect(consoleSpy.calledWith('The total is: 120')).to.be.true;
  });

  it('should log "The total is: 20" when called with 10 and 10', () => {
    sendPaymentRequestToApi(10, 10);

    // Verify that console.log was called once
    expect(consoleSpy.calledOnce).to.be.true;

    // Verify that console.log was called with the correct message
    expect(consoleSpy.calledWith('The total is: 20')).to.be.true;
  });
});
