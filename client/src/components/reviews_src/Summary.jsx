import React from 'react';

const Summary = ({ summary }) => {
  if (summary) { return <fragment><div style={{ fontWeight: 'bold' }}>{summary}</div><br/></fragment>; }
  return null;
};

export default Summary;
