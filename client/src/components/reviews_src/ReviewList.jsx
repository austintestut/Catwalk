import React from 'react';
import ReviewTile from './ReviewTile';

const ReviewList = ({ reviews }) => (
  <div>
    { reviews.map((review) => (<ReviewTile review={review} />)) }
  </div>
);
export default ReviewList;
