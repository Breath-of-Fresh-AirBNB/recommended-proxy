/* eslint-disable no-console */
const axios = require('axios');

describe('Server API connection tests', () => {
  test('Should Post Review to database', async () => {
    const results = await axios.post('http://localhost:3001/reviews', {
      homeId: 102, user: 'Joey', cleanliness: 1, communication: 5, checkIn: 5, accuracy: 3, location: 4, value: 2, post: 'strings', createdAt: '20200101',
    });
    expect(results).not.toBeNull();
    expect(results.data).toHaveProperty('user', 'Joey');
  });
  test('Should GetAll Reviews from database', async () => {
    const results = await axios.get('http://localhost:3001/reviews');
    expect(results).not.toBeNull();
    expect(results.data.length).toBeGreaterThanOrEqual(1);
  });
  test('Should Get Reviews from database from a specific id', async () => {
    const results = await axios.get('http://localhost:3001/reviews/102');
    expect(results).not.toBeNull();
    expect(results.data.length).toBeGreaterThanOrEqual(1);
    expect(results.data[0]).toHaveProperty('homeId', 102);
  });
});
