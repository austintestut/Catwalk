import React from 'react';
import styled from 'styled-components';

const StyledAddQuestionButton = styled.button`
width: 15%;
margin-left: 5%;
`

const AddQuestionButton = function ({ showQModal }) {
  return (
    <StyledAddQuestionButton onClick={showQModal}>Add Question</StyledAddQuestionButton>
  );
};

export default AddQuestionButton;
