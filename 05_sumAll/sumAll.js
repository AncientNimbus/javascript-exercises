const { isNumberObject } = require("util/types");

/**
 * Sum of every integer between two numbers
 * @param {Number} int1
 * @param {Number} int2
 * @returns {Number}
 */
const sumAll = function (int1, int2) {
  let numRange = [int1, int2].sort();

  let conditions =
    numRange[0] + numRange[1] > 0 &&
    typeof numRange[0] === "number" &&
    typeof numRange[1] === "number" &&
    numRange[0] === Math.round(numRange[0]) &&
    numRange[1] === Math.round(numRange[1]);

  if (conditions) {
    let result = 0;
    for (let i = numRange[0]; i <= numRange[1]; i++) {
      result += i;
    }
    return result;
  } else {
    return "ERROR";
  }
};

console.log(sumAll(123, 1));

// Do not edit below this line
module.exports = sumAll;
