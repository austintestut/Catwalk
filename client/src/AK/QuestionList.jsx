import React from 'react';
import Question from './Question';

const QuestionList = function ({questions}) {
  return (
    <div>
      Question List:
      {questions.map(question => <Question question={question}key={question.question_id} />)}
    </div>
  );
};

export default QuestionList;
