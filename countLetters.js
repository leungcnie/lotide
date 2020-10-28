const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = str => {
  const count = {};
  const noSpaces = str.replace(/\s/g, "");
  for (const char of noSpaces) {
    if (count[char]) {
      count[char] ++;
    } else {
      count[char] = 1;
    }
  }
  return count;
}

// TEST CODE
const example = countLetters("lighthouse in the house");
// const expected = {
//   l: 1,
//   i: 2,
//   g: 1,
//   h: 4,
//   t: 2,
//   o: 2,
//   u: 2,
//   s: 2,
//   e: 3,
//   n: 1,
// };
assertEqual(example["l"], 1);
assertEqual(example["i"], 2);
assertEqual(example["g"], 1);
assertEqual(example["h"], 4);
assertEqual(example["t"], 2);
assertEqual(example["o"], 2);
assertEqual(example["u"], 2);
assertEqual(example["s"], 2);
assertEqual(example["e"], 3);
assertEqual(example["n"], 1);