import React from 'react';
import Reviews from './components/Reviews.jsx';
import example_review_data from '../../example_review_data.js';
import example_review_meta from '../../example_review_meta.js';
import Container from './AK/Container';

const App = () => {
  console.log(example_review_data);
  return (
    <div>
      { /* <h1>Hell World I am rendering!</h1> */}
      {/* <Container /> */}
      <Reviews data={example_review_data} meta={example_review_meta} />
    </div>
  );
};

export default App;
