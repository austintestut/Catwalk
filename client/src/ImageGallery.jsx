import React from 'react'
import styled from 'styled-components';

const MainImg = styled.img`
  width: 45%;
  height: auto%;
  border-radius: 10px;
`
// top: 0;
// left: 0;
// display: block;
// position: relative;

const Thumbnail = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100%;
`

// display: inline-block;
// position: relative;
// bottom: 100;
// left: 100;

const ImageGallery = ( {styles} ) => {
  //console.log(styles);
  return (
    <div>
      <h1>Image Gallery</h1>
      <div>
        <MainImg src="https://images.unsplash.com/photo-1547257965-087be799b084?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"></MainImg>
      </div>
      <div>
        <Thumbnail src="https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"></Thumbnail>
      </div>
    </div>
  )
}

export default ImageGallery;
