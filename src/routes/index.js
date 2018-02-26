// const ratings = require('./ratings');
const testRoute = require('./testRoute');
const rating = require('./ratings');
const storeBooks = require('./storeBooks');
const likeStatus = require('./likeStatus');
const getLike = require('./getLike');
const join = require('./join');
const readDb = require('./readDb');
const opinion = require('./opinion');


module.exports = [].concat(
  testRoute, rating, storeBooks,
  likeStatus, getLike, join, readDb, opinion,
);
