const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const activitySchema = new mongoose.Schema({
  activityId: Number,
  name: String,
  destination: String,
  imageUrl: String,
  reviews: Number,
  averageRating: Number,
  rate: Number,
});

const Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;
