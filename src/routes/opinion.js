const Models = require('../../models');

const handler = (request, response) => {
  const { bookid, status } = request.params;
  //   Models.likes.destroy({ truncate: true });
  Models.likebooks.update(
    { like: status },
    { where: { bookid } },
  ).then(() => {
    response('Like/Dislike status UPSERTED!!');
  });
};

module.exports = {
  path: '/opinion/{bookid}/{status}',
  method: 'PUT',
  handler,
};

