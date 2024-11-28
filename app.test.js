const request = require('supertest');  // For testing Express APIs
const app = require('./app');        // Your app.js or Express entry point

describe('GET /', () => {
  it('should return status code 200', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
  });
});
