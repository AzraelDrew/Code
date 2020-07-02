<!--
 * @Author       : yznaisy
 * @Date         : 2020-07-02 15:45:28
 * @LastEditors  : yznaisy
 * @LastEditTime : 2020-07-02 16:40:52
 * @FilePath     : \Code\vue\第七章\test\src\components\Home.vue
--> 
<!-- template中只能有一个根元素 -->
<template>
  <div>
    <p>Server Status:{{status}}</p>
    <hr />
    <button @click="changeStatus">changeStatus</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      status: "Critical"
    };
  },
  methods: {
    changeStatus() {
      this.status = "Normal";
    }
  }
};
</script>
<style lang="">
</style>