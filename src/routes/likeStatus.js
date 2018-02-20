const Models = require('../../models');

const handler = (request, response) => {
  const { bookid, status } = request.params;
  //   Models.likes.destroy({ truncate: true });
  Models.likes.upsert({
    id: bookid,
    bookid,
    status,
  }).then(() => {
    response('Like/Dislike status UPSERTED!!');
  });
};

module.exports = {
  path: '/like/{bookid}/{status}',
  method: 'PUT',
  handler,
};

