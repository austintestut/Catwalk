import React from 'react';

const AddQuestionButton = function ({ showQModal }) {
  return (
    <button onClick={showQModal}>Add Question</button>
  );
};

export default AddQuestionButton;
