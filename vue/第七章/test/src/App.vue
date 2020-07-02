<!--
 * @Author       : yznaisy
 * @Date         : 2020-07-02 15:29:13
 * @LastEditors  : yznaisy
 * @LastEditTime : 2020-07-02 16:41:36
 * @FilePath     : \Code\vue\第七章\test\src\App.vue
--> 
<template>
  <div id="app">
    <HelloWorld></HelloWorld>
    <Home></Home>
  </div>
</template>

<script>
//导入组件
import HelloWorld from "./components/HelloWorld.vue";
import Home from "./components/Home.vue";

export default {
  name: "App",
  //组件注册
  components: {
    HelloWorld,
    Home
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
