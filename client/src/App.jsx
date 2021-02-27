import React from 'react';
import Reviews from './components/Reviews.jsx';
import example_review_data from '../../example_review_data.js';

const App = () => {
  console.log(example_review_data);
  return (
  <div>
    <h1>Hell World I am rendering!</h1>
    <Reviews data={example_review_data} />
  </div>
  );
};

export default App;
