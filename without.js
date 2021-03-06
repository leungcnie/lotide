const without = (source, itemsToRemove) => {
  let output = []
  for (let element of source) {
    if (!itemsToRemove.includes(element)) {
      output.push(element);
    }
  }
  return output;
}

module.exports = without;

// const assertArraysEqual = (arr1, arr2) => {
//   if (eqArrays(arr1, arr2)) {
//     return console.log(`✅✅✅ Assertion Passed: [${arr1}] === [${arr2}]`);
//   } else {
//     return console.log(`🛑🛑🛑 Assertion Failed: [${arr1}] !== [${arr2}]`);
//   }
// }

// const eqArrays = (arr1, arr2) => {
//   if (arr1.length !== arr2.length) {
//     return false;
//   } else {
//     for (let i = 0; i < arr1.length; i++) {
//       if (arr1[i] !== arr2[i]) {
//         return false;
//       }
//     }
//     return true;
//   }
// };

// // TEST CODE
// // check that original array not modified
// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); 
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);
// // empty array cases
// assertArraysEqual(without([], []), []);
// assertArraysEqual(without([1, 2], []), [1, 2]);
// assertArraysEqual(without([], [1, 2]), []);
// // identical array case
// assertArraysEqual(without([1, 2], [1, 2]), []);
// // regular cases
// assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
