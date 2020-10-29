const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    return console.log(`✅✅✅ Assertion Passed: [${arr1}] === [${arr2}]`);
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

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}


const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);

// TEST CODE
const results2 = map([], word => word[0]);
assertArraysEqual(results2, []);

const results3 = map([1, 2, 3], num => String(num));
assertArraysEqual(results3, ["1", "2", "3"]);

const results4 = map([1, "a", true], item => typeof item)
assertArraysEqual(results4, ["number", "string", "boolean"])

assertArraysEqual(results1, words.map(word => word[0]));

