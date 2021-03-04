import React from 'react';
import Questionn from './Questionn';

const QuestionList = function ({ questions, howMany, increaseHelpful }) {
  return (
    <div>
      Question List:
      {questions.slice(0, howMany).map((question) => (
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
