import React from 'react';

const Cart = () => {
  return (

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

  )
};

export default Cart;