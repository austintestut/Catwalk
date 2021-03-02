import React from 'react';

const MoreAnsweredQuestionsButton = function({ showMoreQuestions, isMaxQuestions }) {
  if (!isMaxQuestions) {
    return (
    <button onClick={showMoreQuestions}>Show More Questions</button>
  )
  }
  return(
    <div></div>
  )

}

export default MoreAnsweredQuestionsButton;
