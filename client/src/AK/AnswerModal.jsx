import React from 'react';

const AnswerModal = function ({ showing, hide, submitAnswer }) {
  if (!showing) {
    return null;
  }
  return (
    <form onSubmit={submitAnswer}>
      <p>Your Answer</p>
      <input maxLength="1000" />
      <p>What is your nickname?</p>
      <input placeholder="Example: jackson11!" maxLength="60" />
      <p>(For privacy reasons, do not use your full name or email address)</p>
      <p>Send us an email!</p>
      <input placeholder="Example: jack@email.com" maxLength="60" />
      <p>For authentication reasons only -  you will not be emailed</p>
      <p>Upload Your Photos:</p>
      <input type="file" accept="image/*" multiple></input>
      <button type="submit">Submit Your Answer</button>

      <button onClick={hide}>Hide</button>
    </form>
  );
};

export default AnswerModal;
