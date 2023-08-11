<template>
  <section>
    <BannerInside class="mb-4">
    </BannerInside>
    <div>
    <!-- 篩選按鈕 -->
      <div class="d-lg-flex justify-content-end align-items-center mt-4 mt-lg-5 mb-3">
        <div
          class="btn-group sort-btn-group mt-2 mt-lg-0 w-100 w-lg-auto"
          role="group"
          aria-label="Basic radio toggle button group"
        >
          <input type="radio" class="btn-check" name="btnradio" id="btnradio1" />
          <label
            class="btn btn-outline-secondary text-scondary shadow-none px-3 px-lg-7"
            for="btnradio1"
            @click="sortNewest"
            >新上市</label
          >
          <input type="radio" class="btn-check" name="btnradio" id="btnradio2" />
          <label
            class="btn btn-outline-secondary text-scondary shadow-none px-3 px-lg-7"
            for="btnradio2"
            @click="sortLowPrice"
            >價格低至高</label
          >
          <input type="radio" class="btn-check" name="btnradio" id="btnradio3" />
          <label
            class="btn btn-outline-secondary text-scondary shadow-none px-3 px-lg-7"
            for="btnradio3"
            @click="sortHighPrice"
            >價格高至低</label
          >
        </div>
      </div>
    </div>
    <!-- 滿額活動商品列 -->
    <div v-if="!isLoading">
      <LoadingProductList></LoadingProductList>
    </div>
    <div v-else class="row">
      <!-- 無商品 -->
      <div class="col-12" v-if="!productData||productData.products.length === 0" >
        <div class="d-flex justify-content-center align-items-center  fs-1 w-100" style="height:400px;backgroundColor:#dee2e6;border-radius:5px 5px 5px 5px;">目前該館別無任何商品</div>
      </div>
      <template v-else>
        <div class="col-12">
          <div class="mb-3 bg-light py-3 px-3">
            <h3 class="text-primary mb-2">{{productData.areaName}}</h3>
            <h5 v-if="productData.limitPrice===999999">本區優惠商品，運費<span class="text-primary">${{productData.shippingFee}}元</span></h5>
            <h5 v-else>本區優惠商品滿<span class="text-primary">${{productData.limitPrice}}元</span>免運，未滿額運費<span class="text-primary">${{productData.shippingFee}}元</span></h5>
          </div>
        </div>
        <div
          class="col-6 col-md-4 col-lg-3 mb-3"
          v-for="product in productData.products"
          :key="product"
        >
          <div class="card card-hover border-0 h-100">
            <router-link
              :to="`/productboard/product/${product.productId}`"
              class="d-block text-secondary"
            >
              <div class="ratio ratio-1x1">
                <img
                  :src="product.productImage"
                  class="card-img-top"
                  alt="product image"
                />
              </div>
              <div class="card-body px-0 py-1">
                <h5 class="card-title card-title-height fs-md-6 fs-7 p-1 mb-1">
                  {{ product.name }}
                </h5>
                <p class="card-text fs-md-5 fs-6 mb-1 text-primary">
                  <del class="text-secondary me-2 fs-md-6 fs-7"
                    >
                      ${{ $currency.currency(product.oldPrice) }}</del
                  >
                  NT${{ $currency.currency(product.price) }}
                </p>
              </div>
            </router-link>
          </div>
        </div>
      </template>
    </div>
    <!-- 資料讀取 loading動畫放在最下層 -->
    <!-- <loading :active="underproduct" class="bottom-fixed" id="overlay" backgroundColor= 'transparent' blur="">
      <div class="loadingio-spinner-ellipsis-4hx2p6xfr9s" style="">
        <div class="ldio-2rhuifu0dvy">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </loading> -->
  </section>
</template>

<script>
import { defineAsyncComponent } from 'vue'
const LoadingProductList = defineAsyncComponent(() => import(/* webpackChunkName: "loadingProductList" */'@/views/LoadingProductList.vue'))
const BannerInside = defineAsyncComponent(() => import(/* webpackChunkName: "bannerInside" */'@/components/BannerInside.vue'))

export default {
  data () {
    return {
      isLoading: true, // ?進場動畫開關
      productData: {
        products: []
      }
    }
  },
  components: {
    LoadingProductList,
    BannerInside
  },
  methods: {
    getShipmentProducts () {
      const url = `${process.env.VUE_APP_API}/api/product/ProductArea?areaCode=${this.$route.params.fullshipmentId}`
      this.$http.get(url)
        .then((res) => {
          this.productData = res.data.info
        })
    },
    sortHighPrice () { // ?篩選從高到低
      this.productData.products.sort((a, b) => {
        return b.price - a.price
      })
    },
    sortLowPrice () { // ?篩選從低至高
      this.productData.products.sort((a, b) => {
        return a.price - b.price
      })
    },
    sortNewest () { // ?篩選最新上架
      this.productData.products.sort((a, b) => {
        return b.date - a.date
      })
    }
  },
  watch: {
    '$route' (to) {
      if (to.fullPath.match('/productboard/productlistfullshipment/')) {
        this.getShipmentProducts()
      }
    }
  },
  mounted () {
    this.getShipmentProducts()
  }
}
</script>

<style lang="scss" scoped>
.btn-check:checked + .btn-outline-secondary,
.btn-check:hover + .btn-outline-secondary,
.btn-check:active + .btn-outline-secondary,
.btn-outline-secondary:active,
.btn-outline-secondary.active,
.btn-outline-secondary.dropdown-toggle.show {
  background-color: #f8412e;
  border-color: #f8412e;
}
</style>
