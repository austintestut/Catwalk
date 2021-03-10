import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import QuestionList from './QuestionList';
import QuestionModal from './QuestionModal';
import AddQuestionButton from './Buttons/AddQuestionButton';
import ShowMoreQuestionsButton from './Buttons/ShowMoreQuestionsButton';
import SearchBar from './SearchBar';

const ContainerDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
flex-wrap: wrap;
margin: auto;
margin-bottom: 50px;
width: 90%;
max-height: 90vh;
overflow-y: auto;
border: 1px gray solid;
border-radius: 4px;
padding: 10px;
`;

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showQ: false,
      questions: [],
      questionsToShow: 4,
      isMaxQuestions: false,
      currentProductID: 17762,
      displayedQuestions: [],
      searching: false,
    };
    this.showQModal = this.showQModal.bind(this);
    this.hideQModal = this.hideQModal.bind(this);
    this.submitQuestion = this.submitQuestion.bind(this);
    this.getProductQuestions = this.getProductQuestions.bind(this);
    this.showMoreQuestions = this.showMoreQuestions.bind(this);
    this.increaseHelpful = this.increaseHelpful.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.displaySearchQuestions = this.displaySearchQuestions.bind(this);
  }

  componentDidMount() {
    this.getProductQuestions();
  }

  handleSearch(e) {
    if (e.target.value.length > 2) {
      this.setState({
        searching: true,
        displayedQuestions: this.displaySearchQuestions(e.target.value) });
    } else {
      this.setState({ searching: false });
    }
  }

  getProductQuestions() {
    // will need to change the ID parameter below to be dynamic, maybe use params obj
    const ID = 17762;
    axios({
      url: `/questions/${ID}`,
      method: 'get',
    })
      .then((data) => {
        this.setState({ questions: data.data.results });
        console.log(data.data.results);
      });
  }

  displaySearchQuestions(text) {
    const filtered = this.state.questions.filter(
      (question) => question.question_body.includes(text),
    );
    return filtered;
  }

  increaseHelpful(id) {
    axios({
      url: `/answers/${id}`,
      method: 'put',
    });
  }

  showMoreQuestions() {
    this.setState({ questionsToShow: this.state.questionsToShow += 2 });
    if (this.state.questionsToShow > this.state.questions.length) {
      this.setState({ isMaxQuestions: true });
    }
  }

  showQModal() {
    this.setState({
      showQ: true,
    });
  }

  hideQModal() {
    this.setState({
      showQ: false,
    });
  }

  submitQuestion(event) {
    event.preventDefault();
    console.log('submitting question')
    const ID = 17762;
    axios({
      url: `/questions/${ID}`,
      method: 'post',
      data: {
        body: event.target[0].value,
        name: event.target[1].value,
        email: event.target[2].value,
        product_id: ID,
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
      <ContainerDiv>
        <SearchBar handleSearch={this.handleSearch} />
        <QuestionList
          questions={this.state.questions}
          showAns={this.showAnsModal}
          howMany={this.state.questionsToShow}
          increaseHelpful={this.increaseHelpful}
          searching={this.state.searching}
          displayedQuestions={this.state.displayedQuestions}
        />

        <ShowMoreQuestionsButton
          showMoreQuestions={this.showMoreQuestions}
          isMaxQuestions={this.state.isMaxQuestions}
        />

        <AddQuestionButton showQModal={this.showQModal} />

        <QuestionModal
          show={this.state.showQ}
          hideQModal={this.hideQModal}
          submitQuestion={this.submitQuestion}
        />
      </ContainerDiv>
    );
  }
}

export default Container;
