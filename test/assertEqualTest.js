//require the function
const assertEqual = require('../assertEqual');

//should fail
console.log("These should fail:")
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 2);
//should pass
console.log("These should pass:")
assertEqual(1, 1);
assertEqual("nyeh", "nyeh");
