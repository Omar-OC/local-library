function getTotalBooksCount(books) {
  return books.reduce(book => book + 1, 0);
}

function getTotalAccountsCount(accounts) {
  return accounts.reduce(account => account +1, 0);
}

function getBooksBorrowedCount(books) {
  let counter = 0;
  books.forEach(book => {
    if (book.borrows[0].returned === false) {
    counter += 1
  }
})
return counter
}

function getMostCommonGenres(books) {
  // count the number of times each genre occurs in the books array/object
  const genres = [];
  books.forEach(book => {
    const match = genres.find(genre => genre.name === book.genre)
    if (match) {
      match.count++
    } else {
      const name = book.genre
      genres.push({name, count: 1})
    }
  })
  let result = genres.sort((genreA, genreB) => genreA.count < genreB.count ? 1: -1);
  result = result.slice(0, 5);
  return result
}

function getMostPopularBooks(books) {
  let popularBooks = [];
  books.forEach(book => {
  const topFive = {name: book.title, count: book.borrows.length}
  popularBooks.push(topFive)
})
  let result = popularBooks.sort((popA, popB) => popA.count < popB.count ? 1: -1);
  result = result.slice(0, 5);
  return result
}

function getMostPopularAuthors(books, authors) {
  return books.map(book => {
    const author = authors.find(author => author.id === book.authorId)
    return {
      name: `${author.name.first} ${author.name.last}`,
      count: book.borrows.length
    }
  }).sort((a, b) => (b.count - a.count)).slice(0, 5)
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
