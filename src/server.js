const hapi = require('hapi');

const server = new hapi.Server();

server.connection({
  host: 'localhost',
  port: 8000,
});


const handler = (response, reply) => {
  reply('Working!');
};

server.route({
  method: 'GET',
  path: '/',
  handler,
});

if (!module.parent) {
  server.start((err) => {
    if (err) {
      throw err;
    }
    console.log('Server started at:', server.info.uri);
  });
}

module.exports = server;

