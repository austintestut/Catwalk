import React from 'react';
import QuestionList from './AK/QuestionList.jsx';
import RelatedProductsAndOutfits from './AT/RelatedProductsAndOutfits';
import Reviews from './components/Reviews.jsx';
import Container from './AK/Container';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentPageItemId: 17450
    };
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  componentDidUpdate() {
    console.log('hello from App');
    this.render();
  }

  handleItemClick(id) {
    this.setState({
      currentPageItemId: id
    }, () => {
      this.forceUpdate();
    });
  }

  render() {
    return (
      <div>
        <br />
        <br />
        {/* <h1>Hell World I am rendering!</h1> */}
        <RelatedProductsAndOutfits
        currentPageItemId={this.state.currentPageItemId}
        handleItemClick={this.handleItemClick}
        />
        {/* <Container /> */}
      </div>
    );
  }
}

export default App;
