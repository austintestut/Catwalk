import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
margin-left: 10px;
text-decoration: underline;
background: none;
border: none;
color: grey;
&:hover {
  font-weight: bold;
  cursor: pointer;
}
`;

const AddAnswerButton = function ({ showAnsModal }) {
  return (
    <StyledButton onClick={showAnsModal} type="button">Add Answer</StyledButton>
  );
};

export default AddAnswerButton;
