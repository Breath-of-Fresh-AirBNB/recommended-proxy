const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../server/app');

beforeAll(async () => {
  await mongoose.connect('mongodb://localhost/airbnb', { useNewUrlParser: true, useUnifiedTopology: true });
});

describe('GET /homes/:id', () => {
  test('It should respond with an array', async () => { // not passing
    const response = await request(app).get('/homes/4');
    const homes = response.body;
    expect(Array.isArray(homes)).toBeTruthy();
    expect(response.statusCode).toBe(200);
  });
  test('It should respond with array of homes', async () => { // not passing
    const response = await request(app).get('/homes/4');
    const homes = response.body;
    expect(Array.isArray(homes)).toBeTruthy();
    expect(homes[0]).toHaveProperty('homeId');
    expect(response.statusCode).toBe(200);
  });
  test('It should respond with status 500 if requesting invalid id', async () => { // not passing
    const response = await request(app).get('/homes/abc');
    expect(response.statusCode).toBe(500);
  });
});

describe('GET /activities/:id', () => {
  test('It should respond with an array', async () => { // not passing
    const response = await request(app).get('/activities/4');
    const activities = response.body;
    expect(Array.isArray(activities)).toBeTruthy();
    expect(response.statusCode).toBe(200);
  });
  test('It should respond with array of activities', async () => {
    const response = await request(app).get('/activities/4');
    const activities = response.body;
    expect(Array.isArray(activities)).toBeTruthy();
    expect(activities[0]).toHaveProperty('activityId');
    expect(response.statusCode).toBe(200);
  });
  test('It should respond with status 500 if requesting invalid id', async () => {
    const response = await request(app).get('/activities/abc');
    expect(response.statusCode).toBe(500);
  });
});

afterAll((done) => {
  mongoose.connection.close();
  done();
});
