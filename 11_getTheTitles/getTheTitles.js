/**
 *
 * @param {Array} bookObj
 */
const getTheTitles = function (booksArr) {
  return booksArr.map((book) => book.title);
  //   let bookTitle = [];
  //   booksObj.forEach((book) => {
  //     bookTitle.push(book.title);
  //   });
  //   return bookTitle;
};

// Do not edit below this line
module.exports = getTheTitles;
