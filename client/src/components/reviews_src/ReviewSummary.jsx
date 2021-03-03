import React from 'react';
import StarStatic from './StarStatic';
import ColoredBar from './ColoredBar';

class ReviewSummary extends React.Component {
  constructor(props) {
    super(props);
    let { reviewsMeta, currentFilters } = this.props;
    this.state = {
      total: reviewsMeta.recommended.true + reviewsMeta.recommended.false,
      currentFilters: currentFilters,
    };
  }

  render() {
    let { reviewsMeta, currentFilters } = this.props;
    let { recommended } = reviewsMeta;
    const percentReq = Math.round(
      (Number(recommended.true) / (Number(recommended.false) + Number(recommended.true))) * 100,
    );
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
    let inlineStyle = {
      display: 'inline',
    };
    let starStyle = {
      verticalAlign: 'top',
      paddingLeft: '5px',
    };

    return (
      <div>
        <h3>Ratings &amp; Reviews</h3>
        <span><h1 style={{ ...inlineStyle }}>{average}</h1><span style={{ ...starStyle }}><StarStatic number={average}/></span></span>
        <div>{percentReq}% of reviews recommend this product</div>
        <ColoredBar total={Number(recommended.true) + Number(recommended.false)} count={5} />
      </div>
    );
  }
}

export default ReviewSummary;
