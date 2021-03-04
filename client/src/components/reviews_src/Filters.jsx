import React from 'react';

const Filters = ({ filters, clearFilters }) => {
  const containerStyle = {
    height: '130px',
    position: 'relative',
  };
  const clearFiltersStyle = {
    textDecoration: 'underline',
    fontWeight: 'bold',
    color: 'red',
    position: 'absolute',
    bottom: '5px',
  };
  const ulStyle = {
    margin: '0px',
    paddingLeft: '18px',
  };
  const liStyle = {
    margin: '0px',
    padding: '0px',
  };
  if (filters.length) {
    return (
      <div style={{ ...containerStyle }}>
        <span>Filters Applied:</span>
        <ul style={{ ...ulStyle }}>
          {filters.map((filter) => <li Style={{ ...liStyle }}>{filter} Star</li>)}
        </ul>
        <span onClick={clearFilters} style={{ ...clearFiltersStyle }}>Remove Current Filters</span>
      </div>
    );
  }
  return <div style={{ ...containerStyle }} />;
};

export default Filters;
