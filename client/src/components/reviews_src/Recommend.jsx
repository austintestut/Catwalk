import React from 'react';

const Recommend = ({ bool }) => {
  const style = {
    // fontWeight: 'bold',
  }
  const checkStyle= {
    color: '#e11a2b',
  }
  if (bool !== false) {
    return (
      <>
      <div style={{ ...style}}>
        <span style={{ ...checkStyle }}>✓</span> I recommend this product
      </div><br />
      </>
    )}
  return null;
};

export default Recommend;
