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
    this.addFilter = this.addFilter.bind(this);
    this.clearFilters = this.clearFilters.bind(this);
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
    const flexContainerStyle = {
      display: 'flex',
      flexWrap: 'nowrap',
      flex: 'row',
      padding: '10px',
    };
    return (
      <div style={{ ...flexContainerStyle }}>
        <ReviewSummary
          reviewsMeta={reviewsMeta}
          currentFilters={currentFilters}
          clearFilters={this.clearFilters}
          addFilter={this.addFilter}
        />
        <ReviewList reviews={reviewsData.results} filters={currentFilters} />
      </div>
    );
  }
}

export default Reviews;
