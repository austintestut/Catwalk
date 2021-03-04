import React from 'react';
import styled from 'styled-components';

const StyledCart = styled.div`
  background-color: green;
`

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
          <h2>Cart</h2>
          <label>
            Size Selector
            <select onChange={handleSize}>
              <option
              defaultValue='Select Size'
              >
                Select Size
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
            </select>
          </label>
          <br/>
          <label>
            Quantity Selector
            <select>
              <option
              defaultValue='-'
              >
                -
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
            </select>
          </label>
          <br/>
          <button>Add to Cart</button>
        </form>
      </StyledCart>
    )
  }
  return (
    <StyledCart>
    <form>
      <h2>Cart</h2>
      <label>
        Size Selector
        <select>
          <option defaultValue='-'>-</option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
        </select>
      </label>
      <br/>
      <label>
        Quantity Selector
        <select>
          <option defaultValue='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
        </select>
      </label>
      <br/>
      <button>Add to Cart</button>
    </form>
    </StyledCart>
  )
};

export default Cart;