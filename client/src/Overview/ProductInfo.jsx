import React from 'react';
import styled from 'styled-components';
import StyleSelector from './StyleSelector.jsx';
import Pinterest from '../../../images/pinterest-share.png';
import Facebook from '../../../images/fb-share.png';
import Twitter from '../../../images/twitter-share.png';
import StarStatic from '../components/reviews_src/StarStatic.jsx'

const ProductInfo = ( {products, reviews, rating, styles, selected, handleSelect} ) => {

  if (selected) {
    return (
    <StyledInfo>
      <div>
        <div>
          <StarStatic number={rating} />
          Read all {reviews} reviews
        </div>
        <h3>{products.category}:</h3>
        <h1>{products.name}</h1>
        <h3 key={Math.random()}>{styles.map((style) => {
          if (style.style_id === Number(selected)) {
          if (style.sale_price !== null) {
            return (
              <React.Fragment key={Math.random()}>
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
        <h2 key={Math.random()}>Style > {styles.map((style) => {
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
      <div>
          <StarStatic number={rating} />
           Read all <a href='#'>{reviews}</a> reviews
        </div>
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