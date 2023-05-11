const request = require('supertest');
const app = require('./index');
const { afterAll } = require('@jest/globals');


describe('GET /shopping', () => {
  it('should return 200 OK', async () => {
    const res = await request(app).get('/shopping');
    expect(res.statusCode).toEqual(200);
  });

  it('should return "Hello World Container" in the response body', async () => {
    const res = await request(app).get('/shopping');
    expect(res.text).toContain('Hello World Container');
  });
});
afterAll((done) => {
  app.close(done);
});
