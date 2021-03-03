import React from 'react';
import Answer from './Answer';

const AnswerList = ({ answers }) => {
  answers.sort((a, b) => b.helpfulness - a.helpfulness);

  return (
    <div>
      {answers.slice(0, 2).map((ans)=> <Answer ans={ans}/>)}
    </div>

  );
};

export default AnswerList;
