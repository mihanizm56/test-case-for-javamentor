import React from "react";
import { shallow } from "enzyme";
import { LangCard } from "../lang-card";

describe("test LangCard", () => {
  const cardProps = {
    title: "test_title",
    createdAt: 1,
    numberOfProjects: 1,
    link: "test_link",
    logo: "test_logo"
  };
  let component;

  beforeEach(() => {
    jest.clearAllMocks();
    component = shallow(<LangCard {...cardProps} />);
  });

  describe("test render contract", () => {
    it("renders html-content", () => {
      expect(component).toMatchSnapshot();
    });
  });
  describe("test props contract", () => {
    it("check title prop", () => {
      expect(component.find(".card__lang-name").text()).toEqual("test_title");
    });
    it("check createdAt prop", () => {
      expect(component.find(".card__created").text()).toEqual(
        `Основан в ${cardProps.createdAt} году`
      );
    });
    it("check numberOfProjects prop", () => {
      expect(component.find(".card__number-of-projects").text()).toEqual(
        `Проектов на GitHub ${cardProps.numberOfProjects}`
      );
    });
    it("check link prop", () => {
      expect(component.find(".card__link").prop("href")).toEqual(
        cardProps.link
      );
    });
    it("check logo prop", () => {
      expect(component.find("img").prop("src")).toEqual(cardProps.logo);
    });
  });
});
