import React from 'react';
import Question from './Question';

const QuestionList = function ({questions, showAns, hide, show}) {
  return (
    <div>
      Question List:
      {questions.map(question => <Question question={question}key={question.question_id}showAns={showAns} hide={hide}show={show} />)}
    </div>
  );
};

export default QuestionList;
