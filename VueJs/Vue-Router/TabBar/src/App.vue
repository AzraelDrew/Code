<!--
 * @Author       : yznaisy
 * @Date         : 2020-07-26 15:17:25
 * @LastEditors  : yznaisy
 * @LastEditTime : 2020-07-26 18:24:09
 * @FilePath     : \Code\VueJs\Vue-Router\TabBar\src\App.vue
-->
<template>
  <div id="app">
    <router-view></router-view>
    <!-- <tab-bar>
      <tab-bar-item path="/home">
        <img slot="item-icon" src="./assets/image/tabbar/home.svg" alt="" />
        <img
          slot="item-icon-active"
          src="./assets/image/tabbar/home_active.svg"
          alt=""
        />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img slot="item-icon" src="./assets/image/tabbar/category.svg" alt="" />
        <img
          slot="item-icon-active"
          src="./assets/image/tabbar/category_active.svg"
          alt=""
        />
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img slot="item-icon" src="./assets/image/tabbar/shopcart.svg" alt="" />
        <img
          slot="item-icon-active"
          src="./assets/image/tabbar/shopcart_active.svg"
          alt=""
        />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="item-icon" src="./assets/image/tabbar/profile.svg" alt="" />
        <img
          slot="item-icon-active"
          src="./assets/image/tabbar/profile_active.svg"
          alt=""
        />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar> -->
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import TabBar from "./components/tabbar/TabBar";
import TabBarItem from "./components/tabbar/TabBarItem";
import MainTabBar from "./components/mainTabBar/MainTabBar";
export default {
  name: "App",
  components: {
    TabBar,
    TabBarItem,
    MainTabBar
  }
};
</script>

<style>
@import url("./assets/css/base.css");
</style>
