/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React from 'react';

const moment = require('moment');

const MostRecentReviews = (props) => {
  let fourMostRecent = [];
  if (props.recentReviews.length > 4) {
    fourMostRecent = [props.recentReviews[0], props.recentReviews[1], props.recentReviews[2], props.recentReviews[3]];
  } else {
    fourMostRecent = props.recentReviews;
  }
  return (
    <div className="flex-container-post">
      {fourMostRecent.map((reviews) => (
        <div className="flex-post" key={reviews._id}>
          <div className="user">{reviews.user}</div>
          <div className="date">{moment(reviews.createdAt).format('MMM YYYY')}</div>
          <br />
          <div className="rating">{reviews.post}</div>
          <br />
          <br />
        </div>
      ))}
    </div>
  );
};

export default MostRecentReviews;
