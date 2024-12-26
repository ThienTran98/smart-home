import axios from "axios";
import { userLocalStorage } from "./localstorageService";
// import { store } from "./../index";
// import { setLoadingOff, setLoadingOn } from "../redux-toolkit/spinnerSlice";

export const base_URL = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    Authorization:
      userLocalStorage.get()?.accessToken ||
      userLocalStorage.get()?.refreshToken,
  },
});

base_URL.interceptors.request.use(
  function (config) {
    // store.dispatch(setLoadingOn());

    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
base_URL.interceptors.response.use(
  function (response) {
    // store.dispatch(setLoadingOff());
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // store.dispatch(setLoadingOff());
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
