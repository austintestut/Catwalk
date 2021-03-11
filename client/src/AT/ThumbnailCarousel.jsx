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
width: 40px;
position: relative;
top: 4px;
border: solid;
border-color: black;
border-width: 2px;
${StyledOtherImage}:hover {
  cursor: pointer;
}
`;
const StyledOtherImgCarouselLeftButton = styled.button`
height: 49px;
width: 90%;
border: none;
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
width: 90%;
border: none;
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
const ThumbnailCarousel = ({ handleThumbnailCarouselLeftButtonClick, handleThumbnailCarouselRightButtonClick, thumbnailLeftArrow, thumbnailRightArrow, handleOtherImageClick, otherUrls, thumbnailCarouselShowingIndexes, styleNames }) => {
  let imagesToShow = [
    (otherUrls[thumbnailCarouselShowingIndexes[0]] || null),
    (otherUrls[thumbnailCarouselShowingIndexes[1]] || null),
    (otherUrls[thumbnailCarouselShowingIndexes[2]] || null),
    (otherUrls[thumbnailCarouselShowingIndexes[3]] || null)
  ];

  return (
    <>
      <div>{thumbnailLeftArrow && <StyledOtherImgCarouselLeftButton onClick={handleThumbnailCarouselLeftButtonClick}>{'<'}</StyledOtherImgCarouselLeftButton>}</div>
      {imagesToShow.map((image) => {
        let thumbnail;
        if (image === null) {
          thumbnail = <div />;
        } else {
          thumbnail = (
            <StyledOtherImage
              src={image}
              alt={styleNames[otherUrls.indexOf(image)]}
              onClick={() => handleOtherImageClick(otherUrls.indexOf(image))}
            />
          );
        }
        return thumbnail;
      })}
      <div>
        {thumbnailRightArrow &&
          (<StyledOtherImgCarouselRightButton
            onClick={handleThumbnailCarouselRightButtonClick}
          >{'>'}</StyledOtherImgCarouselRightButton>)}
      </div>
    </>
  );
};

export default ThumbnailCarousel;