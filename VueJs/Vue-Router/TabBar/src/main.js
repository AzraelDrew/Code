/*
 * @Author       : yznaisy
 * @Date         : 2020-07-26 15:17:25
 * @LastEditors  : yznaisy
 * @LastEditTime : 2020-07-26 15:48:57
 * @FilePath     : \Code\VueJs\Vue-Router\TabBar\src\main.js
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
