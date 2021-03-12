import React from 'react';

const Errors = ({ errors }) => {
  if (errors.length) {
    return (
      <div style={{
        float: 'right',
        fontSize: '80%',
        color: '#e11a2b',
        marginTop: '-15px',
        marginRight: '10px',
        width: '200px',
      }}>
        <ul>
          {errors.map((error) => {
            if (error !== 'invalid url') {
              return (<li>{error}</li>);
            }
            return null;
          })}
        </ul>
      </div>
    );
  }
  return null;
};

export default Errors;
