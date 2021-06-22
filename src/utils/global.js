import * as utils from "./index";
// 导出utils,这样可以全局使用utils包里的js方法
export default {
  install(Vue) {
    Vue.prototype.$utils = utils;
  },
};
