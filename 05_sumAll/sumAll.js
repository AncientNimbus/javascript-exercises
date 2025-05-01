/**
 * Sum of every integer between two numbers
 * @param {Number} int1
 * @param {Number} int2
 * @returns {Number}
 */
const sumAll = function (int1, int2) {
  let numRange = [int1, int2].sort();
  let checks = [];

  // Requirements
  let isNumber = (num) => typeof num === "number";
  let isPositive = (num) => num > 0;
  let isInteger = (num) => num === Math.round(num);

  numRange.forEach((i) => {
    checks.push(isNumber(i) && isPositive(i) && isInteger(i));
  });

  if (checks.every(Boolean)) {
    let result = 0;
    for (let i = numRange[0]; i <= numRange[1]; i++) {
      result += i;
    }
    return result;
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = sumAll;
