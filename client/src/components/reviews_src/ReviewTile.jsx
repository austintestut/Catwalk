import React from 'react';
import StarStatic from './StarStatic';
import dateFormatter from '../../global_functions/dateFormatter';
import Recommend from './Recommend';
import Body from './Body';
import Summary from './Summary';
import Helpfulness from './Helpfulness';
import Response from './Response';
import ImgModal from './ImgModal';

class ReviewTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      review: this.props.review
    };
  }

  render() {
    const { review } = this.state;
    const tileStyle = {
      marginBottom: '8px',
      border: '2px solid grey',
      borderRadius: '2px',
      boxShadow: '3px 3px Grey',
    };
    return (
      <div style={{ ...tileStyle }}>
        <StarStatic number={review.rating} />
        <div>{review.reviewer_name}</div>
        <div>{dateFormatter(review.date)}</div>
        <Summary summary={review.summary} />
        <Recommend bool={review.recommend} />
        <Body body={review.body} />
        <span>
          { review.photos.map((img) => <ImgModal url={img.url} />) }
        </span>
        <ImgModal />
        <Response response={review.response} />
        <Helpfulness helpfulness={review.helpfulness} />
      </div>
    );
  }
}

export default ReviewTile;
