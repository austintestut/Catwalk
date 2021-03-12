import React from 'react';
import characteristic from '../../global_functions/characteristic';

const Characteristic = ({ item }) => {
  // container width 249 px
  // each div 65 px padding auto margin
  //item = ["Size", {"id": 59528, "value": "3.2500000000000000"}];
  const qualities = characteristic[item[0]];
  const containerStyle = {
    paddingTop: '5px',
    width: '249px',
    height: '13px',
  };
  const barStyle = {
    width: '80px',
    height: '8px',
    backgroundColor: 'silver',
  };
  const triangleStyle = {
    width: 0,
    height: 0,
    marginTop: '-4px',
    borderLeft: '7px solid transparent',
    borderRight: '7px solid transparent',
    borderTop: '14px solid #e11a2b',
    position: 'absolute',
    marginLeft: `${((item[1].value) / 5) * 237}px`, // 237 = max slider right, 0 = max left
  };

  const rectangleStyle = {
    width: '5px',
    height: '15px',
    marginTop: '-5px',
    color: '#e11a2b',
    marginLeft: `${((item[1].value) / 5) * 237}px`, // 237 = max slider right, 0 = max left
  };
  const textContainerStyle = {
    justifyContent: 'space-between',
    display: 'flex',
    width: '249px',
  };
  const spanStyle = {
    width: '83px',
    fontSize: '11px',
  };

  const textStyle = {
    textAlign: 'left',
    fontSize: '14px',
    marginBottom: '2px',
  };

  return (
    <div style={{ width: '249px' }}>
      <h4 style={{ ...textStyle }}>{item[0]}:</h4>
      <div style={{ ...containerStyle }}>
        <div style={{ ...triangleStyle }} />
        <div style={{ ...barStyle, float: 'left' }} />
        <div style={{ ...barStyle, float: 'right' }} />
        <div style={{ ...barStyle, margin: '0 auto' }} />
      </div>
      <div style={{ ...textContainerStyle }}>
        <div style={{ ...spanStyle }}>{qualities[1]}</div>
        <div style={{ ...spanStyle, textAlign: 'center' }}>{ qualities[3] }</div>
        <div style={{ ...spanStyle, textAlign: 'right' }}>{qualities[5]}</div>
      </div>
    </div>
  );
};

export default Characteristic;
