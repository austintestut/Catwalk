import React from 'react';

const Answer = ({ans, increaseHelpful, reportAnswer }) => {
  return (
    <div>
      <p>
        A: {ans.body}
      </p>
      <p>by {ans.answerer_name}, {ans.date.substring(0, 10)}
        <a onClick={function(){
          increaseHelpful(ans.id);
        }}>Helpful? {ans.helpfulness}</a>
        <a onClick={function(){reportAnswer(ans.id)}}> Report</a>
      </p>
    </div>
  )
}

export default Answer;