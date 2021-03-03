import React from 'react';

const Recommend = ({ bool }) => {
  if (bool !== false) { return (<div>✓ I recommend this product </div>); }
  return null;
};

export default Recommend;
