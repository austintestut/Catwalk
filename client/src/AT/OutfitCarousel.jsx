import React from 'react';
import styled, { css } from 'styled-components';
import OutfitCard from './OutfitCard';

const StyledProductCardContainer = styled.div`
background-color: aquamarine;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
height: 226px;
`
const StyledProductCard = styled.div`
margin-left: 25%;
margin-right: 10%;
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
      <div>Outfit Carousel</div>
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