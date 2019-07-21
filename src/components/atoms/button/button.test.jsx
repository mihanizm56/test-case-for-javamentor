import React from "react";
import { shallow } from "enzyme";
import { Button } from "../button";

describe("test Button", () => {
  const buttonProps = {
    handleClick: jest.fn()
  };
  let component;

  beforeEach(() => {
    jest.clearAllMocks();
    component = shallow(<Button {...buttonProps} />);
  });

  describe("test render contract", () => {
    it("renders html-content", () => {
      expect(component.dive().dive()).toMatchSnapshot();
    });

    it("renders Button", () => {
      expect(
        component
          .dive()
          .dive()
          .find("Button").length
      ).toBe(1);
    });
  });

  describe("test props contract", () => {
    it("check handleClick prop", () => {
      expect(
        component
          .dive()
          .dive()
          .find("Button")
          .prop("onClick")
      ).toEqual(buttonProps.handleClick);
    });
  });

  describe("test actions contract", () => {
    it("calls prop handleClick function when click event was fired", () => {
      component
        .dive()
        .dive()
        .find("Button")
        .simulate("click", {});

      expect(buttonProps.handleClick).toHaveBeenCalledTimes(1);
    });
  });
});
