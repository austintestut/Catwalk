import React from 'react';
import styled from 'styled-components';

const ShowQuestionsButton = styled.button`
width: 15%;
margin-left: 5%;
`

const ShowMoreQuestionsButton = function({ showMoreQuestions, isMaxQuestions }) {
  if (!isMaxQuestions) {
    return (
    <ShowQuestionsButton onClick={showMoreQuestions}>Show More Questions</ShowQuestionsButton>
  )
  }
  return(
    <div></div>
  )

}

export default ShowMoreQuestionsButton;
