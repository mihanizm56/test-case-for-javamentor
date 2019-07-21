import { fetchLangData, putLangData } from "../actions";
import { FETCH_LANG_DATA, PUT_LANG_DATA } from "../constants";

describe("test action-creators", () => {
  it("test fetchLangData", () => {
    const correctAction = {
      type: FETCH_LANG_DATA,
      payload: "test_1"
    };
    expect(fetchLangData("test_1")).toEqual(correctAction);
  });
  it("test putLangData", () => {
    const correctAction = {
      type: PUT_LANG_DATA,
      payload: "test_2"
    };
    expect(putLangData("test_2")).toEqual(correctAction);
  });
});
