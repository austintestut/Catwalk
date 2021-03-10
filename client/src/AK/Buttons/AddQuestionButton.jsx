import React from 'react';
import styled from 'styled-components';

const StyledAddQuestionButton = styled.button`
width: 15%;
margin-left: 5%;
color: white;
background-image: linear-gradient(#ff0019, #790a04);
&:hover {
  cursor: pointer;
};
`;

const AddQuestionButton = function ({ showQModal }) {
  return (
    <StyledAddQuestionButton onClick={showQModal}>add question</StyledAddQuestionButton>
  );
};

export default AddQuestionButton;
