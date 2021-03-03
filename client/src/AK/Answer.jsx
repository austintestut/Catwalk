import React from 'react';

const Answer = ({ans, increaseHelpful, reportAnswer }) => {
  return (
    <div>
      <p>
        A: {ans.body}
      </p>
      <p>by {ans.answerer_name}, {ans.date.substring(0, 10)}
        <a onClick={increaseHelpful}>Helpful?</a>
        <a onClick={reportAnswer}>Report</a>
      </p>
    </div>
  )
}

export default Answer;