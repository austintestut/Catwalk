import React from 'react';

const Errors = ({ errors }) => {
  if (errors.length) {
    return (
      <div style={{
        float: 'right',
        fontSize: '60%',
        color: 'red',
        marginRight: '10px',
        width: '150px',
      }}>
        <ul>
          {errors.map((error) => <li>{error}</li>)}
        </ul>
      </div>
    );
  }
  return null;
};

export default Errors;
