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
  let additionRepeatTimes = (options.additionRepeatTimes === undefined) ? 0 : options.additionRepeatTimes;
  let repeatTimes = (options.repeatTimes === undefined) ? 0 : options.repeatTimes;
  let separator = (options.separator === undefined) ? '+' : options.separator;
  let additionSeparator = (options.additionSeparator === undefined) ? '|' : options.additionSeparator;   
  let addition2 = (options.addition === undefined) ? '': options.addition;
  let addition1 = '' + addition2 + additionSeparator;
  let addition = '';
  for(let i = 1; i < additionRepeatTimes;i++){
    addition = addition + addition1;  
  }
  addition = additionRepeatTimes == 0 ? '' + addition2 : addition + addition2;
  let resStr1 = str + '' + addition + separator;
  let resStr = '';
  for(let i = 1; i < repeatTimes;i++){
    resStr = resStr + resStr1;
  }
  return repeatTimes == 0 ? '' + str + addition2 : resStr + str + addition;
}

module.exports = {
  repeater
};
