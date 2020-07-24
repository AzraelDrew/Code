<!--
 * @Author       : yznaisy
 * @Date         : 2020-07-23 16:38:37
 * @LastEditors  : yznaisy
 * @LastEditTime : 2020-07-24 21:38:09
 * @FilePath     : \Code\VueJs\Vue-Router\vuerouter\src\components\Home.vue
-->
<template>
  <div class="home">
    <h2>我是主页</h2>
    <p>我事主页内容，哈哈哈</p>
    <!-- 路由嵌套 -->
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      path: "/home/news",
    };
  },
  // 创建后
  created() {
    console.log("created");
    // document.title = "首页";
  },
  // 销毁后
  destroyed() {
    console.log("destroyed");
  },
  /*   activated和deactivated这两个函数只有在该组件保持了状态使用了keep-alive时
  才是有效的 */
  // 活跃时调用
  activated() {
    this.$router.push(this.path);
    console.log("activated");
  },
  // 不活跃
  deactivated() {
    console.log("deactivated");
  },
  // 组件内导航守卫
  beforeRouteLeave(to, from, next) {
    this.path = this.$route.path;
    next();
  },
};
</script>

<style scoped>
</style>
