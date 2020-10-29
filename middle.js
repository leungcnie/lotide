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

const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
}

const middle = arr => {
  const mid = [];
  const oddMid = Math.floor(arr.length / 2);
  const evenMid = arr.length / 2;
  if (arr.length <= 2) {
    return [];
  } else if (arr.length % 2 === 0) {
    mid.push(arr[evenMid - 1], arr[evenMid]);
  } else {
    mid.push(arr[oddMid]);
  }
  return mid;
}

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