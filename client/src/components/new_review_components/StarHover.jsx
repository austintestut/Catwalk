import React from 'react';

class StarHover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      count: 0,
    };
    this.makeStars = this.makeStars.bind(this);
    this.hoverCount = this.hoverCount.bind(this);
    this.resetCount = this.resetCount.bind(this);
    this.clickToggle = this.clickToggle.bind(this);
    this.makeText = this.makeText.bind(this);
  }

  errorColor() {
    if (this.props.error) {
      return 'red';
    }
  }

  clickToggle(e) {
    const { clicked } = this.state;
    const { hoist } = this.props;
    if (clicked) {
      const newCount = Number(e.target.getAttribute('value'));
      this.setState({ count: newCount });
    }
    this.setState({ clicked: !clicked });
  }

  hoverCount(e) {
    if (!this.state.clicked) {
      const newCount = Number(e.target.getAttribute('value'));
      this.setState({ count: newCount });
    }
  }

  resetCount() {
    if (!this.state.clicked) {
      this.setState({ count: 0 });
    }
  }

  makeStars() {
    // const emptyStar = <i class="far fa-star"/>;
    // const solidStar = <i class="fas fa-star"/>;
    let { count } = this.state;
    let stars = [];
    const style = {
      color: '#e11a2b',
      // textShadow: '0 0 3px black',
    }
    for (let x = 0; x < 5; x++) {
      if (count > x) {
        stars.push(
          <i class="fas fa-star fa-lg" value={x + 1} onMouseEnter={this.hoverCount} onMouseLeave={this.resetCount} onClick={this.clickToggle} style={{ ...style }}/>);
        continue
      }
      stars.push(
      <i class="far fa-star fa-lg" value={x + 1} onMouseEnter={this.hoverCount} onMouseLeave={this.resetCount} onClick={this.clickToggle} style={{ ...style }}/>);
    }
    return stars;
  }

  makeText() {
    const { count, clicked } = this.state;
    const { hoist } = this.props;
    if (!count || !clicked) {
      hoist('stars', null);
      return '      (please select a rating)';
    }
    hoist('stars', count);
    return // `     ${count} Stars`;
  }

  render() {
    const filterStyle = {
      justifyContent: 'flex-start',
      color: '#e11a2b',
    }
    return (
      <div style={{ ...filterStyle }}>
        <h4 style={{ color: 'black' }}>Overall Rating</h4>
        <span>
          {this.makeStars()}<small style={{ color: this.errorColor() }}>{this.makeText()}</small>
        </span>
      </div>
    );
  }
}

export default StarHover;
