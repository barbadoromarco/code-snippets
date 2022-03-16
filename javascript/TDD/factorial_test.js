var assert = require("assert");
var Calculate =  require('./factorial.js');

describe('Calculate', () => {
  describe('.factorial', () => {
    it('will test if the output of 5! is equal to 120', () => {
      // Setup
      const inputNumber = 5;
      const expectedResult = 120;
      // Exercise
      const actualResult = Calculate.factorial(5);
      // Verify
      assert.equal(actualResult, expectedResult);
    });
    it('will test if the output of 10! is equal to 3628800', () => {
      // Setup
      const inputNumber = 10;
      const expectedResult = 3628800;
      // Exercise
      const actualResult = Calculate.factorial(10);
      // Verify
      assert.equal(actualResult, expectedResult);
    });
    it('returns 1 when you pass in 0', () => {
      // Setup
      const inputNumber = 0;
      const expectedResult = 1;
      // Exercise
      const actualResult = Calculate.factorial(0);
      // Verify
      assert.equal(actualResult, expectedResult);
    });
  });
});
