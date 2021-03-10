import React from 'react';
import styled from 'styled-components';

const ModalDiv = styled.div`
position: fixed;
z-index: 1;
left: 0;
top: 0;
width: 100%;
height: 100%;
overflow: auto;
background-color: rgba(128,128,128,0.5);
`;
const ModalForm = styled.form`
background-color: #fefefe;
margin: 15% auto;
padding: 20px;
border: 1px solid #888;
width: 80%;
`;

const QuestionModal = function ({ show, hideQModal, submitQuestion }) {
  if (!show) {
    return null;
  }
  return (
    <ModalDiv>
      <ModalForm onSubmit={submitQuestion}>
        <button style={{float: 'right'}}onClick={hideQModal}>X</button>
        <h2>Ask Your Question</h2>
        <h4>About (the product name here)</h4>
        <p>What is your question?</p>
        <input maxLength="1000" />
        <p>What is your nickname?</p>
        <input placeholder="Example: jackson11!" maxLength="60" />
        <p>(For privacy reasons, do not use your full name or email address)</p>
        <p>Send us an email!</p>
        <input placeholder="Why did you like the product or not?" maxLength="60" />
        <p>For authentication reasons only -  you will not be emailed</p>
        <button type="submit">Submit Your Question</button>


      </ModalForm>
    </ModalDiv>
  );
};

export default QuestionModal;
