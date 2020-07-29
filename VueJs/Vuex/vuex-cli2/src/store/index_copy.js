/*
 * @Author       : yznaisy
 * @Date         : 2020-07-28 15:54:28
 * @LastEditors  : yznaisy
 * @LastEditTime : 2020-07-28 22:33:51
 * @FilePath     : \Code\VueJs\Vuex\vuex-cli2\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'

// 类型常量
import {
  INCREMENT
} from './mutation-types'


Vue.use(Vuex);

const moduleA = {
  state: {
    name: "zhangsan"
  },
  mutations: {
    updateName(state, payload) {
      state.name = payload
    }
  },
  getters: {
    fullName(state) {
      return state.name + "111"
    },
    fullName2(state, getters) {
      return getters.fullName + "222"
    },
    // 模块中可以有第三个参数
    fullName3(state, getters, rootState) {
      return getters.fullName2 + rootState.counter
    },
  },
  actions: {
    aUpdateName(context) {
      setTimeout(() => {
        context.commit("updateName", "wangwu")
      }, 1000)
    }
  },
}

// 单样状态熟，值使用一个store
const store = new Vuex.Store({
  // 状态树
  // 更改state必须通过mutations（VuedevTools）
  state: {
    counter: 1000,
    students: [{
        id: 110,
        name: "yzn",
        age: 19
      },
      {
        id: 111,
        name: "sy",
        age: 20
      },
      {
        id: 112,
        name: "kobe",
        age: 39
      },
      {
        id: 113,
        name: "curry",
        age: 29
      },
    ],
    info: {
      name: "yzn",
      age: 20,
      height: 175
    }
  },
  mutations: {
    // state为默认参数
    // 事件类型+回调函数
    // 类型常量
    // [INCREMENT](state) {
    //   state.counter++
    // },
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    incrementCount(state, payload) {
      console.log(payload)
      state.counter += payload.count
      // state.counter += patload
    },
    addStudent(state, stu) {
      state.students.push(stu)
    },
    updateInfo(state) {
      // mutation中的方法必须是同步,异步操作vuedevtools跟踪不到
      // setTimeout(() => {
      //   state.info.name = "coderwhy"
      // }, 1000)
      state.info.name = "coderwhy"
      // state.info["address"] = "洛杉矶" //需要响应式的属性都必须提声明
      // Vue.set(state.info, "address", "洛杉矶") //此方法可以做到响应式
      // delete state.info.age  //不是响应式
      // Vue.delete(state.info, "age") //此方法可以做到响应式
    }
  },
  // 类似mutation用于替代mutation的异步操作
  actions: {
    // context  上下文
    //   aupdateInfo(context, payload) {
    //     setTimeout(() => {
    //       context.commit("updateInfo");
    //       console.log(payload.message)
    //       payload.success()
    //     }, 1000)
    //   }
    // },
    aupdateInfo(context, payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit("updateInfo");
          console.log(payload)
          resolve("1111")
        }, 1000)
      })
    }
  },
  // 类似与计算属性
  getters: {
    powerCounter(state) {
      return state.counter * state.counter
    },
    morestu(state) {
      return state.students.filter((s) => s.age > 20);
    },
    moreStuLength(state, getters) {
      return getters.morestu.length
    },
    moreAgeStu(state) {
      // return function (age) {
      //   return state.students.filter(s => s.age > age)
      // }
      return age => {
        return state.students.filter(s => s.age > age)
      }
    }
  },
  modules: {
    a: moduleA,
  }
});

export default store
