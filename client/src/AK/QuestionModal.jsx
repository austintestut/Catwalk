import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
z-index: 1;
font-family: sans-serif;
font-size: 1.3rem;
border: solid;
display: grid;
grid-template-columns: repeat(5, 20%)
`;

const P = styled.p`
`

const QuestionModal = function ({ show, hideQModal, submitQuestion }) {
  if (!show) {
    return null;
  }
    return (
      <div>
      <Form>
        <P>What is your question?</P>
        <input maxLength="1000" />
        <p>What is your nickname?</p>
        <input placeholder="Example: jackson11!" maxLength="60" />
        <p>(For privacy reasons, do not use your full name or email address)</p>
        <p>Send us an email!</p>
        <input placeholder="Why did you like the product or not?" maxLength="60" />
        <p>For authentication reasons only -  you will not be emailed</p>
        <button type="submit" onClick={submitQuestion}>Submit Your Question</button>

        <button onClick={hideQModal}>Hide</button>
      </Form>
      </div>
    );
  };

  export default QuestionModal;

