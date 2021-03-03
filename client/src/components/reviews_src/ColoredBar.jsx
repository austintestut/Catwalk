import React from 'react';

const ColoredBar = ({ total, count }) => {
  const spanStyle = {
  };
  const containerStyle = {
    width: '200px',
    height: '12px',
    backgroundColor: 'lightgrey',
    //margin: '5px',
    marginLeft: '5px',
    display: 'inline-block',
  };
  const innerStyle = {
    backgroundColor: 'black',
    height: '12px',
    width: `${(count / total) * 200}px`,
    maxWidth: '200px',
  };
  return (
      <div style={{ ...containerStyle }}><div style={{ ...innerStyle }} /></div>
  );
};

export default ColoredBar;
