import React from "react";
// import Enzyme, { shallow } from "enzyme";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
// import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import App from "./App";
import "regenerator-runtime/runtime";

// Enzyme.configure({ adapter: new Adapter() });

test("renders without crashing", async () => {
  const app = await shallow(<App />);
});
