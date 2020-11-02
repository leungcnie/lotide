const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// TEST CODE: all should pass
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); 
assertEqual(eqArrays([1, 2, 3], [1, 2, '3']), false); 
assertEqual(eqArrays([], []), true); 
assertEqual(eqArrays([1, 2, 3], [1, 4, 5]), false);
assertEqual(eqArrays(["a", "b"], ["a", "b"]), true);
assertEqual(eqArrays([1, 2, 3], []), false);