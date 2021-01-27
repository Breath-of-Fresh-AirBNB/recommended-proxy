import React from 'react';
import StarComponents from './components/starComponents.jsx';
import Cleanliness from './components/ratingBars/cleanliness.jsx';
import Accuracy from './components/ratingBars/accuracy.jsx';
import Communication from './components/ratingBars/communication';
import Location from './components/ratingBars/location';
import CheckIn from './components/ratingBars/checkin';
import Value from './components/ratingBars/value';
import ReviewsModal from './components/reviewsModal.jsx';
import MostRecentReviews from './components/reviews/mostRecentReviews.jsx';
import AddReviewModal from './components/reviews/addReviewModal.jsx';

const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviewsById: [],
    };

    this.handleNewPost = this.handleNewPost.bind(this);
  }

  componentDidMount() {
    this.getReviewsById();
  }

  handleNewPost(newReview) {
    console.log(newReview);
    axios.post('http://localhost:3003/reviews', newReview)
      .then(() => {
        this.getReviewsById();
      });
  }

  getReviewsById() {
    axios.get(`http://localhost:3003/reviews/${(Math.floor(Math.random() * 100) + 1)}`)
      .then((results) => {
        this.setState({
          reviewsById: results.data,
        });
      });
  }

  render() {
    const { reviewsById } = this.state;
    return (
      <div>
        <div>
          <StarComponents reviewRatings={reviewsById} />
        </div>
        <div className="flex-container">
          <Cleanliness reviewCleanliness={reviewsById} />
          <Accuracy reviewAccuracy={reviewsById} />
          <Communication reviewCommunication={reviewsById} />
          <Location reviewLocation={reviewsById} />
          <CheckIn reviewCheckIn={reviewsById} />
          <Value reviewValue={reviewsById} />
        </div>
        <div className="mostrecentreviews">
          MostRecentReviews
        </div>
        <div>
          <AddReviewModal reviewsById={reviewsById} newPost={this.handleNewPost} />
        </div>
        <div className="flex-container">
          <MostRecentReviews recentReviews={reviewsById} />
        </div>
        <div>
          <ReviewsModal reviewsById={reviewsById} />
        </div>
      </div>
    );
  }
}

export default App;

// getReviewsById() {
//   axios.get('http://localhost:3001/reviews/10')
//     .then((results) => {
//       this.setState({
//         reviewsById: results.data,
//       });
//     });
// }
// getAllReviewsById() {
//   axios.get('http://loaclhost:3001/reviews')
//     .then((results) => {
//       this.setState({
//         reviews: results.data,
//       })
//     })
// }

// ${(Math.floor(Math.random() * 100) + 1)}
