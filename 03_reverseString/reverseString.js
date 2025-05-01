/**
 *
 * @param {string} str
 * @returns {string}
 */
const reverseString = function (str) {
  let reversedStr = [];
  for (let char = str.length; char > 0; char--) {
    reversedStr.push(str[char - 1]);
  }
  return reversedStr.join("");
};

// Do not edit below this line
module.exports = reverseString;
