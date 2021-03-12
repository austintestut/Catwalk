import React from 'react';
import styled from 'styled-components';

const SearchInput = styled.input`
border: 2px solid silver;
border-width: thin;
border-radius: 4px;
width: 90%;
margin: auto;
margin-bottom: 20px;
height: 50px;
font-size: 20px;
&:focus {
  outline: bold;
  outline-color: silver;
}
`;

const SearchBar = ({ handleSearch }) => (
  <SearchInput placeholder="Have a question? Search for answers" onChange={handleSearch}/>
);

export default SearchBar;
