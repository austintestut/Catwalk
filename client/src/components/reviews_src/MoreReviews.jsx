import React from 'react';

const MoreReviews = ({ show }) => {
  if (show) {
    return (
      <button type="button">MORE REVIEWS</button>
    );
  }
  return null;
};

export default MoreReviews;
