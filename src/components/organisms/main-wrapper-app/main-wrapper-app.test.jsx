import React from "react";
import { shallow } from "enzyme";
import { MainWrapper } from "../main-wrapper-app";

describe("test MainWrapper", () => {
  const component = shallow(<MainWrapper />);

  describe("test render contract", () => {
    it("renders Searcher", () => {
      expect(component).toMatchSnapshot();
    });
  });
});
