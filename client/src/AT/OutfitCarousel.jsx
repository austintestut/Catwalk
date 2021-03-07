import React from 'react';
import styled, { css } from 'styled-components';
import OutfitCard from './OutfitCard';

const StyledOutfitContainer = styled.div`
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
const StyledAddButton = styled.button`
width: auto;
height: 278px;
margin-top: 5%;
margin-bottom: 5%;
font-size: 50px;
border: none;
border-radius: 5px;
background: radial-gradient(rgb(220, 220, 220), rgb(245, 245, 245));
${StyledAddButton}:hover {
  cursor: pointer;
  border: solid;
  border-width: 1px;
}
`;

const OutfitCarousel = ({
  outfitProductIds,
  outfitCurrentlyShowingIndexes,
  getOutfitIds,
  currentPageItemId,
  handleItemClick,
  checkIfButtonsShouldRender
}) => {
  let productsToShow = [
    (outfitProductIds[outfitCurrentlyShowingIndexes[0]] || null),
    (outfitProductIds[outfitCurrentlyShowingIndexes[1]] || null),
    (outfitProductIds[outfitCurrentlyShowingIndexes[2]] || null)
  ];

  const storeOutfitItem = (id) => {
    window.localStorage.setItem(`id: ${id}`, id);
    getOutfitIds();
    checkIfButtonsShouldRender();
  };

  return (
    <div>
      <div>YOUR OUTFIT</div>
      <StyledOutfitContainer key='StyledOutfitContainer'>
        <StyledAddButton onClick={() => storeOutfitItem(currentPageItemId)}>+</StyledAddButton>
        {productsToShow.map((productId) => {
          let card;
          if (productId === null) {
            productId = Math.random();
            card = <div></div>;
          } else {
            card = <OutfitCard
              productId={productId}
              getOutfitIds={getOutfitIds}
              handleItemClick={handleItemClick}
              checkIfButtonsShouldRender={checkIfButtonsShouldRender}
            />;
          }
          return (
            <StyledProductCard key={productId}>
              {card}
            </StyledProductCard>
          );
        })}
      </StyledOutfitContainer>
    </div>
  );
};

export default OutfitCarousel;
