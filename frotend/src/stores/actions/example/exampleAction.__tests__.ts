import {
  FETCH_EXAMPLE_FAILURE,
  FETCH_EXAMPLE_REQUEST,
  FETCH_EXAMPLE_SUCCESS,
  fetchExampleFailureAction,
  fetchExampleRequestAction,
  fetchExampleSuccessAction
} from "./exampleAction";

describe("Abount Example's action creators", () => {
  it("", () => {
    expect(fetchExampleRequestAction()).toEqual({
      type: FETCH_EXAMPLE_REQUEST,
    });
  });
  it("", () => {
    expect(fetchExampleSuccessAction()).toEqual({
      type: FETCH_EXAMPLE_SUCCESS,
    });
  });
  it("", () => {
    const message = "Something's wrong in API.";
    expect(fetchExampleFailureAction(message)).toEqual({
      type: FETCH_EXAMPLE_FAILURE, message
    });
  });
});
