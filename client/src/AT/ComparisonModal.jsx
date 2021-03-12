import React from 'react';
import axios from 'axios';
import styled, { css, keyframes } from 'styled-components';
import StarStatic from '.././components/reviews_src/StarStatic.jsx';

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
color:black;
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
  categories.sort();
  let currentItemValues = [];
  let cardItemValues = [];
  for (let i = 0; i < categories.length; i++) {
    if (currentCharacteristics[categories[i]]) {
      currentItemValues.push(currentCharacteristics[categories[i]].value);
    } else {
      currentItemValues.push(<br />);
    }
    if (cardCharacteristics[categories[i]]) {
      cardItemValues.push(cardCharacteristics[categories[i]].value);
    } else {
      cardItemValues.push(<br />);
    }
  }
  return (
    <StyledModalBox onClick={handleInnerModalClick}>
      <div>
        <h3><br></br></h3>
        <h4>{currentProductData.name}</h4>
        {currentItemValues.map((value) => {
          if (typeof(value) !== 'string') {
            return (<div>{value}</div>);
          }
          return (<div key={value}><StarStatic number={value} /></div>);
        })}
      </div>
      <div>
        <h3>Comparing</h3>
        <h4>Characteristic</h4>
        {categories.map((category) => (<div key={category}>{category}</div>))}
      </div>
      <div>
        <h3><br></br></h3>
        <h4>{name}</h4>
        {cardItemValues.map((value) => {
          if (typeof(value) !== 'string') {
            return (<div>{value}</div>);
          }
          return (<div key={value}><StarStatic number={value} /></div>);
        })}
      </div>
      <h3></h3>
    </StyledModalBox>
  );
};

export default ComparisonModal;
