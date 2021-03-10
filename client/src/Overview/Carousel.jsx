import React from 'react';
import styled from 'styled-components';
import up from '../../../images/chevron-up.png';
import down from '../../../images/chevron-down.png';

const Carousel = ({thumbs, thumbsMain, curMain, selected, next, prev, selector}) => {

  const getIndex = (num, length) => {
    if (num >= length) {
      return num - length + 1;
    } else {
      return num;
    }
  }

  return (
    <div>
      <StyledUpBtn onClick={next}/>

      {thumbs.map((pic, index) => {

        return (
          <div key={index}>
            {index === thumbsMain && (
              <>
              <Thumbnail src={thumbs[getIndex(thumbsMain, thumbs.length)]}/>
              <Thumbnail src={thumbs[getIndex(thumbsMain + 1, thumbs.length)]}/>
              <Thumbnail src={thumbs[getIndex(thumbsMain + 2, thumbs.length)]}/>
              <Thumbnail src={thumbs[getIndex(thumbsMain + 3, thumbs.length)]}/>
              <Thumbnail src={thumbs[getIndex(thumbsMain + 4, thumbs.length)]}/>
              <Thumbnail src={thumbs[getIndex(thumbsMain + 5, thumbs.length)]}/>
              <Thumbnail src={thumbs[getIndex(thumbsMain + 6, thumbs.length)]}/>
              </>
            )}
          </div>
        )
      })}
      <StyledDownBtn onClick={prev}/>
    </div>
  )
}

const Thumbnail = styled.img`
  display: flex;
  height: 65px;
  width: 65px;
  margin-bottom: 5px;
  cursor: pointer;
`
const StyledUpBtn = styled.button`
  position: relative;
  height: 40px;
  width: 40px;
  margin-left: 10px;
  margin-bottom: 5px;
  background-image: url(${up});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: transparent;
  border-radius: 50%;
`
const StyledDownBtn = styled.button`
  position: relative;
  height: 40px;
  width: 40px;
  margin-left: 10px;
  background-image: url(${down});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: transparent;
  border-radius: 50%;
`

export default Carousel;