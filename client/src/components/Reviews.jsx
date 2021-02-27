import React from 'react';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: props.data,
    };
  };

  render() {
    return (<p>{JSON.stringify(this.state.reviews)}</p>);


  }
}

export default Reviews;
