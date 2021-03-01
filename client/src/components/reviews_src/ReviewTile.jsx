import React from 'react';
import StarStatic from './StarStatic';
import dateFormatter from '../../global_functions/dateFormatter';

class ReviewTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      review: this.props.review
    };
  }

  render() {
    const { review } = this.state;
    return (
      <div>
        <div><StarStatic number={review.rating} /></div>
        <div>{review.reviewer_name}</div>
        <div>{dateFormatter(review.date)}</div>
        <div>Review Summary: {review.summary}</div>
        <div>Review Body: {review.body}</div>
        <div>Helpfulness {review.helpfulness}</div>
        <span>-------------------------------------------------------------------------------</span>
      </div>
    );
  }
}

export default ReviewTile;
