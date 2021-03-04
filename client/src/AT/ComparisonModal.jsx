import React from 'react';
import axios from 'axios';
import styled, { css } from 'styled-components';


const StyledModalBox = styled.div`
background-color: white;
align: center;
z-index: 2;
margin: auto;
margin-top: 10%;
height: 60%;
width: 40%;
text-align: center;
display: grid;
grid-template-columns: 2fr 1fr 2fr;
border: solid;
border-width: 2px;
border-radius: 10px;
`

const ComparisonModal = ( {handleInnerModalClick} ) => {
  return (
    <StyledModalBox onClick={handleInnerModalClick}>
      <div>
        THIS PRODUCT
        <div>check mark</div>
        <div> no check mark</div>
      </div>
      <div>
        CATEGORIES
        <div>category</div>
        <div>category 2</div>
      </div>
      <div>
        CURRENT PAGE PRODUCT
        <div> no check mark</div>
        <div>check mark</div>
      </div>
    </StyledModalBox>
  );
};

export default ComparisonModal;
