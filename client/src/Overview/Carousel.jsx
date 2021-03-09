import React from 'react';
import styled from 'styled-components';

const Carousel = ({thumbs, thumbsMain, curMain, next, prev}) => {

  const getIndex = (num, length) => {
    if (num >= length) {
      return num - length + 1;
    } else {
      return num;
    }
  }

  return (
    <div>
      <button onClick={next}>up</button>

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
      <button onClick={prev}>down</button>
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

export default Carousel;