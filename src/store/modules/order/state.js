// 格式化数据
Date.prototype.format = function (fmt) {
  var o = {
    "M+": this.getMonth() + 1, //月份
    "d+": this.getDate(), //日
    "h+": this.getHours(), //小时
    "m+": this.getMinutes(), //分
    "s+": this.getSeconds(), //秒
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
    S: this.getMilliseconds(), //毫秒
  };
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(
      RegExp.$1,
      (this.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt))
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
  return fmt;
};
let tmpDay = new Date();
tmpDay.setDate(tmpDay.getDate());
let today = tmpDay.format("yyyy-MM-dd");
tmpDay = new Date();
tmpDay.setDate(tmpDay.getDate() + 1);
let tomorrow = tmpDay.format("yyyy-MM-dd");

export default {
  // start date
  oStartDate: today,
  // end date
  oEndDate: tomorrow,
  // room id
  oRoomId: "",
  //   hotel id
  oHotelId: "",
  oRoomBigBed: 1,
  oRoomBath: false,
  oRoomCon: false,
  oRoomWiFi: false,
  oRoomWindow: false,
};
