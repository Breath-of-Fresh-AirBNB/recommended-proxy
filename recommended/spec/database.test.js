const mongoose = require('mongoose');
// const db = require('../database/index.js');
const Home = require('../database/homeSchema.js');
const Activity = require('../database/activitySchema.js');

describe('Database Seeding', () => {
  test('Should have 100 home records', async () => {
    await Home.find({})
      .then((homes) => {
        expect(homes).toHaveLength(100);
      });
  });
  test('Should not find records with undefined as the homeId', async () => {
    await Home.find({ homeId: undefined })
      .then((homes) => {
        expect(homes).toHaveLength(0);
      });
  });
  test('Should not find records with undefined as the destination', async () => {
    await Home.find({ destination: undefined })
      .then((homes) => {
        expect(homes).toHaveLength(0);
      });
  });
  test('Should not find records with undefined as the imageUrl', async () => {
    await Home.find({ imageUrl: undefined })
      .then((homes) => {
        expect(homes).toHaveLength(0);
      });
  });
  test('Should not find records with undefined as the accommodationType', async () => {
    await Home.find({ accommodationType: undefined })
      .then((homes) => {
        expect(homes).toHaveLength(0);
      });
  });
  test('Should not find records with undefined as the beds', async () => {
    await Home.find({ beds: undefined })
      .then((homes) => {
        expect(homes).toHaveLength(0);
      });
  });
  test('Should not find records with undefined as the reviews', async () => {
    await Home.find({ reviews: undefined })
      .then((homes) => {
        expect(homes).toHaveLength(0);
      });
  });
  test('Should not find records with undefined as the averageRating', async () => {
    await Home.find({ averageRating: undefined })
      .then((homes) => {
        expect(homes).toHaveLength(0);
      });
  });
  test('Should not find records with undefined as the rate', async () => {
    await Home.find({ rate: undefined })
      .then((homes) => {
        expect(homes).toHaveLength(0);
      });
  });
  test('Should not find records with undefined as the relatedDestinations', async () => {
    await Home.find({ relatedDestinations: undefined })
      .then((homes) => {
        expect(homes).toHaveLength(0);
      });
  });
  test('Should have 100 activity records', async () => {
    await Activity.find({})
      .then((activities) => {
        expect(activities).toHaveLength(100);
      });
  });
});

afterAll((done) => {
  mongoose.connection.close();
  done();
});
