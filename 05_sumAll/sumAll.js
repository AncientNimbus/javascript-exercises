/**
 * Sum of every integer between two numbers
 * @param {Number} int1
 * @param {Number} int2
 * @returns {Number}
 */
const sumAll = function (int1, int2) {
  let numRange = [int1, int2];

  // Requirements
  let isNumber = (num) => typeof num === "number";
  let isPositive = (num) => num > 0;
  let isInteger = (num) => num === Math.round(num);

  const allValid = [int1, int2].every(
    (i) => isNumber(i) && isPositive(i) && isInteger(i)
  );

  if (allValid) {
    const [min, max] = numRange.sort((a, b) => a - b);
    let result = 0;
    for (let i = min; i <= max; i++) {
      result += i;
    }
    return result;
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = sumAll;
