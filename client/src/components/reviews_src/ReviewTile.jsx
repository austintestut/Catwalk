import React from 'react';

class ReviewTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      review: this.props.review,
    };
  }

  render() {
    return (
      <div>
        <div>Rating *Star Count*:{this.state.review.rating}</div>
        <div>User: {this.state.review.reviewer_name}</div>
        <div>Date of review: {this.state.review.date}</div>
        <div>Review Summary: {this.state.review.summary}</div>
        <div>Review Body: {this.state.review.body}</div>
        <div>Helpfulness {this.state.review.helpfulness}</div>
        <span>///////////////////////////////////////////////////////////////////////////////</span>
      </div>
    );
  }
}

export default ReviewTile;
