import React from 'react';
import styled from 'styled-components';

const StyledAddQuestionButton = styled.button`
height: 50px;
width: 150px;
margin-left: 5%;
color: white;
background-image: linear-gradient(#ff0019, #790a04);
&:hover {
  cursor: pointer;
  text-decoration: underline;
};
`;

const AddQuestionButton = function ({ showQModal }) {
  return (
    <StyledAddQuestionButton onClick={showQModal}>add question</StyledAddQuestionButton>
  );
};

export default AddQuestionButton;
