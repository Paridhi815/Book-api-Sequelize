const server = require('../src/server');

describe('Testing The server:', () => {
  it('Testing for correct path:', (done) => {
    const options = {
      url: 'localhost:8000/',
      method: 'GET',
    };
    server.inject(options, (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});
