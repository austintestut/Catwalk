import React from 'react';

const Recommend = ({ bool }) => {
  if (bool !== false) { return <fragment><div>✓ I recommend this product </div><br /></fragment>; }
  return null;
};

export default Recommend;
