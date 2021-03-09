import React from 'react';
import styled, { css } from 'styled-components';
import RelatedProductCard from './RelatedProductCard';

// change height to auto to account for long text, but strict px makes it seem smoother
const StyledProductCardContainer = styled.div`
position: relative;
display: flex;
flex-direction: row;
gap: 32.25px;
justify-content: space-between;
height: 450px;
overflow: hidden;
`;

/*
const StyledProductCardContainer = styled.div`
position: relative;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-column-gap: 3%;
height: 450px;
`;
*/
const StyledProductCard = styled.div`
margin-top: 5%;
margin-bottom: 5%;
flex: 0 0 250px;
`;

const RelatedProductsCarousel = ({ relatedProductIds, relatedCurrentlyShowingIndexes, toggleModal, handleItemClick, currentProductData, currentRating, currentCharacteristics, translatedX }) => {
  let productsToShow = relatedProductIds;

  return (
    <div>
      <h3>RELATED PRODUCTS</h3>
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
                translatedX={translatedX}
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
