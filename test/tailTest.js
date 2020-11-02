const assert = require('chai').assert.deepEqual;
const tail = require('../tail');

describe("#tail", () => {
  it("should not modify the original array", () => {
    const input = ["Yo Yo", "Lighthouse", "Labs"];
    tail(input);
    assert(input.length, 3);
  });
  it("returns [2, 3] for [1, 2, 3]", () => {
    const input = [1, 2, 3];
    assert(tail(input), [2, 3]);
  });
  it("returns [] for ['a']", () => {
    const input = ['a'];
    assert(tail(input), []);
  });
  it("returns [] for []", () => {
    const input = [];
    assert(tail(input), []);
  });
})