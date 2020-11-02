const findKey = (object, callback) => {
  for (const key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
  return undefined;
}

module.exports = findKey;

// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

// // TEST CODE

// const t1 = findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2)
// const t2 = findKey({
//   a: { stars: 1 },
//   b: { stars: 2}
// }, x => x.stars === 3)
// const t3 = findKey({}, x => x.stars === 3)
// assertEqual(t1, "noma");
// assertEqual(t2, undefined);
// assertEqual(t3, undefined);
