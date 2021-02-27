import React from 'react';
import ReviewTile from './ReviewTile';

const ReviewList = (props) => (
  <div>
    { props.reviews.map((review) => (<ReviewTile review={review} />)) }
  </div>
);
export default ReviewList;
