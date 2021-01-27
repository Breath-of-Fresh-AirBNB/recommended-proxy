/* eslint-disable */
const axios = require('axios');
import 'regenerator-runtime/runtime';

describe('Server API tests', () => {
  test('Should GET Listings from database', async () => {
    const results = await axios.get('http://localhost:3000/listings');
    expect(results).not.toBeNull();
    expect(results.data.length).toBeGreaterThanOrEqual(1);
  });
  test('Should GET Listings from database with specific id', async () => {
    const results = await axios.get('http://localhost:3000/listings/101');
    expect(results).not.toBeNull();
    expect(results.data.length).toBeGreaterThanOrEqual(1);
    expect(results.data[0]).toHaveProperty('home', 101);
    expect(results.data[0].photoUrls[0]).toBe("https://feclistingphotos.s3.us-east-2.amazonaws.com/Mars/101/1.webp");
  });
  test('Should DELETE Listing with specific id', async () => {
    const results = await axios.delete('http://localhost:3000/listings/101');
    expect(results).toBe(results);
  });
});
