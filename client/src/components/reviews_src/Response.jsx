import React from 'react';

const Response = ({ response }) => {
  if (response) {
    return (
      <fragment>
        <div style={{
          backgroundColor: 'LightGray',
          padding: '10px',
          borderRadius: '5px',
          fontSize: '80%',
          marginRight: '5px',
        }}>
          <span style={{ fontWeight: 'bold' }}>Response:</span>
          <br />
          <br />
          <span>{response}</span>
        </div>
        <br />
      </fragment>
    );
  }
  return null;
};

export default Response;
