const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

// TEST CODE
// arrays with <= 2 elements should return []
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1,2]), []);
// odd numbered arrays
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
// even numbered arrays
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);