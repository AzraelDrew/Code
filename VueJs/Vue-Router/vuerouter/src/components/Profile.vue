<!--
 * @Author       : yznaisy
 * @Date         : 2020-07-24 13:50:04
 * @LastEditors  : yznaisy
 * @LastEditTime : 2020-07-26 14:50:59
 * @FilePath     : \Code\VueJs\Vue-Router\vuerouter\src\components\Profile.vue
-->
<template>
  <div class="profile">
    <h2>我是Profile</h2>
    <h2>{{ $route.query.name }}</h2>
    <h2>{{ $route.query.age }}</h2>
    <h2>{{ $route.query.height }}</h2>
  </div>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {};
  },
  // 创建后
  created() {
    // console.log("profile created");
    // document.title = "首页";
  },
  // 销毁后
  destroyed() {
    // console.log("profile destroyed");
  },
  // created() {
  //   console.log("created");
  //   document.title = "档案";
  // },
};
</script>

<style scoped>
</style>
