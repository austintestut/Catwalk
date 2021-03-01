import React from 'react';
import StarStatic from './StarStatic';
import dateFormatter from '../../global_functions/dateFormatter';
import Recommend from './Recommend';
import Body from './Body';
import Summary from './Summary';
import Helpfulness from './Helpfulness';
import Response from './Response';

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
        <StarStatic number={review.rating} />
        <div>{review.reviewer_name}</div>
        <div>{dateFormatter(review.date)}</div>
        <Summary summary={review.summary} />
        <Recommend bool={review.recommend} />
        <Body body={review.body} />
        <Response response={review.response} />
        <Helpfulness helpfulness={review.helpfulness} />
        <span>-------------------------------------------------------------------------------</span>
      </div>
    );
  }
}

export default ReviewTile;
