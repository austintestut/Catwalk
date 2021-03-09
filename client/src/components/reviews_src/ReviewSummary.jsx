import React from 'react';
import StarStatic from './StarStatic';
import ColoredBar from './ColoredBar';
import Characteristic from './Characteristic';
import Filters from './Filters';

const ReviewSummary = ({ addFilter, clearFilters, currentFilters, reviewsMeta }) => {
  // const { reviewsMeta, currentFilters, addFilter } = this.props;
  let { recommended, ratings, characteristics } = reviewsMeta;

  const percentReq = () => {
    if (!recommended.true) return (0);
    if (!recommended.false) return (100);
    return (Math.round(
      (Number(recommended.true) / (Number(recommended.false) + Number(recommended.true))) * 100,
    ));
  };
  const getTotal = () => {
    let truth = recommended.true || 0;
    let falsey = recommended.false || 0;
    return (+truth + +falsey);
  };
  const getAverage = () => {
    let total = 0;
    let average = 0;
    Object.entries(reviewsMeta.ratings).forEach((review) => {
      average += Number(review[0]) * Number(review[1]);
      total += Number(review[1]);
    });
    return (average / total).toFixed(1);
  };
  const average = getAverage();

  // Styles ---->>>>>>>
  const containerStyle= {
    alignSelf: 'flex-start',
    marginRight: 'auto',
  };
  const inlineStyle = {
    display: 'inline',
    fontSize: '500%',
    paddingRight: '15px',
  };
  const starStyle = {
    verticalAlign: 'top',
    paddingLeft: '5px',
  };
  const recommendStyle = {
    fontWeight: 'bold',
    fontSize: '82%',
  };
  const headerStyle = {
    marginTop: '0px',
  };
  const coloredBarStyle = {
    whiteSpace: 'nowrap',
  };

  return (
    <div style={{ ...containerStyle }}>
      <h3 style={{ ...headerStyle }}>Ratings &amp; Reviews</h3>
      <span><h1 style={{ ...inlineStyle }}>{average}</h1><span style={{ ...starStyle }}><StarStatic number={average}/></span></span>
      <Filters clearFilters={clearFilters} filters={currentFilters} />
      <div style={{ ...recommendStyle }}>{percentReq()}% of reviews recommend this product</div>
      {Object.entries(ratings).map((rating) =>
        <div style={{ ...coloredBarStyle }}>
          <span className="filter" onClick={addFilter} value={rating[0]}>{rating[0]} Stars</span>
          <ColoredBar total={getTotal()} count={rating[1]} />
        </div>)}
      <br />
      {Object.entries(characteristics).map((entry) => <Characteristic item={entry} />)}
    </div>
    );
  };

export default ReviewSummary;
