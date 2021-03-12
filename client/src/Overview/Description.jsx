import React from 'react';
import styled from 'styled-components';
import Pinterest from '../../../images/pinterest-share.png';
import Facebook from '../../../images/fb-share.png';
import Twitter from '../../../images/twitter-share.png';

const Description = ( {product} ) => {
  return (
    <div>
      <StlyedSlogan><em>{product.slogan}</em></StlyedSlogan>
      <StyledText>{product.description}</StyledText>
        <FacebookBtn />
        <PinterestBtn />
        <TwitterBtn />
    </div>
  )
}

const StlyedSlogan = styled.h3`
  font-family: Arial, avenier;
`
const StyledText = styled.p`
  font-family: Arial, avenier;
`
const FacebookBtn = styled.button`
  position: relative;
  height: 40px;
  width: 40px;
  top: 15%;
  border-radius: 50%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${Facebook});
`
const PinterestBtn = styled.button`
  position: relative;
  height: 40px;
  width: 40px;
  top: 15%;
  left: 5%;
  border-radius: 50%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${Pinterest});
`
const TwitterBtn = styled.button`
  position: relative;
  height: 40px;
  width: 40px;
  top: 15%;
  left: 10%;
  border-radius: 50%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${Twitter});
`

export default Description;