import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  shallow(<App />);
});

it('renders hello world header', () => {
  const wrapper = shallow(<App />);
  const welcome = <h1>Hell World I am rendering!</h1>;
  expect(wrapper.contains(welcome)).toEqual(true);
});
