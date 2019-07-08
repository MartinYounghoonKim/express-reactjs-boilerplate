import { getMethod } from "./config";
import { IServiceResponse } from "../@types/utils/ajax";
import { IExampleList } from "../@types/models/test";


export async function fetchExampleService (): Promise<IServiceResponse<IExampleList>> {
  const uri = "/test";
  const response = await getMethod<IExampleList>(uri, {});

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
