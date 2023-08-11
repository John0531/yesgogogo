const productboard = {
  path: 'productboard',
  component: () => import(/* webpackChunkName: "group-product" */ '../views/Productboard.vue'),
  children: [
    {
      path: 'product/:productId',
      // name: '商品明細',
      component: () => import(/* webpackChunkName: "group-product" */ '../views/Product.vue')
    },
    {
      path: 'productlist/:categoryId',
      component: () => import(/* webpackChunkName: "group-product" */ '../views/ProductList.vue')
    },
    {
      path: 'productlistfullshipment/:fullshipmentId',
      // name: '商品明細',
      component: () => import(/* webpackChunkName: "group-product" */ '../views/ProductListFullShipment.vue')
    },
    /* 商品搜尋 */
    {
      path: 'productsearch/:keyword',
      name: '商品搜尋',
      component: () => import(/* webpackChunkName: "group-product" */ '../views/ProductSearch.vue')
    }
  ]
}

export default productboard
