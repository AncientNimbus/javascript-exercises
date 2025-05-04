/**
 * @param {*} n - The position index in the Fibonacci sequence
 * @returns {number}
 */
const fibonacci = function (n) {
  // Convert input to number
  n = Number(n);

  // Handle edge cases
  if (isNaN(n) || n < 0) {
    return "OOPS";
  }

  // Handle 0 and 1
  if (n === 0) return 0;
  if (n === 1) return 1;

  // Handle F3 and onwards
  let previous = 0;
  let current = 1;

  for (let i = 2; i <= n; i++) {
    const next = previous + current;
    previous = current;
    current = next;
  }

  return current;
};

// Do not edit below this line
module.exports = fibonacci;
