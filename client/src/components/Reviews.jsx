import React from 'react';
import ReviewList from './reviews_src/ReviewList';
import ReviewSummary from './reviews_src/ReviewSummary';
import handler from '../global_functions/handler';
import example_review_data from '../../../example_review_data';
import example_review_meta from '../../../example_review_meta';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentFilters: [],
      reviewsData: example_review_data,
      reviewsMeta: example_review_meta,
    };
    this.addFilter = this.addFilter.bind(this);
    this.clearFilters = this.clearFilters.bind(this);
    this.updateReviews = this.updateReviews.bind(this);
  }

  // componentDidMount() {
  //   const { productId } = this.props;
  //   if (productId) {
  //     const { reviews } = handler;
  //     reviews.getMeta(productId,
  //       (response) => this.setState({ reviewsMeta: response.data }))

  // }

  updateReviews(sort = 'relevant') {
    const { reviewsMeta } = this.state;
    const { recommended, product_id } = reviewsMeta;
    let count = 0
    Object.values(recommended).forEach((value) => count += +value);
    const methods = {
      productId: product_id,
      sort,
      count,
    };
    debugger;
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
      paddingTop: '0px',
      paddingBottom: '0px',
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
