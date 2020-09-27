const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  // remove line with error and write your code here
  
  const k = (Math.LN2 * (10**4)) / HALF_LIFE_PERIOD;

  if (typeof(sampleActivity) == "string" && Number.isInteger(+sampleActivity) && +sampleActivity > 0 && +sampleActivity < 16) {
    const t = (Math.log(MODERN_ACTIVITY / +sampleActivity) / k) * 10**4;
    return Math.round(t);
  } else {
    return false;
  }
};
