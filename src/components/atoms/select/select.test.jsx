import React from "react";
import { shallow } from "enzyme";
import { Select } from "../select";
import { Button } from "../select";

describe("test Select", () => {
  const selectProps = {
    selectedValue: "test",
    handleChange: jest.fn()
  };
  let component;

  beforeEach(() => {
    jest.clearAllMocks();
    component = shallow(<Select {...selectProps} />);
  });

  describe("test render contract", () => {
    it("renders html-content", () => {
      expect(
        component
          .dive()
          .dive()
          .dive()
      ).toMatchSnapshot();
    });

    it("renders Select", () => {
      expect(
        component
          .dive()
          .dive()
          .dive()
          .find("Select").length
      ).toBe(1);
    });
  });

  describe("test props contract", () => {
    it("check handleClick prop", () => {
      expect(
        component
          .dive()
          .dive()
          .dive()
          .find("Select")
          .prop("onChange")
      ).toEqual(selectProps.handleChange);
    });
    it("check value of selectedValue prop was provided", () => {
      expect(
        component
          .dive()
          .dive()
          .dive()
          .find("Select")
          .prop("value")
      ).toEqual(selectProps.selectedValue);
    });
    it("check value of selectedValue prop was provided", () => {
      expect(
        component
          .dive()
          .dive()
          .dive()
          .find("Select")
          .prop("value")
      ).toEqual(selectProps.selectedValue);
    });
  });

  describe("test action contract", () => {
    it("calls prop handleChange function when change event was fired", () => {
      const testEvent = { target: { value: "42" } };

      component
        .dive()
        .dive()
        .dive()
        .find("Select")
        .simulate("change", testEvent);

      expect(selectProps.handleChange).toHaveBeenCalledWith(testEvent);
      expect(selectProps.handleChange).toHaveBeenCalledTimes(1);
    });
  });
});
