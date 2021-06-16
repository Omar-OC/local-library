function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  let counter = 0
  for (let i = 0; i < books.length; i++){
    const book = books[i].borrows
    for (let i = 0; i < book.length; i++){
      if (book[i].returned === false) {
        counter += 1
      }
    }
  }
  return counter
}

function getMostCommonGenres(books) {
  // count the number of times each genre occurs in the books array/object
  const genres = []
  books.forEach(book => {
    const match = genres.find(genre => genre.name === book.genre)
    if (match) {
      match.count++
    } else {
      const name = book.genre
      genres.push({name, count: 1})
    }
  })
  let result = genres.sort((genreA, genreB) => genreA.count < genreB.count ? 1: -1)
  result = result.slice(0, 5)
  return result
}

function getMostPopularBooks(books) {
  // returns an array of five objects that represents the most popular books in the library.
  let popularBooks = []
  books.forEach(book => {
  const topFive = {name: book.title, count: book.borrows.length}
  popularBooks.push(topFive)
})
  let result = popularBooks.sort((popA, popB) => popA.count < popB.count ? 1: -1)
  result = result.slice(0, 5)
  return result
}

function getMostPopularAuthors(books, authors) {
  let mostPopular = []
  for (let book of books) {
    let bookRental = book.borrows
    const author = mostPopular.find(
      (currentAuthor) => currentAuthor.name === book.authorId)
    if (author) {
      author.count+ bookRental.length
    } else {
      mostPopular.push({ name: book.authorId, count: bookRental.length})
    }
  }

  mostPopular = mostPopular.map(author => {
    let authorFound = authors.find( data => data.id === author.name)
    return ({
      name: `${authorFound.name.first} ${authorFound.name.last}`, count: author.count
    })
  })

  let result = mostPopular.sort((authorA, authorB) => (authorA.count < authorB.count ? 1 : -1))
  result = result.slice(0, 5)
  return result
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
