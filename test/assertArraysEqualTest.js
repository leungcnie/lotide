const assertArraysEqual = require('../assertArraysEqual');

// TEST CODE
// should pass
console.log("These should pass:")
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual(['1', '2', '3'], ['1', '2', '3']);
assertArraysEqual([], []);
// should fail
console.log("These should fail:")
assertArraysEqual([1, 2, 3], [1, 2, '3']);
assertArraysEqual([1, 2, 3], []);
assertArraysEqual([1, 2], [1, 2, 3]);