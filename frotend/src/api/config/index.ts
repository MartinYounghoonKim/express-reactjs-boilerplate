import axios from "axios";
import { IAJAXResponse } from "../../@types/utils/ajax";

const api = axios.create({
  baseURL: "//localhost:8080"
});

export async function getMethod<T, P = any>(uri: string, params?: P): Promise<IAJAXResponse<T>> {
  try {
    const { data, status } = await api(uri, { params });

    return {
      data,
      status,
      isSuccess: true,
    };
  } catch (e) {
    const errorMessage = e.message;
    const { status, data: { message }, statusText } = e.response;

    return {
      status,
      errorData: {
        message,
        statusText,
        errorMessage,
      },
      isSuccess: false,
    }
  }
}
