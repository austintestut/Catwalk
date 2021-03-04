import React from 'react';
import ReviewTile from './ReviewTile';

const ReviewTileContainer = ({ reviews, show }) => {
  debugger;
  const showReviews = reviews.slice(0, show);
  const reviewTileStyle = {
    overflow: 'auto',
    maxHeight: '80vh',
  };
  return (
    <div style={reviewTileStyle}>
      {showReviews.map((review) => <ReviewTile review={review} />)}
    </div>
  );
};

export default ReviewTileContainer;
