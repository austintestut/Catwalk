import React from 'react';

const Response = ({ response }) => {
  if (response) {
    return (
      <fragment>
        <div style={{
          backgroundColor: '#F0F0F0',
          padding: '5px',
          borderRadius: '0',
          fontSize: '90%',
          marginRight: '5px',
          color: 'black',
        }}>
          <span style={{ fontWeight: 'bolder' }}>Response:</span>
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
