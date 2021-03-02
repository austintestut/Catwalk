import React from 'react';
import Question from './Question';

const QuestionList = function ({ questions, showAns, hide, show, howMany }) {
  return (
    <div>
      Question List:
      {questions.slice(0, howMany).map((question) => (
        <Question
          question={question}
          key={question.question_id}
          showAns={showAns}
          hide={hide}
          show={show}
          answers={question.answers}
        />
      ))}
    </div>
  );
};

export default QuestionList;
