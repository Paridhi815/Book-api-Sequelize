// const ratings = require('./ratings');
const testRoute = require('./testRoute');
const rating = require('./ratings');
const storeBooks = require('./storeBooks');
const likeStatus = require('./likeStatus');
const getLike = require('./getLike');

module.exports = [].concat(testRoute, rating, storeBooks, likeStatus, getLike);
