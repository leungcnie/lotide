const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence.charAt(i) !== " ") {
      if (results[sentence.charAt(i)]) {
        results[sentence.charAt(i)].push(i);
      } else {
        results[sentence.charAt(i)] = [i];
      }
    }
  }
  return results;
}

module.exports = letterPositions;

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
// const example = letterPositions("hello a");
// console.log(example);
// assertArraysEqual(example["h"], [0]);
// assertArraysEqual(example["e"], [1]);
// assertArraysEqual(example["l"], [2, 3]);
// assertArraysEqual(example["o"], [4]);
// assertArraysEqual(example["a"], [6]);