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
      console.log(allBooksWithRatings);
      Models.books.destroy({ truncate: true });
      // Models.books.create({
      //   author: allBooksWithRatings[0].author,
      //   bookid: allBooksWithRatings[0].bookid,
      //   name: allBooksWithRatings[0].name,
      //   rating: allBooksWithRatings[0].rating,
      // }).then(() => {
      //   Models.books.create({
      //     author: allBooksWithRatings[1].author,
      //     bookid: allBooksWithRatings[1].bookid,
      //     name: allBooksWithRatings[1].name,
      //     rating: allBooksWithRatings[1].rating,
      //   }).then(() => {
      //     response('sd').code(201);
      //   });
      // });
      Models.books.bulkCreate(allBooksWithRatings).then(() => {
        response('Books Added!').code(201);
      });
    });
  });
};

const storeBooks = {
  method: 'PUT',
  path: '/books',
  handler,
};

module.exports = storeBooks;

