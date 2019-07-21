import React from "react";
import { shallow } from "enzyme";
import { LangList } from "../lang-list";

describe("test LangList", () => {
  const listProps = {
    langData: [
      {
        name: "test_name",
        year: 1,
        projectsCount: 1,
        docs: "test_docs",
        logo: "test_logo"
      },
      {
        name: "test_name",
        year: 1,
        projectsCount: 1,
        docs: "test_docs",
        logo: "test_logo"
      },
      {
        name: "test_name",
        year: 1,
        projectsCount: 1,
        docs: "test_docs",
        logo: "test_logo"
      }
    ]
  };
  let component;

  beforeEach(() => {
    jest.clearAllMocks();
    component = shallow(<LangList {...listProps} />);
  });

  describe("test render contract", () => {
    it("renders html-content", () => {
      expect(component).toMatchSnapshot();
    });
  });
  describe("test props contract", () => {
    it("check number of LangCard components", () => {
      expect(component.find("Memo()").length).toEqual(3);
    });

    it("check", () => {
      const specialProps = {
        langData: [
          {
            name: "test_name",
            year: 1,
            projectsCount: 1,
            docs: "test_docs",
            logo: "test_logo"
          }
        ]
      };
      const specialComponent = shallow(<LangList {...specialProps} />);
      expect(specialComponent.find("Memo()").props()).toEqual({
        createdAt: 1,
        link: "test_docs",
        logo: "test_logo",
        numberOfProjects: 1,
        title: "test_name"
      });
    });
  });
});
