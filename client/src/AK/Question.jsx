import React from 'react';
import QuestionModal from './QuestionModal.jsx';

const Question = ({question}) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  <div>
    Q: {question.question_body}
    {/* A: {question.answers[0].body}
    A: {question.answers[1].body} */}
  </div>;

export default Question;
