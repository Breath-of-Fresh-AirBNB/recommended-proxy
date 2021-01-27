const db = require('./index.js');
const Prop = require('./Prop.js');

const sampleProps = [
  {
    propId: 5,
    hostName: { first: 'Bob', last: 'Talkin' },
    imgs: ['https://www.airbnb.com/rooms/43356813/photos?source_impression_id=p3_1604333975_62yRrPTwvz%2F5eluT&guests=1&adults=1', 'https://www.airbnb.com/rooms/43356813/photos/1001626044?source_impression_id=p3_1604333975_62yRrPTwvz%2F5eluT&guests=1&adults=1', 'https://a0.muscache.com/im/pictures/da3a6a11-bb2c-45cf-a1d9-89354a071e94.jpg?im_w=1200'],
    numGuest: 8,
    numBedRooms: 3,
    numBeds: 5,
    numBathRooms: 3,
    beds: [[{ bedType: 'King', num: 1 }], [{ bedType: 'Queen', num: 2 }]],
    kids: true,
    pets: false,
    parties: false,
    selfCheckIn: true,
  },
  {
    propId: 6,
    hostName: { first: 'Kaiser', last: 'Soze' },
    imgs: ['https://www.airbnb.com/rooms/43356813/photos?source_impression_id=p3_1604333975_62yRrPTwvz%2F5eluT&guests=1&adults=1', 'https://www.airbnb.com/rooms/43356813/photos/1001626044?source_impression_id=p3_1604333975_62yRrPTwvz%2F5eluT&guests=1&adults=1', 'https://a0.muscache.com/im/pictures/da3a6a11-bb2c-45cf-a1d9-89354a071e94.jpg?im_w=1200'],
    numGuest: 8,
    numBedRooms: 3,
    numBeds: 5,
    numBathRooms: 3,
    beds: [[{ bedType: 'Queen', num: 2 }], [{ bedType: 'Twin', num: 3 }, { bedType: 'Queen', num: 1 }]],
    kids: false,
    pets: true,
    parties: false,
    smoking: false,
    shared: false,
    enhancedClean: true,
    selfCheckIn: true,
  },
];

const insertSampleProps = function () {
  Prop.create(sampleProps)
    .then((results) => {
      console.log('sample data save success!', results);
      db.close();
    })
    .catch((err) => {
      console.log('error: ', err);
      db.close();
    });
};

insertSampleProps();