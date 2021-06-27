import { request } from "@/utils/axios.js";
// 检查这个order可不可以有
export const checkOrdeer = (params) =>
  request.get("/userLogin", {
    params,
  });
//   创建order
export const CreateOrder = (params) =>
  request.get("/userLogin", {
    params,
  });
