<!--
 * @Author       : yznaisy
 * @Date         : 2020-07-22 16:55:05
 * @LastEditors  : yznaisy
 * @LastEditTime : 2020-07-23 22:02:25
 * @FilePath     : \Code\VueJs\Vue-Router\vuerouter\src\App.vue
-->
<template>
  <div id="app">
    <!--
      to：跳转到指定路径
      tag：将router-link渲染成指定的标签
      replace：浏览器返回前进按钮失效(不会留下history )
    -->
    <!-- <router-link to="/home" tag="button" replace active-class="active">首页</router-link>
    <router-link to="/about" tag="button" replace active-class="active">关于</router-link>-->
    <!-- <router-link to="/home" tag="button" replace active-class="active">首页</router-link>
    <router-link to="/about" tag="button" replace active-class="active">关于</router-link>-->
    <!-- 通过代码跳转路由 -->
    <!-- <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button>-->
    <router-link to="/home" replace>首页</router-link>
    <router-link to="/about" replace>关于</router-link>
    <!-- 动态路由 -->
    <router-link :to="'/user/'+userId" replace>用户</router-link>
    <!-- 组件渲染的位置 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: "lisi",
    };
  },
  name: "App",
  methods: {
    // 通过代码跳转路由
    homeClick() {
      // this.$router.push("/home");
      this.$router.replace("/home");
    },
    aboutClick() {
      // this.$router.push("/about");
      this.$router.replace("/about");
    },
  },
};
</script>

<style>
.active {
  color: red;
}
</style>
