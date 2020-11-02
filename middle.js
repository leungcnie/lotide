const middle = arr => {
  const mid = [];
  const oddMid = Math.floor(arr.length / 2);
  const evenMid = arr.length / 2;
  if (arr.length <= 2) {
    return [];
  } else if (arr.length % 2 === 0) {
    mid.push(arr[evenMid - 1], arr[evenMid]);
  } else {
    mid.push(arr[oddMid]);
  }
  return mid;
}

module.exports = middle;