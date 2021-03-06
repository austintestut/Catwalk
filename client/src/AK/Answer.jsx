import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const StyledButton = styled.button`
margin-left: 10px;
text-decoration: underline;
background: none;
border: none;
&:hover {
  font-weight: bold;
  cursor: pointer;
}
`
const AnswerDiv = styled.div`
display: flex;
justify-content: space-between;
`
const AnswerButtonsDiv = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
margin-bottom: 35px;

`

class Answer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      helped: false,
      reported: false
    }
    this.increaseHelpful = this.increaseHelpful.bind(this);
    this.reportAnswer = this.reportAnswer.bind(this);
    this.renderReportButton = this.renderReportButton.bind(this);
  }
  increaseHelpful(){
    let id = this.props.ans.id
    axios({
      url: `/answers/${id}`,
      method: 'put'
    }).then((data)=>{
      this.setState({helped: true})
    })
  }
  renderHelpfulButton(){
    if (this.state.helped){
      return <a>Marked Helpful!</a>
    } else {
      return (
        <>
      <StyledButton onClick={this.increaseHelpful}>Yes ({this.props.ans.helpfulness})</StyledButton>
      </>
      )
    }
  }
  reportAnswer(){
    let id = this.props.ans.id
    console.log('calling Report Answer on answer:', id)
    axios({
      url: `/answers/${id}/report`,
      method: 'put'
    }).then((data)=>{
      this.setState({reported: true})
    })
  }
  renderReportButton(){
    if (this.state.reported){
      return <a>Marked as Reported</a>
    } else {
      return <StyledButton onClick={this.reportAnswer}> Report</StyledButton>
    }
  }
  render(){
    return (
    <AnswerDiv>
      <div>
        <p>
        A: {this.props.ans.body}
      </p>
      <p style={{'fontSize': '14px'}}>by {this.props.ans.answerer_name}, {this.props.ans.date.substring(0, 10)}
         </p>
      </div>
      <AnswerButtonsDiv>
        <div style={{'fontSize': '12px'}}>Helpful?</div>
       {this.renderHelpfulButton()}
      {this.renderReportButton()}
      </AnswerButtonsDiv>
    </AnswerDiv>
  )
  }

}

export default Answer;