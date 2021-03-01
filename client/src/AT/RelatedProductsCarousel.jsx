import React from 'react';
import styled, { css } from 'styled-components';
import RelatedProductCard from './RelatedProductCard';

const StyledProductCardContainer = styled.div`
background-color: aquamarine;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
overflow: hidden;
`

const RelatedProductsCarousel = ({ relatedProductIds, relatedProductData, productStyleData }) => (
  <div>
    <div>Related Products Carousel</div>
    {relatedProductIds.map((productId) => (
      <StyledProductCardContainer key={productId}>
        <RelatedProductCard
          productId={productId}
          relatedProductData={relatedProductData}
          productStyleData={productStyleData}
        />
      </StyledProductCardContainer>
    ))}
  </div>
);

export default RelatedProductsCarousel;
