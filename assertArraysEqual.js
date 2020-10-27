const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: [${arr1}] is equal to [${arr2}]`);
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: [${arr1}] is not equal to [${arr2}]`);
  }
}

const eqArrays = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

// TEST CODE
// should pass
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual(['1', '2', '3'], ['1', '2', '3']);
assertArraysEqual([], []);
// should fail
assertArraysEqual([1, 2, 3], [1, 2, '3']);
assertArraysEqual([1, 2, 3], []);