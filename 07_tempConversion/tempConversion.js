/**
 * Convert temperatures from Fahrenheit to Celsius
 * @param {number} f Degree Fahrenheit
 * @returns {number}
 */
const convertToCelsius = function (f) {
  let c = Math.round((((f - 32) * 5) / 9) * 10) / 10;
  return c;
};

/**
 * Convert temperatures from Celsius to Fahrenheit
 * @param {*} c Degree Celsius
 * @returns {number}
 */
const convertToFahrenheit = function (c) {
  let f = Math.round(((c * 9) / 5 + 32) * 10) / 10;
  return f;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
