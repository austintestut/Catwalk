import React from 'react';

const Response = ({ response }) => {
  if (response) {
    return (
      <fragment>
        <div style={{
          backgroundColor: 'silver',
          padding: '5px',
          borderRadius: '5px',
          fontSize: '90%',
          marginRight: '5px',
          color: 'white',
          textShadow: '0 0 1px #000',
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
