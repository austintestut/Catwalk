import React from 'react';
import styled from 'styled-components';
import StyleSelector from './StyleSelector.jsx';
import StarStatic from '../components/reviews_src/StarStatic.jsx';

const ProductInfo = ( {product, reviews, rating, styles, selected, handleSelect} ) => {
  const scrollToBottom = (e) => {
    e.preventDefault()
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }

  if (selected) {
    return (
    <StyledInfo>
      <div>
        <div>
          <StarStatic number={rating} />
          Read all {reviews} reviews
        </div>
        <StyledCategory>{product.category}:</StyledCategory>
        <StyledName>{product.name}</StyledName>
        <h3 key={Math.random()}>{styles.map((style) => {
          if (style.style_id === Number(selected)) {
          if (style.sale_price !== null) {
            return (
              <React.Fragment key={Math.random()}>
            <a key={style.style_id}>Now ${style.sale_price}</a>
            <br/>
            <StyledOrigPrice key={Number(style.style_id)+1}>Was ${style.original_price}</StyledOrigPrice>
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
      </div>
    </StyledInfo>
    )
  } else {

  return (
    <StyledInfo>
      <div key={product.id}>
      <div>
          <StarStatic number={rating} />
           Read all <a href='#' onClick={scrollToBottom}>{reviews}</a> reviews
        </div>
        <StyledCategory>{product.category}:</StyledCategory>
        <StyledName>{product.name}</StyledName>
        <a>${product.default_price}</a>
        <h2>Style ></h2>
        <StyleSelector
        styles={styles}
        handleSelect={handleSelect}
        selected={selected}
        />
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
const StyledCategory = styled.h5`
  font-family: Arial, avenier;
`
const StyledName = styled.h2`
  font-family: Arial, avenier;
`

export default ProductInfo;