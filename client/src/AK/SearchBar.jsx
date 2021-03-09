import React from 'react';
import styled from 'styled-components';

const SearchInput = styled.input`
width: 90%;
margin: auto;
margin-bottom: 20px;
height: 50px;
font-size: 20px;
}
`;

const SearchBar = ({ handleSearch }) => (
  <SearchInput placeholder="Have a question? Search for answers" onChange={handleSearch} results="0"/>
);

export default SearchBar;
