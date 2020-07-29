/*
 * @Author       : yznaisy
 * @Date         : 2020-07-29 13:39:03
 * @LastEditors  : yznaisy
 * @LastEditTime : 2020-07-29 13:39:33
 * @FilePath     : \Code\VueJs\Vuex\vuex-cli2\src\store\modules\a.js
 */
export default {
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
