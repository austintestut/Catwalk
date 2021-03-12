import React from 'react';

const ColoredBar = ({ total, count, backgroundColor, borderColor }) => {
  const containerStyle = {
    width: '200px',
    height: '12px',
    backgroundColor: backgroundColor || 'white',
    // margin: '5px',
    border: borderColor || '1px solid silver',
    marginLeft: '5px',
    display: 'inline-block',
  };
  const innerStyle = {
    backgroundColor: '#e11a2b',
    height: '12px',
    width: `${(count / total) * 200}px`,
    maxWidth: '200px',
  };
  return (
    <div style={{ ...containerStyle }}><div style={{ ...innerStyle }} /></div>
  );
};

export default ColoredBar;
