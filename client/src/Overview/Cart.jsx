import React from 'react';
import styled from 'styled-components';


const checkStock = (totalStock) => {
  if (totalStock === 0) {
    return 'Out of Stock';
  } else {
    if (totalStock < 15) {
      return Array.from({length: totalStock}, (_, i) => i + 1)
    //console.log([...Array(totalStock).keys()]) // 0 =>total
    } else {
      return Array.from({length: 15}, (_, i) => i + 1);
    }
  }
}

const Cart = ( {styles, selected, selectedSize, handleSize} ) => {
  if (selected) {
    //console.log('Selected Stlye', selected)
    let allSkus = [];
    let allSizes = {};
    let totalStock;
    let quantity;
    for (let j = 0; j < styles.length; j++) {
      if (styles[j].style_id === Number(selected)) {
        allSkus = styles[j].skus;
      }
      for (let key in allSkus) {
        allSizes[key] = allSkus[key].size
      }
      //console.log(allSizes);
      //console.log(allSkus);
    }

    if (selectedSize) {
    totalStock = allSkus[Number(selectedSize)]['quantity'];
    }

    return (
      <StyledCart>
        <form>
            <StyledSizeBtn onChange={handleSize}>
              <option
              defaultValue='Select Size'
              >
                Select a Size
              </option>
              {Object.keys(allSizes).map((sizeId) => {
                return (
                  <option
                  name={allSizes[sizeId]}
                  key={sizeId}
                  value={sizeId}
                  >
                    {allSizes[sizeId]}
                  </option>
                )
              })}
            </StyledSizeBtn>

            <StyledQtyBtn>
              <option
              defaultValue='-'
              >
                Qty:
              </option>
              {checkStock(totalStock).map((qt) => {
                return (
                  <option
                  key={qt}
                  value={qt}
                  >
                    {qt}
                  </option>
                )
              })}
            </StyledQtyBtn>
            <br></br>
          <StyledCartBtn>Add to Cart</StyledCartBtn>
        </form>
      </StyledCart>
    )
  } else {
  let allSkus;
  let allSizes = {};
  let totalStock;
  let quantity;
  for (let i = 0; i < styles.length; i++) {
    allSkus = styles[0].skus;
  }
    for (let key in allSkus) {
      allSizes[key] = allSkus[key].size
    }
    //console.log(allSizes);
    //console.log(allSkus);


  if (selectedSize) {
  totalStock = allSkus[Number(selectedSize)]['quantity'];
  }
  return (
    <StyledCart>
    <form>
            <StyledSizeBtn onChange={handleSize}>
              <option
              defaultValue='Select Size'
              >
                Select a Size
              </option>
              {Object.keys(allSizes).map((sizeId) => {
                return (
                  <option
                  name={allSizes[sizeId]}
                  key={sizeId}
                  value={sizeId}
                  >
                    {allSizes[sizeId]}
                  </option>
                )
              })}
            </StyledSizeBtn>
            <StyledQtyBtn>
              <option
              defaultValue='-'
              >
                Qty
              </option>
              {checkStock(totalStock).map((qt) => {
                return (
                  <option
                  key={qt}
                  value={qt}
                  >
                    {qt}
                  </option>
                )
              })}
            </StyledQtyBtn>
            <br></br>
      <StyledCartBtn>Add to Cart</StyledCartBtn>
    </form>
    </StyledCart>
  )
  }
};

const StyledCart = styled.div`
  position: relative;
  width: 100%;
`

const StyledCartBtn = styled.button`
  position: relative;
  height: 50px;
  width: 150px;
  top: 50px;
  background-image: linear-gradient(#ff0019, #790a04);
  color: white;
  order: 3;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`
const StyledSizeBtn = styled.select`
  position: relative;
  height: 50px;
  width: 150px;
  top: 25px;
  background-color: silver;
  color: black;
  order: 1;
`
const StyledQtyBtn = styled.select`
  position: relative;
  height: 50px;
  width: 50px;
  top: 25px;
  left: 10px;
  background-color: silver;
  color: black;
  order: 2;
`

export default Cart;