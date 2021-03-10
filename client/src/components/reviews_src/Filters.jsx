import React from 'react';

const Filters = ({ filters, clearFilters }) => {
  const containerStyle = {
    height: '20px',
    position: 'relative',
    marginBottom: '5px',
  };
  const clearFiltersStyle = {
    backgroundColor: '#e11a2b',
    border: 'none',
    outline: 0,
    color: 'white',
    /* padding: 15px 32px; */
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    position: 'absolute',
    bottom: '5px',
    backgroundImage: 'linear-gradient(#ff0019, #790a04)',
  };
  const ulStyle = {
    color: 'silver',
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
        <button className="remove-filters" onClick={clearFilters} style={{ ...clearFiltersStyle }}>Remove Current Filters</button>
      </div>
    );
  }
  return <div style={{ ...containerStyle }} />;
};

export default Filters;
