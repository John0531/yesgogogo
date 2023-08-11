<template>
  <div class="bg-newyeargift overflow-hidden">
    <!-- 主視覺 PC-->
    <div class="position-relative d-none d-lg-block overflow-hidden text-center ">
      <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/newyeargift/PC_KV_bg.jpg" alt="福兔迎祥_新春禮盒" class="img-fluid">
      <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/newyeargift/PC_KV_1.png" alt="福兔迎祥_新春禮盒(兔兔圖)" class="img-fluid position-absolute bottom-0 start-0 z-index-3">
      <!-- 標題 -->
      <div class="giftTitle bannerAnimate position-absolute start-50 translate-middle-x w-45">
        <img class="img-fluid" v-if="newYG_banner_pc" :src="newYG_banner_pc.image" alt="福兔迎祥_新春禮盒 標題 pc">
        <!-- PC輪播活動 -->
        <div class="events-lg w-50 position-absolute text-center">
          <swiper
            :direction="'vertical'"
            class="eventlgSwiper"
            :loop="true"
            :spaceBetween="0"
            :initialSlide="0"
            :speed="400"
            :autoplay="{
              delay: 2000,
              disableOnInteraction: false
            }"
            :navigation="false"
          >
            <swiper-slide>
              <img
                v-if="slideShow[0]"
                :src="slideShow[0].image"
                class="img-fluid"
                alt="全站最高回饋21%"
              />
            </swiper-slide>
            <swiper-slide>
              <img
                v-if="slideShow[1]"
                :src="slideShow[1].image"
                class="img-fluid"
                alt="免費領券限折300"
              />
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
    <!-- 主視覺 MB-->
    <div class="position-relative d-lg-none">
      <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/newyeargift/KV_MB_bg.jpg" alt="福兔迎祥_新春禮盒" class="img-fluid">
      <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/newyeargift/KV_MB_1.png" alt="福兔迎祥_新春禮盒(兔兔圖)" class="img-fluid position-absolute bottom-0 start-0 z-index-3">
      <!-- 標題 -->
      <div class="bannerAnimate_m giftTitle position-absolute start-50 translate-middle-x w-70">
        <img class="img-fluid" v-if="newYG_title_mb" :src="newYG_title_mb.image" alt="福兔迎祥_新春禮盒 標題 mb">
        <!-- 手機輪播 -->
        <div class="events position-absolute text-center w-50">
          <swiper
            :direction="'vertical'"
            class="eventmbSwiper"
            :loop="true"
            :spaceBetween="0"
            :initialSlide="1"
            :autoplay="{
              delay: 2000,
              disableOnInteraction: false
            }"
            :navigation="false"
          >
            <swiper-slide>
              <img
                v-if="slideShowmb[0]"
                :src="slideShowmb[0].image"
                class="img-fluid d-inline d-lg-none"
                alt="全站最高回饋21%"
                style="width:100%"
              />
            </swiper-slide>
            <swiper-slide>
              <img
                v-if="slideShowmb[1]"
                :src="slideShowmb[1].image"
                class="img-fluid d-inline d-lg-none"
                alt="免費領卷現折300"
                style="width:100%"
              />
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
    <!-- 優惠訊息 -->
    <div class="bg-event py-3 py-lg-4">
      <div class="container-fluid">
        <!-- 優惠訊息 PC -->
        <div class="bg-special d-none d-lg-block">
          <!-- 優惠訊息上方 2 活動 -->
          <div class="d-flex w-45 mx-auto pt-11 pb-5">
            <a v-if="eventList[0]" href="#" @click.prevent="recordClickHeight(eventList[0].targetUrl)" class="gift-hover">
              <img class="img-fluid" :src="eventList[0].image" alt="優惠訊息">
            </a>
            <a v-if="eventList[1]" href="#" @click.prevent="recordClickHeight(eventList[1].targetUrl)" class="gift-hover">
              <img class="img-fluid" :src="eventList[1].image" alt="優惠訊息">
            </a>
          </div>
          <!-- 優惠訊息下方 3 活動 -->
          <div class="d-flex w-60 pt-11 py-5 justify-content-between mx-auto">
            <a v-if="eventList[2]" href="#" @click.prevent="recordClickHeight(eventList[2].targetUrl)" class="gift-hover pe-2">
              <img class="img-fluid" :src="eventList[2].image" alt="優惠訊息">
            </a>
            <a v-if="eventList[3]" href="#" @click.prevent="recordClickHeight(eventList[3].targetUrl)" class="gift-hover pe-2">
              <img class="img-fluid" :src="eventList[3].image" alt="優惠訊息">
            </a>
            <a v-if="eventList[4]" href="#" @click.prevent="recordClickHeight(eventList[4].targetUrl)" class="gift-hover">
              <img class="img-fluid" :src="eventList[4].image" alt="優惠訊息">
            </a>
          </div>
        </div>
        <!-- 優惠訊息 MB -->
        <div class="bg-special d-lg-none">
          <!-- 優惠訊息上方 2 活動 -->
          <div class="special-areaA-m d-flex w-75 mx-auto">
            <a v-if="eventList[0]" href="#" @click.prevent="recordClickHeight(eventList[0].targetUrl)">
              <img class="img-fluid" :src="eventList[0].image" alt="優惠訊息">
            </a>
            <a v-if="eventList[1]" href="#" @click.prevent="recordClickHeight(eventList[1].targetUrl)">
              <img class="img-fluid" :src="eventList[1].image" alt="優惠訊息">
            </a>
          </div>
          <!-- 優惠訊息下方 3 活動 -->
          <div class="special-areaB-m d-flex w-90 mx-auto">
            <a v-if="eventList[2]" href="#" @click.prevent="recordClickHeight(eventList[2].targetUrl)" class="pe-2">
              <img class="img-fluid" :src="eventList[2].image" alt="優惠訊息">
            </a>
            <a v-if="eventList[3]" href="#" @click.prevent="recordClickHeight(eventList[3].targetUrl)" class="pe-2">
              <img class="img-fluid" :src="eventList[3].image" alt="優惠訊息">
            </a>
            <a v-if="eventList[4]" href="#" @click.prevent="recordClickHeight(eventList[4].targetUrl)">
              <img class="img-fluid" :src="eventList[4].image" alt="優惠訊息">
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- 拿優惠，領券現折 -->
    <div v-if="couponList.length > 0" class="couponList pt-lg-3 pb-4 pb-md-6 pb-lg-3">
      <div class="pb-2 pb-md-4 pb-lg-5">
        <div class="container">
          <!-- title -->
          <div class="d-flex justify-content-center mb-3">
            <img class="img-fluid mx-auto" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/newyeargift/coupon_title.png" alt="精選推薦標題">
          </div>
          <div class="row">
            <div
              class="col-6 text-center"
              v-for="coupon in couponList"
              :key="coupon + '1'"
            >
              <a
                href="#"
                class="d-block hvr-bob"
                @click.prevent="getCoupon(coupon.targetUrl)"
              >
                <img
                  :src="coupon.image"
                  alt="拿優惠，領券現折"
                  class="img-fluid"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 經典好評 -->
    <div class="bg-classic py-3 py-lg-5">
      <div class="container-fluid px-0 px-md-4 px-xl-9">
        <h2>
          <img class="img-fluid d-block d-lg-none mx-auto w-60 mb-3" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/newyeargift/MB_3_title.png" alt="經典好評標題">
          <img class="img-fluid d-none d-lg-block mx-auto w-35" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/newyeargift/PC_3_title.png" alt="經典好評標題">
        </h2>
        <div class="bg-classic-content px-5 px-sm-6 px-md-5">
          <div class="row justify-content-center">
            <div v-if="classicList[0]" class="col-12 col-lg-6 d-flex justify-content-center mb-4 mb-lg-0">
              <a href="#" @click.prevent="recordClickHeight(classicList[0].targetUrl)" class="gift-hover">
                <img class="img-fluid" :src="classicList[0].image" alt="經典好評商品">
              </a>
            </div>
            <div v-if="classicList[1]" class="col-12 col-lg-6 d-flex justify-content-center">
              <a href="#" @click.prevent="recordClickHeight(classicList[1].targetUrl)" class="gift-hover">
                <img class="img-fluid" :src="classicList[1].image" alt="經典好評商品">
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 精選推薦 -->
    <div v-if="giftList" class="bg-product-2 py-4 py-lg-5">
      <div class="container-fluid">
        <img class="img-fluid d-none d-lg-block mx-auto" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/newyeargift/PC_3_frame1.png" alt="精選推薦標題">
        <img class="img-fluid d-block d-lg-none mx-auto" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/newyeargift/MB_3_frame1.png" alt="精選推薦標題">
        <div class="bg-product-content-2">
          <div class="row gx-3">
            <div class="col-6 col-lg-3 mb-3 mb-lg-4" v-for="gift in giftList.products" :key="gift">
              <router-link :to="`/productboard/product/${gift.productId}`">
                <div class="card prd-shadow gift-hover rounded-0 h-100 border-0 d-flex flex-column justify-content-between" :class="{ 'sold-out': gift.stock === 0 }">
                  <img :src="gift.productImage" class="img-fluid p-1 p-md-2" :alt="gift.productName">
                  <div class="flex-fill d-flex flex-column justify-content-between px-1 pb-1 px-md-2 pb-md-2 pt-0">
                    <p v-if="gift.slogan" class="slogan-button mt-3 mb-2 text-center fw-bold p-1 fs-6 fs-md-5 fs-lg-6 fs-xl-5">{{ gift.slogan }}</p>
                    <p class="card-text text-dark text-center mt-0 prd-name fs-6">{{ gift.productName }}</p>
                    <div class="d-flex justify-content-center align-items-end mb-1 mb-md-2">
                      <del class="sell-oldprice text-dark text-nowrap fs-7 fs-md-6 fs-lg-7 fs-xl-6 mb-1 mb-lg-1 mb-xl-0 mb-xxl-2 me-2 me-md-3">
                        ${{ $currency.currency(gift.oldPrice) }}
                      </del>
                      <span class="prd-price text-nowrap fs-7 fs-md-6 fs-lg-7 fs-xxl-6">
                        特價 $<span class="sell-price">{{ $currency.currency(gift.price) }}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
        <img class="img-fluid d-none d-lg-block mx-auto" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/newyeargift/PC_3_frame3.png" alt="精選推薦底部">
        <img class="img-fluid d-block d-lg-none mx-auto" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/newyeargift/MB_3_frame3.png" alt="精選推薦底部">
      </div>
    </div>
    <!-- 大家都在買 -->
    <div v-if="allBuyList" class="bg-product-3 py-4 py-lg-5">
      <div class="container-fluid position-relative">
        <img class="img-fluid d-none d-lg-block mx-auto" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/newyeargift/PC_4_frame1.png" alt="大家都在買標題">
        <img class="img-fluid d-block d-lg-none mx-auto" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/newyeargift/MB_4_frame1.png" alt="大家都在買標題">
        <div class="bg-product-content-3">
          <div class="row gx-3">
            <div class="col-6 col-lg-3 mb-3 mb-lg-4" v-for="gift in allBuyList.products" :key="gift">
              <router-link :to="`/productboard/product/${gift.productId}`">
                <div class="card prd-shadow gift-hover rounded-0 h-100  border-0 d-flex flex-column justify-content-between" :class="{ 'sold-out': gift.stock === 0 }">
                  <img :src="gift.productImage" class="img-fluid p-1 p-md-2" :alt="gift.productName">
                  <div class="flex-fill d-flex flex-column justify-content-between px-1 pb-1 px-md-2 pb-md-2 pt-0">
                    <p v-if="gift.slogan" class="slogan-button mt-3 mb-2 text-center fw-bold p-1 fs-6 fs-md-5 fs-lg-6 fs-xl-5">{{ gift.slogan }}</p>
                    <p class="card-text text-dark text-center mt-0 prd-name fs-6">{{ gift.productName }}</p>
                    <div class="d-flex justify-content-center align-items-end">
                      <del class="text-dark text-nowrap fs-7 fs-md-6 fs-lg-7 fs-xl-6 mb-1 mb-xl-0 mb-xxl-2 me-2 me-md-3">
                        ${{ $currency.currency(gift.oldPrice) }}
                      </del>
                      <span class="prd-price text-nowrap fs-7 fs-md-6 fs-lg-7 fs-xxl-6">
                        特價 $<span class="sell-price">{{ $currency.currency(gift.price) }}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
        <img class="img-fluid d-none d-lg-block mx-auto" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/newyeargift/PC_4_frame3.png" alt="大家都在買底部">
        <img class="img-fluid d-block d-lg-none mx-auto" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/newyeargift/MB_4_frame3.png" alt="大家都在買底部">
        <img class="rabbit1 position-absolute img-fluid w-25 w-lg-15" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/newyeargift/rabbit_4_img1.png" alt="大家都在買-兔1">
        <img class="rabbit2 position-absolute img-fluid w-25 w-lg-15" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/newyeargift/rabbit_4_img2.png" alt="大家都在買-兔2">
      </div>
      <!-- 看更多 -->
      <div class="text-center pt-4 pb-5">
        <router-link to="/">
          <img class="d-lg-none w-50" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/newyeargift/MB_footer-btn.png" alt="看更多">
          <img class="d-none d-lg-inline" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/newyeargift/PC_footer-btn.png" alt="看更多">
        </router-link>
      </div>
      <!-- 注意事項 -->
      <div class="py-3 text-white">
        <div class="container">
          <div class="col-sm-auto mb-2 flex-column">
            <div class="fs-5 py-1 text-start d-block fw-bold mb-2">
              活動詳情
            </div>
            <div class="fs-5">活動期間：2023/1/10 00:00-2/15 23:59</div>
            <!-- ==下錨點1== -->
            <a id="event1" name="event1" ref="event1"></a>
            <div class="fs-5 py-1 text-start d-flex">
              <div class="text-nowrap">活動1：</div>
              <div>全站滿$1680送$200購物金</div>
            </div>
          </div>
          <ol class="">
            <li>
              <div class="d-block">活動內容：</div>
              <span
                >全站商品單筆消費滿$1680送$200購物金，一筆訂單回饋一次，買愈多送愈多。(例如:有3筆訂單金額滿$1680，即可獲得$600購物金)</span
              >
            </li>
            <li>
              回饋將於3/31前發送至會員帳戶內
            </li>
          </ol>
          <!-- ==下錨點2== -->
          <a id="event2" name="event2" ref="event2"></a>
          <div class="col-sm-auto mb-2 flex-column">
            <div class="fs-5 py-1 text-start d-flex">
              <div class="text-nowrap">活動2：</div>
              <div >筆筆消費回饋10%無上限</div>
            </div>
          </div>
          <ol class="" >
            <li>
              <div class="d-block">活動內容：</div>
              <span
                >全站商品不限消費金額，筆筆訂單送10%購物金，回饋無上限。</span
              >
            </li>
            <li>
              回饋將於所有商品出貨後15日發送至會員帳戶內。
            </li>
            <li>
              活動詳情：
              <a href="https://www.yesgogogo.com/activity/2023_memberbonus/tenpercent" class="hvr-grow fw-bold" style="color:#FFFF00">【10%回饋大方送】 </a>
            </li>
          </ol>
          <!-- ==下錨點3== -->
          <a id="event3" name="event3" ref="event3"></a>
          <div class="col-sm-auto mb-2 flex-column">
            <div class="fs-5 py-1 text-start d-flex">
              <div class="text-nowrap">活動3：</div>
              <div >鍋物商品，消費滿$888送$88</div>
            </div>
          </div>
          <ol class="" >
            <li>
              <div class="d-block">活動內容：</div>
              <span
                >團圓饗鍋祭全館商品，消費單筆滿$888送$88購物金。</span
              >
            </li>
            <li>
              回饋將於次月月底前發送至會員帳戶內。(例如:11/30訂單，將於12/31前回饋)
            </li>
            <li>
              活動連結：
              <router-link to="/productboard/productList/S072670" class="hvr-grow fw-bold" style="color:#FFFF00">【團圓饗鍋祭】</router-link>
            </li>
          </ol>
          <!-- 注意事項 -->
          <div class="col-sm-auto mb-2 flex-column">
            <div class="fs-5 py-1 text-start d-block fw-bold">注意事項</div>
          </div>
          <ol class="">
            <li>
              $1購物金=1元新台幣，可於下次消費折抵訂單金額25%。(票券商品與部分專案商品不適用)。
            </li>
            <li>
              上述活動1、活動4回饋，以該筆訂單結帳金額計算(扣除折價券、購物金等優惠活動)。
            </li>
            <li>
              本活動回饋不適用於員購、企業採購等專案賣場及企業帳號訂單。
            </li>
            <li>
              活動頁呈現之商品名稱、價格、顏色、規格、數量，若與購物車之呈現有所不符，以購物車之內容為準。
            </li>
            <li>
              活動事項皆載明於網頁中，參加本活動者視為同意接受本活動注意事項之規範，參加人不符合或違反本活動規定事項者，不可歸責於本公司，本公司保有取消其參加資格之權利，並對於任何破壞本活動之行為保留相關權利。
            </li>
            <li>
              如有其他未盡事宜，修改後的活動內容及約定條款將公佈在yesgogogo網站上，若您於任何修改或變更後繼續使用本服務時，視為您已閱讀、瞭解並同意接受該等修改或變更。
            </li>
            <li>
              參加者若因會員資料填寫不完整者，或活動後變更資料(如姓名、手機、地址等)，或手機收訊不良、電信業者遺漏或阻擋企業訊息等情況，導致無法收到商品或簡訊，信件無人領取等，恕不補發。
            </li>
            <li>
              若遇贈品缺貨，將延後出貨或以等值商品替代，並不得替換現金或其他商品。
            </li>
            <li>
              本公司保留隨時變更、修改、暫停或終止及解釋本活動相關事項及約定條款之權利，若有其他未盡事宜，悉依本公司相關規定或決定辦理。
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import checkToken from '@/assets/js/checkToken.js'

export default {
  data () {
    return {
      giftList: '',
      allBuyList: '',
      eventList: '',
      eventList_m: '',
      classicList: '',
      couponList: [],
      newYG_banner_pc: '',
      newYG_title_mb: '',
      slideShow: '',
      slideShowmb: ''
    }
  },
  methods: {
    /* 主視覺 - 扇子 */
    getGiftBanner () {
      const url = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=newYG_banner`
      this.$http.get(url)
        .then((res) => {
          if (res.data.rtnCode === 0) {
            res.data.info.forEach((item) => {
              if (item.code.includes('_m_')) {
                this.newYG_title_mb = item
              } else {
                this.newYG_banner_pc = item
              }
            })
          }
        })
    },
    /* 輪播 banner */
    getSlideImg () {
      // PC
      const url = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=newYD_slide`
      this.$http.get(url)
        .then((res) => {
          if (res.data.rtnCode === 0) {
            this.slideShow = res.data.info
          }
        })
        // mobile
      const urlm = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=newYD_m_slide`
      this.$http.get(urlm)
        .then((res) => {
          if (res.data.rtnCode === 0) {
            this.slideShowmb = res.data.info
          }
        })
    },
    /* 精選推薦 & 大家都在買 */
    getGiftList () {
      const url = `${process.env.VUE_APP_API}/api/product/eventproducts?code=gift_C`
      this.$http.get(url)
        .then((res) => {
          if (res.data.rtnCode === 0) {
            res.data.info.forEach((item) => {
              if (item.code === 'gift_C_1') {
                this.giftList = item
              } else if (item.code === 'gift_C_2') {
                this.allBuyList = item
              }
            })

            // ?高度返回
            if (this.$store.state.recordEventReadHeight) {
              // ? 若有點擊產品紀錄，則記錄高度供上一頁返回
              setTimeout(() => {
                // ?資料高度生成需要時間，利用setTimeOut讓視窗滑動不同步，才能順利執行
                window.scrollTo(0, this.$store.state.recordEventReadHeight)
                this.$store.commit('getEventRecordHeight', '')
              }, 500)
            } else {
              this.checkLocalHeight()
            }
          }
        })
    },
    /* 活動 */
    getEventList () {
      const url = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=gift_A`
      this.$http.get(url)
        .then((res) => {
          if (res.data.rtnCode === 0) {
            this.eventList = res.data.info
          }
        })
      const urlm = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=gift_m_A`
      this.$http.get(urlm)
        .then((res) => {
          if (res.data.rtnCode === 0) {
            this.eventList_m = res.data.info
          }
        })
    },
    /* 經典好評 */
    getClassicList () {
      const url = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=gift_B`
      this.$http.get(url)
        .then((res) => {
          if (res.data.rtnCode === 0) {
            this.classicList = res.data.info
          }
        })
    },
    /* 領取優惠券 */
    getCouponList () {
      const url = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=newYG_coupon`
      this.$http.get(url).then(res => {
        if (res.data.rtnCode === 0) {
          this.couponList = res.data.info
        }
      })
    },
    // * 領折價券
    getCoupon (code) {
      const AccessToken = checkToken.getAccessToken()
      const RefreshToken = checkToken.getFreshToken()
      if (!AccessToken && RefreshToken) {
        this.$swal.fire({
          title: '頁面逾時，請重新整理',
          allowOutsideClick: false,
          confirmButtonColor: '#F8412E',
          confirmButtonText: '確認',
          width: 400,
          customClass: {
            title: 'text-class',
            confirmButton: 'confirm-btn-class'
          }
        }).then((result) => {
          if (result.isConfirmed) {
            this.$router.go()
          }
        })
        return
      }
      if (!AccessToken && !RefreshToken) {
        this.$swal.fire({
          title: '您好，請登入後再領取優惠',
          allowOutsideClick: true,
          confirmButtonColor: '#F8412E',
          confirmButtonText: '確認',
          backdrop: true,
          width: 400,
          customClass: {
            title: 'text-class',
            confirmButton: 'confirm-btn-class'
          }
        }).then(result => {
          if (result.isConfirmed) {
            if (document.body.clientWidth < 576) {
            // ? 手機版
              this.$router.push('/membermobilelogin')
            } else {
            // ? web 版
              // this.$router.push('/')
              this.$store.state.loginModal.show()
            }
          }
        })
        return
      }
      const url = `${process.env.VUE_APP_API}/api/coupon/SetCoupon`
      // const postData = {
      //   CouponCode: code
      // }
      // ?新Api
      const postData = {
        CouponCodeList: [code]
      }
      this.$http.post(url, postData)
        .then(res => {
          if (res.data.rtnCode !== 0) {
            if (res.data.rtnCode === 1022) {
              this.$swal.fire({
                title: '您已領取過了，無法重複領券!',
                allowOutsideClick: false,
                confirmButtonColor: '#de0a19',
                confirmButtonText: '確認',
                width: 400,
                customClass: {
                  title: 'text-class',
                  confirmButton: 'confirm-btn-class'
                }
              })
            } else {
              this.$swal.fire({
                title: `領取失敗${res.data.rtnMsg}(${res.data.rtnCode})`,
                allowOutsideClick: false,
                confirmButtonColor: '#de0a19',
                confirmButtonText: '確認',
                width: 400,
                customClass: {
                  title: 'text-class',
                  confirmButton: 'confirm-btn-class'
                }
              })
            }
            return
          }
          if (res.data.rtnCode === 0) {
            this.$swal.fire({
              title: '優惠券領取成功，請至會員專區查閱',
              allowOutsideClick: false,
              confirmButtonColor: '#de0a19',
              confirmButtonText: '確認',
              width: 400,
              customClass: {
                title: 'text-class',
                confirmButton: 'confirm-btn-class'
              }
            })
          }
        })
    },
    // * 取得新的一組 token
    getNewToken () {
      const RefreshToken = checkToken.getFreshToken()
      if (RefreshToken) {
        // ? 清除 AccessToken
        checkToken.removeAccessToken()
        const url = `${process.env.VUE_APP_API}/api/members/RefreshToken`
        this.axios({
          method: 'get',
          url: url,
          headers: { Authorization: `Bearer ${RefreshToken}` }
        })
          .then((res) => {
            this.$store.dispatch('loginSetCookie', res.data.info)
          })
      }
    },
    // ?小電視及看更多記錄高度
    recordClickHeight (url) {
      // ?點擊產品觸發紀錄瀏覽高度於LocalStorage
      const scrollYHeight = window.scrollY
      localStorage.setItem('clickNYgift', scrollYHeight)
      setTimeout(() => {
        window.location = url
      }, 500)
    },
    checkLocalHeight () {
      // ?檢查LocalStorage
      if (window.localStorage.getItem('clickNYgift')) {
        const globalheight = window.localStorage.getItem('clickNYgift')
        setTimeout(() => {
          window.scrollTo(0, globalheight)
        }, 300)
        localStorage.removeItem('clickNYgift')
      }
    },
    // ?點擊產品觸發紀錄瀏覽高度
    recordHeight () {
      if (this.$store.state.recordEventReadHeight) {
        setTimeout(() => [
          // ?資料高度生成需要時間，利用setTimeOut讓視窗滑動不同步，才能順利執行
          window.scrollTo(0, this.$store.state.recordEventReadHeight)
        ], 500)
      }
    }
  },
  watch: {
    $route (to, from) {
      if (to.fullPath.match('/productboard/') || to.fullPath === '/') {
        const recordHeight = window.scrollY
        this.$store.commit('getEventRecordHeight', recordHeight)
      } else {
        this.$store.commit('getEventRecordHeight', '')
      }
    }
  },
  mounted () {
    this.getEventList()
    this.getClassicList()
    this.getGiftList()
    this.getCouponList()
    this.getGiftBanner()
    this.getSlideImg()
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/activity/newyeargift/_site.scss';
</style>
