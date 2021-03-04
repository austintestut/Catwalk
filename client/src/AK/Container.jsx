import React from 'react';
import axios from 'axios';
import TOKEN from '../../../config';
import QuestionList from './QuestionList';
import QuestionModal from './QuestionModal';
import AddQuestionButton from './Buttons/AddQuestionButton';
import ShowMoreQuestionsButton from './Buttons/ShowMoreQuestionsButton';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showQ: false,
      // showAns: false,
      questions: [],
      questionsToShow: 4,
      isMaxQuestions: false,
      currentProductID: 17762,
    };
    this.showQModal = this.showQModal.bind(this);
    this.hideQModal = this.hideQModal.bind(this);
    // this.showAnsModal = this.showAnsModal.bind(this);
    // this.hideAnsModal = this.hideAnsModal.bind(this);
    this.submitQuestion = this.submitQuestion.bind(this);
    this.getProductQuestions = this.getProductQuestions.bind(this);
    this.showMoreQuestions = this.showMoreQuestions.bind(this);
    this.increaseHelpful = this.increaseHelpful.bind(this);
    // this.reportAnswer = this.reportAnswer.bind(this);
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

  // showAnsModal() {
  //   this.setState({
  //     showAns: true,
  //   });
  //   console.log('state set: shown ans modal');
  // }

  hideQModal() {
    this.setState({
      showQ: false,
    });
  }

  // hideAnsModal() {
  //   this.setState({
  //     showAns: false,
  //   });
  // }

  submitQuestion(event) {
    console.log('submitting')
    let ID = 17762;
    event.preventDefault();
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
      console.log(response.data);
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
    console.log('calling Increase Helpful on: ', id);
    axios({
      url: `/answers/${id}`,
      method: 'put'
    }).then((data)=>{
      console.log(data)
    })
  }
  // reportAnswer(event){
  //   console.log('calling Report Answer')
  // }

  render() {
    return (
      <div>
        <QuestionList questions={this.state.questions}showAns={this.showAnsModal} howMany={this.state.questionsToShow}increaseHelpful={this.increaseHelpful}/>

        <ShowMoreQuestionsButton showMoreQuestions={this.showMoreQuestions} isMaxQuestions={this.state.isMaxQuestions}/>

         <AddQuestionButton showQModal={this.showQModal} />

        <QuestionModal show={this.state.showQ} hideQModal={this.hideQModal} submitQuestion={this.submitQuestion} />
      </div>
    );
  }
}

export default Container;
