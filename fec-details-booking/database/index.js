// $ mongod --dbpath=/data --port 27017
// or just $ mongod

const mongoose = require('mongoose');

const mongoUri = 'mongodb://localhost/props';

const db = mongoose.connect(mongoUri, { useMongoClient: true });

module.exports = db;