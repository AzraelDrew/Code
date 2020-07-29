/*
 * @Author       : yznaisy
 * @Date         : 2020-07-29 13:36:37
 * @LastEditors  : yznaisy
 * @LastEditTime : 2020-07-29 13:37:32
 * @FilePath     : \Code\VueJs\Vuex\vuex-cli2\src\store\actions.js
 */
export default {
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
}
