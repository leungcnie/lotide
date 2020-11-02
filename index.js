const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
// not previously refactored
const flatten = require('./flatten');
const countOnly = require('./countOnly');
const letterPositions = require('./letterPositions');
const findKeyByValue = require('./findKeyByValue');
const eqObjects = require('./eqObjects');
// not mentioned
const assertObjectsEqual = require('./assertObjectsEqual');
const countLetters = require('./countLetters');
const findKey = require('./findKey');
const map = require('./map');
const takeUntil = require('./takeUntil');

module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  assertArraysEqual: assertArraysEqual,
  assertEqual: assertEqual,
  eqArrays: eqArrays,
  // not previously refactored
  flatten: flatten,
  countOnly: countOnly,
  letterPositions: letterPositions,
  findKeyByValue: findKeyByValue,
  eqObjects: eqObjects,
  // not mentioned
  assertObjectsEqual: assertObjectsEqual,
  countLetters: countLetters,
  findKey: findKey,
  map: map,
  takeUntil: takeUntil,
};