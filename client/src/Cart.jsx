import React from 'react';
import styled from 'styled-components';

const StyledCart = styled.div`
  background-color: green;
`
// position: relative;
// left: 50%;
// display: inline-block;

const Cart = () => {
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