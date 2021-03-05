import React from 'react';
import characteristic from '../../global_functions/characteristic';

class CharacteristicsSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { characteristics } = this.props;
    characteristics.forEach((item) => {
      this.setState({ [item]: null });
    });
  }

  render() {
    return <div />;
  }
}

export default CharacteristicsSelector;
