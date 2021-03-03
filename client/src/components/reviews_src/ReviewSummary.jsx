import React from 'react';
import StarStatic from './StarStatic';
import ColoredBar from './ColoredBar';
import Characteristic from './Characteristic';

class ReviewSummary extends React.Component {
  constructor(props) {
    super(props);
    let { reviewsMeta, currentFilters } = this.props;
    this.state = {
      currentFilters: currentFilters,
    };
    this.filterSetter = this.filterSetter.bind(this);
  }

  filterSetter(e) {
    e.preventDefault();
    let { currentFilters } = this.state;
    const filterVal = e.target.getAttribute('value');
    if (currentFilters.indexOf(filterVal) === -1) {
      this.setState({ currentFilters: [...currentFilters, filterVal] });
    }
  }

  render() {
    let { reviewsMeta, currentFilters } = this.props;
    let { recommended, ratings } = reviewsMeta;

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

    // Styles ---->>>>>>>
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
        {Object.entries(ratings).map((rating) =>
        <div>
          <span onClick={this.filterSetter} value={rating[0]}>{rating[0]} Stars</span>
          <ColoredBar total={Number(recommended.true) + Number(recommended.false)} count={rating[1]} />
        </div>)
        }
        <Characteristic />
      </div>
    );
  }
}

export default ReviewSummary;
