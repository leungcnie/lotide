const assert = require('chai').assert.deepEqual;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [] for []", () => {
    const input = [];
    assert(middle(input), []);
  });
  it("returns [] for [1]", () => {
    const input = [1];
    assert(middle(input), []);
  });
  it("returns [] for [1, 2]", () => {
    const input = [1, 2];
    assert(middle(input), []);
  });
  it("returns ['b'] for ['a', 'b', 'c']", () => {
    const input = ['a', 'b', 'c'];
    assert(middle(input), ['b']);
  });
  it("returns [undefined, null] for [true, undefined, null, false]", () => {
    const input = [true, undefined, null, false];
    assert(middle(input), [undefined, null]);
  });
});

// // TEST CODE
// // arrays with <= 2 elements should return []
// assertArraysEqual(middle([1]), []);
// assertArraysEqual(middle([1,2]), []);
// // odd numbered arrays
// assertArraysEqual(middle([1, 2, 3]), [2]);
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
// // even numbered arrays
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);