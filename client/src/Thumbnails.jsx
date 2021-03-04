import React from 'react';
import styled from 'styled-components';

const ThumbnailContainer = styled.ul`
  list-style-type: none;
  height: 200px;
`

const Thumbnail = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  cursor: pointer;
`
// images array for prev/next
const Thumbnails = ( {styles, handleSelect} ) => {
  // let images = [];
  // styles.map((style) => {
  //   images.push(style.photos[0].thumbnail_url);
  // })
  // console.log(images)
  return (
    <ThumbnailContainer >
    {styles.map((style) => {
      return (
        <li key={style.style_id}>
        <Thumbnail
        onClick={handleSelect}
        key={style.style_id}
        src={style.photos[0].thumbnail_url}
        value={style.style_id}
        />
        </li>
      )
    })}
  </ThumbnailContainer>
  )
}

export default Thumbnails;