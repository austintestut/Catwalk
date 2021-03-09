import React from 'react';
import styled, { css } from 'styled-components';
import OutfitCard from './OutfitCard';

const StyledOutfitContainer = styled.div`
position: relative;
display: flex;
flex-direction: row;
flex-wrap: nowrap;
gap: 32.25px;
justify-content: left;
height: 450px;
overflow: hidden;
`;
const StyledProductCard = styled.div`
margin-top: 5%;
margin-bottom: 5%;
flex: 0 0 250px;
`;
const StyledAddButton = styled.button`
width: 256px;
height: 328px;
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
  checkIfButtonsShouldRender,
  translatedXoutfit
}) => {
  let productsToShow = outfitProductIds;

  const storeOutfitItem = (id) => {
    window.localStorage.setItem(`id: ${id}`, id);
    getOutfitIds();
    checkIfButtonsShouldRender();
  };

  return (
    <div>
      <h3>YOUR OUTFIT</h3>
      <StyledAddButton onClick={() => storeOutfitItem(currentPageItemId)}>+</StyledAddButton>
      <StyledOutfitContainer key='StyledOutfitContainer'>
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
              translatedXoutfit={translatedXoutfit}
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
