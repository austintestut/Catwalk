import React from 'react';
import ReviewList from './reviews_src/ReviewList';
import ReviewSummary from './reviews_src/ReviewSummary';
import handler from '../global_functions/handler';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewsData: this.props.data,
      reviewsMeta: this.props.meta,
      currentFilters: [],
    };
    this.addFilter = this.addFilter.bind(this);
    this.clearFilters = this.clearFilters.bind(this);
    this.updateReviews = this.updateReviews.bind(this);
  }

  updateReviews(sort = 'relevant') {
    const { reviewsMeta } = this.state;
    const { recommended, product_id } = reviewsMeta;
    debugger;
    const count = (+recommended.false) + (+recommended.true);
    const methods = {
      productId: product_id,
      sort,
      count,
    };
    handler.reviews.get(methods, (response) => {
      this.setState({ reviewsData: response.data });
    });
  }

  addFilter(e) {
    e.preventDefault();
    const { currentFilters } = this.state;
    const filterVal = e.target.getAttribute('value');
    if (currentFilters.indexOf(filterVal) === -1) {
      this.setState({ currentFilters: [...currentFilters, filterVal] });
    }
  }

  clearFilters(e) {
    e.preventDefault();
    const { currentFilters } = this.state;
    if (currentFilters) {
      this.setState({ currentFilters: [] });
    }
  }

  render() {
    const { reviewsData, reviewsMeta, currentFilters } = this.state;
    const characteristics = Object.keys(reviewsMeta.characteristics);
    const flexContainerStyle = {
      display: 'flex',
      flexWrap: 'nowrap',
      flex: 'row',
      padding: '10px',
    };
    return (
      <div style={{ ...flexContainerStyle }} className="reviews">
        <ReviewSummary
          reviewsMeta={reviewsMeta}
          currentFilters={currentFilters}
          clearFilters={this.clearFilters}
          addFilter={this.addFilter}
        />
        <ReviewList
          reviews={reviewsData.results}
          filters={currentFilters}
          characteristics={characteristics}
          meta={reviewsMeta}
          updateReviews={this.updateReviews}
        />
      </div>
    );
  }
}

export default Reviews;
