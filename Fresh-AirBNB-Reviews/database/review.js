const mongoose = require('mongoose');
// eslint-disable-next-line no-unused-vars
const db = require('./index.js');

mongoose.Promise = global.Promise;

const reviewSchema = new mongoose.Schema({
  homeId: Number,
  user: String,
  cleanliness: Number,
  communication: Number,
  checkIn: Number,
  accuracy: Number,
  location: Number,
  value: Number,
  post: String,
  createdAt: String,
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
