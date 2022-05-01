const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chainArr: [],

  getLength() {
    return this.chainArr.length;
  },

  addLink(value) {
    if (value !== ' ') {
      this.chainArr.push(`( ${value} )`);
    } else {
      this.chainArr.push(`(  )`);
    }
    return this;
  },

  removeLink(position) {
    if (Number.isInteger(position) && position >= 1 && position < this.chainArr.length) {
      this.chainArr.splice(position - 1, 1);
    } else {
      this.chainArr = [];
      throw new Error('error');
    }

    return this;
  },

  reverseChain() {
    this.chainArr.reverse();
    return this;
  },

  finishChain() {
    let resultChain = this.getLength() > 0 ? this.chainArr.join('~~') : false;
    this.chainArr = [];
    return resultChain;
  }
};


module.exports = {
  chainMaker
};
