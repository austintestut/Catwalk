import React from 'react';

const AnswerModal = function ({ show, hide, submitQuestion }) {
  if (!show) {
    return null;
  }
  return (
    <form>
      <p>Your Answer</p>
      <input maxLength="1000" />
      <p>What is your nickname?</p>
      <input placeholder="Example: jackson11!" maxLength="60" />
      <p>(For privacy reasons, do not use your full name or email address)</p>
      <p>Send us an email!</p>
      <input placeholder="Example: jack@email.com" maxLength="60" />
      <p>For authentication reasons only -  you will not be emailed</p>
      <p>Upload Your Photos: (Put photo uploader functionality here)</p>
      <button type="submit" onClick={submitQuestion}>Submit Your Answer</button>

      <button onClick={hide}>Hide</button>
    </form>
  );
};

export default AnswerModal;
