import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import RelatedProductCard from '../RelatedProductCard';
import mockAxios from 'axios';


Enzyme.configure({ adapter: new Adapter() });

it('should render RP Card on the page', () => {
  const card = shallow(<RelatedProductCard />);
  console.log(card)
});
