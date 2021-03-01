import React from 'react';

const AddQuestionButton = function({showModal}) {
  return (
    <button onClick={showModal}>Add Question</button>
  );
}

export default AddQuestionButton;