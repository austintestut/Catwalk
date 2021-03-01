import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import RelatedProductsCarousel from '../RelatedProductsCarousel';
import RelatedProductCard from '../RelatedProductCard';

Enzyme.configure({ adapter: new Adapter() });

it('renders RP Carousel without crashing', () => {
  mount(<RelatedProductsCarousel />);
  shallow(<RelatedProductsCarousel />);
});

it ('should have amount of cards equal to number related products', () => {
  const wrapper = mount(<RelatedProductsCarousel />);
  const children = wrapper.find(<RelatedProductCard />);
  expect(children).toHaveLength(RelatedProductCard.props.relatedProductIds.lengh);
});