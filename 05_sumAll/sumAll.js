const { isNumberObject } = require("util/types");

/**
 * Sum of every integer between two numbers
 * @param {Number} int1
 * @param {Number} int2
 * @returns {Number}
 */
const sumAll = function (int1, int2) {
  let conditions =
    int1 + int2 > 0 &&
    typeof int1 === "number" &&
    typeof int2 === "number" &&
    int1 === Math.round(int1) &&
    int2 === Math.round(int2);

  if (conditions) {
    let result = 0;
    for (let i = int1; i <= int2; i++) {
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
