import React from 'react';
import styled, { css } from 'styled-components';
import OutfitCard from './OutfitCard';

const StyledProductCardContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
height: 270px;
`
const StyledProductCard = styled.div`
padding-left: 20%;
padding-right: 10%;
margin-top: 5%;
margin-bottom: 5%;
`

const OutfitCarousel = ({ outfitProductIds, outfitCurrentlyShowingIndexes }) => {
  let productsToShow = [
    (outfitProductIds[outfitCurrentlyShowingIndexes[0]] || null),
    (outfitProductIds[outfitCurrentlyShowingIndexes[1]] || null),
    (outfitProductIds[outfitCurrentlyShowingIndexes[2]] || null),
    (outfitProductIds[outfitCurrentlyShowingIndexes[3]] || null)
  ];
  return (
    <div>
      <div>YOUR OUTFIT</div>
      <StyledProductCardContainer>
        {productsToShow.map((productId) => {
          let card;
          if (productId === null) {
            card = <div></div>;
          } else {
            card = <OutfitCard productId={productId} />;
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

export default OutfitCarousel;