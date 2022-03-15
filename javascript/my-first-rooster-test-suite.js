const assert = require('assert');
const Rooster = require('../index');

describe('Rooster', () => {
  describe('.announceDawn', () => {
    it('returns a rooster call', () => {
      // Setup 
      const expected = 'cock-a-doodle-doo!';
      let returned;
      // Exercise
      returned = Rooster.announceDawn();
      // Verify
      assert.ok(returned == expected);
    });
  });
  describe('.timeAtDawn', () => {
    it('return its argument as a string', () => {
      // Setup 
      const expected = '6';
      let returned;
      // Exercise
      returned = Rooster.timeAtDawn(6);
      // Verify
      assert.strictEqual(returned, expected);
    });
    it('throws an error if passed a number less than 0', () => {
      // Exercise 
      assert.throws(() => {
        Rooster.timeAtDawn(-6);
        },
        RangeError
      );
    });
    it('throws an error if passed a number greater than 0', () => {
      // Exercise 
      assert.throws(() => {
        Rooster.timeAtDawn(33);
        },
        RangeError
      );
    });
  });
});
