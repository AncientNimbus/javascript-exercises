/**
 * Remove elements from an Array
 * @param {Array} arr
 * @param  {...any} args
 * @returns {Array}
 */
const removeFromArray = function (arr, ...args) {
  for (arg of args) {
    let target = arr.indexOf(arg);
    while (target !== -1) {
      arr.splice(target, 1);
      target = arr.indexOf(arg);
    }
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
