/**
 *
 * @param {Array} arr
 * @param {number} num
 */
const removeFromArray = function (arr, num) {
  let target = arr.indexOf(num);
  while (target !== -1) {
    arr.splice(target, 1);
    target = arr.indexOf(num);
  }
  //   if (target !== -1) {
  //     arr.splice(target, 1);
  //   }
  console.log(arr);
  return arr;
};

removeFromArray([1, 2, 2, 4], 2);

// Do not edit below this line
module.exports = removeFromArray;
