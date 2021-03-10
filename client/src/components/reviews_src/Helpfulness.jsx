import React from 'react';
import handler from '../../global_functions/handler';

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
    const { reviews } = handler;
    const { id } = this.props;
    const { clicked, count } = this.state;
    if (!clicked) {
      let name = e.target.getAttribute('name');
      if (name === 'helpful') {
        this.setState({ clicked: true, count: count + 1 });
        reviews.update(id, 'helpful');
      }
      if (name === 'report') {
        reviews.update(id, 'report');
        this.setState({ clicked: true });
      }
    }
  }

  render() {
    let { count } = this.state;
    return (
      <div style={{fontSize: '90%', color: 'grey' }}>
        <span>Helpful? </span>
        <span name="helpful" className="helpful austinButtons" onClick={this.click} style={{ textDecoration: 'underline' }}>Yes</span>
        <span> ({ count })    |    </span>
        <span name="report" className="helpful austinButtons" onClick = {this.click} style={{ textDecoration: 'underline' }}>Report</span>
      </div>
    );
  }
}

export default Helpfulness;
