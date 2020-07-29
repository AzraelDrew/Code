/*
 * @Author       : yznaisy
 * @Date         : 2020-07-29 13:38:02
 * @LastEditors  : yznaisy
 * @LastEditTime : 2020-07-29 13:38:09
 * @FilePath     : \Code\VueJs\Vuex\vuex-cli2\src\store\getters.js
 */
export default {
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
}
