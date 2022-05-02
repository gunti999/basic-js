const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = [];
  let str = String(n).split('');
  for (i = 0; i < str.length; i++) {
    let one = str.slice(0, i)
    let two = str.slice(i + 1)
    let res = Number(one.concat(two).join(''));
    arr.push(res)
  }
  arr.sort((a, b) => b - a)
  return arr[0];
}

module.exports = {
  deleteDigit
};
