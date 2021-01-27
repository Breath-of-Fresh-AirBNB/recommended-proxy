/* eslint-disable */
const mongoose = require('mongoose');
const db = require('../database/index');
const Listing = require('../database/Listing');

const mongoUri = 'mongodb://localhost/FEC-listing-details';

// Create a Listing for home 101 (test home)
describe('Database Test inserted data: house 101', () => {
  test('Should Create a Listing', () => Listing.create({
    home: 101, title: 'Modular Home', location: 'Mars', rating: 1, photoUrls: ['https://feclistingphotos.s3.us-east-2.amazonaws.com/Mars/101/1.webp', 'https://feclistingphotos.s3.us-east-2.amazonaws.com/Mars/101/2.webp']
  })
    .then((results) => {
      expect(results).not.toBeNull();
    }));
  test('Should find object by home property', () => Listing.findOne({ home: 101 })
    .then((results) => {
      expect(results).not.toBeNull();
    }));
  test('Listing should have a title', () => Listing.findOne({ home: 101 })
    .then((results) => {
      expect(results).toHaveProperty('title', 'Modular Home');
    }));
  test('Listing should have a location', () => Listing.findOne({ home: 101 })
    .then((results) => {
      expect(results).toHaveProperty('location', 'Mars');
    }));
  test('Listing should have a rating', () => Listing.findOne({ home: 101 })
    .then((results) => {
      expect(results).toHaveProperty('rating', 1);
    }));
  test('Listing should have a photoUrls property', () => Listing.findOne({ home: 101 })
    .then((results) => {
      expect(results).toHaveProperty('photoUrls');
    }));
});

// After Seeding
describe('Ensure no undefined values', () => {
  test('Listing should contain no homes undefined', () => Listing.find({ home: undefined })
    .then((results) => {
      expect(results).toHaveLength(0);
    }));
  test('Listing should contain no titles undefined', () => Listing.find({ title: undefined })
    .then((results) => {
      expect(results).toHaveLength(0);
    }));
  test('Listing should contain no locations undefined', () => Listing.find({ location: undefined })
    .then((results) => {
      expect(results).toHaveLength(0);
    }));
  test('Listing should contain no ratings undefined', () => Listing.find({ rating: undefined })
    .then((results) => {
      expect(results).toHaveLength(0);
    }));
});
