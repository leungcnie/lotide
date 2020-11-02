const eqObjects = require('./eqObjects');

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    return console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;

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

// const eqObjects = function(object1, object2) {
//   if (Object.keys(object1).length === Object.keys(object2).length) {
//     for (const key in object1) {
//       if (Array.isArray(object1[key])) {
//         if (!eqArrays(object1[key], object2[key])) {
//           return false;
//         }
//       } else if (object1[key] !== object2[key]) {
//         return false;
//       }
//     }
//     return true;
//   } else {
//     return false;
//   }
// };

// // TEST CODE
// const test = {
//   a: 1,
//   b: 2
// };

// const test2 = {
//   a: 1,
//   b: 2
// };

// const test3 = {
//   b: 2,
//   a: 1
// };

// const test4 = {
//   c: 3,
//   d: 4
// }

// const test5 = {};
// const test6 = {};

// const test7 = {
//   a: 1,
//   b: "2"
// }

// // should pass
// assertObjectsEqual(test, test2);
// assertObjectsEqual(test, test3);
// assertObjectsEqual(test5, test6)
// // should fail
// assertObjectsEqual(test, test4);
// assertObjectsEqual(test, test5);
// assertObjectsEqual(test, test7);