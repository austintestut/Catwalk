import React from 'react';
import axios from 'axios';
import TOKEN from '../../../config';
import QuestionList from './QuestionList';
import QuestionModal from './QuestionModal';
import AddQuestionButton from './Buttons/AddQuestionButton';
import ShowMoreQuestionsButton from './Buttons/ShowMoreQuestionsButton';
import SearchBar from './SearchBar';
import styled from 'styled-components';

const ContainerDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
flex-wrap: wrap;
margin: auto;
border: 1px solid;
width: 50%;
`

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showQ: false,
      questions: [],
      questionsToShow: 4,
      isMaxQuestions: false,
      currentProductID: 17762,
      searchText: '',
      displayedQuestions: [],
      searching: false
    };
    this.showQModal = this.showQModal.bind(this);
    this.hideQModal = this.hideQModal.bind(this);
    this.submitQuestion = this.submitQuestion.bind(this);
    this.getProductQuestions = this.getProductQuestions.bind(this);
    this.showMoreQuestions = this.showMoreQuestions.bind(this);
    this.increaseHelpful = this.increaseHelpful.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.displaySearchQuestions = this.displaySearchQuestions.bind(this)
  }

  componentDidMount() {
    this.getProductQuestions();
  }

  showMoreQuestions(){
    this.setState({ questionsToShow: this.state.questionsToShow += 2 });
    if ( this.state.questionsToShow > this.state.questions.length) {
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
    let ID = 17762;
    axios({
      url: `/questions/${ID}`,
      method: 'post',
      data: {
        body: event.target[0].value,
        name: event.target[1].value,
        email: event.target[2].value,
        product_id: ID,
      }
    }).then((response)=>{
    })

  }

  getProductQuestions() {
    // will need to change the ID parameter below to be dynamic, maybe use params obj
    let ID = 17762;
    axios({
      url: `/questions/${ID}`,
      method: 'get',
    })
      .then((data) => {
        this.setState({ questions: data.data.results });
        console.log(data.data.results);
      });
  }
  increaseHelpful(id){
    axios({
      url: `/answers/${id}`,
      method: 'put'
    }).then((data)=>{

    })
  }
  handleSearch(e){
    if(e.target.value.length > 2) {
      this.setState({searchText: e.target.value, searching: true, displayedQuestions: this.displaySearchQuestions(e.target.value)})

  } else {
    this.setState({searching: false})
  }
    }

  displaySearchQuestions(text){
    let filtered = this.state.questions.filter((question)=>question.question_body.includes(text));
    return filtered

  }


  render() {
    return (
      <ContainerDiv>
        <SearchBar handleSearch={this.handleSearch}/>
        <QuestionList questions={this.state.questions}showAns={this.showAnsModal} howMany={this.state.questionsToShow}increaseHelpful={this.increaseHelpful}searching={this.state.searching} displayedQuestions={this.state.displayedQuestions}/>

        <ShowMoreQuestionsButton showMoreQuestions={this.showMoreQuestions} isMaxQuestions={this.state.isMaxQuestions}/>

         <AddQuestionButton showQModal={this.showQModal} />

        <QuestionModal show={this.state.showQ} hideQModal={this.hideQModal} submitQuestion={this.submitQuestion} />
      </ContainerDiv>
    );
  }
}

export default Container;
