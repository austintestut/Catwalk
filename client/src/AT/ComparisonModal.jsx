import React from 'react';
import axios from 'axios';
import styled, { css, keyframes } from 'styled-components';

const fadein = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;
const StyledModalBox = styled.div`
display: grid;
grid-template-columns: 2fr 1fr 2fr;
background-color: white;
align: center;
z-index: 2;
margin: auto;
margin-top: 10%;
height: auto;
width: 40%;
text-align: center;
border: solid;
border-width: 2px;
border-radius: 10px;
animation: ${fadein} 0.35s;
`;
const ComparisonModal = ({ handleInnerModalClick, name, cardCharacteristics, currentProductData, currentRating, currentCharacteristics }) => {
  let categories = [];
  let categorySet = new Set(Object.keys(cardCharacteristics).concat(Object.keys(currentCharacteristics)));

  categorySet.forEach((element) => categories.push(element));
  console.log('set', categorySet);
  console.log('categories', categories);
  let currentItemValues;
  let cardItemValues;

  return (
    <StyledModalBox onClick={handleInnerModalClick}>
      <div>
      <h3><br></br></h3>
        <h4>CURRENT ITEM ON PAGE</h4>
        <div> no check mark</div>
      </div>
      <div>
        <h3>Comparing</h3>
        <h4>Characteristic</h4>
        {categories.map((category) => (<div key={category}>{category}</div>))}
      </div>
      <div>
      <h3><br></br></h3>
        <h4>{name}</h4>
        <div>check mark</div>
      </div>
    </StyledModalBox>
  );
};

export default ComparisonModal;
