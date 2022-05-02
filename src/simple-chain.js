const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    if (value === undefined) { value = '' }
    this.arr.push(value);
    return this;
  },
  removeLink(position) {
    if (position < 1 || typeof position !== 'number' || position > chainMaker.arr.length) {
      chainMaker.arr.length = 0;
      throw new Error(`You can't remove incorrect link!`);
    }
    this.arr[position - 1] = undefined;
    this.arr = chainMaker.arr.filter((a => { return a !== undefined }));
    return this;
  },
  reverseChain() {
    this.arr.reverse()
    return this;
  },
  finishChain() {
    let result = this.arr.reduce((prev, cur) => { return prev += `~( ${cur} )~` }, '')
    result = result.slice(1, result.length - 1);
    this.arr.length = 0;
    return result;
  }
};

module.exports = {
  chainMaker
};
