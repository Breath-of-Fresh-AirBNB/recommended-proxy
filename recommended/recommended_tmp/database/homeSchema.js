/* eslint-disable no-unused-vars */
const mongoose = require('mongoose');
const db = require('./index.js');

mongoose.Promise = global.Promise;

const homeSchema = new mongoose.Schema({
  homeId: Number,
  name: String,
  destination: String,
  imageUrl: String,
  accommodationType: String,
  beds: Number,
  reviews: Number,
  averageRating: Number,
  rate: Number,
  relatedDestinations: [String],
});

const Home = mongoose.model('Home', homeSchema);

module.exports = Home;
