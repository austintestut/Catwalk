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
  }

  hoverCount(e) {
    const newCount = Number(e.target.getAttribute('value'));
    this.setState({ count: newCount });
  }

  resetCount() {
    this.setState({ count: 0 });
  }

  makeStars() {
    // const emptyStar = <i class="far fa-star"/>;
    // const solidStar = <i class="fas fa-star"/>;
    let { count } = this.state;
    let stars = [];
    for (let x = 0; x < 5; x++) {
      if (count > x) {
        stars.push(<i class="fas fa-star" value={x + 1} onMouseEnter={this.hoverCount} onMouseLeave={this.resetCount} />);
        continue
      }
      stars.push(<i class="far fa-star" value={x + 1} onMouseEnter={this.hoverCount} onMouseLeave={this.resetCount} />);
    }
    return stars;
  }

  render() {
    return (
      <fragment>
        {this.makeStars()}
      </fragment>
    );
  }
}

export default StarHover;
