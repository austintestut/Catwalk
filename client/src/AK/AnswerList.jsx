import React from 'react';
import Answer from './Answer';

const AnswerList = ({ answers, increaseHelpful, reportAnswer, maxed }) => {
  answers.sort((a, b) => b.helpfulness - a.helpfulness);
  let shown = answers.slice(0,2)
  if (maxed) {
    shown = answers
  }

  return (
    <div>
      {shown.map((ans)=> <Answer ans={ans}increaseHelpful={increaseHelpful}reportAnswer={reportAnswer} key={ans.id}/>)}
    </div>

  );
};

export default AnswerList;
