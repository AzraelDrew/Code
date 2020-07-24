<!--
 * @Author       : yznaisy
 * @Date         : 2020-07-24 13:50:04
 * @LastEditors  : yznaisy
 * @LastEditTime : 2020-07-24 15:31:50
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
  data() {
    return {};
  },
  // created() {
  //   console.log("created");
  //   document.title = "档案";
  // },
};
</script>

<style scoped>
</style>
