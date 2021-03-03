import React from 'react';

const Response = ({ response }) => {
  if (response) {
    return (
      <div style={{ backgroundColor: 'LightGray' }}>
        <span style={{ fontWeight: 'bold' }}>Response:</span>
        <br />
        <br />
        <span>{response}</span>
      </div>
    );
  }
  return null;
};

export default Response;
