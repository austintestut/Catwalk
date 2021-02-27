import React from 'react';

class ReviewTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      review: this.props.review,
    };
  }

  render() {
    debugger;
    return (
      <p>{JSON.stringify(this.state.review)}</p>
    );
  }
}

export default ReviewTile;
