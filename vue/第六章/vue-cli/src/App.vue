<!--
 * @Author       : yznaisy
 * @Date         : 2020-07-02 10:49:20
 * @LastEditors  : yznaisy
 * @LastEditTime : 2020-07-02 13:32:07
 * @FilePath     : \Code\vue\第六章\vue-cli\src\App.vue
--> 
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld
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
