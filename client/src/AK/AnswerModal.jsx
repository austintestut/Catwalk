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
background-color: rgb(0,0,0);
background-color: rgba(0,0,0,0.4);
`
const ModalForm = styled.form`
background-color: #fefefe;
margin: 15% auto;
padding: 20px;
border: 1px solid #888;
width: 80%;

`
const AnswerModal = function ({ showing, hide, submitAnswer }) {
  if (!showing) {
    return null;
  }
  return (
    <ModalDiv>
      <ModalForm onSubmit={submitAnswer}>
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
    </ModalForm>
    </ModalDiv>

  );
};

export default AnswerModal;
