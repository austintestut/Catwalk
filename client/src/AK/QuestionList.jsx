import React from 'react';
import styled from 'styled-components';
import Questionn from './Questionn';

const QuestionListDiv = styled.div`

display: flex;
flex-direction: row;
flex-wrap: wrap;
width: 100%;

`;

const QuestionList = function ({ questions, howMany, increaseHelpful, searching, displayedQuestions, productName }) {
  let list = questions;
  if (searching) {
    list = displayedQuestions;
  }
  return (
    <QuestionListDiv>
      {list.slice(0, howMany).map((question) => (
        <Questionn
          question={question}
          key={question.question_id}
          answers={question.answers}
          increaseHelpful={increaseHelpful}
          productName={productName}
        />
      ))}
    </QuestionListDiv>
  );
};

export default QuestionList;
