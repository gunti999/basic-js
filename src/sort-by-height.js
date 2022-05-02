const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let arrOne = [];
  let arrTwo = [];
  let result = [];
  arr.forEach(el => {
    if (el === -1) {
      arrOne.push(el)
    } else {
      arrTwo.push(el);
      arrOne.push('0');
    }
  })
  arrTwo.sort((a, b) => a - b);
  let index = 0;
  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] === -1) {
      result.push(arrOne[i]);
    }
    if (arrOne[i] === '0') {
      result.push(arrTwo[index]);
      index++
    }
  }
  return result;
}

module.exports = {
  sortByHeight
};
