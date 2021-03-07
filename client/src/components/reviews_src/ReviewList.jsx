import React from 'react';
import MoreReviews from './MoreReviews';
import ReviewsSort from './ReviewsSort';
import ReviewTileContainer from './ReviewTileContainer';
import NewReviewModal from './NewReviewModal';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: 2,
      reviews: this.props.reviews,
    };
    this.addReviews = this.addReviews.bind(this);
    this.setFilters = this.setFilters.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { filters, reviews } = this.props;
    debugger;
    if (prevProps.filters !== filters) {
      this.setFilters();
    }
    if (prevProps.reviews !== reviews) {
      this.setState({ reviews });
    }
  }

  setFilters() {
    let newList = [];
    if (this.props.filters.length) {
      this.props.reviews.forEach((review) => {
        if (this.props.filters.indexOf(JSON.stringify(review.rating)) !== -1) {
          newList.push(review);
        }
      });
      this.setState({ reviews: [...newList] });
      return;
    }
    this.setState({ reviews: this.props.reviews });
  }

  addReviews(e) {
    e.preventDefault();
    this.setState({ show: this.state.show + 2 });
  }

  render() {
    const { reviews, show } = this.state;
    const { characteristics, updateReviews } = this.props;
    const containerStyle = {
      alignSelf: 'flex-end stretch',
      margin: '10px',
      marginTop: '0px',
    };

    return (
      <div style={{ ...containerStyle }}>
        <ReviewsSort total={reviews.length} updateReviews={updateReviews} />
        <ReviewTileContainer reviews={reviews} show={show} />
        <MoreReviews show={show} length={reviews.length} addReviews={this.addReviews} />
        <NewReviewModal characteristics={characteristics} meta={this.props.meta}/>
      </div>
    );
  }
}
export default ReviewList;
