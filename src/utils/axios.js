import axios from "axios";
const BASE_URL = "/api";
export const request = createBaseInstance();

function createBaseInstance() {
  const instance = axios.create({
    baseURL: BASE_URL,
  });
  instance.interceptors.response.use(handleResponse, handleError);
  return instance;
}

function handleResponse(response) {
  return response.data;
}

function handleError(e) {
  confirm(e.message, "Fail!");
  throw e;
}
