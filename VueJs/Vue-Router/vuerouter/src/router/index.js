/*
 * @Author       : yznaisy
 * @Date         : 2020-07-22 16:55:05
 * @LastEditors  : yznaisy
 * @LastEditTime : 2020-07-23 22:02:10
 * @FilePath     : \Code\VueJs\Vue-Router\vuerouter\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import User from '../components/User.vue'

// 安装/使用插件
Vue.use(Router)

// 映射关系
const routes = [{
    // 没有值表示默认值
    path: "",
    // 路由默认路径
    redirect: '/home'
  }, {
    path: "/home",
    component: Home
  },
  {
    path: "/about",
    component: About
  },
  {
    // 动态路由
    path: "/user/:abc",
    component: User
  },
]

// 导出/使用路由对象
export default new Router({
  routes,
  // 模式
  mode: "history",
  // 当被选中时添加类
  linkActiveClass: "active"
})
