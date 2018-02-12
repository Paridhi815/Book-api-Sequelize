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
  it('Testing for invalid path:', (done) => {
    const options = {
      method: 'GET',
      url: 'localhost:8000/hello',
    };
    server.inject(options, (response) => {
      expect(response.statusCode).toBe(404);
      done();
    });
  });
});
