const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(activity) {
  if(!Number.isFinite (parseFloat(activity)) || typeof activity !== "string" || parseFloat(activity) > 15 || parseFloat(activity) <= 0 || activity === NaN) return false;
  let res = Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(activity)) * 5730 / 0.693);
  if (typeof res != "number") return false;
  return res;
}

module.exports = {
  dateSample
};
