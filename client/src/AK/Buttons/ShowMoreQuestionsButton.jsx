import React from 'react';
import styled from 'styled-components';

const ShowQuestionsButton = styled.button`
height: 50px;
width: 150px;
margin-left: 5%;
color: white;
font-size: 16px;
background-image: linear-gradient(#ff0019, #790a04);
&:hover {
  cursor: pointer;
  text-decoration: underline;
}
`;

const ShowMoreQuestionsButton = function ({ showMoreQuestions, isMaxQuestions }) {
  if (!isMaxQuestions) {
    return (
      <ShowQuestionsButton onClick={showMoreQuestions}>Show More Questions</ShowQuestionsButton>
    );
  }
  return (
    <div></div>
    )
};

export default ShowMoreQuestionsButton;
