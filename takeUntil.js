const takeUntil = (array, callback) => {
  const output = [];
  for (const element of array) {
    if (callback(element)) {
      break;
    } else {
      output.push(element);
    }
  }
  return output;
}

module.exports = takeUntil;

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
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);

// const data3 = [1, 2];
// const results3 = takeUntil(data3, x => x < 0);
// assertArraysEqual(results3, [1, 2]);

// const data4 = [];
// const results4 = takeUntil(data4, x => x < 0);
// assertArraysEqual(results4, []);