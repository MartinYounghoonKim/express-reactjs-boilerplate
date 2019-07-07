/**
 * @description AJAX 코어 모듈에 대한 인터페이스
 */
export type IAJAXResponse<T> = IAJAXSuccessResponse<T> | IAJAXFailureResponse;

interface IAJAXSuccessResponse<T> {
  status: number;
  data: T;
  isSuccess: true;
}

interface IAJAXFailureResponse {
  status: number;
  isSuccess: false;
  errorData: {
    message: string;
    statusText: string;
    errorMessage: string;
  };
}

export type IServiceResponse<T> = IServiceSuccessResponse<T> | IServiceFailureResponse;

interface IServiceSuccessResponse<T> {
  isSuccess: true;
  data: T;
}

interface IServiceFailureResponse {
  isSuccess: false;
  message: string;
}

export enum AJAX_STATUS {
  INITIAL = "INITIAL",
  PENDING = "PENDING",
  SUCCESS = "SUCCESS",
  FAILURE = "FAILURE"
}
