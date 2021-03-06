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
    const { hoist } = this.props;
    const val = e.target.getAttribute('value');
    const name = e.target.getAttribute('name');
    this.setState({ [name]: val }, () => {
      hoist('characteristics', this.state);
    });
  }

  makeRadioButton(item) {
    let text;
    if (!this.state[item]) { text = 'None Selected'; }
    else { text = characteristic[item][this.state[item]]; }
    const radioStyle = {
      //border: '1px solid black',
      width: '18%',
      display: 'inline-block',
      textAlign: 'center',
    };
    return (
      <div style={{ ...radioStyle }} onChange={this.handleChange}>
        <h4>{item}</h4>
        <p>{text}</p>
        <input type="radio" name={item} value="1" /><br />
        <input type="radio" name={item} value="2" /><br />
        <input type="radio" name={item} value="3" /><br />
        <input type="radio" name={item} value="4" /><br />
        <input type="radio" name={item} value="5" /><br />
      </div>
    );
  }

  render() {
    const { characteristics } = this.props;
    const containerStyle = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    }
    if (characteristic) {
      return (
        <div style={{ ...containerStyle }}>
          {characteristics.map((item) => this.makeRadioButton(item))}
        </div>
      );
    }
    return null;
  }
}

export default CharacteristicsSelector;
