const request = require('supertest');
const app = require('../server');

describe('GET /hello API Test', () => {
  it('should return Say Hello message', async () => {
    const response = await request(app).get('/hello');
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('Say Hello');
  });
});