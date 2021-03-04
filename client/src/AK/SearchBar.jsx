import React from 'react';

const SearchBar = ({handleSearch}) => {
  return (
    <input placeholder="Have a question? Search for answers" onChange={handleSearch}></input>
  )
}

export default SearchBar