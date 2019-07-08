import { put, call } from "redux-saga/effects";
import { cloneableGenerator } from "@redux-saga/testing-utils";


import { fetchExample } from "./exampleSaga";
import { fetchExampleService } from "../../../api";
import {
  fetchExampleRequestAction,
  fetchExampleFailureAction,
  fetchExampleSuccessAction
} from "../../actions/example/exampleAction";

import { IGeneratorMap } from "../../../@types/store";

describe("예제 사가 함수에 대해서" , () => {
  describe("예제 API를 패치하는 과정은 다음과 같다.", () => {
    const generatorMap: IGeneratorMap = {
      generator: null,
      cloneGenerator: null
    };
    generatorMap.generator = cloneableGenerator(fetchExample)();

    it("예제 상태의 status가 PENDING 상태로 변경된다.", () => {
      expect(generatorMap.generator!.next().value).toEqual(put(fetchExampleRequestAction()));
    });
    it("예제 API를 통해 데이터를 요청한다.", () => {
      expect(generatorMap.generator!.next().value).toEqual(call(fetchExampleService));
    });
    it("API 통신이 실패한 경우, 메세지를 상태에 저장한다.",() => {
      const message = "API 요청이 실패했습니다.";
      generatorMap.cloneGenerator = generatorMap.generator!.clone();
      expect(generatorMap.cloneGenerator!.next({ isSuccess: false, message }).value).toEqual(put(fetchExampleFailureAction(message)));
    });
    it("API 통신이 성공한 경우, 해당 데이터를 상태에 저장한다.", () => {
      expect(generatorMap.generator!.next({ isSuccess: true, data: [] }).value).toEqual(put(fetchExampleSuccessAction([])));
    });
  });
});
