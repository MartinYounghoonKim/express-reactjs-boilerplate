export const FETCH_EXAMPLE_REQUEST = "EXAMPLE/FETCH_EXAMPLE_REQUEST";
export const FETCH_EXAMPLE_SUCCESS = "EXAMPLE/FETCH_EXAMPLE_SUCCESS";
export const FETCH_EXAMPLE_FAILURE = "EXAMPLE/FETCH_EXAMPLE_FAILURE";

interface IFetchExampleRequest {
  type: typeof FETCH_EXAMPLE_REQUEST;
}
export const fetchExampleRequestAction = (): IFetchExampleRequest => ({
  type: FETCH_EXAMPLE_REQUEST
});

interface IFetchExampleSuccess {
  type: typeof FETCH_EXAMPLE_SUCCESS;
}
export const fetchExampleSuccessAction = (): IFetchExampleSuccess => ({
  type: FETCH_EXAMPLE_SUCCESS
});

interface IFetchExampleFailure {
  type: typeof FETCH_EXAMPLE_FAILURE;
  message: string;
}
export const fetchExampleFailureAction = (message: string): IFetchExampleFailure => ({
  type: FETCH_EXAMPLE_FAILURE, message
});

export type IExampleActionTypes =
  IFetchExampleRequest
  | IFetchExampleSuccess
  | IFetchExampleFailure;
