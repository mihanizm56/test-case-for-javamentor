import { put, call } from "redux-saga/effects";
import { testSaga } from "redux-saga-test-plan";
import { fetchLangDataSaga } from "../sagas";
import { fetchLangRequest } from "../../../../services/api";
import { PUT_LANG_DATA } from "../constants";
import { fetchLangData } from "../actions";

const mockData = [
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

jest.mock("../../../../services/api", () => ({
  fetchLangRequest: jest.fn(() => Promise.resolve(mockData))
}));

describe("test fetchLangDataSaga", () => {
  it("test the whole saga work", () => {
    const saga = testSaga(fetchLangDataSaga, fetchLangData("test"));

    saga
      .next()
      .call(fetchLangRequest, "test")

      .next(mockData)
      .put({ type: PUT_LANG_DATA, payload: mockData })
      .next()
      .isDone();
  });
});
