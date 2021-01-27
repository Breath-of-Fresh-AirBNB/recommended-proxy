const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const mongoUri = 'mongodb://localhost/FEC-listing-details';

const db = mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
// eslint-disable-next-line no-console
console.log('=============== Connected to MongoDB ===============');

module.exports = db;
