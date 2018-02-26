// const rp = require('request-promise');
const Models = require('../../models');

const handler = (request, response) => {
  Models.likebooks.findAll({ group: 'id' }).then((res) => {
    const result = res.reduce((accumulator, currentValue) => {
      const acc = accumulator;
      acc[currentValue.author] = acc[currentValue.author] || [];
      acc[currentValue.author].push(currentValue);
      return acc;
    }, Object.create(null));
    response(result);
  });
};


module.exports = {
  method: 'GET',
  path: '/readDb',
  handler,
};
