import React from 'react';

class Helpfulness extends React.Component {
  constructor(props) {
    super(props);
    let { helpfulness } = this.props;
    this.state = {
      clicked: false,
      count: helpfulness,
    };
    this.click = this.click.bind(this);
  }

  click(e) {
    if (!this.state.clicked) {
      let newCount;
      let name = e.target.getAttribute('name');
      if (name === 'yes') { newCount = this.state.count + 1; }
      if (name === 'no') { newCount = this.state.count - 1; }
      this.setState({ clicked: true, count: newCount });
    }
  }

  render() {
    let {count, clicked} = this.state;
    return (
      <div>
        <span name="yes" onClick={this.click} style={{ textDecoration: 'underline' }}>Yes</span>
        <span> ({ count })    |    </span>
        <span name="no" onClick = {this.click} style={{ textDecoration: 'underline' }}>No</span>
      </div>
    )
  }
}

export default Helpfulness;
