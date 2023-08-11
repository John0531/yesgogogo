const cartboard = {
  path: 'checkoutboard',
  component: () => import(/* webpackChunkName: "group-cart" */'../views/Checkoutboard.vue'),
  children: [
    {
      path: 'checkoutcartlist',
      name: '購物車列表',
      component: () => import(/* webpackChunkName: "group-cartlist" */'../views/CheckoutCartList.vue'),
      meta: {
        title: '購物車列表'
      }
    },
    {
      path: 'checkoutcart',
      name: '購物車',
      component: () => import(/* webpackChunkName: "group-cart" */'../views/CheckoutCart.vue'),
      meta: {
        title: '購物車'
      }
    },
    {
      path: 'checkoutinfo',
      name: '填寫資料',
      component: () => import(/* webpackChunkName: "group-cartinfo" */'../views/CheckoutInfo.vue'),
      meta: {
        title: '填寫資料'
      }
    },
    {
      path: 'ordercomplete/:oid',
      name: '訂單確認',
      component: () => import(/* webpackChunkName: "group-ordercomplete" */'../views/OrderComplete.vue'),
      meta: {
        title: '訂單確認'
      },
      alias: 'ordercomplete/:oid/:ts'
    },
    {
      path: 'ordercomplete/notfound',
      name: 'notfound',
      component: () => import(/* webpackChunkName: "group-ordercomplete" */'../views/OrderNotFound.vue'),
      meta: {
        title: '訂單不存在'
      }
    }
  ]
}

export default cartboard
