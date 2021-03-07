import React from 'react';

const Response = ({ response }) => {
  if (response) {
    return (
      <fragment>
        <div style={{ backgroundColor: 'LightGray' }}>
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
