import React from 'react';
import characteristic from '../../global_functions/characteristic';

class CharacteristicsSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.makeRadioButton = this.makeRadioButton.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { characteristics } = this.props;
    characteristics.forEach((item) => {
      this.setState({ [item]: null });
    });
  }

  handleChange(e) {
    const val = e.target.getAttribute('value');
    const name = e.target.getAttribute('name');
    this.setState({ [name]: val });
  }

  makeRadioButton(item) {
    let text;
    if (!this.state[item]) { text = 'None Selected'; }
    else { text = characteristic[item][this.state[item]]; }
    console.log(text);
    return (
      <div onChange={this.handleChange}>
        <h4>{item}</h4>
        <p>{text}</p>
        <input type="radio" name={item} value="1" />
        <input type="radio" name={item} value="2" />
        <input type="radio" name={item} value="3" />
        <input type="radio" name={item} value="4" />
        <input type="radio" name={item} value="5" />
      </div>
    )
  }

  render() {
    const { characteristics } = this.props;
    if (characteristic) {
      return (
        <div>
          {characteristics.map((item) => this.makeRadioButton(item))}
        </div>
      );
    }
    return null;
  }
}

export default CharacteristicsSelector;
