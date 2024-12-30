import axios from "axios";
import { userLocalStorage } from "./localstorageService";
import { postRefreshToken } from "./userService";
import { store } from "./../index";
import { setLoadingOff, setLoadingOn } from "../redux/loadingSlice";

export const base_URL = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    Authorization: userLocalStorage.get()?.accessToken,
  },
  // headers: {
  //   "Content-Type": "application/json",
  // },
});

base_URL.interceptors.request.use(
  function (config) {
    store.dispatch(setLoadingOn());
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    store.dispatch(setLoadingOff());

    return Promise.reject(error);
  }
);

// base_URL.interceptors.request.use(
//   (config) => {
//     store.dispatch(setLoadingOn());

//     const token = userLocalStorage.get()?.accessToken;

//     if (token) {
//       config.headers["Authorization"] = token; // for Spring Boot back-end
//     }
//     return config;
//   },
//   (error) => {
//     store.dispatch(setLoadingOff());
//     return Promise.reject(error);
//   }
// );

// Add a response interceptor
// base_URL.interceptors.response.use(
//   (response) => {
//     store.dispatch(setLoadingOff());
//     return response;
//   },
//   async (error) => {
//     const originalRequest = error.config;
//     store.dispatch(setLoadingOff());

//     // If the error status is 401 and there is no originalRequest._retry flag,
//     // it means the token has expired and we need to refresh it
//     if (error.response.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       postRefreshToken()
//         .then((response) => {
//           console.log("response: ", response);
//         })
//         .catch((error) => {
//           console.log("error: ", error);
//         });
//       // Handle refresh token error or redirect to login
//     }

//     return Promise.reject(error);
//   }
// );

// Add a response interceptor
base_URL.interceptors.response.use(
  function (response) {
    store.dispatch(setLoadingOff());
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    store.dispatch(setLoadingOff());
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
