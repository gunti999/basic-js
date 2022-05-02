const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;
  let strOne = s1.split('');
  let strTwo = s2.split('');

  for (let i = 0; i < strOne.length; i++) {
    for (let j = 0; j < strTwo.length; j++) {
      if (strOne[i] === strTwo[j]) {
        count++;
        strTwo.splice(strTwo.indexOf(strOne[i]), 1)
        break;
      }
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
