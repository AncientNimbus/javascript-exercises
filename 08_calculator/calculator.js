/**
 * Calculate the sum of any number of numeric arguments
 * @param  {...number} numbers
 * @returns {number} The total sum of the provided numbers
 */
const add = function (...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
};

/**
 * Calculate the difference of two numbers
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */
const subtract = function (x, y) {
  return x - y;
};

/**
 * Calculate the sum of all numbers in an array.
 * @param {number[]} arr - An array of numbers
 * @returns {number}
 */
const sum = function (arr) {
  return arr.reduce((arr, num) => arr + num, 0);
};

/**
 * Calculate the product of all numbers in an array
 * @param {number[]} arr - An array of numbers
 * @returns {number}
 */
const multiply = function (arr) {
  return arr.reduce((arr, num) => arr * num, 1);
};

/**
 * Calculate the power of two numbers
 * @param {number} x
 * @param {number} n
 * @returns {number}
 */
const power = function (x, n) {
  return x ** n;
};

/**
 * Calculate the factorial of a number
 * @param {number} n
 * @returns {number}
 */
const factorial = function (n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
