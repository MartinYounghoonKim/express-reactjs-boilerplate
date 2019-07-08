import { put, call, takeEvery } from "redux-saga/effects";
import {
  fetchExampleRequestAction,
  fetchExampleFailureAction,
  fetchExampleSuccessAction
} from "../../actions/example/exampleAction";
import { fetchExampleService } from "../../../api";

import { IExampleList } from "../../../@types/models/test";
import { IServiceResponse } from "../../../@types/utils/ajax";

const FETCH_EXAMPLE = "SAGA@@EXAMPLE/FETCH_EXAMPLE";

export const fetchExampleAction = () => ({
  type: FETCH_EXAMPLE
});

export function* fetchExample () {
  yield put(fetchExampleRequestAction());
  const response: IServiceResponse<IExampleList> = yield call(fetchExampleService);

  if (response.isSuccess) {
    yield put(fetchExampleSuccessAction(response.data));
  } else {
    yield put(fetchExampleFailureAction(response.message));
  }
}

export default function* () {
  yield takeEvery(FETCH_EXAMPLE, fetchExample);
}
