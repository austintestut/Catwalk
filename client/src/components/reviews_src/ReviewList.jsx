import React from 'react';
import ReviewTile from './ReviewTile';
import MoreReviews from './MoreReviews';
import ReviewsSort from './ReviewsSort';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: this.props.reviews,
      show: 2,
    };
    this.addReviews = this.addReviews.bind(this);
  }

  addReviews(e) {
    e.preventDefault();
    this.setState({ show: this.state.show + 2 });
  }

  render() {
    const { reviews, show } = this.state;
    const reviewTileStyle = {
      overflow: 'auto',
      maxHeight: '80vh',
    };
    return (
      <div>
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
