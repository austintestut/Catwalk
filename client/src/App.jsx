import React from 'react';
import QuestionList from './AK/QuestionList.jsx';
import RelatedProductsAndOutfits from './AT/RelatedProductsAndOutfits';
import Reviews from './components/Reviews.jsx';
import example_review_data from '../../example_review_data.js';
import Container from './AK/Container';

const App = () => {
  return (
    <div>
      <h1>Hell World I am rendering!</h1>
      <RelatedProductsAndOutfits currentPageItemId={[17090]}/>
      {/* <Container /> */}
    </div>
  );
};

export default App;
