import React from 'react';
import styled from 'styled-components';
import StyleSelector from './StyleSelector.jsx';
import Pinterest from '../../../images/pinterest-share.png';
import Facebook from '../../../images/fb-share.png';
import Twitter from '../../../images/twitter-share.png';


const ProductInfo = ( {products, reviews, styles, selected, handleSelect} ) => {
  //const ratings = Object.values(reviews.ratings);
  //console.log(ratings)
  // let stars = 0;
  // for (let i = 0; i < ratings.length; i++) {
  //   stars += ratings[i];
  // };
  // stars = Math.floor(stars/ratings.length);
  //console.log(stars);
  //console.log(products[0]);
  if (selected) {
    let num = 0;
    return (
    <StyledInfo>
      <div>
        {/* <h3>Stars: {stars}</h3>
        <h3>Read all {ratings.length} reviews</h3> */}
        <h3>{products.category}:</h3>
        <h1>{products.name}</h1>
        <h3 key={Math.random(num + 1)}>{styles.map((style) => {
          if (style.style_id === Number(selected)) {
          if (style.sale_price !== null) {
            return (
              <React.Fragment key={Math.random(num + 1)}>
            <a key={style.style_id}>Now ${style.sale_price}</a>
            <br/>
            <StyledOrigPrice key={Number(style.style_id)+1}>${style.original_price}</StyledOrigPrice>
            </React.Fragment>
            )
          } else {
            return `$${(style.original_price)}`
          }
        }
        })}</h3>
        <h2 key={Math.random(num + 1)}>Style > {styles.map((style) => {
          if (style.style_id === Number(selected)) {
            return (style.name);
          }
        })}</h2>
      <StyleSelector
         styles={styles}
         handleSelect={handleSelect}
         selected={selected}
      />
        <FacebookBtn />
        <PinterestBtn />
        <TwitterBtn />
      </div>
    </StyledInfo>
    )
  } else {

  return (
    <StyledInfo>
      <div key={products.id}>
        <h3>{products.category}:</h3>
        <h1>{products.name}</h1>
        <a>${products.default_price}</a>
        <h2>Style ></h2>
        <StyleSelector
        styles={styles}
        handleSelect={handleSelect}
        selected={selected}
        />
        <FacebookBtn />
        <PinterestBtn />
        <TwitterBtn />
      </div>
    </StyledInfo>
  )
  }
}

const StyledOrigPrice = styled.a`
  color: red;
  text-decoration: line-through;
`
const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 200px;
`
const StyledStyleSelector = styled.div`
  display: flex;
  order: 1
`
const FacebookBtn = styled.button`
  position: relative;
  height: 50px;
  width: 50px;
  top: 15%;
  left: 5%;
  border-radius: 50%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${Facebook});
`
const PinterestBtn = styled.button`
  position: relative;
  height: 50px;
  width: 50px;
  top: 15%;
  left: 10%;
  border-radius: 50%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${Pinterest});
`
const TwitterBtn = styled.button`
  position: relative;
  height: 50px;
  width: 50px;
  top: 15%;
  left: 15%;
  border-radius: 50%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${Twitter});
`

export default ProductInfo;