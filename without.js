const without = (source, itemsToRemove) => {
  let output = []
  for (let element of source) {
    if (!itemsToRemove.includes(element)) {
      output.push(element);
    }
  }
  return output;
}

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
// check that original array not modified
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); 
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
// empty array cases
assertArraysEqual(without([], []), []);
assertArraysEqual(without([1, 2], []), [1, 2]);
assertArraysEqual(without([], [1, 2]), []);
// identical array case
assertArraysEqual(without([1, 2], [1, 2]), []);
// regular cases
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
