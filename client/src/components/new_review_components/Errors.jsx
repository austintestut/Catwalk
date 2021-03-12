import React from 'react';

const Errors = ({ errors }) => {
  if (errors.length) {
    return (
      <div style={{
        float: 'right',
        fontSize: '60%',
        color: '#e11a2b',
        marginRight: '10px',
        width: '150px',
      }}>
        <ul>
          {errors.map((error) => {
            console.log(error);
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
