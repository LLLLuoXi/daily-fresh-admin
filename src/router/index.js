/*
 * @Author: luoxi
 * @LastEditTime: 2022-05-25 22:22:00
 * @LastEditors: your name
 * @Description:
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/layout/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [],
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
