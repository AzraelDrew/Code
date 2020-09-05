/*
 * @Author       : yznaisy
 * @Date         : 2020-07-29 13:39:03
 * @LastEditors  : yznaisy
 * @LastEditTime : 2020-08-20 14:15:25
 * @FilePath     : \vuex-cli2\src\store\modules\moduleA.js
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
      console.log(rootState)
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
