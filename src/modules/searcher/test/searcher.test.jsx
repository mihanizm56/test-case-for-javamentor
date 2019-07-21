import React from "react";
import { shallow } from "enzyme";
import { Searcher } from "../searcher";
import { SearcherContainer } from "../searcher-container";

it("the whole test Searcher by snapshot ", () => {
  const wrapper = shallow(<Searcher />)
    .find(SearcherContainer)
    .renderProp("children")({
    handleSearchClick: jest.fn(),
    handleSearchChange: jest.fn(),
    langData: [],
    options: {},
    selectedValue: "test"
  });

  expect(wrapper).toMatchSnapshot();
});
