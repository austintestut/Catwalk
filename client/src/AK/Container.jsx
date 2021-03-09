import React from 'react';
import axios from 'axios';
import QuestionList from './QuestionList';
import QuestionModal from './QuestionModal';
import AddQuestionButton from './AddQuestionButton';


class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showQ: false,
      showAns: false,
      questions: [],
    };
    this.showQModal = this.showQModal.bind(this);
    this.hideQModal = this.hideQModal.bind(this);
    this.showAnsModal = this.showAnsModal.bind(this);
    this.hideAnsModal = this.hideAnsModal.bind(this);
    this.submitQuestion = this.submitQuestion.bind(this);
    this.getProductQuestions = this.getProductQuestions.bind(this);
  }

  componentDidMount() {
    this.getProductQuestions();
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
    // console.log('state set: shown ans modal');
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
        // console.log(data.data.results);
      })
      .then(() => {
        axios({
          headers: {
            Authorization: TOKEN,
          },
          url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/111326/answers',
          method: 'get',
        }).then((data) => {
          // console.log(data.data);
        });
      });
  }

  render() {
    return (
      <div>
        <QuestionList questions={this.state.questions} showAns={this.showAnsModal} hide={this.hideAnsModal} show={this.state.showAns} />
        <AddQuestionButton showQModal={this.showQModal} />
        <QuestionModal show={this.state.showQ} hideQModal={this.hideQModal} submitQuestion={this.submitQuestion} />
      </div>
    );
  }
}

export default Container;
