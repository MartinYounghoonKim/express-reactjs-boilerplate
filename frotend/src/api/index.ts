import {getMethod} from "./config";
import { IServiceResponse } from "../@types/utils/ajax";
import {ITest} from "../@types/models/test";


export async function fetchTest (): Promise<IServiceResponse<ITest>> {
  const uri = "/test";
  const response = await getMethod<ITest>(uri, {});

  if (!response.isSuccess) {
    const { isSuccess, errorData: { message } } = response;
    return {
      message,
      isSuccess,
    }
  }

  return {
    isSuccess: response.isSuccess,
    data: response.data
  };
}
