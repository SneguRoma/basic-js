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
  let a = n + ''; 
  let b = a.split('');
  for(let i = 0; i < b.length; i++){
    if(parseInt(b[i]) === parseInt(b[i+1])) continue;
    if(parseInt(b[i]) > parseInt(b[i+1])){
    
    b.splice(i+1,1); 
    a = b.join('');
      break;
  }
  else a = b.splice(i,1);
  a = b.join('');
    break;
  }   
  return parseInt(a);
}

module.exports = {
  deleteDigit
};
