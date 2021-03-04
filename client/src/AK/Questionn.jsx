import React from 'react';
import AddAnswerButton from './Buttons/AddAnswerButton';
import AnswerModal from './AnswerModal';
import AnswerList from './AnswerList';
import axios from 'axios';

class Questionn extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      showingAnsModal: false,
      QhelpfulCounter: 0,
      helped: false,
      maxedAnswers: false,
    }
    this.markQuestionHelpful = this.markQuestionHelpful.bind(this);
    this.renderHelpfulButton = this.renderHelpfulButton.bind(this);
    this.renderSeeMoreAnswersButton = this.renderSeeMoreAnswersButton.bind(this);
    this.handleSeeAnswersClick = this.handleSeeAnswersClick.bind(this);
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
      return  <button onClick={this.markQuestionHelpful} > Yes {this.props.question.question_helpfulness + this.state.QhelpfulCounter}</button>
    }}
  }
  renderSeeMoreAnswersButton(){
    if (this.state.maxedAnswers){
      return <button onClick={this.handleSeeAnswersClick}>Collapse Answers</button>

    } else {
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
      <div>
        Q: {this.props.question.question_body}
        <p>Helpful?</p>
        {/* <a onClick={this.markQuestionHelpful} > Yes {this.props.question.question_helpfulness + this.state.QhelpfulCounter}</a> */}
        {this.renderHelpfulButton()}
        <AddAnswerButton showAnsModal={this.showAnsModal.bind(this)} />
        <AnswerModal hide={this.hideAnsModal.bind(this)}showing={this.state.showingAnsModal}submitAnswer={this.submitAnswer.bind(this)}/>
        <AnswerList answers={myAnswers}increaseHelpful={this.props.increaseHelpful}reportAnswer={this.reportAnswer.bind(this)}maxed={this.state.maxedAnswers}/>
        {this.renderSeeMoreAnswersButton()}
      </div>
    )
  }
}



export default Questionn;
