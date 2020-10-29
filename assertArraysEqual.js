const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    return console.log(`✅✅✅ Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
}

const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
};

// TEST CODE
// should pass
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual(['1', '2', '3'], ['1', '2', '3']);
assertArraysEqual([], []);
// should fail
assertArraysEqual([1, 2, 3], [1, 2, '3']);
assertArraysEqual([1, 2, 3], []);
assertArraysEqual([1, 2], [1, 2, 3]);