import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import LeftArrow from '../../../images/chevron-left.png';
import RightArrow from '../../../images/chevron-right.png';

const fadein = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;
const StyledOtherImage = styled.img`
height: 45px;
width: 35px;
flex: 0 0 35px;
position: relative;
top: 4px;
border: solid;
border-color: black;
border-width: 2px;
transition: transform 0.75s;
transform: translate(${props => props.thumbnailXindex}px);
${StyledOtherImage}:hover {
  cursor: pointer;
}
`;
const StyledOtherImgCarouselLeftButton = styled.button`
height: 49px;
width: 100%;
border: 1px solid;
position: relative;
top: 4px;
background-image: url(${LeftArrow});
background-position: center;
background-size: 100%;
background-repeat: no-repeat;
background-color: rgb(245, 245, 245);
border-radius: 50% 0 0 50%;
${StyledOtherImgCarouselLeftButton}: hover {
  cursor: pointer;
  box-shadow: 0 0 15px rgba(115, 13, 21, .5);
}
`;
const StyledOtherImgCarouselRightButton = styled.button`
height: 49px;
width: 100%;
border: 1px solid;
position: relative;
top: 4px;
background-image: url(${RightArrow});
background-position: center;
background-size: 100%;
background-repeat: no-repeat;
background-color: rgb(245, 245, 245);
border-radius: 0 50% 50% 0;
${StyledOtherImgCarouselRightButton}: hover {
  cursor: pointer;
  box-shadow: 0 0 15px rgba(115, 13, 21, .5);
}
`;
const StyledThumbnailContainer = styled.div`
display: flex;
overflow: hidden;
flex-direction: row;
flex-wrap: nowrap;
justify-content: left;
gap: 7px;
`;

const ThumbnailCarousel = ({ handleThumbnailCarouselLeftButtonClick, handleThumbnailCarouselRightButtonClick, thumbnailLeftArrow, thumbnailRightArrow, handleOtherImageClick, otherUrls, thumbnailCarouselShowingIndexes, styleNames, thumbnailXindex }) => {
  let imagesToShow = otherUrls;

  return (
    <>
      <div>
        {thumbnailLeftArrow && <StyledOtherImgCarouselLeftButton onClick={handleThumbnailCarouselLeftButtonClick}></StyledOtherImgCarouselLeftButton>}
      </div>
      <StyledThumbnailContainer>
        {imagesToShow.map((image) => {
          let thumbnail;
          if (image === null) {
            thumbnail = <div />;
          } else {
            thumbnail = (
              <StyledOtherImage
                src={image}
                // for some reason, adding a key messes up the spacing in the carousel...
                alt={styleNames[otherUrls.indexOf(image)]}
                key={5}
                onClick={() => handleOtherImageClick(otherUrls.indexOf(image))}
                thumbnailXindex={thumbnailXindex}
              />
            );
          }
          return thumbnail;
        })}
      </StyledThumbnailContainer>
      <div>
        {thumbnailRightArrow &&
          (<StyledOtherImgCarouselRightButton
            onClick={handleThumbnailCarouselRightButtonClick}
          ></StyledOtherImgCarouselRightButton>)}
      </div>
    </>
  );
};

export default ThumbnailCarousel;