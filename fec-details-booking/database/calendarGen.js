const getCal = () => {
  // eslint-disable-next-line no-extend-native
  Date.prototype.addDays = function (days) {
    const dat = new Date(this.valueOf());
    dat.setDate(dat.getDate() + days);
    return dat;
  };

  function getDates(startDate, stopDate) {
    const dateArray = [];
    let currentDate = startDate;
    while (currentDate <= stopDate) {
      dateArray.push(currentDate);
      currentDate = currentDate.addDays(1);
    }
    return dateArray;
  }

  const random = function (min, max) {
    // 'max' to be the highest value you want selected
    return Math.floor(Math.random() * (max * 0.999 - min + 1) + min);
  };

  // set a random baseRate from 100 - 200 dollars
  const getBaseRate = () => random(10, 20) * 10;
  const baseRate = getBaseRate();

  // set up a way to randomize the discount rate (which will be done on a weekly basis)
  const discounts = [0, 0.1, 0.15, 0.2];

  const getRandomDisc = () => discounts[random(0, 3)];
  const round5 = (x) => Math.ceil(x / 5) * 5;

  const getMinStay = [2, 2, 2, 3, 3, 3, 3, 3, 7, 7, 14];
  const minStay = getMinStay[random(0, getMinStay.length - 1)];

  let dateArray = getDates(new Date('01/01/2021'), (new Date()).addDays(210));
  dateArray = dateArray.map((val) => ({ date: val }));

  const addDateInfo = function (objArr) {
    let weeklyDisc = getRandomDisc();
    const newObjArr = objArr.map((val, i) => {
      const newVal = val;
      if (i > 0) {
        if (newVal.date.getDay() === 0) {
          weeklyDisc = getRandomDisc();
        }
      }
      if (newVal.date.getDay() >= 5) {
        newVal.rate = round5(baseRate * 1.25);
      } else {
        newVal.rate = baseRate;
      }
      newVal.discPerc = weeklyDisc;
      newVal.available = true;
      newVal.minStay = minStay;
      return newVal;
    });
    return newObjArr;
  };

  dateArray = addDateInfo(dateArray);

  const addRandomBlocks = function (calObj) {
    const newCalObj = calObj;
    const firstDay = 32;
    const lastDate = 64;
    const startDate = random(firstDay, lastDate);
    const numOfDays = minStay * 2;
    for (let i = startDate; i < (startDate + numOfDays); i += 1) {
      newCalObj[i].available = false;
    }
    return newCalObj;
  };
  dateArray = addRandomBlocks(dateArray);
  return dateArray;
};
const dateArray = getCal();
console.log(dateArray);

module.exports.getCal = getCal;