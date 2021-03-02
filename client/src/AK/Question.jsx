import React from 'react';
import AddAnswerButton from './AddAnswerButton';
import AnswerModal from './AnswerModal';

const Question = ({ question, showAns, hide, show
}) =>
  <div>
    Q: {question.question_body}
    <AddAnswerButton showAns={showAns}/>
    <AnswerModal hide={hide}show={show}/>
  </div>;

export default Question;
