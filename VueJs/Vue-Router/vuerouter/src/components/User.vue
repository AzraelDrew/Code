<!--
 * @Author       : yznaisy
 * @Date         : 2020-07-23 19:14:10
 * @LastEditors  : yznaisy
 * @LastEditTime : 2020-07-26 22:21:30
 * @FilePath     : \Code\VueJs\Vue-Router\vuerouter\src\components\User.vue
-->
<template>
  <div class="user">
    <h2>我是用户界面</h2>
    <p>我是用户的相关信息，嘿嘿</p>
    <!-- 动态路由 -->
    <!-- 函数方式 -->
    <h2>{{ userId }}</h2>
    <!-- 直接获取 -->
    <h2>{{ $route.params.id }}</h2>
    <button @click="btnClick">按钮</button>
  </div>
</template>

<script>
export default {
  name: "User",
  data() {
    return {};
  },
  // 创建后
  created() {
    // console.log("user created");
    // document.title = "首页";
  },
  // 销毁后
  destroyed() {
    // console.log("user destroyed");
  },
  methods: {
    btnClick() {
      // 所有组件继承自Vue类原型
      // index.js中导出的router
      console.log(this.$router);
      //  $route 处于活跃的路由
      console.log(this.$route);
    },
  },
  computed: {
    userId() {
      // 此处的abc与   /router/index.js中的abc一致
      return this.$route.params.id;
    },
  },
};
</script>

<style scoped>
</style>
