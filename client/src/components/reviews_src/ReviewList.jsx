import React from 'react';
import ReviewTile from './ReviewTile';
import MoreReviews from './MoreReviews';

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
    return (
      <div>
        <div>
          { reviews.slice(0, show).map((review) => (<ReviewTile review={review} />)) }
        </div>
        <MoreReviews show={show} length={reviews.length} addReviews={this.addReviews} />
      </div>
    );
  }
}
export default ReviewList;
