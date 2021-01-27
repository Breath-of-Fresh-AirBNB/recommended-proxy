/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React from 'react';

const moment = require('moment');

const ReviewsById = (props) => (
  <div>
    {props.reviewsById.map((reviews) => (
      <ul key={reviews._id}>
        <p className="user">{reviews.user}</p>
        <p className="date">{moment(reviews.createdAt).format('MMM YYYY')}</p>
        <p className="paragraphs">{reviews.post}</p>
        <br />
        <br />
      </ul>
    ))}
  </div>
);

export default ReviewsById;
