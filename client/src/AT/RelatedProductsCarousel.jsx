import React from 'react';
import RelatedProductCard from './RelatedProductCard';

{/* Need to map over each card in data given */}
const RelatedProductsCarousel = ({relatedProductData, productStyleData}) => {
  return (
    <div>
      <div>Related Products Carousel</div>
      <RelatedProductCard relatedProductData={relatedProductData} productStyleData={productStyleData} />
    </div>
  )
};

export default RelatedProductsCarousel;
