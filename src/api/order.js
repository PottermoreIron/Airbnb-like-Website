import { request } from "@/utils/axios.js";
// 检查这个order可不可以有
export const checkOrder = (params) =>
  request.get("/purchase/show", {
    params,
  });
//   创建order
export const createOrder = (params) =>
  request.get("/purchase/set", {
    params,
  });
