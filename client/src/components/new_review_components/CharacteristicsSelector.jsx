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

  makeRadioButton(item, index) {
    let text;
    const { characteristics } = this.props
    if (!this.state[item]) { text = 'None Selected'; }
    else { text = characteristic[item][this.state[item]]; }
    const radioStyle = {
      //border: '1px solid black',
      width: '18%',
      display: 'inline-block',
      textAlign: 'center',
    };
    const radioStyleInline1 = {
      //border: '1px solid black',
      width: '18%',
    };
    const radioStyleInline2 = {
      //border: '1px solid black',
      width: '18%',
      float: 'right',
    };
    if (characteristics.length > 2) {
      return (
        <div style={{ ...radioStyle }} onChange={this.handleChange}>
          <h4 style={{marginBottom: 0 }}>{item}</h4>
          <p style={{ fontSize: '80%', margin: '5px', marginTop: 0 }}>{text}</p>
          <input type="radio" name={item} value="1" /><br />
          <input type="radio" name={item} value="2" /><br />
          <input type="radio" name={item} value="3" /><br />
          <input type="radio" name={item} value="4" /><br />
          <input type="radio" name={item} value="5" /><br />
        </div>
      );
    }
    let thisStyle;
    if (index === 0) { thisStyle = radioStyleInline1; }
    else { thisStyle = radioStyleInline2; }
    return (
      <div style={{ ...thisStyle }} onChange={this.handleChange}>
        <h4 style={{marginBottom: '5px'}}>{item}</h4>
        <p style={{ fontSize: '80%', margin: '5px', marginLeft: '0px' }}>{text}</p>
        <input type="radio" name={item} value="1" /><span style={{ width: '8px', display: 'inline-block' }} />
        <input type="radio" name={item} value="2" /><span style={{ width: '8px', display: 'inline-block' }} />
        <input type="radio" name={item} value="3" /><span style={{ width: '8px', display: 'inline-block' }} />
        <input type="radio" name={item} value="4" /><span style={{ width: '8px', display: 'inline-block' }} />
        <input type="radio" name={item} value="5" />
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
          {characteristics.map((item, index) => this.makeRadioButton(item, index))}
        </div>
      );
    }
    return null;
  }
}

export default CharacteristicsSelector;
