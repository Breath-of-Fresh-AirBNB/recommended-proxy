const mongoose = require('mongoose');
// eslint-disable-next-line no-unused-vars
const db = require('./index');

mongoose.Promise = global.Promise;

const listingSchema = new mongoose.Schema({
  home: { type: Number, unique: true },
  title: String,
  location: String,
  rating: Number,
  photoUrls: [String],
});

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;
