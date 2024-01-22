/* eslint-disable no-mixed-spaces-and-tabs */
import axios from "axios";
// import { backendApiURL } from "./index";
// import { useAppStore } from "@store/app.store";

const instanceSettings = {
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 300000,
};


let jwt = sessionStorage.getItem("token");

const onRequestError = (error) => {
  return Promise.reject(error?.response)
}

const onResponseError = (error) => {
  return Promise.reject(error?.response)
}

let authInstanceAxios = axios.create({
  ...instanceSettings,
  headers: jwt ? { Authorization: `Bearer ${jwt}` } : undefined,
});

let publicInstanceAxios = axios.create(instanceSettings);

publicInstanceAxios.interceptors.response.use(null, onResponseError);
authInstanceAxios.interceptors.response.use(null, onResponseError);
authInstanceAxios.interceptors.request.use(null, onRequestError);

export { publicInstanceAxios, authInstanceAxios };
