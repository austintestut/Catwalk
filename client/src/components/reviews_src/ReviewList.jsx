import React from 'react';
import ReviewTile from './ReviewTile';
import MoreReviews from './MoreReviews';
import ReviewsSort from './ReviewsSort';

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
    if (prevProps.filters !== this.props.filters) {
      this.setFilters();
    }
  }

  setFilters() {
    let newList = [];
    if (this.props.filters.length) {
      this.setState ({ reviews: [] });
      this.props.reviews.forEach((review) => {
        if (this.props.filters.indexOf(JSON.stringify(review.rating)) !== -1) {
          newList.push(review);
        }
      });
      this.setState({ reviews: [...newList], show:this.state.show });
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
    const containerStyle = {
      alignSelf: 'flex-end stretch',
      margin: '10px',
      marginTop: '0px',
    };
    const reviewTileStyle = {
      overflow: 'auto',
      maxHeight: '80vh',
    };
    return (
      <div style={{ ...containerStyle }}>
        <ReviewsSort total={reviews.length} />
        <div style={reviewTileStyle}>
          { reviews.slice(0, show).map((review) => (<ReviewTile review={review} />)) }
        </div>
        <MoreReviews show={show} length={reviews.length} addReviews={this.addReviews} />
      </div>
    );
  }
}
export default ReviewList;
