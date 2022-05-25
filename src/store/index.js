/*
 * @Author: luoxi
 * @LastEditTime: 2022-05-25 21:58:13
 * @LastEditors: your name
 * @Description:
 */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 表示menu闭合状态，false表示menu不闭合
    collapsed: false,
  },
  mutations: {
    changeCollapsed(state) {
      state.collapsed = !state.collapsed;
    },
  },
  actions: {
    changeCollapsed({ commit }) {
      commit("changeCollapsed");
    },
  },
  modules: {},
});
