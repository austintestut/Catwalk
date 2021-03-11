import React from 'react';
import ReviewTile from './ReviewTile';

const ReviewTileContainer = ({ reviews, show }) => {
  const showReviews = reviews.slice(0, show);
  const reviewTileStyle = {
    overflow: '-moz-scrollbars-vertical',
    overflowY: 'scroll',
    maxHeight: '85vh',
    // borderBottom: '3px solid silver',
    borderRadius: '1px',
    width: '100%',
    //borderTop: '1px solid grey',
  };

  return (
    <div style={reviewTileStyle} id="review-tile-container">
      {showReviews.map((review, index) => (
        <ReviewTile review={review} index={index} length={showReviews.length} />
      ))}
    </div>
  );
};

export default ReviewTileContainer;
