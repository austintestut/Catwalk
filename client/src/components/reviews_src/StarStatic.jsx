// eslint-disable no-eval
import React from 'react';
import quarter_star from '../../../../images/quarter_star';
import three_quarter_star from '../../../../images/three_quarter_star';

const StarStatic = ({ number }) => {
  // const emptyStar = <i class="far fa-star"/>;
  // const solidStar = <i class="fas fa-star"/>;
  // const halfStar = <i class="fas fa-star-half-alt"></i>
  let style = {
    width: '18px',
    verticalAlign: 'bottom',
  };
  const quarterStar = <img src={quarter_star} style = {{...style}}/>;
  const threeQuarterStar = <img src={three_quarter_star} style = {{...style}}/>

  let decrementer = number;
  const makeStar = () => {
    if (decrementer > 0 && decrementer < 1) {
      decrementer = Number((Math.round(decrementer * 4) / 4).toFixed(2));
    }
    if (decrementer >= 1) {decrementer--; return <i class="fas fa-star" style = {{ ...style }} />; }
    if (decrementer === 0) { return <i class="far fa-star" style = {{ ...style }} />; }
    if (decrementer === 0.5) { decrementer = 0; return <i class="fas fa-star-half-alt" style={{ ...style }} />; }
    if (decrementer === 0.25) {
      decrementer = 0;
      return quarterStar;
    }
    if (decrementer === 0.75) {
      decrementer = 0;
      return threeQuarterStar;
    }
  };
  const makeStars = () => {
    let stars = [];
    for (let x = 5; x > 0; x--) { stars.push(makeStar()); }
    return stars;
  };

  return (
    <div>
      {makeStars()}
    </div>
  );
};

export default StarStatic;
