/*
 * @Author       : yznaisy
 * @Date         : 2020-07-28 15:27:20
 * @LastEditors  : yznaisy
 * @LastEditTime : 2020-07-28 15:58:44
 * @FilePath     : \Code\VueJs\Vuex\vuex\src\main.js
 */
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
