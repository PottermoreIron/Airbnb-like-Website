const webpack = require("webpack");
module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "windows.jQuery": "jquery",
      }),
    ],
    resolve: {
      alias: {
        assets: "@/assets",
        common: "@/common",
        components: "@/components",
        network: "@/network",
        views: "@/views",
      },
    },
  },
  devServer: {
    open: true,
    proxy: {
      "/api": {
        // 由于接口的源与网页的源不一样(端口),所以要设置proxy跨域
        target: "http://localhost:8080",
        // 后端识别时把/api替换为空,因为接口本身没有prefix
        pathRewrite: {
          "^/api": "",
        },
        // 设置为true,本地就会虚拟一个服务器接收你的请求并代你发送该请求
        // 其实就是改变请求中的header,与请求服务器同域
        changeOrigin: true,
        // http接口
        secure: false,
      },
    },
  },
};
