<!--
 * @Author       : yznaisy
 * @Date         : 2020-07-22 16:55:05
 * @LastEditors  : yznaisy
 * @LastEditTime : 2020-07-24 20:48:43
 * @FilePath     : \Code\VueJs\Vue-Router\vuerouter\src\App.vue
-->
<template>
  <div id="app">
    <h1>App组件</h1>
    <keep-alive></keep-alive>
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
    <!-- 动态路由(params) -->
    <!-- <router-link :to="'/user/'+userId" replace>用户</router-link> -->
    <!-- 参数传递(query) -->
    <!-- <router-link :to="{path:'/profile',query:{name:'yznaisy',age:'20',height:'170'}}" replace>档案</router-link> -->

    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>
    <!-- 组件渲染的位置 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
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
    // 代码参数传递
    userClick() {
      this.$router.push("/user/" + this.userId);
    },
    profileClick() {
      this.$router.push({
        path: "/profile",
        query: {
          name: "yznaisy",
          age: "19",
          height: "175",
        },
      });
    },
  },
};
</script>

<style>
.active {
  color: red;
}
</style>
