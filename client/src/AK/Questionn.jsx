import React from 'react';
import AddAnswerButton from './Buttons/AddAnswerButton';
import AnswerModal from './AnswerModal';
import AnswerList from './AnswerList';
import axios from 'axios';
import styled from 'styled-components';

const QuestionDiv = styled.div`
display: flex;
justify-content: space-between;

`
const QButtonsDiv = styled.div`
fontSize: 12px;
`
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
class Questionn extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      showingAnsModal: false,
      QhelpfulCounter: 0,
      helped: false,
      maxedAnswers: false,
      answers: Object.keys(this.props.answers),
      question_id: this.props.question.question_id,
    }
    this.markQuestionHelpful = this.markQuestionHelpful.bind(this);
    this.renderHelpfulButton = this.renderHelpfulButton.bind(this);
    this.renderSeeMoreAnswersButton = this.renderSeeMoreAnswersButton.bind(this);
    this.handleSeeAnswersClick = this.handleSeeAnswersClick.bind(this);
    this.renderReportButton = this.renderReportButton.bind(this);
    this.reportQuestion = this.reportQuestion.bind(this);
  }
  showAnsModal() {
    this.setState({
      showingAnsModal: true,
    })
  }

  hideAnsModal() {
    this.setState({
      showingAnsModal: false,
    });
  }

  submitAnswer(event) {
    axios({
      url: `/questions/${this.props.question.question_id}/answers`,
      method: 'post',
      data: {
        body: event.target[0].value,
        name: event.target[1].value,
        email: event.target[2].value,
      }
    }).then((response)=>{
      event.target[0].value
    })
  }
  reportAnswer(id){
    axios({
      url: `/answers/${id}/report`,
      method: 'put'
    }).then((data)=>{
    })
  }
  markQuestionHelpful(){
    axios({
      url: `/questions/${this.props.question.question_id}/helpful`,
      method: 'put'
    }).then((data)=>{
      this.setState({QhelpfulCounter: 1, helped: true})
    })
  }
  renderHelpfulButton(){
    {if (this.state.helped) {
      return <a>Marked Helpful!</a>
    } else {
      return  <StyledButton onClick={this.markQuestionHelpful} > Yes ({this.props.question.question_helpfulness + this.state.QhelpfulCounter})</StyledButton>
    }}
  }
  renderReportButton(){
    if (this.state.reported){
      return <a>Marked as Reported</a>
    } else {
      return <StyledButton onClick={this.reportQuestion}> Report</StyledButton>
    }
  }
  reportQuestion(){
    let id = this.state.question_id
    axios({
      url: `/questions/${id}/report`,
      method: 'put'
    }).then((data)=>{
      this.setState({reported: true})
    })
  }
  renderSeeMoreAnswersButton(){
    if (this.state.maxedAnswers){
      return <button onClick={this.handleSeeAnswersClick}>Collapse Answers</button>

    } else if (this.state.answers.length > 2) {
      return <button onClick={this.handleSeeAnswersClick}>See More Answers</button>
    }
  }
  handleSeeAnswersClick(){
    this.setState((prevState)=>({maxedAnswers: !(prevState.maxedAnswers)}))
  }
  render(){
    let myAnswers = [];
    for (const [key, value] of Object.entries(this.props.answers)) {
    myAnswers.push(value);
  }
    return (
      <div style={{'width': '100%'}}>
        <QuestionDiv>
        <div style={{'fontWeight': 'bold', 'fontSize': '18px', 'width': '50%'}}>Q: {this.props.question.question_body}</div>
        <div style={{'fontSize': '12px'}}>
          Helpful?
          {this.renderHelpfulButton()}
          {this.renderReportButton()}
        <AddAnswerButton showAnsModal={this.showAnsModal.bind(this)} /></div>
        </QuestionDiv>
        <AnswerModal hide={this.hideAnsModal.bind(this)}showing={this.state.showingAnsModal}submitAnswer={this.submitAnswer.bind(this)}/>
        <AnswerList answers={myAnswers}increaseHelpful={this.props.increaseHelpful}reportAnswer={this.reportAnswer.bind(this)}maxed={this.state.maxedAnswers}/>
        {this.renderSeeMoreAnswersButton()}
      </div>
    )
  }
}



export default Questionn;
