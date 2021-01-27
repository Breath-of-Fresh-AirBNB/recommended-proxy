const mongoose = require('mongoose');

const mongoUrl = 'mongodb://localhost/reviews';

const db = mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });

// eslint-disable-next-line no-console
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
mongoose.connection.once('open', () => {
  // eslint-disable-next-line no-console
  console.log('MONGO SMASH');
});

module.exports = db;
