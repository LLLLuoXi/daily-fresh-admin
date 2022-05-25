/*
 * @Author: luoxi
 * @LastEditTime: 2022-05-25 22:34:46
 * @LastEditors: your name
 * @Description:
 */
const path = require("path");
module.exports = {
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  chainWebpack: (config) => {
    config.resolve.alias.set(
      "@components",
      path.resolve(__dirname, "src/components")
    );
  },
};
