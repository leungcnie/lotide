const flatten = (array) => {
  let output = [];
  array.forEach(item => {
    if (Array.isArray(item)) {
      item.forEach(element => output.push(element));
    } else {
      output.push(item);
    }
  })
  return output;
}

module.exports = flatten;

// FIRST ATTEMPT: tried to avoid using 2 nested loops but got too messy 
// const flatten = (array) => {
//   let output = [];
//   let strings = "";
//   array.forEach(item => {
//     if (Array.isArray(item)) {
//       strings += item.toString() + ",";
//     } else {
//       strings += item + ",";
//     }
//   })
//   strings = strings.split(",").slice(0, -1);
//   strings.forEach(str => {
//     if (str !== "") {
//       output.push(Number(str));
//     }
//   });
//   return output;
// }