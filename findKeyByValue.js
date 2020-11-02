const findKeyByValue = (obj, val) => {
  for (const key in obj) {
    if (obj[key] === val) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;

// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//     return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

// // TEST CODE
// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama: "The Wire",
//   a: 1,
//   b: false, 
//   c: undefined,
//   d: null
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
// assertEqual(findKeyByValue(bestTVShowsByGenre, 1), "a");
// assertEqual(findKeyByValue(bestTVShowsByGenre, false), "b");
// assertEqual(findKeyByValue(bestTVShowsByGenre, undefined), "c");
// assertEqual(findKeyByValue(bestTVShowsByGenre, null), "d");