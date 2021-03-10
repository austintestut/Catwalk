import React from 'react';
import styled from 'styled-components';

const Description = ( {products} ) => {
  return (
    <div>
      <h3><em>{products.slogan}</em></h3>
      <StyledText>{products.description}</StyledText>
    </div>
  )
}
const StyledText = styled.p`
  font-family: Arial, avenier;
`
export default Description;