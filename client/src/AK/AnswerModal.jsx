import React from 'react';
import styled from 'styled-components';

const ModalDiv = styled.div`
display: flex;
align-items: center;
justify-content: center;
position: fixed;
z-index: 100;
left: 0;
top: 0;
width: 100vw;
height: 100vh;
/* overflow: auto; */
background-color: rgba(128,128,128,0.5);
backdrop-filter: blur(5px);
`;
const ModalForm = styled.form`
position: fixed;
display: flex;
flex-direction: column;
background-color: #fefefe;
padding: 20px 50px;
border: 2px solid gray;
`;

const ModalInput = styled.input`
margin: 5px;
width: 100%;
&:focus{
  outline: bold;
  outline-color: black;
}
`;

const ModalQInput = styled.textarea`
height: 110px;
font-size: 16px;
&:focus{
  outline: bold;
  outline-color: black;
}
`;
const XButton = styled.i`
width: 50px;
align-self: flex-end;
text-shadow: 0 0 1px #000;
color: white;
&:hover{
  cursor: pointer;
}
`;

const AnswerModal = function ({ showing, hide, submitAnswer, productName, questionBody }) {
  if (!showing) {
    return null;
  }
  return (
    <ModalDiv>
      <ModalForm onSubmit={submitAnswer}>
        <XButton className="fas fa-times fa-lg" style={{ float: 'right' }} onClick={hide} />
        <h2 style={{ alignSelf: 'center' }}>Your Answer</h2>
        <h4 style={{ alignSelf: 'center' }}>About {productName}</h4>
        <ModalQInput maxLength="1000" />
        <p style={{ fontSize: '20px', alignSelf: 'center' }}> What is your nickname?</p>
        <ModalInput placeholder="Example: jackson11!" maxLength="60" />
        <p style={{ color: 'gray' }}>For privacy reasons, do not use your full name or email address</p>
        <p style={{ fontSize: '20px', alignSelf: 'center' }}>Send us an email!</p>
        <ModalInput placeholder="Example: jack@email.com" maxLength="60" />
        <p style={{ color: 'gray' }}>For authentication reasons only - you will not be emailed</p>
        {/* <p style={{fontSize: '25px', alignSelf: 'center'}}>Upload Your Photos:</p>
        <ModalInput type="file" accept="image/*" multiple /> */}
        <button type="submit">Submit Your Answer</button>

      </ModalForm>
    </ModalDiv>

  );
};

export default AnswerModal;
