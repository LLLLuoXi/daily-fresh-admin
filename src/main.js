/*
 * @Author: luoxi
 * @LastEditTime: 2022-05-25 21:14:21
 * @LastEditors: your name
 * @Description:
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/ant-design-vue";
import "@/assets/css/reset.less";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
