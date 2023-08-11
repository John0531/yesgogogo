import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import { trackRouter } from 'vue-gtag-next'
import yggevent from './yggevent'
import productboard from './productboard'
import memberboard from './memberboard'
import cartboard from './cartboard'
import staticcontent from './staticcontent'
import singleroute from './singleroute'

const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "group-home" */ '../views/Frontend.vue'),
    children: [
      {
        path: '/',
        name: '首頁',
        component: () => import(/* webpackChunkName: "group-home" */ '../views/Home.vue'),
        meta: {
          title: 'yesgogogo 即食購'
        }
      },
      {
        path: '/video',
        name: '首頁影音專區',
        component: () => import(/* webpackChunkName: "group-home" */ '../views/Home.vue'),
        meta: {
          title: 'yesgogogo 即食購'
        }
      },
      {
        path: '/JiaoFangDian',
        name: '椒房殿',
        component: () => import(/* webpackChunkName: "group-jiao" */ '../views/activity/Jiao.vue'),
        meta: {
          title: '椒房殿'
        }
      },
      /* 商品 */
      productboard,
      /* 註冊、忘記密碼 */
      ...singleroute,
      /* 會員專區 */
      memberboard,
      /* 購物車 結帳流程 */
      cartboard,
      /* 靜態頁面 */
      ...staticcontent
    ]
  },
  yggevent,
  {
    // ?未對應的路由重新導向到首頁
    path: '/:pathMatch(.*)*',
    redirect: {
      name: '首頁'
    }
  }
]

// const routesgungao = [{
//   path: '/:pathMatch(.*)*',
//   component: () => import('../views/Outofservice.vue')
// }]

const routeCfg = {
  history: createWebHistory(),
  scrollBehavior (to, from) {
    //* 手機登入，click購物車icon，登入後到購物車頁面
    if (from.fullPath.match('/membermobilelogin')) {
      store.commit('refreshClickCart', true)
    }
    //* 刷新電子發票頁
    // if (from.fullPath === '/memberboard/memberorder') {
    //   store.commit('refreshclickEreceipt', true)
    // }
    return {
      top: 0
    }
  }
}

routeCfg.routes = routes
// routeCfg.routes = routesgungao
// if (location.host === 'ygg.yesgogogo.com') {
//   routeCfg.routes = routes
// } else if (Date.now() > Date.parse(process.env.VUE_APP_GunGao)) {
//   routeCfg.routes = routes
// }

const router = createRouter(routeCfg)

trackRouter(router)

export default router
