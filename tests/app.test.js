// package.json lives in src/, so resolve supertest from src/node_modules
const request = require('../src/node_modules/supertest');
const app = require('../src/app');

describe('myapp', () => {
  test('GET / returns greeting', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('Goodbye');
  });

  test('GET /health returns ok', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('ok');
  });
});

