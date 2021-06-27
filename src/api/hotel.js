import { request } from "@/utils/axios.js";
// import qs from "qs";
// 没写好
// 首页的酒店列表
export const getDefaultHotelList = (params) =>
  request.get("/userLogin", {
    params,
  });
// 只有keyWord的酒店搜索
export const getKeyHotelList = (params) =>
  request.get("/userLogin", {
    params,
  });
// 有keyWord和日期的酒店搜索
export const getKeyDateHotelList = (params) =>
  request.get("/userLogin", {
    params,
  });
// 全能酒店搜索
export const getLabelHotelList = (params) =>
  request.get("/userLogin", {
    params,
  });
