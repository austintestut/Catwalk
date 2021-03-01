// eslint-disable no-eval
import React from 'react';
// import star from '../../../../images/star-empty.png'

const StarStatic = ({ number }) => {
  // const emptyStar = <i class="far fa-star"/>;
  // const solidStar = <i class="fas fa-star"/>;
  let decrementer = number;
  const makeStar = () => {
    if (decrementer > 0) {decrementer--; return <i class="fas fa-star"/>; }
    return <i class="far fa-star"/>;
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
