import { request } from "@/utils/axios.js";
// 拿到某酒店的评论
export const getHotelComment = (params) =>
  request.get("/api/hotelManager/getAllCommentsByHotelId", {
    params,
  });
