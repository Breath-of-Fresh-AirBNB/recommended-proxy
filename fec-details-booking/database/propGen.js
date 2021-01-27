const db = require('./index.js');
const Prop = require('./Prop.js');
const amens = require('./amenGen.js');
const calendar = require('./calendarGen.js');
const descriptions = require('./textGen');
const names = require('./namesGen.js');

const ids = [];

const genProp = function () {
  const getPropId = function () {
    const propId = ids[ids.length - 1] + 1 || 1;
    ids.push(propId);
    return propId;
  };

  const id = getPropId();
  // names.getName(propId) to get name;
  const name = names.getName(id);

  const randomBoolean = function () {
    return Math.random() > 0.5;
  };
  const randomNum = function (min, max) {
    // 'max' to be the highest value you want selected
    return Math.floor(Math.random() * (max * 0.999 - min + 1) + min);
  };
  const randomNum2 = function (min, max) {
    // No rounding down of returned value
    return Math.random() * (max * 0.999 - min) + min;
  };
  const randomNum3 = function (min, max) {
    // allows for max values less than 1
    return Math.random() * (max - min) + min;
  };

  const houseType = ['apartment', 'house', 'townhome', 'flat'];
  const getHouseType = () => houseType[randomNum(0, 3)];

  const getGuestNum = () => randomNum(25, 8);
  const guestNum = getGuestNum();

  const numBedRooms = Math.floor(guestNum / 4);
  const numBathRooms = Math.floor(numBedRooms * randomNum2(0.7, 1.5));

  // eslint-disable-next-line consistent-return
  const getBeds = function (num) {
    switch (num) {
      case 1:
        return { bedType: 'King', num: 1 };
      case 2:
        return { bedType: 'Queen', num: randomNum(1, 2) };
      case 3:
        return { bedType: 'Double', num: randomNum(1, 3) };
      default:
    }
  };

  const beds = [];
  for (let i = 0; i < numBedRooms; i += 1) {
    beds[i] = getBeds(randomNum(1, 3));
  }

  const numBeds = () => beds.reduce((total, val) => total + val.num, 0);
  const bedNum = numBeds();

  const getEmail = () => {
    const emails = ['hotmail', 'gmail', 'yahoo', 'netscape'];
    return `${name.firstName + name.lastName}@${emails[randomNum(0, 3)]}.com`;
  };
  const cal = calendar.getCal();
  const { minStay } = cal[0];

  const propObj = {
    propId: id,
    hostName: name,
    houseType: getHouseType(),
    numGuest: guestNum,
    numBedRooms,
    numBeds: bedNum,
    numBathRooms,
    beds,
    enhancedClean: randomBoolean(),
    shared: randomBoolean(),
    selfCheckIn: randomBoolean(),
    lockBox: randomBoolean(),
    superHost: randomBoolean(),
    kids: randomBoolean(),
    parties: randomBoolean(),
    pets: randomBoolean(),
    smoking: randomBoolean(),
    freeCancelDays: randomNum(2, 7),
    freeCancelTime: randomNum(2, 7),
    // freeCancelHours: Number,
    // discCancelDays: Number,
    // fullRefundDays: Number,
    // cleaningRefundDays: Number,
    descriptionBody: descriptions.getDesc(id),
    hostEmail: getEmail(),
    amenities: amens.getAmens,
    calendar: cal,
    minStay,
    reviewRating: randomNum2(3, 4.9),
    reviewNum: randomNum(5, 300),
    cityTaxRate: randomNum3(0.005, 0.025),
    countyTaxRate: randomNum3(0.005, 0.025),
    StateTaxRate: randomNum3(0.005, 0.025),
  };
  return propObj;
};

const sample = [];
for (let i = 0; i < 100; i += 1) {
  sample[i] = genProp();
}

const insertSampleProps = function () {
  Prop.create(sample)
    .then(() => {
      console.log('sample data save success!');
      db.close();
    })
    .catch((err) => {
      console.log('error: ', err);
      db.close();
    });
};

insertSampleProps();