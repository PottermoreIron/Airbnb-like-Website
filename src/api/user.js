import { request } from "@/utils/axios.js";
import qs from "qs";
export const userRegister = (params) =>
  request.post("/userRegister", qs.stringify(params));
export const userLogin = (params) =>
  request.get("/userLogin", {
    params,
  });
