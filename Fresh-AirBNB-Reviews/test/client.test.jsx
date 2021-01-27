import React from 'react';
import renderer from 'react-test-renderer';
import ReviewsModal from '../client/src/components/reviewsModal.jsx';
import ReviewsById from '../client/src/components/reviews/reviewsById.jsx';
import MostRecentReviews from '../client/src/components/reviews/mostRecentReviews.jsx';
import StarComponents from '../client/src/components/starComponents.jsx';
import Accuracy from '../client/src/components/ratingBars/accuracy.jsx';
import CheckIn from '../client/src/components/ratingBars/checkin.jsx';
import Cleanliness from '../client/src/components/ratingBars/cleanliness.jsx';
import Communication from '../client/src/components/ratingBars/communication.jsx';
import Location from '../client/src/components/ratingBars/location.jsx';
import Value from '../client/src/components/ratingBars/value.jsx';
import AddReviewModal from '../client/src/components/reviews/addReviewModal.jsx';
import App from '../client/src/app.jsx';

const person = [{
  homeId: 102, user: 'Joey', cleanliness: 1, communication: 5, checkIn: 5, accuracy: 3, location: 4, value: 2, post: 'strings', createdAt: '20200101',
}];
const persons = [{
  homeId: 102, user: 'Joey', cleanliness: 1, communication: 5, checkIn: 5, accuracy: 3, location: 4, value: 2, post: 'strings', createdAt: '20200101',
}, {
  homeId: 102, user: 'Alec', cleanliness: 3, communication: 4, checkIn: 4, accuracy: 4, location: 5, value: 1, post: 'strings', createdAt: '20200101',
}, {
  homeId: 102, user: 'Jon', cleanliness: 2, communication: 3, checkIn: 2, accuracy: 5, location: 3, value: 3, post: 'strings', createdAt: '20200101',
}, {
  homeId: 102, user: 'Randal', cleanliness: 4, communication: 2, checkIn: 3, accuracy: 2, location: 2, value: 4, post: 'strings', createdAt: '20200101',
}, {
  homeId: 102, user: 'Paula', cleanliness: 5, communication: 1, checkIn: 1, accuracy: 1, location: 1, value: 5, post: 'strings', createdAt: '20200101',
}];

describe('Each Component matches snapshot', () => {
  test('Modal matches the snapshot', () => {
    const tree = renderer.create(<ReviewsModal reviewsById={persons} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('App matches the snapshot', () => {
    const tree = renderer.create(<App reviewsById={persons} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('AddReviewModal matches the snapshot', () => {
    const tree = renderer.create(<AddReviewModal reviewsById={persons} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('ReviewsById matches the snapshot', () => {
    const tree = renderer.create(<ReviewsById reviewsById={persons} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('MostRecentReviews matches the snapshot with only 1 review', () => {
    const tree = renderer.create(<MostRecentReviews recentReviews={person} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('MostRecentReviews matches the snapshot with more than 4 reviews', () => {
    const tree = renderer.create(<MostRecentReviews recentReviews={persons} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('StarComponents matches the snapshot', () => {
    const tree = renderer.create(<StarComponents reviewRatings={persons} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('Accuracy matches the snapshot', () => {
    const tree = renderer.create(<Accuracy reviewAccuracy={persons} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('CheckIn matches the snapshot', () => {
    const tree = renderer.create(<CheckIn reviewCheckIn={persons} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('Cleanliness matches the snapshot', () => {
    const tree = renderer.create(<Cleanliness reviewCleanliness={persons} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('Communication matches the snapshot', () => {
    const tree = renderer.create(<Communication reviewCommunication={persons} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('Location matches the snapshot', () => {
    const tree = renderer.create(<Location reviewLocation={persons} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('Value matches the snapshot', () => {
    const tree = renderer.create(<Value reviewValue={persons} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
