import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import RelatedProductCard from '../RelatedProductCard';

Enzyme.configure({ adapter: new Adapter() });

it('should render RP Card on the page', () => {
  shallow(<RelatedProductCard />);
});
