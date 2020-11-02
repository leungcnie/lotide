const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) { //if they have same # of keys, continue
    for (const key in object1) { //check object 1 keys
      if (Array.isArray(object1[key])) { //if the value of the key is an array,
        if (!eqArrays(object1[key], object2[key])) { //if that array value in both objects is not the same, return FALSE
          return false;
        }
      } else if (Object.keys(object1[key]).length > 0) { //if value is NOT an array nor object, and the values don't match, return FALSE
        return eqObjects(object1[key], object2[key]);
      } else if (object1[key] !== object2[key]) {  //if value is object, call the function on the value object
        return false;
      }
    }
    return true; //else return TRUE
  } else { // if they have diff # of keys, they are automatically not identical
    return false;
  }
};

// TEST CODE
console.log("Beginning of eqObjects tests:");
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);

// array values
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);

// recursive tests
assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
assertEqual(eqObjects({ a: { z: { c: { d: 1 } } }, b: 2 }, { a: { z: { c: { d: 1 } } }, b: 2 }), true);

assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
assertEqual(eqObjects({ a: { y: 0, z: { c: { d: 1 } } }, b: 2 }, { a: 1, b: 2 }), false)

