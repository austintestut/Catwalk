import React from 'react';

const RelatedProductCard = ({relatedProductData, productStyleData}) => {
  let photoUrl;
  if (productStyleData.length === 0) {
    photoUrl = ' ';
  } else {
    photoUrl = productStyleData.results[0].photos[0].thumbnail_url;
    console.log('resetting photo url to: ', productStyleData.results[0]);
  }
  return (
    <div>
      <img src={photoUrl} alt="test pic" width="150" height="150"></img>
      <div>{relatedProductData.category}</div>
      <div>{relatedProductData.name}</div>
      <div>{relatedProductData.default_price}</div>
      <div>star rating</div>
    </div>
  );
};

export default RelatedProductCard;