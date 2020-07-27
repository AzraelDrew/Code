/*
 * @Author       : yznaisy
 * @Date         : 2020-07-26 15:17:25
 * @LastEditors  : yznaisy
 * @LastEditTime : 2020-07-26 17:55:11
 * @FilePath     : \Code\VueJs\Vue-Router\TabBar\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')

Vue.use(Router)

// 路由重复
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const routes = [{
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  }
]
export default new Router({
  routes,
  mode: "history"
})
