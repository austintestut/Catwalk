import React from 'react';
import styled from 'styled-components';
import StyleSelector from './StyleSelector.jsx';

const StyledInfo = styled.div`
  background-color: blue;
  display: block;
  width: 50%;
  height: 200px;
`
// Experiments

// display: block;
// position: relative;
// top: 100px;
// left: 50%;
// width: 50%;
// height: auto;

const ProductInfo = ( {products, reviews, styles, selected} ) => {
  const ratings = Object.values(reviews.ratings);
  //console.log(ratings)
  let stars = 0;
  for (let i = 0; i < ratings.length; i++) {
    stars += ratings[i];
  };
  stars = Math.floor(stars/ratings.length);
  //console.log(stars);
  //console.log(products[0]);
  return (
    <StyledInfo>
      <div key={products.id}>
        <h1>{products.name}</h1>
        <h2>{products.category}</h2>
        <a>{products.default_price}</a>
        <StyleSelector styles={styles}/>
      </div>
    </StyledInfo>
    // <StyledInfo>
    //   {products.map((product) => {
    //     return (
    //       <div key={product.id}>
    //         <h2>Product Info</h2>
    //         <h3>Read all {ratings.length} Reviews</h3>
    //         <h3>Stars: {stars}</h3>
    //         <h3>Category: {product.category}</h3>
    //         <h1>{product.name}</h1>
    //         <h4>{product.default_price}</h4>
    //         <span>
    //           {product.slogan}
    //           <p>{product.description}</p>
    //         </span>
    //         <StyleSelector styles={styles}/>
    //         <h3>Share on Soical Media</h3>
    //         <button>Facebook</button>
    //         <button>Twitter</button>
    //         <button>Pintrest</button>
    //       </div>
    //     )
    //   })}
    // </StyledInfo>
  )
}



// return (
//   <StyledInfo>
//     <div key={product.id}>
//           <h2>Product Info</h2>
//           <h3>Read all {ratings.length} Reviews</h3>
//           <h3>Stars: {stars}</h3>
//           <h3>Category: {product.category}</h3>
//           <h1>{product.name}</h1>
//           <h4>{product.default_price}</h4>
//           <span>
//             {product.slogan}
//             <p>{product.description}</p>
//           </span>
//           <StyleSelector styles={styles}/>
//           <h3>Share on Soical Media</h3>
//           <button>Facebook</button>
//           <button>Twitter</button>
//           <button>Pintrest</button>
//         </div>
//   </StyledInfo>
// )

export default ProductInfo;