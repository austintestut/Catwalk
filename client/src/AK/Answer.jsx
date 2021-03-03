import React from 'react';

const Answer = ({ans}) => {
  return (
    <div>
      <p>
        A: {ans.body}
      </p>
      <p>by {ans.answerer_name}, {ans.date.substring(0, 10)}
        <a>Helpful?</a>
        <a>Report</a>
      </p>
    </div>
  )
}

export default Answer;