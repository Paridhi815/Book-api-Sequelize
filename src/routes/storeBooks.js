const rp = require('request-promise');
const Models = require('../../models');

const api1 = 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allBooks';
const api2 = 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findBookById/';

const handler = (request, response) => {
  rp(api1).then((data) => {
    // console.log(data);
    const allBooks = JSON.parse(data);
    const arr = [];
    for (let i = 0; i < allBooks.books.length; i += 1) {
      const ratingsPromise = rp(`${api2}${allBooks.books[i].id}`);
      arr.push(ratingsPromise);
    }
    Promise.all(arr).then((data1) => {
      for (let i = 0; i < data1.length; i += 1) {
        const rate = JSON.parse(data1[i]);
        allBooks.books[i].rating = rate.rating;
      }
      const allBooksWithRatings = allBooks.books.map(book => ({
        author: book.Author,
        bookid: book.id,
        name: book.Name,
        rating: book.rating,
      }));
      Models.books.bulkCreate(allBooksWithRatings);
    });
  });
};

const storeBooks = {
  method: 'GET',
  path: '/books',
  handler,
};

module.exports = storeBooks;

