import React from 'react'
import styled from 'styled-components';

const MainImg = styled.img`
  width: 65%;
  height: auto%;
  border-radius: 10px;
  display: inline-block;
  cursor: -webkit-zoom-in;
  object-fit: cover;
`

const Thumbnail = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  display: inline-block;
  cursor: pointer;
`

const GalleryTest = ( {styles, selected} ) => {
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


// getThumbs() {
//   let thumbs = [];
//   let total = 7;
//   let middle = Math.floor(total/2);
//   let center = {
//     x: parseFloat(this.imagegallery.style.width) / 2,
//     y: parseFloat(this.imagegallery.style.height) / 2
//   };
//   let newX = 0;
//   let newY = 0;
//   let newZ = 0;
//   let newScale = 1;

//   for (let i = 0; i < 7; i++) {
//     if (i < middle) {
//       newX = center.x - (300 * (middle - i));
//       newY = center.y;
//       newX = newX + ((0.333 * 300) * (middle - i));
//       newZ = i;
//       newScale = Math.pow(0.95, (middle - i));
//     } else {
//       newX = center.x + (300 * (i - middle));
//       newY = center.y;
//       newX = newX - ((0.333 * 300) * (i - middle));
//       newZ = (i * -1.0);
//       newScale = Math.pow(0.95, (i - middle));
//     }

//     thumbs.push(
//     <ThumbSlides
//     key={i}
//     image={this.state.thumbs[i]}
//     x={newX}
//     y={newY}
//     z={i === middle ? 100 : newZ}
//     scale={newScale}
//     />)
//   }
//   this.setState({
//     thumbSlides: thumbs
//   })
// }

// nextThumb() {

//   let lastImgLeft = this.imagegallery.children.[this.imagegallery.children.length - 1].style.left;
//   let lastImgZ = this.imagegallery.children.[this.imagegallery.children.length - 1].style.zIndex;
//   let lastImgTransform = this.imagegallery.children.[this.imagegallery.children.length - 1].style.transform;

//   for (let i = this.imagegallery.children.length - 1; i > 0; i--) {

//     this.imagegallery.children[i].style.transitionDuration = '1.0s';
//     this.imagegallery.children[i].style.left = this.imagegallery.children[i -1].style.left;
//     this.imagegallery.children[i].style.zIndex = this.imagegallery.children[i -1].style.zIndex;
//     this.imagegallery.children[i].style.transform = this.imagegallery.children[i -1].style.transform;
//   }

//   this.imagegallery.children[0].style.transitionDuration = '0.2s';
//   this.imagegallery.children[0].style.transform = 'translate(-50%, -50%) scale(0)';

//   setTimeout(() => {
//     this.imagegallery.children[0].style.transitionDuration = '0.0s';
//     this.imagegallery.children[0].style.left = lastImgLeft;
//     this.imagegallery.children[0].style.zIndex = lastImgZ;

//     this.imagegallery.appendChild(this.imagegallery.children[0]);

//     setTimeout(() => {
//       this.imagegallery.children[this.imagegallery.children.length - 1].style.transitionDuration = '0.2s';
//       this.imagegallery.children[this.imagegallery.children.length - 1].style.transform = lastImgTransform;
//     }, 100);
//   }, 700);
// }

// prevThumb() {
//   let lastImgLeft = this.imagegallery.children.[0].style.left;
//   let lastImgZ = this.imagegallery.children.[0].style.zIndex;
//   let lastImgTransform = this.imagegallery.children.[0].style.transform;

//   for (let i = 0 ; i < this.imagegallery.children.length - 1; i++) {
//     this.imagegallery.children[i].style.transitionDuration = '1.0s';
//     this.imagegallery.children[i].style.left = this.imagegallery.children[i + 1].style.left;
//     this.imagegallery.children[i].style.zIndex = this.imagegallery.children[i + 1].style.zIndex;
//     this.imagegallery.children[i].style.transform = this.imagegallery.children[i + 1].style.transform;
//   }

//   this.imagegallery.children[this.imagegallery.children.length - 1].style.transitionDuration = '0.2s';
//   this.imagegallery.children[this.imagegallery.children.length - 1].style.transform = 'translate(-50%, -50%) scale(0)';

//   setTimeout(() => {
//     this.imagegallery.children[this.imagegallery.children.length - 1].style.transitionDuration = '0.0s';
//     this.imagegallery.children[this.imagegallery.children.length - 1].style.left = lastImgLeft;
//     this.imagegallery.children[this.imagegallery.children.length - 1].style.zIndex = lastImgZ;

//     this.imagegallery.insertBefore(this.imagegallery.children[this.imagegallery.children.length - 1], this.imagegallery.children[0]);

//     setTimeout(() => {
//       this.imagegallery.children[this.imagegallery.children.length - 1].style.transitionDuration = '0.2s';
//       this.imagegallery.children[this.imagegallery.children.length - 1].style.transform = lastImgTransform;
//     }, 100);
//   }, 700);
// }
export default GalleryTest;
