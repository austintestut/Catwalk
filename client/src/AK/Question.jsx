import React from 'react';
import AddAnswerButton from './Buttons/AddAnswerButton';
import AnswerModal from './AnswerModal';
import AnswerList from './AnswerList';

const Question = function ({ question, showAns, hide, show, answers
}) {
  let myAnswers = [];
  for (const [key, value] of Object.entries(answers)) {
    myAnswers.push(value);
  }
  return (
  <div>
    Q: {question.question_body}
    <AddAnswerButton showAns={showAns} />
    <AnswerModal hide={hide}show={show}/>
    <AnswerList answers={myAnswers} />
  </div>
)
}



export default Question;
