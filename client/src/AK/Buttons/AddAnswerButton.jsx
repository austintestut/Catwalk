import React from 'react';

const AddAnswerButton = function ({ showAnsModal }) {
  return (
    <button onClick={showAnsModal} type="button">Add Answer</button>
  );
};

export default AddAnswerButton;
