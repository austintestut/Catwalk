import React from 'react';
import styled, { css } from 'styled-components';
import RelatedProductCard from './RelatedProductCard';

// change height to auto to account for long text, but strict px makes it seem smoother
const StyledProductCardContainer = styled.div`
position: relative;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-column-gap: 3%;
height: 400px;
`;
const StyledProductCard = styled.div`
margin-top: 5%;
margin-bottom: 5%;
`;

const RelatedProductsCarousel = ({ relatedProductIds, relatedCurrentlyShowingIndexes, toggleModal, handleItemClick, currentProductData, currentRating, currentCharacteristics }) => {
  let productsToShow = [
    (relatedProductIds[relatedCurrentlyShowingIndexes[0]] || null),
    (relatedProductIds[relatedCurrentlyShowingIndexes[1]] || null),
    (relatedProductIds[relatedCurrentlyShowingIndexes[2]] || null),
    (relatedProductIds[relatedCurrentlyShowingIndexes[3]] || null)
  ];

  return (
    <div>
      <div>RELATED PRODUCTS</div>
      <StyledProductCardContainer key='StyledProductContainer'>
        {productsToShow.map((productId) => {
          let card;
          if (productId === null) {
            productId = Math.random();
            card = <div />;
          } else {
            card = (
              <RelatedProductCard
                key={productId}
                productId={productId}
                toggleModal={toggleModal}
                handleItemClick={handleItemClick}
                currentProductData={currentProductData}
                currentRating={currentRating}
                currentCharacteristics={currentCharacteristics}
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
