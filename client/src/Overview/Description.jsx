import React from 'react'

const Description = ( {products} ) => {
  return (
    <div>
      <h3>{products.slogan}</h3>
      <p>{products.description}</p>
    </div>
  )
}

export default Description;