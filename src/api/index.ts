import Axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import {
  getFromLocalStorage,
  clearLocalStorage
} from "../utils/BrowserStorage";
import { FORBIDDEN } from "../utils/HttpCodes";

const axiosInstance = Axios.create();

axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig): AxiosRequestConfig => {
    config = {
      ...config,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${getFromLocalStorage("auth")}`
      }
    };
    return config;
  }
);

axiosInstance.interceptors.response.use(
  (config): AxiosResponse => config,
  (error): Promise<object> => {
    const { status } = error.response;
    const token = getFromLocalStorage("auth");
    if (status === FORBIDDEN && token) {
      clearLocalStorage();
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
