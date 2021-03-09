import React from 'react';
import styled from 'styled-components';
import StyleSelector from './StyleSelector.jsx';

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

const ProductInfo = ( {products, reviews, styles, selected, handleSelect} ) => {
  const ratings = Object.values(reviews.ratings);
  //console.log(ratings)
  let stars = 0;
  for (let i = 0; i < ratings.length; i++) {
    stars += ratings[i];
  };
  stars = Math.floor(stars/ratings.length);
  //console.log(stars);
  //console.log(products[0]);
  if (selected) {
    let num = 0;
    return (
    <StyledInfo>
      <div>
        <h3>Stars: {stars}</h3>
        <h3>Read all {ratings.length} reviews</h3>
        <h3>{products.category}:</h3>
        <h1>{products.name}</h1>
        <h3 key={Math.random(num + 1)}>{styles.map((style) => {
          if (style.style_id === Number(selected)) {
          if (style.sale_price !== null) {
            return (
              <React.Fragment key={Math.random(num + 1)}>
            <a key={style.style_id}>SALE: {style.sale_price}</a>
            <br/>
            <a key={Number(style.style_id)+1}>Original Price: {style.original_price}</a>
            </React.Fragment>
            )
          } else {
            return (style.original_price)
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
      <h3>Share on Social Media</h3>
      <button>Facebook</button>
      <button>Twitter</button>
      <button>Pintrest</button>
      </div>
    </StyledInfo>
    )
  } else {

  return (
    <StyledInfo>
      <div key={products.id}>
        <h3>{products.category}:</h3>
        <h1>{products.name}</h1>
        <a>{products.default_price}</a>
        <h2>Style ></h2>
        <StyleSelector
        styles={styles}
        handleSelect={handleSelect}
        selected={selected}
        />
        <h3>Share on Social Media</h3>
        <button>Facebook</button>
        <button>Twitter</button>
        <button>Pintrest</button>
      </div>
    </StyledInfo>
  )
  }
}

export default ProductInfo;