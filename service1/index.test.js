const request = require('supertest');
const app = require('./index');

describe('GET /', () => {
  it('should return 200 OK', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
  });

  it('should return "Hello World Container" in the response body', async () => {
    const res = await request(app).get('/');
    expect(res.text).toContain('Hello World Container');
  });
});
