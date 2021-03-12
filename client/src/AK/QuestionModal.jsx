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
color: black;
display: flex;
flex-direction: column;
background-color: #fefefe;
margin: 15% auto;
padding: 20px;
border: 2px solid gray;
width: 80%;
`;
const XButton = styled.button`
width: 50px;
align-self: flex-end;
`

const QuestionModal = function ({ show, hideQModal, submitQuestion, productName }) {
  if (!show) {
    return null;
  }
  return (
    <ModalDiv>
      <ModalForm onSubmit={submitQuestion}>
        <XButton style={{float: 'right', justifyContent: 'flex-end'}}onClick={hideQModal}>X</XButton>
        <h2 style={{alignSelf: 'center' }}>Ask Your Question:</h2>
        <h4 style={{alignSelf: 'center' }}>About {productName}</h4>
        <p style={{fontSize: '25px', alignSelf: 'center'}}>What is your question?</p>
        <textarea style={{height: '150px'}}maxLength="1000" />
        <p style={{fontSize: '25px', alignSelf: 'center'}}>What is your nickname?</p>
        <input placeholder="Example: jackson11!" maxLength="60" />
        <p>(For privacy reasons, do not use your full name or email address)</p>
        <p style={{fontSize: '25px', alignSelf: 'center'}}>Send us an email!</p>
        <input placeholder="Why did you like the product or not?" maxLength="60" />
        <p>For authentication reasons only -  you will not be emailed</p>
        <button type="submit">Submit Your Question</button>


      </ModalForm>
    </ModalDiv>
  );
};

export default QuestionModal;
