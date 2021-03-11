import React from 'react';
import styled from 'styled-components';
import up from '../../../images/chevron-up.png';
import down from '../../../images/chevron-down.png';

const Carousel = ({thumbs, thumbsMain, curMain, selected, next, prev, selector, handleSelect}) => {

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
        console.log(index + 1)
        return (
          <div key={index}>
            {index === (selected ? selector(selected) : thumbsMain) && (
              <>
              <Thumbnail
              onClick={handleSelect}
              style={{backgroundImage: `url(${thumbs[getIndex(index, thumbs.length)]})`}}
              value={thumbs[getIndex(thumbsMain, thumbs.length)][1]}
              />
              <Thumbnail
              onClick={handleSelect}
              style={{backgroundImage: `url(${thumbs[getIndex(index + 1, thumbs.length)]})`}}
              value={thumbs[getIndex(thumbsMain + 1, thumbs.length)][1]}
              />
              <Thumbnail
              onClick={handleSelect}
              style={{backgroundImage: `url(${thumbs[getIndex(index + 2, thumbs.length)]})`}}
              value={thumbs[getIndex(thumbsMain + 2, thumbs.length)][1]}
              />
              <Thumbnail
              onClick={handleSelect}
              style={{backgroundImage: `url(${thumbs[getIndex(index + 3, thumbs.length)]})`}}
              value={thumbs[getIndex(thumbsMain + 3, thumbs.length)][1]}
              />
              <Thumbnail
              onClick={handleSelect}
              style={{backgroundImage: `url(${thumbs[getIndex(index + 4, thumbs.length)]})`}}
              value={thumbs[getIndex(thumbsMain + 4, thumbs.length)][1]}
              />
              <Thumbnail
              onClick={handleSelect}
              style={{backgroundImage: `url(${thumbs[getIndex(index + 5, thumbs.length)]})`}}
              value={thumbs[getIndex(thumbsMain + 5, thumbs.length)][1]}
              />
              <Thumbnail
              onClick={handleSelect}
              style={{backgroundImage: `url(${thumbs[getIndex(index + 6, thumbs.length)]})`}}
              value={thumbs[getIndex(thumbsMain + 6, thumbs.length)][1]}
              />
              </>
            )}
          </div>
        )
      })}
      <StyledDownBtn onClick={prev}/>
    </div>
  )
}

const Thumbnail = styled.button`
  display: flex;
  height: 65px;
  width: 65px;
  margin-bottom: 5px;
  cursor: pointer;
  opacity: 0.75;
  background-position: center;
  background-size: cover;
  ${Thumbnail}:hover {
    border: 2px solid red;
    opacity: 1;
  }
`
const StyledUpBtn = styled.button`
  position: relative;
  height: 40px;
  width: 40px;
  margin-left: 10px;
  margin-bottom: 5px;
  opacity: 0.75;
  background-image: url(${up});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: transparent;
  border-radius: 50%;
  ${StyledUpBtn}:hover {
    opacity: 1;
  }
`
const StyledDownBtn = styled.button`
  position: relative;
  height: 40px;
  width: 40px;
  margin-left: 10px;
  opacity: 0.75;
  background-image: url(${down});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: transparent;
  border-radius: 50%;
  ${StyledDownBtn}:hover {
    opacity: 1;
  }
`

export default Carousel;