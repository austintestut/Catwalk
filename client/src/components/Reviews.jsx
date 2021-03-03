import React from 'react';
import ReviewList from './reviews_src/ReviewList';
import ReviewSummary from './reviews_src/ReviewSummary';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewsData: this.props.data,
      reviewsMeta: this.props.meta,
      currentFilters: [],
    };
  };

  render() {
    //console.log(this.state.reviewData.results);
    const {reviewsData, reviewsMeta, currentFilters} = this.state;
    return (
      <div>
        <ReviewSummary reviewsMeta={reviewsMeta} currentFilters={currentFilters} />
        <ReviewList reviews={reviewsData.results} />
      </div>
    );
  }
}

export default Reviews;
