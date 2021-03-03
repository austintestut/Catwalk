import React from 'react';

const MoreReviews = ({ show, length, addReviews }) => {
  if (show < length) {
    return (
      <button type="button" onClick={addReviews}>MORE REVIEWS</button>
    );
  }
  return null;
};

export default MoreReviews;
