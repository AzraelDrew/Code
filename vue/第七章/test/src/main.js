/*
 * @Author       : yznaisy
 * @Date         : 2020-07-02 15:29:13
 * @LastEditors  : yznaisy
 * @LastEditTime : 2020-07-02 16:33:20
 * @FilePath     : \Code\vue\第七章\test\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')