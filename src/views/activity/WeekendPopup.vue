<template>
  <div class="bg_popup">
    <div>
      <!-- PC 版 banner -->
      <div class="headerxl d-none d-lg-block position-relative"></div>
      <!-- 手機版 banner -->
      <div class="header d-lg-none text-center">
        <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/weekendpopup/Index_lg_2up_kv.png" alt="banner_m" class="img-fluid">
      </div>
      <!-- 閃購 1  -->
      <div class="bg_03">
        <!-- 活動結束  -->
        <section v-if="idx === -1" class="mb-3 mb-md-5">
          <div class="container">
            <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/weekendpopup/newNotify.png" alt="敬請期待 banner" class="img-fluid">
          </div>
        </section>
        <section v-else-if="!popupProducts && idx === 0" class="mb-3 mb-md-5">
          <div class="container">
            <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/weekendpopup/0826notify.png" alt="敬請期待 banner" class="img-fluid">
          </div>
        </section>
        <section v-else-if="!popupProducts && idx === 2" class="mb-3 mb-md-5">
          <div class="container">
            <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/weekendpopup/banner_0902.png" alt="敬請期待 banner" class="img-fluid">
          </div>
        </section>
        <section v-else-if="!popupProducts && idx === 4" class="mb-3 mb-md-5">
          <div class="container">
            <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/weekendpopup/banner_0909.png" alt="敬請期待 banner" class="img-fluid">
          </div>
        </section>
        <section v-else class="bg_02">
          <div class="container pb-4 pb-lg-6">
            <!-- PC 閃購 1 標題 -->
            <div class="popup_1st position-relative d-none d-lg-block">
              <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/weekendpopup/title_01.png" alt="閃購區塊 1 上方(PC)" class="img-fluid">
              <div class="count_position_m position-absolute start-0 end-0 px-5">
                <div class="text-end pe-0 pe-xl-5">
                  <div class="fs-5 fs-lg-4 fw-bold mb-3 mb-xl-4">
                    <span v-if="!popupDuration">距離開始</span>
                    <span v-else>距離結束</span>
                    <span v-if="days !== 0">
                      <span class="bg_count">{{ idx !== -1 ? days : 0 }}</span> 天
                    </span>
                    <span class="bg_count">{{ idx !== -1 ? hours : 0 }}</span>:
                    <span class="bg_count">{{ idx !== -1 ? minutes : 0 }}</span>:
                    <span class="bg_count">{{ idx !== -1 ? seconds : 0 }}</span>
                  </div>
                </div>
                <img v-if="idx < 2" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/weekendpopup/0826title.png" alt="閃購標題" class="img-fluid popupTitle_1st">
                <img v-else-if="idx < 4" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/weekendpopup/0902-0904.png" alt="閃購標題" class="img-fluid popupTitle_1st">
                <img v-else-if="idx < 6" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/weekendpopup/0909-0911.png" alt="閃購標題" class="img-fluid popupTitle_1st">
              </div>
            </div>
            <!-- 手機版 閃購 1 標題 -->
            <div class="popup_1st_m position-relative d-lg-none">
              <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/weekendpopup/title_01_m.png" alt="閃購區塊 1 上方(手機)" class="img-fluid">
              <div class="count_position_m position-absolute start-0 end-0 px-3 px-md-4">
                <div class="text-end mobileSpace">
                  <div class="fs-6 fs-sm-5 fs-md-4 fw-bold mb-4 mb-md-5">
                    <span v-if="!popupDuration">距離開始</span>
                    <span v-else>距離結束</span>
                    <span v-if="days !== 0">
                      <span class="bg_count">{{ idx !== -1 ? days : 0 }}</span> 天
                    </span>
                    <span class="bg_count">{{ idx !== -1 ? hours : 0 }}</span>:
                    <span class="bg_count">{{ idx !== -1 ? minutes : 0 }}</span>:
                    <span class="bg_count">{{ idx !== -1 ? seconds : 0 }}</span>
                  </div>
                </div>
                <img v-if="idx < 2" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/weekendpopup/0826title.png" alt="閃購標題" class="img-fluid">
                <img v-else-if="idx < 4" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/weekendpopup/0902-0904.png" alt="閃購標題" class="img-fluid">
                <img v-else-if="idx < 6" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/weekendpopup/0909-0911.png" alt="閃購標題" class="img-fluid">
              </div>
            </div>
            <div class="popup_2nd px-3 px-md-4 px-lg-5">
              <div class="row gx-4 gx-lg-5">
                <template v-if="popupProducts[0]">
                  <div class="col-6 col-lg-4" v-for="(pop, index) in popupProducts[0].products" :key="pop+'1'">
                    <div class="hvr-bob mb-3">
                      <img v-if="popupImg01[index]" :src="popupImg01[index].image" alt="限購價" class="img-fluid d-block">
                      <div class="prd-item position-relative" :class="{ 'sold-out': pop.stock === 0 }">
                        <router-link :to="`/productboard/product/${pop.productId}`" class="text-dark">
                          <div class="card card-rounded border-0 p-2 p-lg-3">
                            <img :src="pop.productImage" class="card-img-top" :alt="pop.productName">
                            <div class="card-body px-0 pt-2 pb-0">
                              <h3 class="fs-6 fs-lg-5 fw-medium prd-title">{{ pop.productName }}</h3>
                              <div class="d-flex justify-content-between align-items-center">
                                <del class="fs-7 fs-lg-6 prd-text">原價${{ pop.oldPrice &lt; 0 ? 'xxx': $currency.currency(pop.oldPrice) }}</del>
                                <p class="fs-5 fs-lg-3 prd-price">${{ pop.price &lt; 0 ? 'xxx': $currency.currency(pop.price) }}</p>
                              </div>
                            </div>
                          </div>
                        </router-link>
                      </div>
                      <img v-if="idx % 2 === 0" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/weekendpopup/icon_02.png" alt="敬請期待" class="img-fluid d-block">
                      <img v-else src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/weekendpopup/icon_03.png" alt="開賣中" class="img-fluid d-block">
                    </div>
                  </div>
                </template>
              </div>
            </div>
            <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/weekendpopup/title_03.png" alt="下方圓弧" class="img-fluid d-block">
          </div>
        </section>
        <!-- 閃購 2  -->
        <!-- <section class="bg_01" v-if="idx < 10 && idx !== -1">
          <div class="container pb-4 pb-lg-5">
            <img src="../../assets/img/activity/weekendpopup/title_02.png" alt="上方圓弧" class="img-fluid d-block">
            <img v-if="idx < 2" src="../../assets/img/activity/weekendpopup/title_05.png" alt="閃購標題 2" class="popupTitle_2nd img-fluid d-none d-lg-block px-5">
            <img v-if="idx < 4" src="../../assets/img/activity/weekendpopup/title_05.png" alt="閃購標題 2" class="popupTitle_2nd img-fluid d-none d-lg-block px-5">
            <img v-if="idx < 6" src="../../assets/img/activity/weekendpopup/title_05.png" alt="閃購標題 2" class="popupTitle_2nd img-fluid d-none d-lg-block px-5">
            <img v-if="idx < 8" src="../../assets/img/activity/weekendpopup/title_05.png" alt="閃購標題 2" class="popupTitle_2nd img-fluid d-none d-lg-block px-5">
            <img v-else src="../../assets/img/activity/weekendpopup/title_06.png" alt="閃購標題 3" class="popupTitle_2nd img-fluid d-none d-lg-block px-5">
            <div class="popup_2nd px-3 px-md-4 px-lg-5 pt-2 pt-lg-4">
              <img v-if="idx < 2" src="../../assets/img/activity/weekendpopup/title_05.png" alt="閃購標題 2" class="img-fluid d-lg-none mb-3">
              <img v-else src="../../assets/img/activity/weekendpopup/title_06.png" alt="閃購標題 3" class="img-fluid d-lg-none mb-3">
              <div class="row gx-4 gx-lg-5">
                <template v-if="popupProducts[1]">
                  <div class="col-6 col-lg-4" v-for="(pop, index) in popupProducts[1].products" :key="pop+'2'">
                    <div class="hvr-bob mb-3">
                      <img v-if="popupImg02[index]" :src="popupImg02[index].image" alt="限購價" class="img-fluid d-block">
                      <div class="prd-item position-relative" :class="{ 'sold-out': pop.stock === 0 }">
                        <router-link :to="`/productboard/product/${pop.productId}`" class="text-dark">
                          <div class="card card-rounded border-0 p-2 p-lg-3">
                            <img :src="pop.productImage" class="card-img-top" :alt="pop.productName">
                            <div class="card-body px-0 pt-2 pb-0">
                              <h3 class="fs-6 fs-lg-5 fw-medium prd-title">{{ pop.productName }}</h3>
                              <div class="d-flex justify-content-between align-items-center">
                                <del class="fs-7 fs-lg-6 prd-text">原價${{ pop.oldPrice &lt; 0 ? 'xxx': $currency.currency(pop.oldPrice) }}</del>
                                <p class="fs-5 fs-lg-3 prd-price">${{ pop.price &lt; 0 ? 'xxx': $currency.currency(pop.price) }}</p>
                              </div>
                            </div>
                          </div>
                        </router-link>
                      </div>
                      <img src="../../assets/img/activity/weekendpopup/icon_02.png" alt="敬請期待" class="img-fluid d-block">
                    </div>
                  </div>
                </template>
              </div>
            </div>
            <img src="../../assets/img/activity/weekendpopup/title_03.png" alt="下方圓弧" class="img-fluid d-block">
          </div>
        </section> -->
        <!-- 看更多優惠活動 -->
        <section class="bg_01">
          <div class="container pb-5">
            <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/weekendpopup/title_07_m.png" alt="看更多優惠活動標題" class="img-fluid d-lg-none">
            <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/weekendpopup/title_07.png" alt="看更多優惠活動標題" class="img-fluid d-none d-lg-inline">
            <div class="moreEvent px-3 px-md-4 pb-lg-5">
              <div class="row moreEvent_mt">
                <div class="col-6 col-lg-3 mb-3" v-for="event in moreEventList" :key="event+'1'">
                  <a :href="event.targetUrl" class="hvr-bob">
                    <img :src="event.image" :alt="event.code" class="img-fluid">
                  </a>
                </div>
              </div>
            </div>
            <div class="bg_remind">
              <div class="text-center mb-4 mb-md-5">
                <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/weekendpopup/title_08.png" alt="快搶小提醒" class="img-fluid remindTitle">
              </div>
              <!-- 搶快小提醒 PC 版  -->
              <div class="mx-3 mx-md-4 d-none d-lg-block">
                <div class="row gx-4 mb-4">
                  <div class="col-lg-4">
                    <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/weekendpopup/STEP_01.png" alt="登入填寫會員資料標題" class="img-fluid mb-3">
                    <div class="processImg text-center">
                      <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/weekendpopup/STEP_01-1.png" alt="登入填寫會員資料內容" class="img-fluid">
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/weekendpopup/STEP_02_new.png" alt="商品加入購物車標題" class="img-fluid mb-3">
                    <div class="processImg text-center">
                      <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/weekendpopup/STEP_02-1.png" alt="商品加入購物車內容" class="img-fluid">
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/weekendpopup/STEP_03.png" alt="當日結帳搶購標題" class="img-fluid mb-3">
                    <div class="processImg text-center">
                      <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/weekendpopup/STEP_03-1.png" alt="當日結帳搶購內容" class="img-fluid">
                    </div>
                  </div>
                </div>
              </div>
              <!-- 搶快小提醒 手機 版  -->
              <div class="d-lg-none">
                <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/weekendpopup/STEP_01_m.png" alt="登入填寫會員資料標題" class="img-fluid mb-5">
                <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/weekendpopup/STEP_02_m_new.png" alt="商品加入購物車標題" class="img-fluid mb-5">
                <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/weekendpopup/STEP_03_m.png" alt="當日結帳搶購標題" class="img-fluid mb-5">
              </div>
              <div class="remind_border mx-3 mx-md-4 pt-3 pb-4">
                <div class="mx-0 mx-lg-3">
                  <p class="fs-6 mb-1">注意事項</p>
                  <p class="mb-1">1. 每周五 00:00 準時開賣，數量有限，售完為止。</p>
                  <p>2. 本活動頁商品庫存以結帳完成順序為準，因此不適用 ATM 付款方式。</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  data () {
    return {
      seconds: '',
      minutes: '',
      hours: '',
      days: '',
      popupDate: [
        '2022/08/26 00:00:00', '2022/08/28 23:59:59',
        '2022/09/02 00:00:00', '2022/09/04 23:59:59',
        '2022/09/09 00:00:00', '2022/09/11 23:59:59'
      ],
      timeinterval: '',
      deadline: '',
      popupDuration: false,
      idx: 0,
      popupProducts: '',
      popupImg01: '',
      popupImg02: '',
      popupImg03: '',
      moreEventList: '' // *看更多優惠活動
    }
  },
  methods: {
    getPopupProducts () {
      const url = `${process.env.VUE_APP_API}/api/product/eventproducts?code=pop_A`
      this.$http.get(url)
        .then((res) => {
          if (res.data.rtnCode === 0) {
            this.popupProducts = res.data.info
            this.popupProducts.forEach((item, index) => {
              const url = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=${item.code}`
              this.$http.get(url)
                .then((res) => {
                  if (res.data.rtnCode === 0) {
                    this[`popupImg0${index + 1}`] = res.data.info
                  }
                })
            })
          }

          // ? 若有點擊產品紀錄，則記錄高度供上一頁返回
          if (this.$store.state.recordEventReadHeight) {
            setTimeout(() => [// ?資料高度生成需要時間，利用setTimeOut讓視窗滑動不同步，才能順利執行
              window.scrollTo(0, this.$store.state.recordEventReadHeight)
            ], 500)
          }
        })
    },
    // *看更多優惠活動
    getMoreEvent () {
      const url = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=pop_B`
      this.$http.get(url)
        .then((res) => {
          if (res.data.rtnCode === 0) {
            this.moreEventList = res.data.info
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
      this.expiredEvent()
      if (t.total <= 0) {
        clearInterval(this.timeinterval)
      }
    },
    expiredEvent () {
      const now = moment().format('YYYY/MM/DD HH:mm:ss')
      this.idx = this.popupDate.findIndex((item) => {
        return moment(now, 'YYYY/MM/DD HH:mm:ss').isBefore(item)
      })
      this.deadline = this.popupDate[this.idx]
      if (this.idx % 2 !== 0) {
        this.popupDuration = true
      } else {
        this.popupDuration = false
      }
    }
    // *搶購倒數計時 end
  },
  watch: {
    popupDuration () {
      this.initializeClock()
    },
    '$route' (to, from) {
      if (to.fullPath.match('/productboard/product/') || to.fullPath.match('/productboard/productList/')) {
        const recordHeight = window.scrollY
        this.$store.commit('getEventRecordHeight', recordHeight)
      } else {
        this.$store.commit('getEventRecordHeight', '')
      }
    }
  },
  mounted () {
    this.deadline = moment().format('YYYY/MM/DD HH:mm:ss')
    this.initializeClock()
    this.getPopupProducts()
    this.getMoreEvent()
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/activity/_hover.min.scss';
@import '@/assets/scss/activity/weekendpopup/_site.scss';
img{
  object-fit: fill;
}
</style>
