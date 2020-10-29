const flatten = (array) => {
  let output = [];
  array.forEach(item => {
    if (Array.isArray(item)) {
      item.forEach(element => output.push(element));
    } else {
      output.push(item);
    }
  })
  return output;
}

// FIRST ATTEMPT: tried to avoid using 2 nested loops but got too messy 
// const flatten = (array) => {
//   let output = [];
//   let strings = "";
//   array.forEach(item => {
//     if (Array.isArray(item)) {
//       strings += item.toString() + ",";
//     } else {
//       strings += item + ",";
//     }
//   })
//   strings = strings.split(",").slice(0, -1);
//   strings.forEach(str => {
//     if (str !== "") {
//       output.push(Number(str));
//     }
//   });
//   return output;
// }

const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: [${arr1}] === [${arr2}]`);
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
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([[]]), []);
assertArraysEqual(flatten([1, 2, [], 3]), [1, 2, 3]);
assertArraysEqual(flatten(["a", "b", [], "c"]), ["a", "b", "c"]);
assertArraysEqual(flatten(["a", true, 1, [false, 2]]), ["a", true, 1, false, 2]);