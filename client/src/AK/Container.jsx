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

const ButtonsDiv = styled.div`
display: flex;
margin-top: 30px;
width: 100%;
height: 50px;

`;

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showQ: false,
      questionsToShow: 4,
      isMaxQuestions: false,
      displayedQuestions: [],
      searching: false,
    };
    this.showQModal = this.showQModal.bind(this);
    this.hideQModal = this.hideQModal.bind(this);
    this.submitQuestion = this.submitQuestion.bind(this);
    // this.getProductQuestions = this.getProductQuestions.bind(this);
    this.showMoreQuestions = this.showMoreQuestions.bind(this);
    this.increaseHelpful = this.increaseHelpful.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.displaySearchQuestions = this.displaySearchQuestions.bind(this);
  }

  componentDidMount() {
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

  // getProductQuestions() {
  //   console.log(this.props.currentPageItemID)
  //   // will need to change the ID parameter below to be dynamic, maybe use params obj
  //   axios({
  //     url: `/questions/${this.props.currentPageItemID}`,
  //     method: 'get',
  //   })
  //     .then((data) => {
  //       console.log(data.data.results);
  //       this.setState({ questions: data.data.results });
  //     });
  // }

  displaySearchQuestions(text) {
    const filtered = this.props.questions.filter(
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
    if (this.state.questionsToShow >= this.props.questions.length) {
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
    axios({
      url: `/questions/${this.props.currentPageItemId}`,
      method: 'post',
      data: {
        body: event.target[0].value,
        name: event.target[1].value,
        email: event.target[2].value,
        product_id: this.props.currentPageItemId,
      },
    }).then(() => {
      axios({
        url: `/questions/${this.props.currentPageItemId}`,
        method: 'get',
      }).then((data) => {
        this.setState({ questions: data.data.results, showQ: false });
      });
    }).catch((error) => { console.error(error); });
  }

  render() {
    return (
      <ContainerDiv>
        <SearchBar handleSearch={this.handleSearch} />
        <QuestionList
          questions={this.props.questions}
          showAns={this.showAnsModal}
          howMany={this.state.questionsToShow}
          increaseHelpful={this.increaseHelpful}
          searching={this.state.searching}
          displayedQuestions={this.state.displayedQuestions}
          productName={this.props.productName}
        />
        <ButtonsDiv>
          <ShowMoreQuestionsButton
            showMoreQuestions={this.showMoreQuestions}
            isMaxQuestions={this.state.isMaxQuestions}
          />

          <AddQuestionButton showQModal={this.showQModal} />
        </ButtonsDiv>

        <QuestionModal
          show={this.state.showQ}
          hideQModal={this.hideQModal}
          submitQuestion={this.submitQuestion}
          productName={this.props.productName}
        />
      </ContainerDiv>
    );
  }
}

export default Container;
