import { fetchLangRequest, getLangEndpoint } from "../api";
import { FRONTEND, BACKEND, MOBILE } from "../../constants";

jest.mock();

describe("test fetchLangRequest", () => {
  const mockSuccessResponse = {};
  const mockJsonPromise = Promise.resolve(mockSuccessResponse);
  const mockFetchPromise = Promise.resolve({
    json: () => mockJsonPromise
  });
  jest.spyOn(global, "fetch").mockImplementation(() => mockFetchPromise);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("test request without params", () => {
    fetchLangRequest();
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(getLangEndpoint);
  });
  it("test request with param 'Front-end'", () => {
    fetchLangRequest(FRONTEND);
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      `${getLangEndpoint}?group=frontend`
    );
  });
  it("test request with param 'Back-end'", () => {
    fetchLangRequest(BACKEND);
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      `${getLangEndpoint}?group=backend`
    );
  });
  it("test request with param 'Mobile'", () => {
    fetchLangRequest(MOBILE);
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      `${getLangEndpoint}?group=mobile`
    );
  });
});
