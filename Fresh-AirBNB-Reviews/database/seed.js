/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const { LoremIpsum } = require('lorem-ipsum');
const mongoose = require('mongoose');
const db = require('./index.js');
const Review = require('./review.js');

// eslint-disable-next-line dot-notation
mongoose.connection.collections['reviews'].drop((err) => {
  console.log('collection dropped');
});

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

const randomReviewGenerator = () => {
  const sampleReviews = [];
  const users = ['Adam', 'Amanda', 'Alec', 'Aaron', 'Ashley', 'Ben', 'Beverly', 'Carl',
    'Christina', 'Chris M', 'Chris C', 'Chuck', 'Collin', 'Dan', 'David', 'Diana', 'Dennis', 'Edward', 'Eric', 'Evan', 'Fred', 'Frank', 'George', 'Hal', 'Haelie', 'Hank', 'Heather', 'Ike', 'JD', 'John', 'Jack', 'Joey', 'Javan', 'Julie', 'Jennifer', 'Jon', 'Kyle', 'Larry', 'Linda', 'Mathew', 'Megan', 'Melissa', 'Melinda', 'Michael', 'Monte', 'Matthew', 'Mark', 'Nathan', 'Natalie', 'Otto', 'Olivia', 'Pablo', 'Paula', 'Peter', 'Roger', 'Randal', 'Ryan', 'Sarah', 'Saba', 'Steve', 'Theresa', 'Thomas', 'Tim', 'Ty', 'Victor', 'Vicki', 'Walter'];
  const month = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  const days = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28'];
  const year = [2017, 2018, 2019, 2020];
  const counter = 0;

  // eslint-disable-next-line no-shadow
  const generator = (counter) => {
    if (counter < 1000) {
      const review = {
        homeId: Math.floor(Math.random() * 100) + 1,
        user: users[Math.floor(Math.random() * (0.999) * (users.length))],
        cleanliness: Math.floor(Math.random() * 5) + 1,
        communication: Math.floor(Math.random() * 5) + 1,
        checkIn: Math.floor(Math.random() * 5) + 1,
        accuracy: Math.floor(Math.random() * 5) + 1,
        location: Math.floor(Math.random() * 5) + 1,
        value: Math.floor(Math.random() * 5) + 1,
        post: lorem.generateParagraphs(1),
        createdAt: `${year[Math.floor(Math.random() * (0.999) * (year.length))]}${month[Math.floor(Math.random() * (0.999) * (month.length))]}${days[Math.floor(Math.random() * (0.999) * (days.length))]}`,
      };

      sampleReviews.push(review);
      generator(counter + 1);
    }
  };

  generator(counter);

  return sampleReviews;
};

const insertSampleReviews = () => {
  Review.create(randomReviewGenerator())
    .then(() => mongoose.disconnect());
};

insertSampleReviews();
