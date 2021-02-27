import React from 'react';

const QuestionModal = function ({ show, hideModal, submitQuestion }) {
  if (!show) {
    return null;
  }
  return (
    <form>
      <p>What is your question?</p>
      <input maxLength="1000" />
      <p>What is your nickname?</p>
      <input placeholder="Example: jackson11!" maxLength="60" />
      <p>(For privacy reasons, do not use your full name or email address)</p>
      <p>Send us an email!</p>
      <input placeholder="Why did you like the product or not?" maxLength="60" />
      <p>For authentication reasons only -  you will not be emailed</p>
      <button type="submit" onClick={submitQuestion}>Submit Your Question</button>

      <button onClick={hideModal}>Hide</button>
    </form>
  );
};

export default QuestionModal;
