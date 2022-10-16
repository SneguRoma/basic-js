const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain:  [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    
    this.chain.push('( ' + value + ')');
  },
  removeLink(position) {
    if(typeof position !== 'number' || position % 1 !==0 || position < 0 || position > this.chain.length) throw new Error ("You can't remove incorrect link!");
    this.chain.spline(position);
  },
  reverseChain() {
    this.chain.reverse();
  },
  finishChain() {
    let result = '';
    if (this.chain.length === 1) {
      result = this.chain[0];
      chain = [];
      return result;
    }
    for (let i = 0; i < this.chain.length -1;i++){
      result = result + i + '~~';
    }
    result = result + this.chain[this.chain.length -1];
    return result;
  }
};

module.exports = {
  chainMaker
};
