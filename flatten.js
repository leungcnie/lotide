const flatten = (array) => {
  let output = [];
  let strings = "";
  array.forEach(item => {
    if (Array.isArray(item)) {
      strings += item.toString() + ",";
    } else {
      strings += item + ",";
    }
  })
  strings = strings.split(",").slice(0, -1);
  strings.forEach(str => {
    output.push(Number(str));
  });
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
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([[]]), []);
assertArraysEqual(flatten([1, 2, [], 3]) [1, 2, 3]);
