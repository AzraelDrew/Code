/*
 * @Author       : yznaisy
 * @Date         : 2020-07-29 13:32:11
 * @LastEditors  : yznaisy
 * @LastEditTime : 2020-07-29 13:34:01
 * @FilePath     : \Code\VueJs\Vuex\vuex-cli2\src\store\mutations.js
 */
export default { // state为默认参数
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
}
