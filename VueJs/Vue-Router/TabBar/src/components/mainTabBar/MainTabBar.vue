<!--
 * @Author       : yznaisy
 * @Date         : 2020-07-26 18:19:32
 * @LastEditors  : yznaisy
 * @LastEditTime : 2020-07-26 22:47:16
 * @FilePath     : \Code\VueJs\Vue-Router\TabBar\src\components\mainTabBar\MainTabBar.vue
-->
<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <img slot="item-icon" src="~assets/image/tabbar/home.svg" alt />
      <img slot="item-icon-active" src="~assets/image/tabbar/home_active.svg" alt />
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img slot="item-icon" src="~assets/image/tabbar/category.svg" alt />
      <img slot="item-icon-active" src="~assets/image/tabbar/category_active.svg" alt />
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img slot="item-icon" src="~assets/image/tabbar/shopcart.svg" alt />
      <img slot="item-icon-active" src="~assets/image/tabbar/shopcart_active.svg" alt />
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="item-icon" src="~assets/image/tabbar/profile.svg" alt />
      <img slot="item-icon-active" src="~assets/image/tabbar/profile_active.svg" alt />
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "components/tabbar/TabBar";
import TabBarItem from "components/tabbar/TabBarItem";
export default {
  name: "MainTabBar",
  data() {
    return {};
  },
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style scoped></style>
