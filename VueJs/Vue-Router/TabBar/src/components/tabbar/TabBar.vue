<!--
 * @Author       : yznaisy
 * @Date         : 2020-07-26 16:02:36
 * @LastEditors  : yznaisy
 * @LastEditTime : 2020-07-26 16:22:48
 * @FilePath     : \Code\VueJs\Vue-Router\TabBar\src\components\tabbar\TabBar.vue
-->
<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  data() {
    return {};
  }
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
}

#tab-bar {
  display: flex;
  flex-direction: row;
  background-color: #f6f6f6;

  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  box-shadow: 0 -2px 1px rgba(100, 100, 100, 0.1);
}
</style>
