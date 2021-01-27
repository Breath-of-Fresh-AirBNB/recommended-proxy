/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const mongoose = require('mongoose');
const db = require('../database/index.js');
const Review = require('../database/review.js');

const mongoUrl = 'mongodb://localhost/reviews';

beforeAll(async () => {
  await mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
  mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
  mongoose.connection.once('open', () => {
    console.log('MONGO SMASH!');
  });
});

afterAll(async () => {
  mongoose.disconnect();
  console.log('MONGO SLEEP NOW!');
});

// will create a Review for homeId 101 (test home)
describe('Database Test for Dummy inserted data House Id 101', () => {
  test('Should Create a review', () => Review.create({
    homeId: 101, user: 'Joey', cleanliness: 1, communication: 5, checkIn: 5, accuracy: 3, location: 4, value: 2, post: 'strings', createdAt: '20200101',
  })
    .then((results) => {
      expect(results).not.toBeNull();
    }));
  test('Should find object by homeId', () => Review.findOne({ homeId: 101 })
    .then((results) => {
      expect(results).not.toBeNull();
    }));
  test('Review should contain a user', () => Review.findOne({ homeId: 101 })
    .then((results) => {
      expect(results).toHaveProperty('user', 'Joey');
    }));
  test('Review should contain a cleanliness rating', () => Review.findOne({ homeId: 101 })
    .then((results) => {
      expect(results).toHaveProperty('cleanliness', 1);
    }));
  test('Review should contain a communication rating', () => Review.findOne({ homeId: 101 })
    .then((results) => {
      expect(results).toHaveProperty('communication', 5);
    }));
  test('Review should contain a checkIn rating', () => Review.findOne({ homeId: 101 })
    .then((results) => {
      expect(results).toHaveProperty('checkIn', 5);
    }));
  test('Review should contain a accuracy rating', () => Review.findOne({ homeId: 101 })
    .then((results) => {
      expect(results).toHaveProperty('accuracy', 3);
    }));
  test('Review should contain a location rating', () => Review.findOne({ homeId: 101 })
    .then((results) => {
      expect(results).toHaveProperty('location', 4);
    }));
  test('Review should contain a value rating', () => Review.findOne({ homeId: 101 })
    .then((results) => {
      expect(results).toHaveProperty('value', 2);
    }));
  test('Review should contain a post', () => Review.findOne({ homeId: 101 })
    .then((results) => {
      expect(results).toHaveProperty('post', 'strings');
    }));
  test('Review should contain a createdAt property', () => Review.findOne({ homeId: 101 })
    .then((results) => {
      expect(results).toHaveProperty('createdAt', '20200101');
    }));
});

// after seeding the database
describe('Database test to make sure there are no Undefined values in each property', () => {
  test('Review should contain no homeIds with a value of undefined', () => Review.find({ homeId: undefined })
    .then((results) => {
      expect(results).toHaveLength(0);
    }));
  test('Review should contain no users with a value of undefined', () => Review.find({ user: undefined })
    .then((results) => {
      expect(results).toHaveLength(0);
    }));
  test('Review should contain no cleanliness ratings with a value of undefined', () => Review.find({ cleanliness: undefined })
    .then((results) => {
      expect(results).toHaveLength(0);
    }));
  test('Review should contain no communication ratings with a value of undefined', () => Review.find({ communication: undefined })
    .then((results) => {
      expect(results).toHaveLength(0);
    }));
  test('Review should contain no checkIn ratings with a value of undefined', () => Review.find({ checkIn: undefined })
    .then((results) => {
      expect(results).toHaveLength(0);
    }));
  test('Review should contain no accuracy ratings with a value of undefined', () => Review.find({ accuracy: undefined })
    .then((results) => {
      expect(results).toHaveLength(0);
    }));
  test('Review should contain no location ratings with a value of undefined', () => Review.find({ location: undefined })
    .then((results) => {
      expect(results).toHaveLength(0);
    }));
  test('Review should contain no value ratings with a value of undefined', () => Review.find({ value: undefined })
    .then((results) => {
      expect(results).toHaveLength(0);
    }));
  test('Review should contain no posts with a value of undefined', () => Review.find({ post: undefined })
    .then((results) => {
      expect(results).toHaveLength(0);
    }));
  test('Review should contain no createdAt dates with a value of undefined', () => Review.find({ createdAt: undefined })
    .then((results) => {
      expect(results).toHaveLength(0);
    }));
});
