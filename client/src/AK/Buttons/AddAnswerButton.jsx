import React from 'react';

const AddAnswerButton = function ({ showAns }) {
  return (
    <button onClick={showAns} type="button">Add Answer</button>
  );
};

export default AddAnswerButton;
