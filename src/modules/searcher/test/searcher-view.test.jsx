import React from "react";
import { shallow } from "enzyme";
import { SearcherView } from "../searcher-view";

describe("test SearcherView", () => {
  const searcherViewProps = {
    handleSearchClick: jest.fn(),
    handleSearchChange: jest.fn(),
    langData: [
      {
        title: "test_title",
        createdAt: 1,
        numberOfProjects: 1,
        link: "test_link",
        logo: "test_logo"
      }
    ],
    options: [{ value: "test-option" }],
    selectedValue: "test_value"
  };
  const component = shallow(<SearcherView {...searcherViewProps} />);

  describe("test SearcherView", () => {
    it("test whole render with props", () => {
      expect(component).toMatchSnapshot();
    });
  });
});
