import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 注册百度地图
import "./baiduMap/index";
// 注册element ui
import "./elementUI/index";
// iconfont 图标
import "./assets/icon/iconfont/iconfont.css";
// iconfont 彩色图标
import "./assets/icon/iconfont/iconfont.js";
// airbnb 日期选择器
import "./airbnb/index";
// element-ui mesage组件
import { Message } from "element-ui";
// 别改成Vue.use,不然每次刷新都有一个空的消息框
Vue.component(Message.name, Message);
Vue.prototype.$message = Message;
Vue.config.productionTip = false;

// 设置反向代理，前端请求默认发送到 http://localhost:8080/api
var axios = require("axios");
axios.defaults.baseURL = "http://localhost:8080/api";
// 全局注册，之后可在其他组件中通过 this.$axios 发送数据
Vue.prototype.$axios = axios;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
