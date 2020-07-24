/*
 * @Author       : yznaisy
 * @Date         : 2020-07-22 16:55:05
 * @LastEditors  : yznaisy
 * @LastEditTime : 2020-07-24 20:30:31
 * @FilePath     : \Code\VueJs\Vue-Router\vuerouter\src\main.js
 */
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
// console.log(router)
