import React from 'react';

const Summary = ({ summary }) => {
  if (summary) { return <><div style={{ fontWeight: 'bold' }}>{summary}</div><br/></>; }
  return null;
}

export default Summary;
