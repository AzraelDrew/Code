<!--
 * @Author       : yznaisy
 * @Date         : 2020-07-28 15:27:20
 * @LastEditors  : yznaisy
 * @LastEditTime : 2020-07-28 22:20:28
 * @FilePath     : \Code\VueJs\Vuex\vuex-cli2\src\App.vue
-->
<template>
  <div id="app">
    <h2>---------App内容-------</h2>
    <h2>{{ message }}</h2>
    <h2>{{ $store.state.counter }}</h2>
    <!-- <button @click="counter--">-</button>
    <button @click="counter++">+</button>-->

    <!-- <button @click="$store.state.counter--">-</button>
    <button @click="$store.state.counter++">+</button>-->
    <button @click="addtion">-</button>
    <button @click="subtraction">+</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent">添加学生</button>

    <h2>---------App内容 getters-------</h2>
    <h2>{{ $store.getters.powerCounter }}</h2>
    <h2>{{$store.getters.morestu}}</h2>
    <h2>{{$store.getters.moreStuLength}}</h2>
    <h2>{{$store.getters.moreAgeStu(19)}}</h2>

    <h2>---------App内容 mutations-------</h2>
    <h2>{{ $store.state.info }}</h2>
    <button @click="updateInfo">修改信息</button>

    <h2>---------App内容 module-------</h2>
    <h2>{{$store.state.a.name}}</h2>
    <button @click="updateName">修改名字</button>
    <h2>{{$store.getters.fullName}}</h2>
    <h2>{{$store.getters.fullName2}}</h2>
    <h2>{{$store.getters.fullName3}}</h2>
    <button @click="asyncUpdateName">异步修改</button>

    <h2>----------Hello Vuex内容--------</h2>
    <!-- <hello-vuex :counter="counter"></hello-vuex> -->
    <hello-vuex></hello-vuex>
  </div>
</template>

<script>
import HelloVuex from "./components/HelloVuex";
import { INCREMENT } from "./store/mutation-types";
export default {
  name: "App",
  components: {
    HelloVuex,
  },
  data() {
    return {
      message: "我是App组件",
      counter: 0,
    };
  },
  computed: {},
  methods: {
    addtion() {
      // commit("时间类型")
      this.$store.commit("decrement");
    },
    subtraction() {
      // 类型常量
      this.$store.commit(INCREMENT);
    },
    addCount(count) {
      // 普通提交
      // this.$store.commit("incrementCount", count); //count的值回传入incrementCount方法，称为payload(载荷)
      // 特殊提交封装
      this.$store.commit({
        type: "incrementCount",
        count,
      });
    },
    addStudent() {
      const stu = { id: 114, name: "alan", age: 34 };
      this.$store.commit("addStudent", stu);
    },
    updateInfo() {
      // mutations
      // this.$store.commit("updateInfo");
      // actions
      // this.$store.dispatch("aupdateInfo", {
      //   message: "我是携带的信息",
      //   success() {
      //     console.log("里面已经完成");
      //   },
      // });
      // 可以拿到aupdateInfo返回的Promise
      this.$store.dispatch("aupdateInfo", "里面已经完成").then((res) => {
        console.log("里面完成了提交");
        console.log(res);
      });
    },
    updateName() {
      this.$store.commit("updateName", "lisi");
    },
    asyncUpdateName() {
      this.$store.dispatch("aUpdateName");
    },
  },
};
</script>

<style></style>
