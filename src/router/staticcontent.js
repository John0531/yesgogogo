const staticcontent = [
  {
    path: 'questions',
    name: '常見問題',
    component: () => import(/* webpackChunkName: "group-footer" */ '../views/FooterQuestions.vue'),
    meta: {
      title: '常見問題'
    }
  },
  {
    path: 'rights',
    name: '會員權益聲明',
    component: () => import(/* webpackChunkName: "group-footer" */ '../views/FooterRights.vue'),
    meta: {
      title: '會員權益聲明'
    }
  },
  {
    path: 'aboutus',
    name: '關於我們',
    component: () => import(/* webpackChunkName: "group-footer" */ '../views/FooterAboutUs.vue'),
    meta: {
      title: '關於我們'
    }
  },
  {
    path: 'returnexchangepolicy',
    name: '退換貨政策',
    component: () => import(/* webpackChunkName: "group-footer" */ '../views/FooterReturnExchangePolicy.vue'),
    meta: {
      title: '退換貨政策'
    }
  },
  {
    path: 'paymentways',
    name: '付款方式',
    component: () => import(/* webpackChunkName: "group-footer" */ '../views/FooterPaymentWays.vue'),
    meta: {
      title: '付款方式'
    }
  },
  {
    path: 'twca',
    name: 'TWCA認證',
    component: () => import(/* webpackChunkName: "group-footer" */ '../views/FooterTWCA.vue'),
    meta: {
      title: 'TWCA認證'
    }
  },
  {
    path: 'privacy',
    name: '隱私權聲明',
    component: () => import(/* webpackChunkName: "group-footer" */ '../views/FooterPrivacy.vue'),
    meta: {
      title: '隱私權聲明'
    }
  },
  {
    path: 'anti_deceive',
    name: '反詐騙提醒',
    component: () => import(/* webpackChunkName: "group-footer" */ '../views/FooterAntiDeceive.vue'),
    meta: {
      title: '反詐騙提醒'
    }
  },
  {
    path: 'copyright',
    name: '著作權聲明',
    component: () => import(/* webpackChunkName: "group-footer" */ '../views/FooterCopyRight.vue'),
    meta: {
      title: '著作權聲明'
    }
  }
]

export default staticcontent
