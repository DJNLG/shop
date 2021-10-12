import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
const home = r => require.ensure([], () => r(require('../components/home')), 'home')
const list = r => require.ensure([], () => r(require('../components/list')), 'list')
const login = r => require.ensure([], () => r(require('../components/head/login')), 'login')

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/list',
      name: 'list',
      component: list,
      beforeEnter: (to, from, next) => {
        next()
      }
    },
    {
      path: '/login/:id',
      name: 'login',
      component: login,
      beforeEnter: (to, from, next) => {
        console.log('beforeEnter')
        next()
      },
      meta: {
        title: '登录'
      }
    }
  ]
})
router.beforeEach(function (to, from, next) {
  console.log('beforeeach')
  next()
})
router.afterEach(function (to, from) {
  console.log('aftereach')
})
export default router
