import React from 'react';
import axios from 'axios';
import QuestionList from './QuestionList';
import QuestionModal from './QuestionModal';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      questions: [],
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.submitQuestion = this.submitQuestion.bind(this);
    this.getProductQuestions = this.getProductQuestions.bind(this);
  }

  componentDidMount() {
    this.getProductQuestions();
  }

  showModal() {
    this.setState({
      show: true,
    });
  }

  hideModal() {
    this.setState({
      show: false,
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
        Authorization: '1a0d4ed62459d133f7d51d2b376bd89639976abb',
      },
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions?product_id=17761',
      method: 'get',
    })
      .then((data) => {
        console.log('got this far')
        this.setState({ questions: data.data.results });
        console.log(data.data.results);
      });
  }

  render() {
    return (
      <div>
        <QuestionList questions={this.state.questions} />
        <AddQuestionButton showModal={this.showModal} />
        <QuestionModal show={this.state.show} hideModal={this.hideModal} submitQuestion={this.submitQuestion} />
      </div>
    );
  }
}

export default Container;
