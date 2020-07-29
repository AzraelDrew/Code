/*
 * @Author       : yznaisy
 * @Date         : 2020-07-29 14:11:31
 * @LastEditors  : yznaisy
 * @LastEditTime : 2020-07-29 15:27:19
 * @FilePath     : \Code\VueJs\axios\axios-cli2\src\main.js
 */
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

axios({
  url: "http://123.207.32.32:8000/home/data?type=sell&page=3",
  method: "get"
}).then(res => {
  console.log(res)
})
