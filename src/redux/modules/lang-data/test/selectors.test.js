import { getLangData } from "../selectors";

describe("test Selectors", () => {
  const mockParameters = {
    langData: [
      {
        docs: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        groups: ["test"],
        logo:
          "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
        name: "Javascript",
        projectsCount: 2852007,
        year: 1995
      }
    ]
  };

  it("returns choosen data", () => {
    const selected = getLangData.resultFunc(mockParameters);
    expect(selected).toEqual(mockParameters);
  });
});
