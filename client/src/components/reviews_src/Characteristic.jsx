import React from 'react';

const Characteristic = ({ characteristic }) => {
  // container width 249 px
  // each div 65 px padding auto margin
  const containerStyle = {
    width: '249px',
    height: '12px',
  };
  const barStyle = {
    width: '80px',
    height: '12px',
    backgroundColor: 'lightGrey',
  };
  return (
    <div style={{ ...containerStyle }}>
      <div style={{ ...barStyle, float: 'left' }} />
      <div style={{ ...barStyle, float: 'right' }} />
      <div style={{ ...barStyle, margin: '0 auto' }} />
    </div>
  );
};

export default Characteristic;
