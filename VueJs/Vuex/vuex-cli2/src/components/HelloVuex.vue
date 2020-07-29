<!--
 * @Author       : yznaisy
 * @Date         : 2020-07-28 15:36:14
 * @LastEditors  : yznaisy
 * @LastEditTime : 2020-07-28 19:38:31
 * @FilePath     : \Code\VueJs\Vuex\vuex-cli2\src\components\HelloVuex.vue
-->
<template>
  <div>
    <h2>{{ $store.state.counter }}</h2>
    <h2>{{ $store.getters.powerCounter }}</h2>
  </div>
</template>

<script>
export default {
  name: "HelloVuex",
  props: {
    counter: Number,
  },
  data() {
    return {};
  },
};
</script>

<style scoped></style>
