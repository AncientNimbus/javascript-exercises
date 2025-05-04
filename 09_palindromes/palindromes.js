/**
 *
 * @param {string} str
 */
const palindromes = function (str) {
  const regex = /\W/g;
  const chars = str.replaceAll(regex, "").toLowerCase().split("");
  const reversedChar = chars.toReversed();

  return chars.every((char, index) => char === reversedChar[index]);
};

// Do not edit below this line
module.exports = palindromes;
