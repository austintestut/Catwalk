import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import AddAnswerButton from './Buttons/AddAnswerButton';
import AnswerModal from './AnswerModal';
import AnswerList from './AnswerList';

const QuestionDiv = styled.div`
display: flex;
justify-content: space-between;
font-family: Lucida Sans, Helvetica, Arial, sans-serif;
padding-top: 15px;

`;
const RedButton = styled.button`
color: white;
background-image: linear-gradient(#ff0019, #790a04);
&:hover {
  cursor: pointer;
}
`

const StyledButton = styled.button`
margin-left: 8px;
text-decoration: underline;
background: none;
border: none;
color: grey;
&:hover {
  font-weight: bold;
  cursor: pointer;
}
`;
class Questionn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingAnsModal: false,
      QhelpfulCounter: 0,
      helped: false,
      maxedAnswers: false,
      answers: Object.keys(this.props.answers),
      question_id: this.props.question.question_id,
    };
    this.markQuestionHelpful = this.markQuestionHelpful.bind(this);
    this.renderHelpfulButton = this.renderHelpfulButton.bind(this);
    this.renderSeeMoreAnswersButton = this.renderSeeMoreAnswersButton.bind(this);
    this.handleSeeAnswersClick = this.handleSeeAnswersClick.bind(this);
    this.renderReportButton = this.renderReportButton.bind(this);
    this.reportQuestion = this.reportQuestion.bind(this);
    this.submitAnswer = this.submitAnswer.bind(this);
    this.reportAnswer = this.reportAnswer.bind(this);
    this.showAnsModal = this.showAnsModal.bind(this);
    this.hideAnsModal = this.hideAnsModal.bind(this);
  }

  showAnsModal() {
    this.setState({
      showingAnsModal: true,
    });
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
      },
    });
  }

  reportAnswer(id) {
    axios({
      url: `/answers/${id}/report`,
      method: 'put',
    });
  }

  markQuestionHelpful() {
    axios({
      url: `/questions/${this.props.question.question_id}/helpful`,
      method: 'put',
    }).then(() => {
      this.setState({ QhelpfulCounter: 1, helped: true });
    });
  }

  renderHelpfulButton() {
    if (this.state.helped) {
      return (<StyledButton disabled> Thank you for your feedback! ({this.props.question.question_helpfulness + 1})</StyledButton>)
    }
    return (<StyledButton onClick={this.markQuestionHelpful}> Yes ({this.props.question.question_helpfulness + this.state.QhelpfulCounter})</StyledButton>)
  }

  renderReportButton() {
    if (this.state.reported) {
      return (<StyledButton style={{color: 'red'}}> Reported</StyledButton>)
    }
    return <StyledButton onClick={this.reportQuestion}> Report</StyledButton>;
  }

  reportQuestion() {
    const id = this.state.question_id;
    axios({
      url: `/questions/${id}/report`,
      method: 'put',
    }).then(() => {
      this.setState({ reported: true });
    });
  }

  renderSeeMoreAnswersButton() {
    if (this.state.maxedAnswers) {
      return <RedButton onClick={this.handleSeeAnswersClick}>collapse answers</RedButton>;
    } if (this.state.answers.length > 2) {
      return <RedButton onClick={this.handleSeeAnswersClick}>see more answers</RedButton>;
    }
  }

  handleSeeAnswersClick() {
    this.setState((prevState) => ({ maxedAnswers: !(prevState.maxedAnswers) }));
  }

  render() {
    const myAnswers = [];
    for (const [key, value] of Object.entries(this.props.answers)) {
      myAnswers.push(value);
    }
    return (
      <div style={{ width: '100%' }}>
        <QuestionDiv>
          <div style={{fontWeight: '600', fontSize: '16px', width: '50%'}}>Q: {this.props.question.question_body}
          </div>
          <div style={{ fontSize: '14px', color: 'grey'}}>
            Helpful?
            {this.renderHelpfulButton()}
            {this.renderReportButton()}
            <AddAnswerButton showAnsModal={this.showAnsModal} />
          </div>
        </QuestionDiv>
        <AnswerModal
          hide={this.hideAnsModal}
          showing={this.state.showingAnsModal}
          submitAnswer={this.submitAnswer}
        />
        <AnswerList
          answers={myAnswers}
          increaseHelpful={this.props.increaseHelpful}
          reportAnswer={this.reportAnswer}
          maxed={this.state.maxedAnswers}
        />
        {this.renderSeeMoreAnswersButton()}
      </div>
    );
  }
}

export default Questionn;
