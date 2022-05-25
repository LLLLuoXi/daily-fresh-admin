<!--
 * @Author: luoxi
 * @LastEditTime: 2022-05-25 22:35:28
 * @LastEditors: your name
 * @Description: 
-->
<template>
  <div class="home">
    <LeftMenu />
    <div :class="{ 'main-app': true, 'menu-unfold': $store.state.collapsed }">
      <SlideNav />
      <router-view> </router-view>
    </div>
  </div>
</template>

<script>
import LeftMenu from "@components/Menu";
import SlideNav from "@components/SlideNav";
export default {
  data() {
    return {};
  },
  components: { LeftMenu, SlideNav },
  methods: {},
};
</script>
<style lang="less">
@import url("~@/assets/css/home.less");
</style>
