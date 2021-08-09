import React from "react";
// import Enzyme, { shallow } from "enzyme";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";
// import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import RelatedProductsAndOutfits from "../RelatedProductsAndOutfits";
import RelatedProductsCarousel from "../RelatedProductsCarousel";
import OutfitCarousel from "../OutfitCarousel";
import mockAxios from "axios";

// Enzyme.configure({ adapter: new Adapter() });

it("renders RPO section without crashing", () => {
  shallow(<RelatedProductsAndOutfits />);
});

it("renders Related Products and Outfit carousels", () => {
  const wrapper = shallow(<RelatedProductsAndOutfits />);
  expect(wrapper.containsMatchingElement(RelatedProductsCarousel)).toEqual(
    true
  );
  expect(wrapper.containsMatchingElement(OutfitCarousel)).toEqual(true);
});

// test('calls ')
