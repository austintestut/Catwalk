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
  }

  render() {
    let { reviews, show } = this.state;
    return (
      <div>
        <div>
          { reviews.slice(0, show).map((review) => (<ReviewTile review={review} />)) }
        </div>
        <MoreReviews show="yes" />
      </div>
    );
  }
}
export default ReviewList;
