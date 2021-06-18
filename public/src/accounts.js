function findAccountById(accounts, id) {
  let accountFound = accounts.find((account) => account.id === id)
  return accountFound
}

function sortAccountsByLastName(accounts) {
  let orderedSurname = accounts.sort((nameA, nameB) => nameA.name.last.toLowerCase() < nameB.name.last.toLowerCase() ? -1 : 1)
  return orderedSurname
}

function getTotalNumberOfBorrows(account, books) {
  let counter = 0
  books.forEach(book => {
    if (book.borrows[0].id === account.id) {
      counter += 1
    }
  })
  return counter

  /*
  for (let i = 0; i < books.length; i++){
    const book = books[i].borrows
    for (let i = 0; i < book.length; i++){
      if (book[i].id === account.id){
        counter += 1
      }
    }
  } */
}

function getBooksPossessedByAccount(account, books, authors) {
  let booksInPossession = [];
  books.forEach(book => {
    let bookBorrowArray = book.borrows;
    if (bookBorrowArray.find(borrow => borrow.id === account.id && borrow.returned === false)) {
      booksInPossession.push(book);
    }
  })
  
  booksInPossession.forEach(book=>{
    let author = authors.find(writer => writer.id === book.authorId);
    book["author"] = author;
  })
  return booksInPossession;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
