import React from 'react';
import StarStatic from './StarStatic';
import dateFormatter from '../../global_functions/dateFormatter';
import Recommend from './Recommend';
import Body from './Body';
import Summary from './Summary';
import Helpfulness from './Helpfulness';
import Response from './Response';
import ImgModal from './ImgModal';

const ReviewTile = ({ review, length, index, removeReview }) => {
  const tileStyle = {
    marginBottom: '4px',
    marginTop: '4px',
    // border: '2px solid grey',
    borderBottom: '3px solid silver',
    borderRadius: '1px',
    // boxShadow: '3px 3px Grey',
    padding: '10px',
    paddingRight: '5px',
    paddingLeft: 0,
    paddingBottom: '3px',
    //width: '75vw',
  };
  const imageMap = () => {
    if (review.photos.length) {
      return (
        <fragment>
          <br />
          <span>
            {review.photos.map((img) => <ImgModal url={img.url} />)}
          </span>
          <br />< br />
        </fragment>
      );
    }
    return <br />;
  };
  // if (index === length - 1) { tileStyle.borderBottom = 'none'; }
  return (
    <div style={{ ...tileStyle }}>
      <StarStatic number={review.rating} />
      <div style={{ float: 'right', paddingRight: '10px', fontSize: '90%' }}>{review.reviewer_name} <span style={{ color: 'silver' }}>on</span> {dateFormatter(review.date)}</div><br/><br/>
      <Summary summary={review.summary} />
      <Recommend bool={review.recommend} />
      <Body body={review.body} />
      {imageMap()}
      { /* <ImgModal /> */ }
      <Response response={review.response} />
      <Helpfulness
        helpfulness={review.helpfulness}
        id={review.review_id}
        removeReview={removeReview}
        index={index}
      />
    </div>
  );
};

export default ReviewTile;
