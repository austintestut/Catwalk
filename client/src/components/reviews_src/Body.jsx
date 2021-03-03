import React from 'react';

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      extended: false,
    };
    this.extend = this.extend.bind(this);
  }

  extend(e) {
    e.preventDefault();
    this.setState({ extended: true });
  }

  render() {
    const { body } = this.props;
    const { extended } = this.state;

    const spanStyle = {
      textDecoration: 'underline',
    };

    if (extended || body.length <= 250) {
      return <div>{body}</div>;
    }
    return (
      <div>
        {body.substring(0, 250)}
        <span>... </span>
        <span style={{ ...spanStyle }} onClick={this.extend}>Show More</span>
      </div>
    );
  }
}

export default Body;
