import React from 'react';
import QuestionList from './QuestionList';
import QuestionModal from './QuestionModal';
import AddQuestionButton from './AddQuestionButton';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.submitQuestion = this.submitQuestion.bind(this);
  }

  showModal() {
    this.setState({
      show: true,
    });
  }
  hideModal() {
    this.setState({
      show: false
    })
  }

  submitQuestion(event) {
    event.preventDefault();

    //do somethin
  }

  render() {
    return (
      <div>
        <QuestionList />
        <AddQuestionButton showModal={this.showModal} />
        <QuestionModal show={this.state.show} hideModal={this.hideModal} submitQuestion={this.submitQuestion} />
      </div>
    );
  }
}

export default Container;
