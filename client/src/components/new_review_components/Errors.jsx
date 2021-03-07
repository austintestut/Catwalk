import React from 'react';

const Errors = ({ errors }) => {
  debugger;
  return (
    <div style={{
      float: 'right',
      fontSize: '60%',
      color: 'red',
      marginRight: '10px',
    }}>
      <ul>
        {errors.map((error) => <li>{error}</li>)}
      </ul>
    </div>
  );
}

export default Errors;
