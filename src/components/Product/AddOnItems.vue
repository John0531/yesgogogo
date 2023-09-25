<template>
  <div class="col-md-10 w-100 mt-5 payment" v-if="productsList.length !== 0">
    <article class="border">
      <h4 class="bg-gray px-4 py-3">
        加價購商品
      </h4>
      <div>
        <div class="bg-white px-2 py-2 py-md-3 border-bottom">
            <div class="d-inline text-gray-dark">
              <h6 class="d-inline">若購買全站商品滿額$3000可加價購以下超優惠商品</h6>
              <h6 class="d-inline" v-if="store.state.checkoutCartList.amountResult.payableAmount < 3000">，您還少${{store.state.checkoutCartList.amountResult.paidAmount - 3000}}</h6>
              <h6 class="d-inline" v-else>，您可加購</h6>
            </div>
            <div class="form-check px-2 px-md-4 py-3">
              <div class="hotProducts">
              <swiper
                class=" mt-3 mt-md-3 position-relative"
                :slidesPerView="2"
                :spaceBetween="15"
                :breakpoints="{
                  576: {
                    slidesPerView: 2.3,
                    spaceBetween: 15,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                  },
                  992: {
                    slidesPerView: 4,
                    spaceBetween: 24,
                  }
                }"
                :navigation="{
                  nextEl: '#fes-next1',
                  prevEl: '#fes-prev1'
                }"
              >
                <swiper-slide v-for="dishes in productsList" :key="dishes.productId">
                  <div class="prd-item  bg-gray h-100 p-0" :class="{'d-none': productsList.length === 0}">
                    <div :class="{'overlay-close': store.state.checkoutCartList.amountResult.payableAmount < 3000}" >
                      <div class="text-center text-gray fw-bold">
                        <!-- <svg xmlns="http://www.w3.org/2000/svg" width="50%" height="50%" fill="currentColor" class="bi bi-ban" viewBox="0 0 16 16" >
                          <path d="M15 8a6.973 6.973 0 0 0-1.71-4.584l-9.874 9.875A7 7 0 0 0 15 8ZM2.71 12.584l9.874-9.875a7 7 0 0 0-9.874 9.874ZM16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Z"/>
                        </svg> -->
                      </div>
                    </div>
                    <a
                      href="#"
                      class="d-block prd-link text-secondary card-add overlay"
                      @click.prevent="addOn(dishes)"
                    >
                        <div class="card-below overflow-hidden w-100 d-flex">
                          <img :src="dishes.productImage" class="img-fluid card-below" :alt="dishes.productName">
                        </div>
                        <div class="px-2 pb-1 px-md-3 pb-md-2 pt-0">
                          <p class="card-text text-dark text-start prd-name fs-6 pt-2">{{ dishes.name }}</p>
                          <div class="d-flex flex-column justify-content-center align-items-start mb-1 mb-md-2">
                            <del class="text-dark me-1 me-xl-2 fs-7 fs-md-6 fs-lg-7 fs-xxl-6" data-v-66ededbc="">市價${{ dishes.price }}</del>
                            <span
                                class="prd-price text-nowrap fs-7 fs-md-6 fs-lg-7 fs-xxl-6" >
                                加購價
                                <span class="sell-price" data-v-e149e506="">{{ dishes.price &lt; 0 ? 'xxx': $currency.currency(dishes.price) }}</span>
                              </span>
                              <div class="d-flex justify-content-center w-100">
                                <span class="d-block prd-limited m-spc w-100" data-v-66ededbc="">加入購物車</span>
                              </div>
                          </div>
                        </div>
                    </a>
                  </div>
                </swiper-slide>
              </swiper>
              <div id="fes-prev1" class="swiper-button-prev"></div>
              <div id="fes-next1" class="swiper-button-next"></div>
              </div>
            </div>
        </div>
      </div>
    </article>
  </div>
</template>>

<script setup>

import { onMounted, ref, defineEmits } from 'vue'
import axios from 'axios'
import { useStore } from 'vuex'
const store = useStore()

onMounted(() => {
  getProductList()
})
// onUpdated(() => {
//   console.log(store.state.checkoutCartList)
//   console.log(store.state.checkoutCart)
// })

const productsList = ref([])
// * 加價購API
async function getProductList () {
  // * S3暫時沒開
  const url = `${process.env.VUE_APP_API}/api/product/AddPriceProdList?shipType=${store.state.checkoutCartList.shippingInfo[0].shippingType}`
  await axios.get(url).then((res) => {
    if (res.data.rtnCode === 0) {
      console.log(res)
      productsList.value = res.data.info.results
    }
  })
}

const emit = defineEmits({})

function addOn (productId) {
  emit('push-cart', productId)
}

</script>

<style lang="scss" scoped>
.hotProducts{
  width: 100%;
  @media (min-width: 768px) {
    margin:0 auto;
    width: 98%;
    padding-left: 2.5em;
    padding-right: 2.5em;
    position: relative;
  }
}

::v-deep(.hotProducts .swiper-button-next){
  position: absolute;
  right: 0;
  top: 0;
  margin-top: 0;
  height: calc(100% - 3em);
}

::v-deep(.hotProducts .swiper-button-prev){
  position: absolute;
  left: 0;
  top: 0;
  margin-top: 0;
  height: calc(100% - 3em);
}
/* 相關推薦 - swiper navigation button 在 768px 以下隱藏 */
::v-deep(.swiper-button-next:after,.swiper-container-rtl .swiper-button-prev:after){
  display: none;
  @media (min-width: 768px) {
    display: flex;
    color: #c7cbd0;
    opacity: 0.9;
    font-size: 36px;
    background: transparent;
  }
}

::v-deep(.swiper-button-prev:after,.swiper-container-rtl .swiper-button-next:after){
  display: none;
  @media (min-width: 768px) {
    display: flex;
    color: #c7cbd0;
    opacity: 0.9;
    font-size: 36px;
    background: transparent;
  }
}

.slogan-button {
  background: #ffffff;
  color: #000000;
  border-radius: 30px;
  overflow: hidden;
  white-space: nowrap;
  @media (max-width:768px) {
    border-radius: 8px;
  }
}
/* 商品 */
.prd-item {
  position: relative;
  width: 100%;
  height: 100%;
  // border: 2px solid #c8c9c9;
  box-sizing: border-box;
  text-align: right;
  border-radius: 10px 10px 10px 10px;
  @media screen and (max-width:576px){
    padding: 10px 4px 0px 4px;
  }
}
.prd-name{
  height: 3rem;
  line-height: 1.5;
  overflow: hidden;
}

.overlay {
  //
  // position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.94;
  // background: linear-gradient(0.35turn, #3f87a6, #ebf8e1, #f69d3c);
  background: linear-gradient(0.35turn, #F8412E, #ffffff, #ffb15b);
  cursor: pointer;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
}
.overlay-close {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  opacity: 0.78;
  background:  linear-gradient(0.35turn,  #ffffff, #000000 77.71%);
  z-index: 5;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px 10px 10px 10px;
}

.card-add {
  border-radius: 10px 10px 10px 10px;
}
.card-below {
  border-radius: 5px 5px 0px 0px;
}

.sell-price{
  font-size: 20px;
  @media (min-width:768px) {
    font-size: 16px;
  }
  @media (min-width:992px) {
    font-size: 18px;
  }
  @media (min-width:1200px) {
    font-size: 20px;
  }
  @media (min-width:1400px) {
    font-size: 22px;
  }
}
.prd-price{
  color: #fa3600;
}

.prd-limited{
  text-align: center;
  background: transparent;
  color: #F8412E;
  font-weight: 600;
  border: 1.5px  solid #F8412E;
}

.m-spc {
  margin: .35rem 0rem;
}

</style>
