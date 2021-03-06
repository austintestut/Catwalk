import React from 'react';
import Questionn from './Questionn';
import styled from 'styled-components';

const QuestionListDiv = styled.div`
margin-left: 5%;
margin-right: 5%;
display: flex;
flex-direction: row;
flex-wrap: wrap;

`

const QuestionList = function ({ questions, howMany, increaseHelpful, searching, displayedQuestions}) {
  let list = questions;
  if (searching) {
    list = displayedQuestions
  }
  return (
    <QuestionListDiv>
      {list.slice(0, howMany).map((question) => (
        <Questionn
          question={question}
          key={question.question_id}
          answers={question.answers}
          increaseHelpful={increaseHelpful}
        />
      ))}
    </QuestionListDiv>
  );
};

export default QuestionList;
