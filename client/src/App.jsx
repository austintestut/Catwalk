import React from 'react';
import QuestionList from './AK/QuestionList.jsx';
import RelatedProductsAndOutfits from './AT/RelatedProductsAndOutfits';

const App = function() {
  return (
    <div>
      <h1>Hell World I am rendering!</h1>
      <RelatedProductsAndOutfits />
      <QuestionList />
    </div>


  );
}

export default App;
