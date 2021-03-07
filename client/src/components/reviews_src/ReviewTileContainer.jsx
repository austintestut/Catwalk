import React from 'react';
import ReviewTile from './ReviewTile';

const ReviewTileContainer = ({ reviews, show }) => {
  const showReviews = reviews.slice(0, show);
  const reviewTileStyle = {
    overflow: 'auto',
    maxHeight: '86vh',
    borderBottom: '3px solid grey',
    borderRadius: '1px',
    //borderTop: '1px solid grey',
  };

  return (
    <div style={reviewTileStyle}>
      {showReviews.map((review, index) => (
        <ReviewTile review={review} index={index} length={showReviews.length} />
      ))}
    </div>
  );
};

export default ReviewTileContainer;
