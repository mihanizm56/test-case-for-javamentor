import React from "react";
import { shallow } from "enzyme";
import { MainWrapper } from "../main-wrapper-app";

describe("test LangList", () => {
  const component = shallow(<MainWrapper />);

  describe("test render contract", () => {
    it("renders Searcher", () => {
      expect(component.find("Memo()").length).toEqual(1);
    });
  });
});
