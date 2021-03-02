// eslint-disable no-eval
import React from 'react';
import quarter_star from '../../../../images/quarter_star.png';
import three_quarter_star from '../../../../images/three_quarter_star.png';
// import star from '../../../../images/star-empty.png'

const StarStatic = ({ number }) => {
  // const emptyStar = <i class="far fa-star"/>;
  // const solidStar = <i class="fas fa-star"/>;
  // const halfStar = <i class="fas fa-star-half-alt"></i>
  let style = {
    width: '18px',
    verticalAlign: 'bottom',
  }
  const quarterStar = <img src={quarter_star} style = {{...style}}/>;
  const threeQuarterStar = <img src={three_quarter_star} style = {{...style}}/>

  let decrementer = number;
  const makeStar = () => {
    if (decrementer > 0) {decrementer--; return <i class="fas fa-star" style = {{...style}} />; }
    return <i class="far fa-star" style = {{...style}} />;
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
