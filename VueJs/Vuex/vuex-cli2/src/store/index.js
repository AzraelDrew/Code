/*
 * @Author       : yznaisy
 * @Date         : 2020-07-28 15:54:28
 * @LastEditors  : yznaisy
 * @LastEditTime : 2020-07-29 13:43:32
 * @FilePath     : \Code\VueJs\Vuex\vuex-cli2\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'

// 类型常量
import {
  INCREMENT
} from './mutation-types'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import moduleA from './modules/moduleA'

Vue.use(Vuex);

const state = {
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
}
// const moduleA = a

// 单样状态熟，值使用一个store
const store = new Vuex.Store({
  // 状态树
  // 更改state必须通过mutations（VuedevTools）
  state: state,
  mutations: mutations,
  // 类似mutation用于替代mutation的异步操作
  actions: actions,
  // 类似与计算属性
  getters: getters,
  modules: {
    a: moduleA,
  }
});

export default store
