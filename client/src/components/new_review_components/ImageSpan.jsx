import React from 'react';

const ImageSpan = ({ images }) => {
  const thumbStyle = {
    borderRadius: '5px',
    padding: '5px',
    paddingLeft: '0',
    height: '40px',
    maxWidth: '80px',
  };

  const spanStyle = {
    marginLeft: '5px',
    verticalAlign: 'bottom',
  };
  return (
    <span style={{ ...spanStyle }}>
      {images.map((image) => <img src={image} alt="" style={{ ...thumbStyle }} />)}
    </span>
  );
};

export default ImageSpan;
