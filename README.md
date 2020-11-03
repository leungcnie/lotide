# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @leungcnie/lotide`

**Require it:**

`const _ = require('@leungcnie/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: returns the head of an array
* `tail(array)`: returns the tail of an array
* `middle(array)`: returns the middle element(s) of an array
* `assertArraysEqual(arr1, arr2)`: asserts whether 2 arrays are equal
* `assertEqual(actual, expected)`: asserts whether values are equal
* `eqArrays(arr1, arr2)`: returns true if 2 arrays are equal, else return false
* `flatten(array)`: flattens an array of nested arrays into a single array
* `countOnly(allItems, itemsToCount)`: looks through an array allItems and returns an object of counts of only the items specified in itemsToCount
* `letterPositions(string)`: returns the index of each character in a string
* `findKeyByValue(obj, val)`: returns key that matches the value val in a given object obj
* `eqObjects(obj1, obj2)`: returns true if 2 objects are equal, else return false
* `assertObjectsEqual(obj1, obj2)`: asserts whether 2 objects are equal
* `countLetters(string)`: returns an object of each letter in a string and their respective number of occurences
*  `findKey(obj, callback)`: returns key in object obj that satisfies the callback function
* `map(array, callback)`: returns the result of applying the callback function to the array
* `takeUntil(arr, callback)`: returns an array of arr's elements up until the element passed into the callback returns true
* `without(source, itemsToRemove)`: returns a subset of a given array, removing unwanted elements 