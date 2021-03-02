import React from 'react';
import styled, { css } from 'styled-components';
import RelatedProductCard from './RelatedProductCard';

const StyledProductCardContainer = styled.div`
background-color: aquamarine;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
overflow: hidden;
`
const StyledProductCard = styled.div`
margin-left: 25%;
margin-right: 10%;
`

const RelatedProductsCarousel = ({ relatedProductIds, relatedProductData, productStyleData }) => (
  <div>
    <div>Related Products Carousel</div>
    <StyledProductCardContainer>
      {relatedProductIds.map((productId) => (
        <StyledProductCard key={productId}>
          <RelatedProductCard
            productId={productId}
            relatedProductData={relatedProductData}
            productStyleData={productStyleData}
          />
        </StyledProductCard>
      ))}
    </StyledProductCardContainer>
  </div>
);

export default RelatedProductsCarousel;
