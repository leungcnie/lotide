const flatten = require('../flatten');
const assert = require('chai').assert.deepEqual;

describe("#flatten", () => {
  it("returns [] for [[]]", () => {
    let input = [[]];
    let output = [];
    assert(flatten(input), output)
  });
  it("returns [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]", () => {
    let input = [1, 2, [3, 4], 5, [6]];
    let output = [1, 2, 3, 4, 5, 6];
    assert(flatten(input), output)
  });
  it("returns [1, 2, 3] for [1, 2, [], 3]", () => {
    let input = [1, 2, [], 3];
    let output = [1, 2, 3];
    assert(flatten(input), output)
  });
  it("returns [] for []", () => {
    let input = [];
    let output = [];
    assert(flatten(input), output)
  });
  it("returns ['a', true, 1, false, 2] for ['a', true, 1, [false, 2]]", () => {
    let input = ["a", true, 1, [false, 2]];
    let output = ["a", true, 1, false, 2];
    assert(flatten(input), output)
  });
})
