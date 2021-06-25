import Vue from "vue";
import AirbnbStyleDatepicker from "vue-airbnb-style-datepicker";
import "vue-airbnb-style-datepicker/dist/vue-airbnb-style-datepicker.min.css";
const datepickerOptions = {
  days: ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"],
  daysShort: ["一", "二", "三", "四", "五", "六", "日"],
  monthNames: [
    "1月",
    "2月",
    "3月",
    "4月",
    "5月",
    "6月",
    "7月",
    "8月",
    "9月",
    "10月",
    "11月",
    "12月",
  ],
  //   colors: { text: "#008484", inRange: "#008484", selectedText: "#fff" },
  colors: {
    selected: "#008484",
    //   选中的背景颜色
    // selected: "	#DC143C",
    inRange: "#008484",
    // 选中后的range颜色
    // inRange: "#DC143C",
    selectedText: "#fff",
    // 选中的日期颜色
    // selectedText: "#DC143C",

    text: "#008484",
    // 默认的日期颜色
    // text: "#DC143C",
    // inRangeBorder: "#33dacd",
    inRangeBorder: "#008484",
    // 在范围内的border颜色
    // inRangeBorder: "#DC143C",
    disabled: "#fff",
    // hoveredInRange: "#67f6ee",
    // 没选时的range背景颜色
    hoveredInRange: "#CCEEEB",
  },
  texts: {
    apply: " ",
    cancel: "清除日期",
  },
  keyboardShortcuts: [],
};
Vue.use(AirbnbStyleDatepicker, datepickerOptions);
