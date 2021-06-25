import { request } from "@/utils/axios.js";
export const userLogin = (params) =>
  request.get("", {
    params,
  });
