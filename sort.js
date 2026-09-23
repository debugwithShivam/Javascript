const arr = [1,9,2,8,3,7,4,6,5];

function sortArray() {
  return arr.sort((a, b) => a - b);
}

module.exports = sortArray;