const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 function getSeason(date) {
  
  if (date.constructor.name !== 'Date') return 'Unable to determine the time of year!';
  let currentDate = new Date();  
  if (date == currentDate) throw new Error('Invalid date!');
  try{
    let month = date.getMonth();
  if(month <= 1 || month === 11) return "winter";
  if(month <= 4 && month > 1) return "spring";
  if(month <= 7 && month > 4) return "summer";
  if(month <= 10 && month > 7) return "fall"; 
  } catch {
    throw new Error('Invalid date!')
  }  
}

module.exports = {
  getSeason
};
