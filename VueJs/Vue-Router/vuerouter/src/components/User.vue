<!--
 * @Author       : yznaisy
 * @Date         : 2020-07-23 19:14:10
 * @LastEditors  : yznaisy
 * @LastEditTime : 2020-07-23 22:02:01
 * @FilePath     : \Code\VueJs\Vue-Router\vuerouter\src\components\User.vue
-->
<template>
  <div class="user">
    <h2>我是用户界面</h2>
    <p>我是用户的相关信息，嘿嘿</p>
    <!-- 动态路由 -->
    <h2>{{ userId }}</h2>
    <h2>{{ $route.params.abc }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    userId() {
      // 此处的abc与   /router/index.js中的abc一致
      return this.$route.params.abc;
    },
  },
};
</script>

<style scoped>
</style>
