import React from 'react';
import axios from 'axios';
import TOKEN from '../../../config';
import QuestionList from './QuestionList';
import QuestionModal from './QuestionModal';
import AddQuestionButton from './Buttons/AddQuestionButton';
import MoreAnsweredQuestionsButton from './Buttons/MoreAnsweredQuestionsButton';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showQ: false,
      showAns: false,
      questions: [],
      questionsToShow: 4,
      isMaxQuestions: false
    };
    this.showQModal = this.showQModal.bind(this);
    this.hideQModal = this.hideQModal.bind(this);
    this.showAnsModal = this.showAnsModal.bind(this);
    this.hideAnsModal = this.hideAnsModal.bind(this);
    this.submitQuestion = this.submitQuestion.bind(this);
    this.getProductQuestions = this.getProductQuestions.bind(this);
    this.showMoreQuestions = this.showMoreQuestions.bind(this);
  }

  componentDidMount() {
    this.getProductQuestions();
  }

  showMoreQuestions(){
    this.setState({ questionsToShow: this.state.questionsToShow += 2 });
    if ( this.state.questionsToShow > this.state.questions.length) {
      this.setState({isMaxQuestions: true})
  }
}

  showQModal() {
    this.setState({
      showQ: true,
    });
  }

  showAnsModal() {
    this.setState({
      showAns: true,
    });
    console.log('state set: shown ans modal');
  }

  hideQModal() {
    this.setState({
      showQ: false,
    });
  }

  hideAnsModal() {
    this.setState({
      showAns: false,
    });
  }

  submitQuestion(event) {
    event.preventDefault();

    // do somethin
  }

  getProductQuestions() {
    // will need to change the ID parameter below to be dynamic, maybe use params obj
    axios({
      headers: {
        Authorization: TOKEN,
      },
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions?product_id=17761',
      method: 'get',
    })
      .then((data) => {
        this.setState({ questions: data.data.results });
        console.log(data.data.results);
      });
  }

  render() {
    return (
      <div>
        <QuestionList questions={this.state.questions}showAns={this.showAnsModal} hide={this.hideAnsModal} show={this.state.showAns}howMany={this.state.questionsToShow} />

        <MoreAnsweredQuestionsButton showMoreQuestions={this.showMoreQuestions} isMaxQuestions={this.state.isMaxQuestions}/>

         <AddQuestionButton showQModal={this.showQModal} />

        <QuestionModal show={this.state.showQ} hideQModal={this.hideQModal} submitQuestion={this.submitQuestion} />
      </div>
    );
  }
}

export default Container;
