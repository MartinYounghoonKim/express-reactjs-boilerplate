import {
  FETCH_EXAMPLE_FAILURE,
  FETCH_EXAMPLE_REQUEST,
  FETCH_EXAMPLE_SUCCESS,
  fetchExampleFailureAction,
  fetchExampleRequestAction,
  fetchExampleSuccessAction
} from "./exampleAction";

describe("예제 Action creator 함수에 대해서", () => {
  it("API를 패치하는 액션 함수를 실행 시, API 요청에 해당하는 객체를 반환한다.", () => {
    expect(fetchExampleRequestAction()).toEqual({
      type: FETCH_EXAMPLE_REQUEST,
    });
  });
  it("API를 패치 성공 액션 함수를 실행 시, API 요청 성공에 해당하는 객체를 반환한다.", () => {
    expect(fetchExampleSuccessAction()).toEqual({
      type: FETCH_EXAMPLE_SUCCESS,
    });
  });
  it("API를 패치 실패 액션 함수를 실행 시, API 요청 실패에 해당하는 객체를 반환한다.", () => {
    const message = "Something's wrong in API.";
    expect(fetchExampleFailureAction(message)).toEqual({
      type: FETCH_EXAMPLE_FAILURE, message
    });
  });
});
