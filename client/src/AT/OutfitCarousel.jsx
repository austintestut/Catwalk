import React from 'react';
import styled, { css } from 'styled-components';
import OutfitCard from './OutfitCard';

const StyledContainer = styled.div`
display: grid;
grid-template-columns 1fr 4fr;
`;
const StyledOutfitContainer = styled.div`
position: relative;
display: flex;
flex-direction: row;
flex-wrap: nowrap;
gap: 32.25px;
justify-content: left;
align-content: flex-start;
height: 450px;
overflow: hidden;
`;
const StyledProductCard = styled.div`
margin-top: 5%;
margin-bottom: 5%;
flex: 0 0 250px;
`;
const StyledAddButton = styled.button`
width: 250px;
height: 328px;
margin-top: 5%;
margin-bottom: 5%;
margin-right: 32.25px;
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
    <StyledContainer>
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
    </StyledContainer>
  );
};

export default OutfitCarousel;
