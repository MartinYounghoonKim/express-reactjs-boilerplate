import { fork } from "redux-saga/effects";
import exampleSaga from "./example/exampleSaga";

export default function* () {
  yield fork(exampleSaga);
}
