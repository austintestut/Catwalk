import React from 'react';

const ColoredBar = ({ total, count }) => {
  const containerStyle = {
    width: '200px',
    height: '12px',
    backgroundColor: 'lightgrey',
    margin: '5px',
  };
  const innerStyle = {
    backgroundColor: 'black',
    height: '12px',
    width: `${(count / total) * 200}px`,
  };
  return <div style={{ ...containerStyle }}><div style={{ ...innerStyle }} /></div>;
};

export default ColoredBar;
