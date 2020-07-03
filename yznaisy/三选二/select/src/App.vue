<!--
 * @Author       : yznaisy
 * @Date         : 2020-07-03 13:29:05
 * @LastEditors  : yznaisy
 * @LastEditTime : 2020-07-03 22:16:29
 * @FilePath     : \Code\yznaisy\三选二\select\src\App.vue
--> 
<template>
  <div id="app">
    <Toggler :size="3" :checked="checked[0]" @updated="(value)=>updateHandler(0,value)">Good</Toggler>
    <Toggler :size="3" :checked="checked[1]" @updated="(value)=>updateHandler(1,value)">Cheap</Toggler>
    <Toggler :size="3" :checked="checked[2]" @updated="(value)=>updateHandler(2,value)">Fast</Toggler>
  </div>
</template>

<script>
import Toggler from "./components/Toggler.vue";
export default {
  name: "App",
  components: {
    Toggler
  },
  data() {
    return {
      // 关闭所有按钮
      checked: [false, false, false],
      //监听按钮状态
      indexs: []
    };
  },
  methods: {
    updateHandler(index, value) {
      if (value && !this.indexs.includes(index)) {
        let newIndexes = [...this.indexs];
        newIndexes.push(index);
        this.indexs = newIndexes;
      }
      if (!value && this.indexs.includes(index)) {
        let newIndexes = [...this.indexs];
        newIndexes.splice(this.indexs.indexOf(index), 1);
        this.indexs = newIndexes;
      }
      //如果三个开关都打开将第一个开关关闭
      if (this.indexs.length === 3) {
        let newIndexes = [...this.indexs];
        newIndexes.splice(0, 1);
        this.indexs = newIndexes;
      }
      let checked = [false, false, false];
      if (typeof this.indexs[0] !== "undefined") {
        checked[this.indexs[0]] = true;
      }
      if (typeof this.indexs[1] !== "undefined") {
        checked[this.indexs[1]] = true;
      }
      this.checked = checked;
    }
  }
};
</script>
<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-10%, 70%);
}
@media (prefers-color-scheme: dark) {
  body {
    background-color: #1c1c1e;
  }

  span {
    background-color: var(--color-dark-grey);
  }
}
</style>