import React from 'react'
import styled from 'styled-components';

const MainImg = styled.img`
  width: 65%;
  height: auto%;
  border-radius: 10px;
  display: inline-block;
  cursor: -webkit-zoom-in;
`

const Thumbnail = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  display: inline-block;
  cursor: pointer;
`

const ImageGallery = ( {styles, selected} ) => {
  if (selected) {
    let main = '';
    for (let i = 0; i < styles.length; i++) {
      if (styles[i].style_id === Number(selected)) {
        main = styles[i].photos[0].url;
      }
    };

    return (
      <MainImg
      key={selected}
      src={main}
      />
    )
  } else {
  return (
    <>
    <div>
      {styles.map((style) => {
        if (style['default?']) {
          return (
            <MainImg key={style.style_id}src={style.photos[0].url} />
          )
        }
      })}
    </div>

    {/* <div>
      {styles.map((style) => {
        return (
          <span key={style.style_id}>
          <Thumbnail key={style.style_id} src={style.photos[0].thumbnail_url}></Thumbnail>
          </span>
        )
      })}
    </div> */}
    </>
  )
}
}
export default ImageGallery;
