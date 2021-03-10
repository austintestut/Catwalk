import React from 'react';
import styled from 'styled-components';

const ShowQuestionsButton = styled.button`
width: 15%;
margin-left: 5%;
color: white;
background-image: linear-gradient(#ff0019, #790a04);
&:hover {
  cursor: pointer;
  text-decoration: underline;
}
`;

const ShowMoreQuestionsButton = function ({ showMoreQuestions, isMaxQuestions }) {
  if (!isMaxQuestions) {
    return (
      <ShowQuestionsButton onClick={showMoreQuestions}>show more questions</ShowQuestionsButton>
    );
  }
  return (
    <div />
  );
};

export default ShowMoreQuestionsButton;
