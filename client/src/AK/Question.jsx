import React from 'react';
import QuestionModal from './QuestionModal.jsx';

const Question = ({question}) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  <div>
    Q: {question.question_body}
  </div>;

export default Question;
