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

  clickToggle(e) {
    const { clicked } = this.state;
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
    for (let x = 0; x < 5; x++) {
      if (count > x) {
        stars.push(
          <i class="fas fa-star fa-lg" value={x + 1} onMouseEnter={this.hoverCount} onMouseLeave={this.resetCount} onClick={this.clickToggle} />);
        continue
      }
      stars.push(
      <i class="far fa-star fa-lg" value={x + 1} onMouseEnter={this.hoverCount} onMouseLeave={this.resetCount} onClick={this.clickToggle}/>);
    }
    return stars;
  }

  makeText() {
    const { count, clicked } = this.state;
    if (!count || !clicked) { return '      (please select a rating)'; }
    return // `     ${count} Stars`;
  }

  render() {
    return (
      <div style={{ justifyContent: 'flex-start' }}>
        <h4>Overall Rating</h4>
       <span>{this.makeStars()}<small>{this.makeText()}</small></span>
      </div>
    );
  }
}

export default StarHover;
