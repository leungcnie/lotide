const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (Array.isArray(arr1[i])) {
        return eqArrays(arr1[i], arr2[i]);
      } else if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
};

// TEST CODE: all should pass
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); 
assertEqual(eqArrays([1, 2, 3], [1, 2, '3']), false); 
assertEqual(eqArrays([], []), true); 
assertEqual(eqArrays([1, 2, 3], [1, 4, 5]), false);
assertEqual(eqArrays(["a", "b"], ["a", "b"]), true);
assertEqual(eqArrays([1, 2, 3], []), false);
assertEqual(eqArrays([1, [2, 4, [5, 6], 3]], [1, [2, 4, [5, 6], 3]]), true); 
assertEqual(eqArrays([1, [2, 4, [5, 6,[7, [8, 9, [10]]]], 3]], [1, [2, 4, [5, 6,[7, [8, 9, [10]]]], 3]]), true); 
assertEqual(eqArrays([1, [2, 4, [5, 6], 3]], [1, [2, 4, [5, 6, [[[]]]], 3]]), false); 

module.exports = eqArrays;