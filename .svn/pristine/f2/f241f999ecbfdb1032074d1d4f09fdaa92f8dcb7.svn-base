<template>
  <main class="bg_popup">
    <div v-if="!isPopOpen">
      <Comingsoon></Comingsoon>
    </div>
    <div v-if="isPopOpen">
      <!-- 主視覺 pc-->
      <div class="d-none d-lg-block text-center position-relative">
        <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/superpopup/kv01.png" alt="超級閃購" class="img-fluid">
        <!-- 版頭主打品 -->
        <!-- <a :href="mainProduct[0]?.targetUrl" class="d-block">
          <img :src="mainProduct[0]?.image" alt="版頭主打品" class="popular-prd position-absolute img-fluid top-0">
        </a> -->
        <!-- 版頭主打品 輪播 -->
        <div class="popular-prd position-absolute top-0 h-100">
          <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/superpopup/kv-right-title.png" class="img-fluid" alt="好康必 buy">
          <div class="hotEvents">
            <swiper
              class="mainSwiper hotSwiper h-100"
              :loop="true"
              :spaceBetween="0"
              :initialSlide="1"
              :speed="400"
              :autoplay="{
                delay: 2000,
                disableOnInteraction: false
              }"
              :navigation="false"
              :pagination="{
                el: '.swiperMain-pagination',
                type: 'bullets',
                clickable: true
              }"
            >
              <swiper-slide v-for="prd in mainProduct" :key="prd">
                <a :href="prd.targetUrl" class="d-block">
                  <img :src="prd.image" alt="版頭主打品" class="img-fluid">
                </a>
              </swiper-slide>
            </swiper>
            <div class="swiperMain-pagination text-center swiperPagination"></div>
          </div>
        </div>
        <!-- 輪播活動 -->
        <div class="events-lg position-absolute">
          <!-- <img
            class="img-fluid"
            src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/superpopup/kv-text02.png"
            alt="筆筆回饋10%無上限"
          /> -->
          <swiper
            :direction="'vertical'"
            class="eventlgSwiper"
            :loop="true"
            :spaceBetween="0"
            :initialSlide="0"
            :navigation="false"
            :autoplay="{
              delay: 2000,
              disableOnInteraction: false
            }"
          >
            <swiper-slide>
              <img
                class="img-fluid"
                :src="`https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/superpopup/kv-text01.png?${makeid()}`"
                alt="全面3折up"
              />
            </swiper-slide>
            <swiper-slide>
              <img
                class="img-fluid"
                src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/superpopup/kv-text02.png"
                alt="筆筆回饋10%無上限"
              />
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <!-- 主視覺 mobile -->
      <div class="d-lg-none text-center position-relative">
        <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/superpopup/mb_kv01.png" alt="超級閃購" class="img-fluid">
        <!-- 版頭主打品 -->
        <!-- <a :href="mainProduct_m[0]?.targetUrl" class="d-block">
          <img :src="mainProduct_m[0]?.image" alt="版頭主打品" class="position-absolute img-fluid bottom-0 start-50 translate-middle-x w-70">
        </a> -->
        <div class="popularM position-absolute bottom-0 start-50 translate-middle-x">
          <div class="hotEvents">
            <swiper
              class="mainMSwiper popularMSwiper h-100"
              :loop="true"
              :spaceBetween="0"
              :initialSlide="1"
              :speed="400"
              :autoplay="{
                delay: 2000,
                disableOnInteraction: false
              }"
              :navigation="false"
              :pagination="{
                el: '.swiperMainM-pagination',
                type: 'bullets',
                clickable: true
              }"
            >
              <swiper-slide v-for="prd in mainProduct_m" :key="prd">
                <a :href="prd.targetUrl" class="d-block">
                  <img :src="prd.image" alt="版頭主打品" class="img-fluid">
                </a>
              </swiper-slide>
            </swiper>
            <div class="swiperMainM-pagination text-center swiperPagination"></div>
          </div>
        </div>
        <!-- 輪播活動 -->
        <div class="events-m position-absolute">
          <!-- <img
            class="img-fluid"
            src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/superpopup/mb-kv-text02.png"
            alt="筆筆回饋10%無上限"
          /> -->
          <swiper
            :direction="'vertical'"
            class="eventmSwiper"
            :loop="true"
            :spaceBetween="0"
            :initialSlide="0"
            :navigation="false"
            :autoplay="{
              delay: 2000,
              disableOnInteraction: false
            }"
          >
            <swiper-slide>
              <img
                class="img-fluid"
                :src="`https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/superpopup/mb_kv-text01.png?${makeid()}`"
                alt="全面3折up"
              />
            </swiper-slide>
            <swiper-slide>
              <img
                class="img-fluid"
                src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/superpopup/mb-kv-text02.png"
                alt="筆筆回饋10%無上限"
              />
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <!-- 爆品限時搶 -->
      <div class="bg-pop">
        <div class="container pt-3 pt-md-5">
          <h2>
            <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/superpopup/mb-bg_a01.png" alt="爆品限時搶標題" class="img-fluid d-block d-lg-none">
            <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/superpopup/bg_a01.png" alt="爆品限時搶標題" class="img-fluid d-none d-lg-block">
          </h2>
          <div class="bg-popList px-3 px-md-4">
            <p v-if="idx !== -1" class="count-color fs-5 fs-md-4 fw-bold text-center pb-3 pb-md-4">剩餘
              <span v-if="days !== 0">
                <span class="fs-4 fs-md-3">{{ idx !== -1 ? days : 0 }}</span> 天
              </span>
              <span class="fs-4 fs-md-3">{{ idx !== -1 ? hours: 0 }}</span> 時
              <span class="fs-4 fs-md-3">{{ idx !== -1 ? minutes: 0 }}</span> 分
              <span class="fs-4 fs-md-3">{{ idx !== -1 ? seconds: 0 }}</span> 秒
            </p>
            <div class="row gx-2 gx-lg-4">
              <div class="col-6 col-lg-4 mb-2 mb-md-4 mb-lg-5" v-for="pop in popupProducts" :key="pop + '1'">
                <div class="prd-hover prd-item position-relative" :class="{ 'sold-out': pop.stock === 0 }">
                  <router-link
                    :to="`/productboard/product/${pop.productId}`"
                    class="d-block text-secondary"
                  >
                    <div class="ratio ratio-1x1 position-relative bg-white d-flex justify-content-center align-items-center">
                      <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/superpopup/time-box.png" alt="搶購活動" class="outline-img position-absolute top-0 start-0 z-index-3">
                      <img
                        :src="`${pop.productImage}`"
                        class="prd-img card-img-top"
                        alt="product image"
                        />
                    </div>
                    <div class="card-body text-center py-2 px-0 p-md-2">
                      <h5 class="card-title fs-6 fs-md-5 mb-2 mb-md-3">{{ pop.productName }}</h5>
                      <div class="d-flex align-items-center justify-content-between fs-6 fs-md-5 fs-lg-4 lh-1">
                        <p class="prd-discount py-2 px-1 px-md-3 px-lg-4 text-white">{{ pop.discount }}折</p>
                        <p class="card-text price-color fs-7 fs-sm-6 fs-md-5">
                          限搶價$
                          <span class="fs-3 fs-md-2 fs-lg-1">{{ $currency.currency(pop.price) }}</span>
                        </p>
                      </div>
                    </div>
                  </router-link>
                </div>
              </div>
              <div v-if="popupProducts.length % 2 !== 0" class="col-6 d-lg-none mb-4 mb-md-5">
                <div class="d-flex justify-content-center align-items-center h-100 px-3">
                  <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/superpopup/mb-photo.png" alt="搶購活動" class="img-fluid">
                </div>
              </div>
            </div>
          </div>
          <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/superpopup/mb-bg_a03.png" alt="爆品限時搶底部" class="img-fluid d-block d-lg-none">
          <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/superpopup/bg_a03.png" alt="爆品限時搶底部" class="img-fluid d-none d-lg-block">
          <!-- 品牌活動輪播 PC-->
          <div v-if="eventBannerList.length > 0" class="mt-3 mt-lg-5 d-none d-lg-block">
            <swiper
              class="eventBannerSwiper h-100"
              :loop="true"
              :spaceBetween="0"
              :initialSlide="1"
              :autoplay="{
                delay: 3000,
                disableOnInteraction: false
              }"
            >
              <swiper-slide v-for="event in eventBannerList" :key="event">
                <a href="#" @click.prevent="recordClickHeight(event.targetUrl)" class="d-block overflow-hidden text-center h-100"
                  >
                  <img :src="event.image" alt="banner image" class="w-100">
                </a>
              </swiper-slide>
            </swiper>
          </div>
          <!-- 品牌活動輪播 mb-->
          <div v-if="eventBannerList_m.length > 0" class="mt-3 mt-lg-5 d-lg-none">
            <swiper
              class="eventBannerMSwiper h-100"
              :loop="true"
              :spaceBetween="0"
              :initialSlide="1"
              :autoplay="{
                delay: 3000,
                disableOnInteraction: false
              }"
            >
              <swiper-slide v-for="event_m in eventBannerList_m" :key="event_m">
                <a href="#" @click.prevent="recordClickHeight(event_m.targetUrl)" target="_blank" class="d-block overflow-hidden text-center h-100"
                  >
                  <img :src="event_m.image" alt="banner image" class="w-100">
                </a>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
      <div class="bg-pop2 pt-3 pt-lg-5">
        <!-- 這些也帶走 -->
        <div class="container">
          <h2>
            <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/superpopup/mb-bg_b01.png" alt="這些也帶走標題" class="img-fluid d-block d-lg-none">
            <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/superpopup/bg_b01.png" alt="這些也帶走標題" class="img-fluid d-none d-lg-block">
          </h2>
          <div class="bg-addonList px-3 px-md-4">
            <div class="row gx-2 gx-md-4">
              <div class="col-6 col-lg-3 mb-2 mb-lg-4 mt-0" v-for="addon in addonList" :key="addon + '1'">
                <div class="addon-card prd-hover prd-item position-relative" :class="{ 'sold-out': addon.stock === 0 }">
                  <router-link :to="`/productboard/product/${addon.productId}`" class="d-block text-black">
                    <div class="card border-0 rounded-0 px-1 px-sm-2 pt-2 pt-md-2">
                      <img :src="addon.productImage" class="card-img-top" alt="product image">
                      <div class="card-body text-center px-0 pt-2 pb-0 py-sm-2 overflow-hidden">
                        <h5 class="card-title fs-6 fs-md-5">{{ addon.productName }}</h5>
                        <p class="d-inline text-nowrap fs-7 fs-lg-6 fs-xl-5">
                          <del class="text-black me-2 me-xl-3">${{ addon.oldPrice &lt; 0 ? 'xxx': $currency.currency(addon.oldPrice) }}</del>
                          <span class="addonPrice-color">特價$<span class="fs-3 fs-md-2">{{ addon.price &lt; 0 ? 'xxx': $currency.currency(addon.price) }}</span></span></p>
                      </div>
                    </div>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/superpopup/mb-bg_b03.png" alt="這些也帶走底部" class="img-fluid d-block d-lg-none">
          <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/superpopup/bg_b03.png" alt="這些也帶走底部" class="img-fluid d-none d-lg-block">
        </div>
        <!-- 熱門活動 -->
        <div class="container py-3 py-md-5">
          <h2>
            <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/superpopup/mb-bg_c01.png" alt="熱門活動標題" class="img-fluid d-block d-lg-none">
            <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/superpopup/bg_c01.png" alt="熱門活動標題" class="img-fluid d-none d-lg-block">
          </h2>
          <div class="bg-hot px-4 pt-2">
            <div class="hotEvents">
              <swiper
                class="hotSwiper swiper h-100"
                :slidesPerView="2"
                :spaceBetween="15"
                :watchOverflow=true
                :breakpoints="{
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                  }
                }"
                :pagination="{
                  el: '.swiper-pagination',
                  type: 'bullets',
                  clickable: true
                }"
              >
                <swiper-slide v-for="hot in hotEventsList" :key="hot.productId">
                  <a href="#" @click.prevent="recordClickHeight(hot.targetUrl)" class="d-block prd-hover pt-2">
                    <img :src="hot.image" class="img-fluid" alt="theme">
                  </a>
                </swiper-slide>
              </swiper>
              <div class="swiper-pagination text-center swiperPagination"></div>
            </div>
          </div>
          <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/superpopup/mb-bg_c03.png" alt="熱門活動底部" class="img-fluid d-block d-lg-none">
          <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/superpopup/bg_c03.png" alt="熱門活動底部" class="img-fluid d-none d-lg-block">
        </div>
        <!-- 看更多商品 -->
        <div class="text-center w-40 w-lg-20 mx-auto pt-3 pb-5 pt-md-5 pb-lg-9">
          <router-link to="/">
            <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/superpopup/button-more.png" class="img-fluid" alt="看更多商品">
          </router-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import moment from 'moment'
import Comingsoon from '@/views/activity/ComingSuperPopup.vue'

export default {
  // metaInfo () {
  //   return {
  //     meta: [
  //       {
  //         property: 'og:type',
  //         content: 'yesgogogo product',
  //         vmid: 'og:type'
  //       },
  //       {
  //         property: 'og:site_name',
  //         content: 'yesgogogo',
  //         vmid: 'og:site_name'
  //       },
  //       {
  //         property: 'og:image',
  //         content: 'https://yesgoimages.s3.ap-northeast-1.amazonaws.com/icon/popupfb.png',
  //         vmid: 'og:image'
  //       },
  //       {
  //         property: 'og:title',
  //         content: '超級閃購',
  //         vmid: 'og:title'
  //       },
  //       {
  //         property: 'og:description',
  //         content: '逛逛在地美食、生活好物絕不錯過！',
  //         vmid: 'og:description'
  //       },
  //       {
  //         property: 'og:url',
  //         content: 'https://www.yesgogogo.com/activity/weekendpopup',
  //         vmid: 'og:url'
  //       }
  //     ]
  //   }
  // },
  components: {
    Comingsoon
  },
  data () {
    return {
      seconds: '',
      minutes: '',
      hours: '',
      days: '',
      deadline: '',
      timeinterval: '',
      isPopOpen: false,
      popupDate: [],
      mainProduct: [],
      mainProduct_m: [],
      popupProducts: '',
      addonList: '',
      hotEventsList: '',
      eventBannerList: [],
      eventBannerList_m: []
    }
  },
  methods: {
    // * 取得活動時間起訖
    getDate () {
      const url = `${process.env.VUE_APP_API}/api/product/eventproducts?code=pop_date`
      this.$http.get(url)
        .then((res) => {
          if (res.data.rtnCode === 0) {
            this.popupDate = [res.data.info[0].title, res.data.info[0].description]
            this.expiredEvent()
          }
        })
    },
    // * 版頭主打品
    getMainProduct () {
      const url = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=pop_main`
      this.$http.get(url)
        .then((res) => {
          if (res.data.rtnCode === 0) {
            res.data.info.forEach((item) => {
              if (item.code.includes('_m_')) {
                this.mainProduct_m.push(item)
              } else {
                this.mainProduct.push(item)
              }
            })

            /* 只有一張主打品不做 loop */
            setTimeout(() => {
              const swipers = document.querySelectorAll('.mainSwiper .swiper-slide')
              if (swipers.length === 3) {
                const slide = document.querySelector('.mainSwiper .swiper-wrapper')
                slide.classList.add('disabled')
              }
              const swiperMs = document.querySelectorAll('.mainMSwiper .swiper-slide')
              if (swiperMs.length === 3) {
                const slideM = document.querySelector('.mainMSwiper .swiper-wrapper')
                slideM.classList.add('disabled')
              }
            }, 500)
          }
        })
    },
    // * 推薦商品
    getPopupProducts () {
      const url = `${process.env.VUE_APP_API}/api/product/eventproducts?code=pop_A`
      this.$http.get(url)
        .then((res) => {
          if (res.data.rtnCode === 0) {
            this.popupProducts = res.data.info[0].products
            this.popupProducts.forEach((item) => {
              const quo = Math.ceil(item.price / item.oldPrice * 100)
              item.discount = quo % 10 === 0 ? quo / 10 : quo
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
    // * 加購商品
    getAddon () {
      const url = `${process.env.VUE_APP_API}/api/product/eventproducts?code=pop_C`
      this.$http.get(url)
        .then((res) => {
          if (res.data.rtnCode === 0) {
            this.addonList = res.data.info[0].products
          }
        })
    },
    // * 熱門活動
    getHotEvents () {
      const url = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=pop_B`
      this.$http.get(url)
        .then((res) => {
          if (res.data.rtnCode === 0) {
            this.hotEventsList = res.data.info
          }
        })
    },
    // * 活動區 Banner
    getEventBanner () {
      const url = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=pop_E`
      this.$http.get(url)
        .then((res) => {
          if (res.data.rtnCode === 0) {
            res.data.info.forEach((item) => {
              if (item.code.includes('_m_')) {
                this.eventBannerList_m.push(item)
              } else {
                this.eventBannerList.push(item)
              }
            })

            /* 只有一張主打品不做 loop */
            setTimeout(() => {
              const swipers = document.querySelectorAll('.eventBannerSwiper .swiper-slide')
              if (swipers.length === 3) {
                const slide = document.querySelector('.eventBannerSwiper .swiper-wrapper')
                slide.classList.add('disabled')
              }
              const swiperMs = document.querySelectorAll('.eventBannerMSwiper .swiper-slide')
              if (swiperMs.length === 3) {
                const slideM = document.querySelector('.eventBannerMSwiper .swiper-wrapper')
                slideM.classList.add('disabled')
              }
            }, 500)
          }
        })
    },
    // *搶購倒數計時
    initializeClock () {
      this.updateClock()
      this.timeinterval = setInterval(this.updateClock, 1000)
    },
    getTimeRemaining (endtime) {
      const total = Date.parse(endtime) - Date.parse(new Date())
      const seconds = Math.floor((total / 1000) % 60)
      const minutes = Math.floor((total / 1000 / 60) % 60)
      const hours = Math.floor((total / (1000 * 60 * 60)) % 24)
      const days = Math.floor(total / (1000 * 60 * 60 * 24))
      return { total, days, hours, minutes, seconds }
    },
    updateClock () {
      const t = this.getTimeRemaining(this.deadline)
      this.seconds = ('0' + t.seconds).slice(-2)
      this.minutes = ('0' + t.minutes).slice(-2)
      this.hours = ('0' + t.hours).slice(-2)
      this.days = t.days
      if (t.total <= 0) {
        clearInterval(this.timeinterval)
      }
    },
    // * 搶購切換
    expiredEvent () {
      const now = moment().format('YYYY/MM/DD HH:mm:ss')
      this.idx = this.popupDate.findIndex((item) => {
        return moment(now, 'YYYY/MM/DD HH:mm:ss').isBefore(item)
      })
      this.deadline = this.popupDate[this.idx]
      if ((moment(now, 'YYYY/MM/DD HH:mm:ss').isBefore(this.deadline) && this.idx % 2 !== 0 && this.idx !== -1) || (Object.keys(this.$route.query).length !== 0 && this.$route.query.isOpen === 'false')) {
        this.isPopOpen = true
        this.getPopupProducts()
        this.getAddon()
        this.getHotEvents()
        this.getMainProduct()
        this.getEventBanner()
      }
    },
    // *搶購倒數計時 end
    // ?小電視及看更多記錄高度
    recordClickHeight (url) {
      // ?點擊產品觸發紀錄瀏覽高度於LocalStorage
      const scrollYHeight = window.scrollY
      localStorage.setItem('clickpopupHeight', scrollYHeight)
      setTimeout(() => {
        window.location = url
      }, 500)
    },
    checkLocalHeight () {
      // ?檢查LocalStorage
      if (window.localStorage.getItem('clickpopupHeight')) {
        const globalheight = window.localStorage.getItem('clickpopupHeight')
        setTimeout(() => {
          window.scrollTo(0, globalheight)
        }, 300)
        localStorage.removeItem('clickpopupHeight')
      }
    },
    // * 亂數
    makeid () {
      let result = ''
      const characters =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
      const charactersLength = characters.length
      for (let i = 0; i < 3; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        )
      }
      return result
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
    this.initializeClock()
    this.getDate()
  },
  updated () {
    this.checkLocalHeight()
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/activity/weekendpopup/_siteSuper.scss';
img{
  object-fit: fill;
  vertical-align: middle;
}

::v-deep(.hotSwiper>.swiper-pagination-bullets){
  bottom: 3px;
  @media (min-width: 768px) {
    bottom: 6px;
  }
}

::v-deep(.hotEvents .swiper-pagination){
  position: static;
}

::v-deep(.hotEvents .swiper-pagination-bullet) {
  margin: 0 3px;
  background-color: #fff;
  opacity: .8;
}

::v-deep(.hotEvents .swiper-pagination-bullet-active){
  position: relative;
  z-index: 10;
  background-color: #FFF9D2;
  opacity: 1;
}

::v-deep(.swiper-wrapper.disabled) {
    transform: translate3d(0px, 0, 0) !important;
}
</style>
