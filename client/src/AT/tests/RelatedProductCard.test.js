import React from 'react';
// import Enzyme, { shallow } from 'enzyme';
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";
import renderer from "react-test-renderer";
// import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import RelatedProductCard from '../RelatedProductCard';
import mockAxios from 'axios';


// Enzyme.configure({ adapter: new Adapter() });

it('should render RP Card on the page', () => {
  const card = shallow(<RelatedProductCard />);
  console.log(card)
});
