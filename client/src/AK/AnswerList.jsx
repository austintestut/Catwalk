import React from 'react';

const AnswerList = ({ answers }) => {
  answers.sort((a, b) => b.helpfulness - a.helpfulness);
  const formattedAnswers = answers.map((ans) => (
    <div>
      <p>
        A: {ans.body}
      </p>
      <p>by {ans.answerer_name}, {ans.date.substring(0, 10)}
        <a>Helpful?</a>
        <a>Report</a>
      </p>
    </div>
  ));

  return (
    formattedAnswers.slice(0, 2)
  );
};

export default AnswerList;
