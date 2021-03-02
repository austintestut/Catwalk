import React from 'react';
import styled, { css } from 'styled-components';
import RelatedProductCard from './RelatedProductCard';

// change height to auto to account for long text, but strict px makes it seem smoother
const StyledProductCardContainer = styled.div`
background-color: aquamarine;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
height: 226px;
`
const StyledProductCard = styled.div`
padding-left: 25%;
padding-right: 10%;
`

const RelatedProductsCarousel = ({ relatedProductIds, relatedProductData, productStyleData, relatedCurrentlyShowingIndexes }) => {
  let productsToShow = [
    (relatedProductIds[relatedCurrentlyShowingIndexes[0]] || null),
    (relatedProductIds[relatedCurrentlyShowingIndexes[1]] || null),
    (relatedProductIds[relatedCurrentlyShowingIndexes[2]] || null),
    (relatedProductIds[relatedCurrentlyShowingIndexes[3]] || null)
  ];

  return (
    <div>
      <div>Related Products Carousel</div>
      <StyledProductCardContainer>
        {productsToShow.map((productId) => {
          let card;
          if (productId === null) {
            card = <div></div>;
          } else {
            card = (
              <RelatedProductCard
              productId={productId}
              relatedProductData={relatedProductData}
              productStyleData={productStyleData}
              />
              );
            }
            return (
              <StyledProductCard key={productId}>
              {card}
            </StyledProductCard>
          );
        })}
      </StyledProductCardContainer>
        </div>
  );
};

export default RelatedProductsCarousel;
