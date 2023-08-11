const singleroute = [
  {
    path: 'register',
    name: '會員註冊',
    component: () => import(/* webpackChunkName: "group-singleroute" */ /* webpackChunkName: "group-singleroute" */ '../views/Register.vue'),
    meta: {
      title: '會員註冊'
    }
  },
  {
    path: 'registercreditcard',
    name: '卡友會員註冊',
    component: () => import(/* webpackChunkName: "group-singleroute" */ '../views/RegisterCreditCard.vue'),
    meta: {
      title: '卡友會員註冊'
    }
  },
  {
    path: 'membermobilelogin',
    name: '手機會員登入',
    component: () => import(/* webpackChunkName: "group-singleroute" */ '../views/MemberMobileLogin.vue'),
    meta: {
      title: '會員登入'
    }
  },
  {
    path: 'forgetpassword',
    name: '忘記密碼',
    component: () => import(/* webpackChunkName: "group-singleroute" */ '../views/ForgetPassword.vue'),
    meta: {
      title: '忘記密碼'
    }
  },
  {
    path: 'changepassword/:key(.*)',
    name: '變更密碼',
    component: () => import(/* webpackChunkName: "group-singleroute" */ '../views/ChangePassword.vue'),
    meta: {
      title: '變更密碼'
    }
  },
  {
    path: '/fromapp/:appId',
    name: 'ipasspay前導頁',
    component: () => import(/* webpackChunkName: "group-singleroute" */ '../views/FromApp.vue'),
    meta: {
      title: 'ipasspay前導頁'
    }
  },
  {
    path: '/test',
    component: () => import(/* webpackChunkName: "group-singleroute" */ '../views/Test.vue')
  }
]

export default singleroute
