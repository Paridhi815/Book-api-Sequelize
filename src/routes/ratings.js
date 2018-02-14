const rp = require('request-promise');

const api1 = 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allBooks';
const api2 = 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findBookById/';

const handler = (request, response) => {
  rp(api1).then((data) => {
    const allBooks = JSON.parse(data);
    const arr = [];
    for (let i = 0; i < allBooks.books.length; i += 1) {
      const prom = rp(`${api2}${allBooks.books[i].id}`);
      arr.push(prom);
      // promise.all does all the resolving part for all the
    //   promises in one go and that too the same order
    }
    console.log(allBooks);
    Promise.all(arr).then((ratings) => {
      for (let i = 0; i < ratings.length; i += 1) {
        const rate = JSON.parse(ratings[i]);
        allBooks.books[i].rating = rate.rating;
      }

      const result = allBooks.books.reduce((accumulator, currentValue) => {
        const acc = accumulator;
        acc[currentValue.Author] = acc[currentValue.Author] || []; // /////ask abhinav
        acc[currentValue.Author].push(currentValue);
        return acc;
      }, Object.create(null));
      response(result);
    //   response(allBooks.books);
    // allBooks["books"]
    });
    // response(allBooks.books[4].id);
    // response(allBooks);
  });
//   response('Ratings Grouped!');
};

const rating = {
  method: 'GET',
  path: '/ratings',
  handler,
};
module.exports = rating;
