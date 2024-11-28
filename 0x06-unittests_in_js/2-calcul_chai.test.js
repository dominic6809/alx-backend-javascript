const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai.js');

describe('calculateNumber', () => {
  it('should return 4 for inputs 1 and 3', () => {
    expect(calculateNumber(1, 3)).to.equal(4);
  });

  it('should round and return 5 for inputs 1 and 3.7', () => {
    expect(calculateNumber(1, 3.7)).to.equal(5);
  });

  it('should round and return 5 for inputs 1.2 and 3.7', () => {
    expect(calculateNumber(1.2, 3.7)).to.equal(5);
  });

  it('should round and return 6 for inputs 1.5 and 3.7', () => {
    expect(calculateNumber(1.5, 3.7)).to.equal(6);
  });

  it('should handle negative numbers correctly', () => {
    expect(calculateNumber(-1.4, -3.6)).to.equal(-5);
  });

  it('should return 0 for inputs 0 and 0', () => {
    expect(calculateNumber(0, 0)).to.equal(0);
  });

  it('should handle one positive and one negative number', () => {
    expect(calculateNumber(-1.2, 2.5)).to.equal(2);
  });
});
