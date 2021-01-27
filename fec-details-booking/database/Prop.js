const mongoose = require('mongoose');
// eslint-disable-next-line no-unused-vars
const db = require('./index.js');

mongoose.Promise = global.Promise;

const PropSchema = new mongoose.Schema({
  propId: {
    type: Number, required: true, unique: true, index: true,
  },
  hostName: { type: { first: String, last: String }, required: true },
  imgs: [String],
  houseType: String,
  numGuest: Number,
  numBedRooms: Number,
  numBeds: Number,
  numBathRooms: Number,
  beds: [{ bedType: String, num: Number }],
  kids: Boolean,
  pets: Boolean,
  parties: Boolean,
  smoking: Boolean,
  shared: Boolean,
  enhancedClean: Boolean,
  selfCheckIn: Boolean,
  superHost: Boolean,
  lockBox: Boolean,
  freeCancelDays: Number,
  freeCancelTime: Number,
  freeCancelHours: Number,
  discCancelDays: Number,
  fullRefundDays: Number,
  cleaningRefundDays: Number,
  descriptionBody: String,
  hostEmail: String,
  amenities: [{ category: String, name: String, available: Boolean }],
  calendar: [{
    // eslint-disable-next-line max-len
    date: Date, dateString: String, dateIndex: Number, dateCount: Number, available: Boolean, rate: Number, discPerc: Number,
  }],
  minStay: Number,
  reviewRating: Number,
  reviewNum: Number,
  cityTaxRate: Number,
  countyTaxRate: Number,
  StateTaxRate: Number,
});

const Prop = mongoose.model('Prop', PropSchema);

module.exports = Prop;