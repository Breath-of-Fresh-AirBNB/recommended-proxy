/* eslint-disable */
const Listing = require('../database/Listing');

const cb = (err, results) => {
  if (err) {
    cb(err, null);
  }
  cb(null, results);
};

const getAllListings = (cb) => {
  Listing.find(cb);
};

const getListing = (home, cb) => {
  Listing.find(home, cb);
};

const deleteListing = (home, cb) => {
  Listing.deleteOne(home, cb);
};

module.exports = {
  getAllListings,
  getListing,
  deleteListing,
};
