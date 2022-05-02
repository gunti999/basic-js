const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let repeatTimes = options.repeatTimes;
  let separator = options.separator;
  let addition = options.addition;
  let additionRepeatTimes = options.additionRepeatTimes;
  let additionSeparator = options.additionSeparator;

  if (typeof str !== 'string') {
    str = String(str);
  }
  if (addition === undefined) {
    addition = '';
  }
  if (typeof addition !== 'string') {
    addition = String(addition);
  }
  if (separator == undefined) {
    separator = '+';
  }
  if (additionSeparator == undefined) {
    additionSeparator = '|';
  }
  
  let transfornStr = '';
  let resultStr = '';
  if (additionRepeatTimes != undefined) {
    transfornStr = str;
    for (i = 0; i < additionRepeatTimes; i++) {
      if (i === additionRepeatTimes - 1) {
        transfornStr += addition;
      } else {
        transfornStr += addition + additionSeparator;
      }
    }
  } else {
    transfornStr = str + addition;
  }
  if (repeatTimes != undefined) {
    for (j = 0; j < repeatTimes; j++) {
      if (j === repeatTimes - 1) {
        resultStr += transfornStr;

      } else {
        resultStr += transfornStr + separator;
      }
    }
  } else {
    resultStr = transfornStr;
  }
  return resultStr;
}

module.exports = {
  repeater
};
