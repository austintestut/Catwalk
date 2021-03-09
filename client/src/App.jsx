import React from 'react';
import Reviews from './components/Reviews.jsx';
import example_review_data from '../../example_review_data.js';
import Container from './AK/Container';

const App = () => {
  console.log(example_review_data);
  return (
    <div>
      <h1>I love Hack Reactor!</h1>
      <Container />
      {/* <Reviews data={example_review_data} /> */}
    </div>
  );
};

export default App;
