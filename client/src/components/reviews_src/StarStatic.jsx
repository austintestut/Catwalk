//eslint-disable no-eval
import React from 'react';
import star from '../../../../images/star.png';

const StarStatic = ({ number }) => {
  let decrementer = number;
  const makeStar = () => <img src={star}></img>;
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
