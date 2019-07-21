import langDataStorage from "../reducer";
import { PUT_LANG_DATA } from "../constants";
import { putLangData } from "../actions";

const EMPTY_ARRAY = [];

const initialState = {
  langData: EMPTY_ARRAY
};

const testData = [
  {
    docs: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    groups: ["test"],
    logo:
      "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
    name: "Javascript",
    projectsCount: 2852007,
    year: 1995
  }
];

describe("PUT_LANG_DATA action", () => {
  const state0 = langDataStorage(undefined, "test");
  const state1 = langDataStorage(state0, putLangData(testData));

  it("get default value in state0", () => {
    expect(state0.langData).toEqual(EMPTY_ARRAY);
  });
  it("get testData in state1", () => {
    expect(state1.langData).toEqual(testData);
  });
});
