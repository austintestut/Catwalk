import React from 'react';

const Filters = ({ filters }) => {
  const containerStyle = {
    height: '150px',
  };
  const clearFiltersStyle = {
    textDecoration: 'underline bold',
  };

  if (filters) {
    return (
      <div style={{ ...containerStyle }}>
        <span>Filters Applied:</span>
        <ul>
          {filters.map((filter) => <li>{filter} Star</li>)}
        </ul>
        <span style={{ ...clearFiltersStyle }}>Remove Current Filters</span>
      </div>
    );
  }
  return null;
};

export default Filters;
