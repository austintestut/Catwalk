import React from 'react';
import axios from 'axios';

class Answer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      helped: false,
      reported: false
    }
    this.increaseHelpful = this.increaseHelpful.bind(this);
    this.reportAnswer = this.reportAnswer.bind(this);
    this.renderReportButton = this.renderReportButton.bind(this);
  }
  increaseHelpful(){
    let id = this.props.ans.id
    console.log('calling Increase Helpful on: ', id);
    axios({
      url: `/answers/${id}`,
      method: 'put'
    }).then((data)=>{
      console.log(data)
      this.setState({helped: true})
    })
  }
  renderHelpfulButton(){
    if (this.state.helped){
      return <a>Marked Helpful!</a>
    } else {
      return <button onClick={this.increaseHelpful}>Helpful? {this.props.ans.helpfulness}</button>
    }
  }
  reportAnswer(){
    let id = this.props.ans.id
    console.log('calling Report Answer on answer:', id)
    axios({
      url: `/answers/${id}/report`,
      method: 'put'
    }).then((data)=>{
      this.setState({reported: true})
    })
  }
  renderReportButton(){
    if (this.state.reported){
      return <a>Marked as Reported</a>
    } else {
      return <button onClick={this.reportAnswer}> Report</button>
    }
  }
  render(){
    return (
    <div>
      <p>
        A: {this.props.ans.body}
      </p>
      <p>by {this.props.ans.answerer_name}, {this.props.ans.date.substring(0, 10)}
      {this.renderHelpfulButton()}
      {this.renderReportButton()}
      </p>
    </div>
  )
  }

}

export default Answer;