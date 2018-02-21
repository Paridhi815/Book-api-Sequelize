const Models = require('../../models');

const handler = (request, response) => {
  const { bookid } = request.params;
  console.log('Book ID:', bookid);
  //   Models.likes.destroy({ truncate: true });
  Models.likes.findOne({
    where: { bookid: request.params.bookid },
    // id: bookid,
    // bookid,
  }).then((row) => {
    console.log(row);
    response(row.status);
  });
};

module.exports = {
  path: '/like/{bookid}',
  method: 'GET',
  handler,
};

