import React from 'react';
import Questionn from './Questionn';

const QuestionList = function ({ questions, howMany, increaseHelpful, searching, displayedQuestions}) {
  console.log(displayedQuestions);
  let list = questions;
  if (searching) {
    list = displayedQuestions
  }
  return (
    <div>
      Question List:
      {list.slice(0, howMany).map((question) => (
        <Questionn
          question={question}
          key={question.question_id}
          answers={question.answers}
          increaseHelpful={increaseHelpful}
        />
      ))}
    </div>
  );
};

export default QuestionList;
