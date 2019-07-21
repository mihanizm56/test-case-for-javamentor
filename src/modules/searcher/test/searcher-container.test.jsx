import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import { SearcherContainer } from "../searcher-container";
import { createAppStore } from "../../../redux/store";
import { fetchLangData } from "../../../redux/modules/lang-data/actions";

jest.mock("../../../redux/modules/lang-data/actions", () => ({
  fetchLangData: jest.fn().mockReturnValue({ type: "test_action" })
}));

describe("test SearcherContainer", () => {
  let container;
  const store = createAppStore();

  beforeEach(() => {
    jest.clearAllMocks();
    container = shallow(
      <Provider store={store}>
        <SearcherContainer>
          {objectWithProps => <p className="test-prop" {...objectWithProps} />}
        </SearcherContainer>
      </Provider>
    );
  });

  describe("test setting props to a component", () => {
    it("test set handleSearchChange prop ", () => {
      expect(
        container
          .dive()
          .dive()
          .dive()
          .dive()
          .find(".test-prop")
          .prop("handleSearchChange")
      ).toBeInstanceOf(Function);
    });
    it("test set handleSearchChange prop ", () => {
      expect(
        container
          .dive()
          .dive()
          .dive()
          .dive()
          .find(".test-prop")
          .prop("handleSearchClick")
      ).toBeInstanceOf(Function);
    });
    it("test set handleSearchChange prop ", () => {
      expect(
        container
          .dive()
          .dive()
          .dive()
          .dive()
          .find(".test-prop")
          .prop("langData")
      ).toBeInstanceOf(Array);
    });
    it("test set handleSearchChange prop ", () => {
      expect(
        container
          .dive()
          .dive()
          .dive()
          .dive()
          .find(".test-prop")
          .prop("options")
      ).toBeInstanceOf(Array);
    });
    it("test set handleSearchChange prop ", () => {
      expect(
        container
          .dive()
          .dive()
          .dive()
          .dive()
          .find(".test-prop")
          .prop("selectedValue")
      ).toBe("");
    });
  });
  describe.only("test action contract", () => {
    it("shoult do fetchLangData action", () => {
      container
        .dive()
        .dive()
        .dive()
        .dive()
        .find(".test-prop")
        .prop("handleSearchClick")();

      expect(fetchLangData).toHaveBeenCalledTimes(1);
    });
  });
});
