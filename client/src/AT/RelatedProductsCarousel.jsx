import React from 'react';
import RelatedProductCard from './RelatedProductCard';

const RelatedProductsCarousel = ({ relatedProductIds, relatedProductData, productStyleData }) => (
  <div>
    <div>Related Products Carousel</div>
    {relatedProductIds.map((productId) => (
      <RelatedProductCard key={productId}
        productId={productId}
        relatedProductData={relatedProductData}
        productStyleData={productStyleData}
      />
    ))}
  </div>
);

export default RelatedProductsCarousel;
