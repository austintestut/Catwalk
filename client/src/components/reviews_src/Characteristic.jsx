import React from 'react';
import characteristic from '../../global_functions/characteristic';

const Characteristic = ({ item }) => {
  // container width 249 px
  // each div 65 px padding auto margin
  //item = ["Size", {"id": 59528, "value": "3.2500000000000000"}];
  const qualities = characteristic[item[0]];
  const containerStyle = {
    width: '249px',
    height: '18px',
  };
  const barStyle = {
    width: '80px',
    height: '12px',
    backgroundColor: 'lightGrey',
  };
  const triangleStyle = {
    width: 0,
    height: 0,
    borderLeft: '6px solid transparent',
    borderRight: '6px solid transparent',
    borderTop: '12px solid black',
    position: 'absolute',
    marginLeft: `${((item[1].value) / 5) * 237}px`, // 237 max slider left, 0 = max left
  };
  const textContainerStyle = {
    justifyContent: 'space-between',
    display: 'flex',
    width: '249px',
  };
  const spanStyle = {
    fontSize: '13px',
  };

  return (
    <div style={{ width: '249px' }}>
      <h4 style={{textAlign: 'center', margin: '8px' }}>{item[0]}</h4>
      <div style={{ ...containerStyle }}>
        <div style={{ ...triangleStyle }} />
        <div style={{ ...barStyle, float: 'left' }} />
        <div style={{ ...barStyle, float: 'right' }} />
        <div style={{ ...barStyle, margin: '0 auto' }} />
      </div>
      <div style={{ ...textContainerStyle }}>
        <span style={{ ...spanStyle }}>{qualities[1]}</span>
        <span style={{ ...spanStyle, textAlign: 'center'}}>{qualities[3]}</span>
        <span style={{ ...spanStyle }}>{qualities[5]}</span>
      </div>
    </div>
  );
};

export default Characteristic;
