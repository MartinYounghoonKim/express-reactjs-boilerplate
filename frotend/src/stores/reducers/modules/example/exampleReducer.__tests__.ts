import { AJAX_STATUS } from "../../../../@types/utils/ajax";
import exampleReducer, { initialState } from "./exampleReducer";
import {
  fetchExampleFailureAction, fetchExampleRequestAction,
  fetchExampleSuccessAction
} from "../../../actions/example/exampleAction";

describe("예제 리듀서에 대해서", () => {
  it("데이터 요청 시, 예제 상태에 PENDING 상태로 저장한다.", () => {
    const status = AJAX_STATUS.PENDING;
    const state = exampleReducer(undefined, fetchExampleRequestAction());

    expect(state).toEqual({ ...initialState, status });
  });
  it("데이터 요청 성공 시, 예제 상태에 items를 저장한다.", () => {
    const status = AJAX_STATUS.SUCCESS;
    const items = [{ text: "예제 문자열" }];
    const state = exampleReducer(undefined, fetchExampleSuccessAction(items));

    expect(state).toEqual({ ...initialState, status, items });
  });
  it("데이터 요청 실패 시, 예제 상태에 message를 저장한다.", () => {
    const status = AJAX_STATUS.FAILURE;
    const message = "Something's wrong in API.";
    const state = exampleReducer(undefined, fetchExampleFailureAction(message));

    expect(state).toEqual({ ...initialState, status, message });
  })
});
