import {INullable} from "../utils/utility";
import { SagaIteratorClone } from "@redux-saga/testing-utils";

export interface IGeneratorMap {
  generator: INullable<SagaIteratorClone>;
  cloneGenerator: INullable<SagaIteratorClone>;
}
