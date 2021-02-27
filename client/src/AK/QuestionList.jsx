import React from 'react';
import Question from './Question';

class QuestionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        Question List:
        <Question />
      </div>
    );
  }
}

export default QuestionList;
