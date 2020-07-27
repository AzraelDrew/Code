/*
 * @Author       : yznaisy
 * @Date         : 2020-07-22 16:55:05
 * @LastEditors  : yznaisy
 * @LastEditTime : 2020-07-26 22:22:27
 * @FilePath     : \Code\VueJs\Vue-Router\vuerouter\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
// import Home from '../components/Home.vue'
// import About from '../components/About.vue'
// import User from '../components/User.vue'


// 路由懒加载
const Home = () => import('../components/Home')
// 路由嵌套
const HomeNews = () => import('../components/HomeNews.vue')
const HomeMessage = () => import('../components/HomeMessage.vue')

const About = () => import('../components/About')
const User = () => import('../components/User')
const Profile = () => import('../components/Profile')

// 安装/使用插件
Vue.use(Router)

// 路由重复
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

// 映射关系
const routes = [{
    // 没有值表示默认值
    path: "",
    // 路由默认路径
    redirect: '/home',
  }, {
    path: "/home",
    component: Home,
    // 元数据
    meta: {
      title: "首页"
    },
    // 路由嵌套
    children: [{
        path: "",
        redirect: "news"
      },
      {
        path: "news",
        component: HomeNews,
      },
      {
        path: "message",
        component: HomeMessage,
      }
    ]
  },
  {
    path: "/about",
    component: About,
    meta: {
      title: "关于"
    },
    beforeEnter: (to, from, next) => {
      console.log("about ----------")
      next();
    }
  },
  // 参数传递
  {
    path: "/profile",
    component: Profile,
    meta: {
      title: "档案"
    },
  },
  {
    // 动态路由
    path: "/user/:id",
    component: User,
    meta: {
      title: "用户"
    },
  },

]

// 导出/使用路由对象
const router = new Router({
  routes,
  // 模式
  mode: "history",
  // 当被选中时添加类
  linkActiveClass: "active"
})
// 全局导航守卫
// beforeEach(前置钩子)
router.beforeEach((to, from, next) => {
  // 从from到to
  document.title = to.matched[0].meta.title //路由跳转时调用
  // console.log(to)
  // console.log("+++++++")
  next(); //必须调用
})
router.afterEach((to, from) => {
  // console.log("--------")
  // next(); //  不需要主动调用
})
export default router
