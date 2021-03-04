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
      helped: false
    }
    this.markQuestionHelpful = this.markQuestionHelpful.bind(this);
    this.renderHelpfulButton = this.renderHelpfulButton.bind(this);
  }
  showAnsModal() {
    this.setState({
      showingAnsModal: true,
    });
    console.log('state set: shown ans modal');
  }

  hideAnsModal() {
    this.setState({
      showingAnsModal: false,
    });
  }

  submitAnswer(event) {
    event.preventDefault();
    axios({
      url: `/questions/${this.props.question.question_id}/answers`,
      method: 'post',
      data: {
        body: event.target[0].value,
        name: event.target[1].value,
        email: event.target[2].value,
      }
    }).then((response)=>{
    })
  }
  reportAnswer(id){
    console.log('calling Report Answer on answer:', id)
    axios({
      url: `/answers/${id}/report`,
      method: 'put'
    }).then((data)=>{
      console.log(data)
    })
  }
  markQuestionHelpful(){
    axios({
      url: `/questions/${this.props.question.question_id}/helpful`,
      method: 'put'
    }).then((data)=>{
      console.log(data)
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
        <AnswerList answers={myAnswers}increaseHelpful={this.props.increaseHelpful}reportAnswer={this.reportAnswer.bind(this)} />
      </div>
    )
  }
}



export default Questionn;
