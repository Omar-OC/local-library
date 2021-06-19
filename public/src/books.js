function findAuthorById(authors, id) {
  let foundAuthor = authors.find((author) => author.id === id);
  return foundAuthor
}

function findBookById(books, id) {
  let foundBook = books.find((book) => book.id === id);
  return foundBook
}

function partitionBooksByBorrowedStatus(books) {
  let notReturnedBook = [];
  let returnedBook = [];
  for (let i = 0; i < books.length; i++){
    const book = books[i].borrows
    for (let i = 0; i < book.length; i++){
      if (book[i].returned === false){
        notReturnedBook.push(books[i])
        break;
      }
      if (book[i].returned === true) {
        returnedBook.push(books[i])
        break;
      }
    }
  }
  return [notReturnedBook, returnedBook]
}

function getBorrowersForBook(book, accounts) {
  let result = [];
  let borrowArray = book.borrows;  
  borrowArray.filter(borrow=>{
    let account = accounts.find(acc => acc.id === borrow.id);
    let obj = account;
    obj['returned'] =  borrow.returned;
    result.push(obj);
  })
  console.log(result);
  return result.slice(0,10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
