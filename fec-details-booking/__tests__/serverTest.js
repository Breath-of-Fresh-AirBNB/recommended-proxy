/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
// const request = require('supertest');
const express = require('express');
const axios = require('axios');

console.log('in serverTest.js');

describe('Server API tests', () => {
  test('Should GET Listings from database', async () => {
    const results = await axios.get('http://localhost:3002/api/props/7');
    console.log(results);
    expect(results).not.toBeNull();
    expect(results.data.length).toBeGreaterThanOrEqual(1);
  });
});
