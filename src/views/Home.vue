<template>
  <div class="home">
    <Header></Header>
    <div v-if="!isLoading">
      <LoadingHome></LoadingHome>
    </div>
    <div v-else>
      <div class="banner">
        <Banner></Banner>
      </div>
      <!-- 功能性主題入口 -->
      <div v-if="themeList" class="container py-4 py-lg-5">
        <div class="row g-2 g-md-4">
          <!-- PC -->
          <div class="col-4 d-none d-lg-block" v-for="list in themeList" :key="list">
            <a :href="list.targetUrl" class="theme-hover d-block">
              <img class="img-fluid" v-lazy="list.image" :key="list.image" alt="event image">
            </a>
          </div>
          <!-- 手機 -->
          <div class="col-4 d-lg-none" v-for="list in themeList_m" :key="list">
            <a :href="list.targetUrl" class="theme-hover d-block">
              <img class="img-fluid" v-lazy="list.image" :key="list.image" alt="event image">
            </a>
          </div>
        </div>
      </div>
      <!-- 愛心週專區 -->
      <div v-if="loveWeek" class="bg-primary-light py-3 py-md-4 py-lg-5">
        <div class="container">
          <div class="d-flex align-items-center align-items-sm-end justify-content-between mb-4 mb-md-7">
            <h2 class="bg-love bg-center title w-75 w-md-80 w-lg-90"></h2>
            <a :href="`${loveWeek.link}?${getRandomString(8)}`" class="d-block text-end w-25 w-md-20 w-lg-10">
              <img src="../assets/img/yesgo_icon_hotproduct_button.svg" alt="節日主打活動看更多" class="ps-2">
            </a>
          </div>
          <div class="hotProducts">
            <swiper
              class="hotSwiper mt-3 mt-md-3"
              :slidesPerView="2.3"
              :spaceBetween="15"
              :breakpoints="{
                576: {
                  slidesPerView: 2.3,
                  spaceBetween: 15,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 24,
                }
              }"
              :navigation="{
                nextEl: '#fes-next1',
                prevEl: '#fes-prev1'
              }"
            >
              <swiper-slide v-for="love in loveWeek.products" :key="love.productId">
                <div class="card card-hover border-0 bg-transparent h-100">
                  <router-link
                    :to="`/productboard/product/${love.productId}`"
                    class="d-block text-secondary"
                    @click.prevent="sendCategoryId(love.categoryCode  ,love.subCategoryCode )"
                  >
                    <div class="ratio ratio-1x1 position-relative">
                      <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/outline_love.png" alt="愛心週活動" class="outline-img position-absolute top-0 start-0 z-index-3">
                      <img
                        :src="`${love.productImage}`"
                        class="card-img-top"
                        alt="product image"
                        />
                    </div>
                    <div class="card-body p-1">
                      <h5 class="card-title fw-medium homeCard-title-height lh-base fs-lg-5 fs-6">
                        {{ love.productName }}
                      </h5>
                      <div class="d-flex align-items-center">
                        <p class="border border-primary py-1 px-2 text-primary me-2 lh-1">{{ love.discount }}折</p>
                        <p class="card-text fw-medium fs-md-8 fs-5 text-primary">${{ $currency.currency(love.price) }}</p>
                      </div>
                    </div>
                  </router-link>
                </div>
              </swiper-slide>
            </swiper>
            <!-- navigation buttons -->
            <div id="fes-prev1" class="swiper-button-prev"></div>
            <div id="fes-next1" class="swiper-button-next"></div>
          </div>
        </div>
      </div>
      <!-- 節日主打活動 -->
      <div v-if="festivalList" class="bg-primary-light py-3 py-md-4 py-lg-5">
        <div class="container">
          <div class="d-flex align-items-center align-items-sm-end justify-content-between mb-4 mb-md-7">
            <h2 class="bg-festival bg-center title w-75 w-md-80 w-lg-90"></h2>
            <a :href="`${festivalList.link}?${getRandomString(8)}`" class="d-block text-end w-25 w-md-20 w-lg-10">
              <img src="../assets/img/yesgo_icon_hotproduct_button.svg" alt="節日主打活動看更多" class="ps-2">
            </a>
          </div>
          <div class="hotProducts">
            <swiper
              class="hotSwiper mt-3 mt-md-3"
              :slidesPerView="2.3"
              :spaceBetween="15"
              :breakpoints="{
                576: {
                  slidesPerView: 2.3,
                  spaceBetween: 15,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 24,
                }
              }"
              :navigation="{
                nextEl: '#fes-next1',
                prevEl: '#fes-prev1'
              }"
            >
              <swiper-slide v-for="fes in festivalList.products" :key="fes.productId">
                <div class="card card-hover border-0 bg-transparent h-100">
                  <router-link
                    :to="`/productboard/product/${fes.productId}`"
                    class="d-block text-secondary"
                    @click.prevent="sendCategoryId(fes.categoryCode  ,fes.subCategoryCode )"
                  >
                    <div class="ratio ratio-1x1 position-relative">
                      <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/outline_mid.png" alt="節日主打活動" class="outline-img position-absolute top-0 start-0 z-index-3">
                      <img
                        v-lazy="`${fes.productImage}`"
                        :key="`${fes.productImage}`"
                        class="card-img-top"
                        alt="product image"
                        />
                    </div>
                    <div class="card-body p-1">
                      <h5 class="card-title fw-medium homeCard-title-height lh-base fs-lg-5 fs-6">
                        {{ fes.productName }}
                      </h5>
                      <div class="d-flex align-items-center">
                        <p class="border border-primary py-1 px-2 text-primary me-2 lh-1">{{ fes.discount }}折</p>
                        <p class="card-text fw-medium fs-md-8 fs-5 text-primary">${{ $currency.currency(fes.price) }}</p>
                      </div>
                    </div>
                  </router-link>
                </div>
              </swiper-slide>
            </swiper>
            <!-- navigation buttons -->
            <div id="fes-prev1" class="swiper-button-prev"></div>
            <div id="fes-next1" class="swiper-button-next"></div>
          </div>
        </div>
      </div>
      <div class="bg-light py-3 py-md-4 py-lg-5">
        <div class="container">
          <!-- 每日強打 -->
          <div class="d-flex align-items-center align-items-sm-end justify-content-between mb-4 mb-md-7">
            <h2 class="bg-hotProduct bg-center title w-75 w-md-80 w-lg-90"></h2>
            <router-link to="/productboard/productList/S072613" class="d-block text-end w-25 w-md-20 w-lg-10" @click.prevent="sendCategoryId( 'S0726' ,'S072613');">
              <img src="../assets/img/yesgo_icon_hotproduct_button.svg" alt="每日強打看更多" class="ps-2">
            </router-link>
          </div>
          <div class="hotProducts">
            <swiper
              class="hotSwiper mt-3 mt-md-3"
              :slidesPerView="2.3"
              :spaceBetween="15"
              :breakpoints="{
                576: {
                  slidesPerView: 2.3,
                  spaceBetween: 15,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 24,
                }
              }"
              :navigation="{
                nextEl: '#js-next1',
                prevEl: '#js-prev1'
              }"
            >
              <swiper-slide v-for="hot in hotProducts" :key="hot.productId">
                <div class="card card-hover border-0 bg-transparent h-100">

                   <!-- @click.prevent="recordHeight(); this.$store.commit('getSubCategoryId', ''); this.$store.commit('getCategoryId', ''); this.$store.commit('getSubCategory', ''); this.$store.commit('getCategory', '');"  -->

                  <router-link
                    :to="`/productboard/product/${hot.productId}`"
                    class="d-block text-secondary"
                    @click.prevent="sendCategoryId( 'S0726' ,'S072613');"
                  >
                    <div class="ratio ratio-1x1">
                      <img
                        v-lazy="`${hot.productImage}`"
                        :key="`${hot.productImage}`"
                        class="card-img-top"
                        alt="product image"
                      />
                    </div>
                    <div class="card-body p-1">
                      <h5 class="card-title fw-medium homeCard-title-height lh-base fs-lg-5 fs-6">
                        {{ hot.name }}
                      </h5>
                      <div class="d-flex align-items-center">
                        <p class="border border-primary py-1 px-2 text-primary me-2 lh-1">{{ hot.discount }}折</p>
                        <p class="card-text fw-medium fs-md-8 fs-5 text-primary">${{ $currency.currency(hot.price) }}</p>
                      </div>
                    </div>
                  </router-link>
                </div>
              </swiper-slide>
            </swiper>
            <!-- navigation buttons -->
            <div id="js-prev1" class="swiper-button-prev"></div>
            <div id="js-next1" class="swiper-button-next"></div>
          </div>
        </div>
      </div>
      <!-- 活動頁面(特選金看板)(新)-->
      <div class="bg-primary-light py-3 py-md-4 py-lg-5">
        <div class="container">
          <div class="mb-0 mb-md-4">
            <h2 class="bg-activities bg-center"></h2>
          </div>
          <div class="row mt-3 mt-md-4 g-lg-4">
            <div class="col-md-6 mt-1" v-for="top in top2activities" :key="top+'1'">
              <div class="text-center">
                <a :href="top.targetUrl" target="_blank" class="d-block"><img v-lazy="top.image" :key="top.image" alt="activity" style="max-width: 100%;"></a>
              </div>
            </div>
          </div>
          <swiper
            class="activitiesSwiper mt-3"
            :slidesPerView="3.2"
            :spaceBetween="8"
            :breakpoints="{
              768: {
                slidesPerView: 4.2,
                spaceBetween: 5,
              },
              992: {
                slidesPerView: 6,
                spaceBetween: 15,
              }
            }"
          >
            <swiper-slide
              v-for="act in activities"
              :key="act"
            >
              <a :href="act.targetUrl" target="_blank"><img v-lazy="act.image" :key="act.image" alt="activity" class="w-100"></a>
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <div class="container mt-3">
        <!-- 影片 -->
        <template v-for="(video, index) in videoList" :key="video">
          <div ref="videoZone" class="row mb-5" v-if="videoList[index].name === videoTitle">
            <div class="col-lg-6 mb-3 mb-md-0">
              <div class="d-flex justify-content-between align-items-center border-bottom py-1 mt-1 mb-3">
                <h2 class="fs-4 fw-bold">
                  <img src="../assets/img/yesgo_icon41.svg" alt="video icon" class="videoIcon">
                  直播/影音專區
                </h2>
                <router-link to="/activity/weifat" class="btn btn-outline-secondary text-center rounded-pill px-4 py-1 position-relative w-auto">
                  看更多
                  <i class="bi bi-chevron-right seeMoreIcon"></i>
                </router-link>
              </div>
              <div class="text-md-center text-lg-start h-100">
                <iframe class="video" :src="video.link" frameborder="2" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="d-flex justify-content-end mb-3">
                <div class="btn-group border-bottom w-100" role="group">
                  <button v-for="video in videoList" :key="video+'1'" type="button" class="btn videoBtn rounded-0 fw-medium px-0 fs-6 fs-md-5 py-1" @mouseover.prevent="videoTitle = video.name" :class="{ active: videoTitle === video.name, 'bg-live': video.name.match('直播中') }" :style="{ width: videoBtnWidth }" v-html="video.displayName"></button>
                </div>
              </div>
              <swiper
                class="videoSwiper"
                :slidesPerView="3.3"
                :spaceBetween="15"
                :breakpoints="{
                  992: {
                    slidesPerView: 3.3,
                    spaceBetween: 15,
                  },
                  1200: {
                    slidesPerView: 3.3,
                    spaceBetween: 30,
                  }
                }"
              >
                <swiper-slide v-for="list in video.products" :key="list.id">
                  <div class="card card-hover border-0 h-100">
                    <router-link
                      :to="`/productboard/product/${list.productId}`"
                      class="d-block text-secondary"
                      @click.prevent="recordHeight(); this.$store.commit('getSubCategoryId', ''); this.$store.commit('getCategoryId', ''); this.$store.commit('getSubCategory', ''); this.$store.commit('getCategory', '');"
                    >
                      <div class="ratio ratio-1x1">
                        <img
                          v-lazy="`${list.productImage}`"
                          :key="`${list.productImage}`"
                          class="card-img-top"
                          alt="product image"
                        />
                      </div>
                      <div class="card-body px-0 py-1">
                        <h5
                          class="card-title fw-medium homeCard-title-height fs-lg-5 fs-6"
                        >
                          {{ list.productName }}
                        </h5>
                        <p
                          class="card-text text-primary"
                        >
                          <span class="fs-md-8 fs-5">${{ $currency.currency(list.price) }}</span>
                        </p>
                      </div>
                    </router-link>
                  </div>
                </swiper-slide>
              </swiper>
            </div>
          </div>
        </template>
        <!-- 各館別 -->
        <section
          class="mb-5"
          v-for="(category, index) in categories"
          :key="category.code"
        >
          <div
            class="py-4 position-relative bg-center"
            :style="{ 'background-image': `url(${bgImage[index]})` }"
          >
            <h2 class="fs-4 fs-md-2 fw-medium text-light text-md-center ps-2 ps-md-0 mb-0">
              {{ category.name }}
            </h2>
            <div class="position-absolute end-0 top-50 translate-middle-y me-3 me-lg-4">
              <a
                :href="category.link"
                class="btn btn-outline-light text-center rounded-pill px-4 px-md-5 py-1 fs-5 position-relative w-auto"
                @click="this.recordHeight();"
              >
                看更多
                <i class="bi bi-chevron-right seeMoreIcon"></i>
              </a>
            </div>
          </div>
          <swiper
            class="categorySwiper swiper-category mt-3"
            :slidesPerView="2.3"
            :spaceBetween="15"
            :breakpoints="{
              576: {
                slidesPerView: 2.3,
                spaceBetween: 15,
                slidesPerColumn: 1,
                slidesPerColumnFill: 'row'
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 15,
                slidesPerColumn: 2,
                slidesPerColumnFill: 'row'
              }
            }"
          >
            <swiper-slide
              v-for="subCategory in category.products"
              :key="subCategory.productId"
            >
              <div class="card card-hover border-0 p-1 h-100">
                <!-- category.link.split('productList/')[1]拆成兩半，https://www.yesgogogo.com/productboard/ => [0], /S071201[1]，所以要館別就是取[1}-->
                <!-- category.link.split('productList/')[1] -->
                <router-link
                  :to="`/productboard/product/${subCategory.productId}`"
                  @click.prevent="sendCategoryId(subCategory.categoryCode  ,subCategory.subCategoryCode )"
                  class="d-block text-secondary"
                >
                  <div class="ratio ratio-1x1">
                    <img
                      v-lazy="`${subCategory.productImage}`"
                      :key="`${subCategory.productImage}`"
                      class="card-img-top"
                      alt="product image"
                    />
                  </div>
                  <div class="card-body px-0 py-1">
                    <h5
                      class="card-title fw-medium homeCard-title-height fs-lg-5 fs-6"
                    >
                      {{ subCategory.productName }}
                    </h5>
                    <p
                      class="card-text text-primary"
                    >
                      <del class="text-secondary me-2 fw-medium"
                        ><small
                          >${{ $currency.currency(subCategory.oldPrice) }}</small
                        ></del
                      >
                      <span class="fs-md-8 fs-5">${{ $currency.currency(subCategory.price) }}</span>
                    </p>
                  </div>
                </router-link>
              </div>
            </swiper-slide>
          </swiper>
        </section>
        <!-- 人氣品牌-->
        <section>
          <h2
            class="bg-brand fs-4 fs-md-2 fw-medium text-light text-md-center py-4 ps-2 ps-md-0 mb-0 "
          >
            人氣品牌
          </h2>
          <div class="d-flex flex-wrap mt-3 mb-4 mb-md-5">
            <div class="brandLogo p-1" v-for="brand in brandsList" :key="brand">
              <div class="ratio ratio-1x1 border">
                <a
                  :href="brand.targetUrl"
                  class="d-block overflow-hidden"
                >
                  <img
                    class="w-100"
                    v-lazy="brand.image"
                    :key="brand.image"
                    alt="人氣品牌圖片"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <!-- 關於我們 --->
      <section class="aboutUs py-4 py-md-5 bg-light">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-10 text-center fw-regular">
              <h2 class="fs-4 fs-md-2 fw-medium text-primary mb-2">
                關於我們
              </h2>
              <img class="aboutTitleImg mb-4" src="../assets/img/yesgo_icon_about01.svg" alt="about us icon">
              <h3 class="text-primary fw-bold fs-4 mb-5">全台第一家美食專精特色電商—「yesgogogo 即食購購物網」</h3>
              <div class="mb-4">
                <p class="d-inline d-lg-block mb-2">
                  主打台灣在地美食、安心品質，提供大量"熱一熱"就能上桌的冷藏/冷凍料理，及多樣周邊美食相關
                </p>
                <p class="d-inline d-lg-block mb-2">
                  的新鮮素材，方便大眾網上採購，符合現代人生活需求。
                </p>
              </div>
              <div class="mb-4">
                <p class="d-inline d-lg-block mb-2 mt-5">
                  同時設立影音頻道，陸續推出一系列玩味有趣的節目。透過各種形式帶領觀眾探索與吃有關的精彩體驗，
                </p>
                <p class="d-inline d-lg-block mb-4">
                  期望未來能讓大眾無須盲找資訊、不必以身試雷，只要跟著 yesgogogo，就能即時掌握各項特色美食。
                </p>
              </div>
              <div class="text-center">
                <img class="aboutImg" src="../assets/img/yesgo_icon_about02.svg" alt="about us icon">
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer></Footer>
    <!-- 問券調查 -->
    <!-- <QuestionSurvey v-if="surveyClose"></QuestionSurvey> -->
    <!-- 蓋板廣告 -->
    <div ref="adModal" class="modal fade">
      <div class="adModal modal-dialog modal-dialog-centered">
        <div class="modal-content position-relative">
          <a href="#" class="closeEvent d-block position-absolute end-0 top-0" @click.prevent="closeAdModal">
            <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/advOnSaleinfo/ad_close.png" alt="關閉廣告" class="closeEventIcon img-fluid ad">
          </a>
          <a v-if="advertise_m" :href="advertise_m.targetUrl" class="d-lg-none">
            <img v-lazy="advertise_m.image" :key="advertise_m.image" alt="蓋板廣告" class="img-fluid">
          </a>
          <a v-if="advertise" :href="advertise.targetUrl" class="d-none d-lg-block">
            <img v-lazy="advertise.image" :key="advertise.image" alt="蓋板廣告" class="img-fluid">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { defineAsyncComponent } from 'vue'
import Header from '@/components/Header.vue'
import moment from 'moment'
import getGiftEvent from '@/assets/js/giftevent.js'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'
import checkToken from '@/assets/js/checkToken.js'
import { getRandomString } from '@/assets/js/randomString.js'
const Footer = defineAsyncComponent(() => import(/* webpackChunkName: "footer" */'@/components/Footer.vue'))
const Banner = defineAsyncComponent(() => import(/* webpackChunkName: "Banner" */'@/components/Banner.vue'))
const LoadingHome = defineAsyncComponent(() => import(/* webpackChunkName: "loadingHome" */'@/views/LoadingHome.vue'))

export default {
  data () {
    return {
      activities: [], // ?活動廣告
      top2activities: [], // ?活動前 2 項
      categories: {}, // ?館別清單
      hotProducts: [], // ?熱賣商品
      brandsList: [], // ?品牌 Logo
      bgImage: [
        require('@/assets/img/index_listbg_01.jpg'),
        require('@/assets/img/index_listbg_02.jpg'),
        require('@/assets/img/listbg_01.jpg'),
        require('@/assets/img/listbg_02.jpg'),
        require('@/assets/img/listbg_03.jpg'),
        require('@/assets/img/listbg_04.jpg'),
        require('@/assets/img/listbg_05.jpg'),
        require('@/assets/img/listbg_06.jpg'),
        require('@/assets/img/listbg_07.jpg')
      ], // ?展示館背景圖
      isLoading: false, // ?進場動畫開關
      videoTitle: '', // ?影片標題 active
      videoList: [], // ?YT 加上輪播參數 ?loop=1&rel=0&playlist=
      surveyClose: true,
      videoZoneDOM: '', // ?影音專區 DOM
      videoBtnWidth: '',
      themeList: '', // ?功能性主題(PC)
      themeList_m: '', // ?功能性主題(手機)
      adModal: '', // ?蓋板廣告 DOM
      advertise: '', // ?蓋板廣告(PC)
      advertise_m: '', // ?蓋板廣告(手機)
      festivalList: '', // ?節日活動商品
      loveWeek: '' // ?愛心週活動
    }
  },
  components: {
    Header,
    Footer,
    Banner,
    LoadingHome
  },
  methods: {
    getRandomString, //* 產生亂數
    getActivities () {
      // ? 優惠活動
      // ?取得活動廣告
      const url = `${process.env.VUE_APP_API}/api/widgets/activity`
      this.$http.get(url).then(res => {
        if (res.data.rtnCode === 0) {
          this.activities = res.data.info
          // *活動新版固定 8 項
          // *前面兩個一定是大張的
          this.activities = this.activities.filter((item, index) => index < 8)
          // ?活動新版前兩項為主要活動(大圖)
          this.top2activities = this.activities.filter((item, index) => index < 2)
          // *刪除 activities中的前兩筆(到top2activities)
          this.activities.splice(0, 2)
        }
      })
    },
    getCategories () {
      // ?取得館別選單
      const url = `${process.env.VUE_APP_API}/api/product/eventproducts?code=hpgroup`
      this.$http.get(url).then(res => {
        if (res.data.rtnCode === 0) {
          this.categories = res.data.info
          this.categories.forEach(item => {
            item.products = item.products.filter((item, index) => {
              return index < 8
            })
          })
        }
      })
      if (localStorage.getItem('getHomeRecordHeight')) { // ? 若有點擊產品紀錄，則記錄高度供上一頁返回
        setTimeout(() => { // ?資料高度生成需要時間，利用setTimeOut讓視窗滑動不同步，才能順利執行
          window.scrollTo(0, localStorage.getItem('getHomeRecordHeight'))
          localStorage.removeItem('getHomeRecordHeight')
        }, 500)
      }
    },
    getHotProduct () {
      // ?取得熱門商品
      const url = `${process.env.VUE_APP_API}/api/widgets/hotproduct`
      this.$http.get(url).then(res => {
        if (res.data.rtnCode === 0) {
          this.hotProducts = res.data.info
          this.hotProducts.forEach((item) => {
            //* 計算折扣，如果可以整除10，就只要顯示個位數，例如 80折，只要顯示 8折
            const quo = Math.ceil(item.price / item.oldPrice * 100)
            item.discount = quo % 10 === 0 ? quo / 10 : quo
          })
        }
      })
    },
    // ?功能性主題入口
    getThemeList () {
      /* PC */
      const url = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=yesgo_theme`
      this.$http.get(url)
        .then((res) => {
          if (res.data.rtnCode === 0) {
            this.themeList = res.data.info
          }
        })
      /* 手機 */
      const urlm = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=yesgo_m_theme`
      this.$http.get(urlm)
        .then((res) => {
          if (res.data.rtnCode === 0) {
            this.themeList_m = res.data.info
          }
        })
    },
    // ?節日活動
    getFestival () {
      const url = `${process.env.VUE_APP_API}/api/product/eventproducts?code=yesgo_festival`
      this.$http.get(url)
        .then((res) => {
          if (res.data.rtnCode === 0) {
            this.festivalList = res.data.info[0]
            this.festivalList.products.forEach((item) => {
              //* 計算折扣，如果可以整除10，就只要顯示個位數，例如 80折，只要顯示 8折
              const quo = Math.ceil(item.price / item.oldPrice * 100)
              item.discount = quo % 10 === 0 ? quo / 10 : quo
            })
          }
        })
    },
    // ? 愛心週專區
    getLove () {
      const url = `${process.env.VUE_APP_API}/api/product/eventproducts?code=yesgo_love`
      this.$http.get(url)
        .then((res) => {
          // console.log(res)
          if (res.data.rtnCode === 0) {
            this.loveWeek = res.data.info[0]
            this.loveWeek.products.forEach((item) => {
              //* 計算折扣，如果可以整除10，就只要顯示個位數，例如 80折，只要顯示 8折
              const quo = Math.ceil(item.price / item.oldPrice * 100)
              item.discount = quo % 10 === 0 ? quo / 10 : quo
            })
          }
        })
    },
    // id
    sendCategoryId (categoryId, subcategoryId) {
      // console.log('sendCategoryId', categoryId, subcategoryId)

      // ?透過 Vuex 傳遞子館別的 id
      this.$store.commit('getSubCategoryId', subcategoryId)
      this.$store.commit('getCategory', '')
      this.$store.commit('getCategoryId', categoryId)
      this.$store.commit('getSubCategory', '')
      this.recordHeight()
    },
    setLiveDuration () {
      // ?設定直播中的標題
      moment.defaultFormat = 'DD.MM.YYYY HH:mm'
      const now = moment()
      const startTime = moment('04.12.2021 11:00', moment.defaultFormat)
      const endTime = moment('04.12.2021 11:01', moment.defaultFormat)
      if (startTime.isBefore(now) && endTime.isAfter(now)) {
        this.videoTitle = 'Live 直播中'
        this.videoList[0].title = 'Live 直播中'
      }
    },
    // ?影音專區資料取得 活動API
    getVideoList () {
      const url = `${process.env.VUE_APP_API}/api/product/eventproducts?code=video`
      this.$http.get(url)
        .then((res) => {
          if (res.data.rtnCode === 0) {
            this.videoList = res.data.info
            this.videoBtnWidth = (100 / this.videoList.length).toFixed(2) + '%' // ?影音專區按鈕等分寬度計算
            this.videoTitle = this.videoList[0].name
            this.videoList.forEach((item) => {
              // if (item.link) {
              //   const vid = item.link.split('/')
              //   const lastVid = vid[vid.length - 1]
              //   item.link = `${item.link}?loop=1&rel=0&playlist=${lastVid}`
              // }
              // *直播連結加上 rel 參數
              if (item.link) {
                item.link = item.link.includes('?') ? `${item.link}&rel=0` : `${item.link}?rel=0`
              }
            })
            // ?影音專區 一行 5 個字，至多二行
            this.videoList.forEach((item) => {
              item.displayName = `${item.name.substring(0, 5)}<br>${item.name.substring(5, 10)}`
            })
          }
        })
    },
    getBrands () {
      const url = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=PopularBrand`
      this.$http.get(url)
        .then((res) => {
          this.isLoading = true
          if (res.data.rtnCode === 0) {
            this.brandsList = res.data.info
            /* 直播專區錨點設定 */
            if (this.$route.fullPath.match('/video')) {
              setTimeout(() => {
                this.videoZoneDOM = this.$refs.videoZone
                if (document.body.clientWidth > 992) {
                  window.scrollTo({ top: this.videoZoneDOM.offsetTop - 169, behavior: 'smooth' })
                } else if (document.body.clientWidth > 576) {
                  window.scrollTo({ top: this.videoZoneDOM.offsetTop - 138, behavior: 'smooth' })
                } else {
                  window.scrollTo({ top: this.videoZoneDOM.offsetTop - 94, behavior: 'smooth' })
                }
              }, 1500)
            }
          }
        })
    },
    recordHeight () { // ?點擊產品觸發紀錄瀏覽高度
      const recordHeight = window.scrollY
      localStorage.setItem('getHomeRecordHeight', recordHeight)
    },
    getToken () {
      // ?判斷是否有登入(token取得)
      const AccessToken = checkToken.getAccessToken()
      const RefreshToken = checkToken.getFreshToken()
      if (AccessToken || RefreshToken) {
        return true
      } else {
        return false
      }
    },
    //* 贈點或贈折價券的活動
    eventGift () {
      getGiftEvent().then((data) => {
        if (!data.isSuccess) {
          this.$swal.fire({
            title: `${data.message}(${data.rtnCode})`,
            allowOutsideClick: false,
            confirmButtonColor: '#F8412E',
            confirmButtonText: '確認',
            width: 400,
            customClass: {
              title: 'text-class',
              confirmButton: 'confirm-btn-class'
            }
          })
        } else {
          this.$swal.fire({
            title: `${data.message}`,
            allowOutsideClick: false,
            confirmButtonColor: '#F8412E',
            confirmButtonText: '確認',
            width: 400,
            customClass: {
              title: 'text-class',
              confirmButton: 'confirm-btn-class'
            }
          })
        }
        this.$router.push(sessionStorage.getItem('path'))
        sessionStorage.removeItem('path')
      })
    },
    //* 取得蓋板廣告 PC
    getPopupAdvertise () {
      const url = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=Index_Ad`
      this.$http.get(url)
        .then((res) => {
          if (res.data.rtnCode === 0) {
            this.advertise = res.data.info[0]
            this.getPopupAdvertise_m()
          }
        })
    },
    //* 取得蓋板廣告 mobile
    getPopupAdvertise_m () {
      const urlm = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=Index_m_Ad`
      this.$http.get(urlm)
        .then((res) => {
          if (res.data.rtnCode === 0) {
            this.advertise_m = res.data.info[0]
            if (this.advertise && this.advertise_m) {
              this.adModal.show()
            }
          }
        })
    },
    //* 關閉蓋板廣告
    closeAdModal () {
      this.adModal.hide()
      const today = moment().format('YYYY/MM/DD')
      localStorage.setItem('admodal', today)
    },
    removeQueryString () {
      this.$router.replace({ ...this.$route, query: {} })
    }
  },
  mounted () {
    this.$store.dispatch('getMenu')
    this.getThemeList()
    this.getFestival()
    this.getLove()
    this.getHotProduct()
    this.getActivities()
    this.getCategories()
    // this.setLiveDuration() // ?設定直播中的標題
    this.getVideoList()
    this.getBrands()
    // ?從 line 進入 yesgo 記錄 query 參數，顯示登入視窗
    // 看log，https://www.yesgogogo.com/?path=/memberboard/memberfeedback&pointCode=20220510, 如果要改路就把path修正
    // console.log(this.$route.query)
    if (Object.keys(this.$route.query).length !== 0 && this.$route.query.path) {
      Object.keys(this.$route.query).forEach((item) => {
        sessionStorage.setItem(`${item}`, this.$route.query[item])
      })

      if (this.getToken()) {
        this.eventGift()
      } else {
        this.$swal.fire({
          title: '請先登入',
          allowOutsideClick: true,
          confirmButtonColor: '#F8412E',
          confirmButtonText: '確認',
          backdrop: true,
          width: 400,
          customClass: {
            title: 'text-class',
            confirmButton: 'confirm-btn-class'
          }
        })
        if (document.body.clientWidth < 576) {
          // ? 手機版
          this.$router.push('/membermobilelogin')
        } else {
          // ? web 版
          this.$store.state.loginModal.show()
        }
      }
    } else if (this.$route.params.event === 'fromEvent' || localStorage.getItem('fromEvent') === 'event') {
      // ?PC 從活動頁點擊登入到首頁顯示登入視窗
      if (document.body.clientWidth < 576) {
        // ? 手機版
        this.$router.push('/membermobilelogin')
      } else {
        // ? web 版
        this.$store.state.loginModal.show()
      }
    } else {
      if (this.$route.query.cardEvent || this.$route.query.putuEvent) {
        // ?[卡友修改密碼事件][卡友LINE事件]判斷參數cardEvent[普渡事件]判斷參數putuEvent
        this.$store.state.loginModal.show()
        this.removeQueryString()
      } else {
        // ?蓋板廣告判斷(同日只出現一次)
        this.adModal = new bootstrap.Modal(this.$refs.adModal, { backdrop: 'static' })
        const today = moment().format('YYYY/MM/DD')
        const date = localStorage.getItem('admodal')
        if (!date || moment(today, 'YYYY/MM/DD').isAfter(date)) {
          this.getPopupAdvertise()
        }
      }
    }
  },
  unmounted () {
    this.adModal.hide()
  },
  watch: {
    /* 當路由為 /productboard/productList/時，清空瀏覽紀錄 */
    '$route' (to) {
      if (to.fullPath.match('/productboard/productList/')) {
        localStorage.removeItem('getHomeRecordHeight')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  overflow: hidden;
}

.brandLogo {
  width: 25%;
  @media (min-width: 992px) {
    width: 12.5%;
  }
}

.swiper-slide {
  height: auto;
}

::v-deep.swiper-button-next:after, ::v-deep.swiper-button-prev:after{
  color: #F8412E;
  font-weight: bolder;
  font-size: 20px;
  padding: 28px 4px;
  background: rgba(256, 256, 256, .9);
  border-radius: 4px;
}

::v-deep.swiper-button-next.swiper-button-disabled, ::v-deep.swiper-button-prev.swiper-button-disabled{
  pointer-events: initial;
}

::v-deep.categorySwiper .swiper-button-next.swiper-button-disabled, ::v-deep.categorySwiper .swiper-button-prev.swiper-button-disabled{
  display: none;
  @media (max-width: 768px) {
    display: flex;
  }
}

::v-deep.activitiesSwiper .swiper-button-next.swiper-button-disabled, ::v-deep.activitiesSwiper .swiper-button-prev.swiper-button-disabled{
  display: none;
  @media (max-width: 768px) {
    display: flex;
  }
}

::v-deep.activitiesSwiper .swiper-button-next.swiper-button-disabled, ::v-deep.activitiesSwiper .swiper-button-prev.swiper-button-disabled{
  display: none;
  @media (max-width: 768px) {
    display: flex;
  }
}

::v-deep.activitiesSwiper .swiper-button-next:after, ::v-deep.activitiesSwiper .swiper-button-prev:after{
  color: #F8412E;
  font-weight: bolder;
  font-size: 16px;
  padding: 24px 4px;
  background: rgba(256, 256, 256, .9);
  border-radius: 4px;
}

.seeMoreIcon {
  position: absolute;
  width: 24px;
  height: 24px;
  right: 3px;
  top: 4px;
}

.video{
  height: 250px;
  width: 100%;
  @media (min-width: 768px) {
    height: 300px;
    width: 80%;
  }
  @media (min-width: 992px) {
    height: 350px;
    width: 100%;
  }
}

.videoBtn{
  &:hover{
    background: #F8412E;
    color: #fff;
  }
}

.videoIcon{
  width: 24px;
}

.videoBtn.active{
  background: #F8412E;
  color: #fff;
}

.bg-live{
  background: #ff0000 !important;
  color: #fff !important;
}

.bg-brand{
  background: #EB3D49;
}

.bg-center{
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}

.bg-hotProduct{
  height: 32px;
  background-image: url('../assets/img/yesgo_icon_hotproduct_m.svg');
  background-position-x: 70%;
  @media (min-width: 768px) {
    background-image: url('../assets/img/yesgo_icon_hotproduct.svg');
    height: 35px;
    background-position-x: 50%;
  }
  @media (min-width: 992px) {
    height: 40px;
  }
}

.bg-activities{
  height: 24px;
  background-image: url('../assets/img/yesgo_icon_activities.svg');
  @media (min-width: 768px) {
    height: 30px;
  }
  @media (min-width: 992px) {
    height: 32px;
  }
}

.bg-festival{
  height: 32px;
  background-image: url('https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/yesgo_icon_festival.svg');
  background-position-x: 53%;
  @media (min-width: 768px) {
    height: 35px;
    background-position-x: 50%;
  }
  @media (min-width: 992px) {
    height: 40px;
  }
}

.bg-love{
  height: 32px;
  background-image: url('https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/yesgo_icon_love.svg');
  background-position-x: 53%;
  @media (min-width: 768px) {
    height: 35px;
    background-position-x: 50%;
  }
  @media (min-width: 992px) {
    height: 40px;
  }
}

.aboutTitleImg{
  width: 100px;
}

.aboutImg{
  width: 56px;
  height: 56px;
}

.aboutUs{
  p{
    letter-spacing: .05rem;
  }
}

.homeCard-title-height{
  height: 3rem;
  overflow: hidden;
  line-height: 1.5;
  @media (min-width: 992px) {
    height: 60px;
  }
}

.theme-hover{
  overflow: hidden;
  &:hover{
    img{
      transform: scale(1.02);
      transition: all .8s;
    }
  }
}
/* 每日強打 - 將 swiper navigation 箭頭放置外側 */
.hotProducts{
  width: 100%;
  @media (min-width: 768px) {
    margin-left: auto;
    margin-right: auto;
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
::v-deep(.hotProducts .swiper-button-next:after, .hotProducts .swiper-container-rtl .swiper-button-prev:after){
  display: none;
  @media (min-width: 768px) {
    display: flex;
    color: #999999;
    font-size: 36px;
    background: transparent;
  }
}

::v-deep(.hotProducts .swiper-button-prev:after, .hotProducts .swiper-container-rtl .swiper-button-next:after){
  display: none;
  @media (min-width: 768px) {
    display: flex;
    color: #999999;
    font-size: 36px;
    background: transparent;
  }
}

.adModal{
  .modal-content{
    width: auto;
    background-color: transparent;
    border: 0;
  }
  .closeEventIcon{
    width: 32px;
  }
}

.card-hover{
  &:hover{
    .outline-img{
      transform: scale(1);
    }
  }
}
</style>
