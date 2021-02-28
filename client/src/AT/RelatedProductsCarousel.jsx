import React from 'react';
import RelatedProductCard from './RelatedProductCard';

{/* Need to map over each card in data given */ }
const RelatedProductsCarousel = ({ relatedProductIds, relatedProductData, productStyleData }) => {
  return (
    <div>
      <div>Related Products Carousel</div>
      {relatedProductIds.map((productId) => (
        <RelatedProductCard key={productId} productId={productId} relatedProductData={relatedProductData} productStyleData={productStyleData} />
      ))}
    </div>
  )
};

export default RelatedProductsCarousel;
