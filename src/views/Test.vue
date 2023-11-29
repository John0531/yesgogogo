<template>
  <EventHeader></EventHeader>
  <div class="Bg ">
    <div class="foodContainer position-relative" style="overflow:hidden;">
      <!-- 拿優惠，領券現折 -->
      <div class="couponList pt-3 pb-4 pb-md-6 pb-lg-3">
        <div class="wishfulContainer pb-2 pb-md-4 pb-lg-5">
          <div class="container">
            <!-- title -->
            <div class="d-flex justify-content-center mb-3 " >
              <img
                v-if="title[0]"
                :src="title[0].image"
                alt="拿優惠，領券現折"
                class="img-fluid d-none d-lg-inline"
              />
              <img
                v-if="titleMb[0]"
                :src="titleMb[0].image"
                alt="拿優惠，領券現折"
                class="img-fluid d-lg-none w-50"
              />
            </div>
            <div class="row specialProducts">
              <div
                class="specialProductItem col-6 text-center"
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
    </div>
  </div>
  <LoginModal></LoginModal>
</template>

<script>
import LoginModal from '@/components/LoginModal.vue'
import EventHeader from '@/components/EventHeader.vue'
// import ConfettiGenerator from '@/assets/js/confetti.js'
import checkToken from '@/assets/js/checkToken.js'

export default {
  components: {
    LoginModal,
    EventHeader
  },
  data () {
    return {
      activitiesImgs: [],
      activitiesImgsMb: [],
      title: [],
      titleMb: [],
      dishestitle: [],
      dishestitleMb: [],
      foodList: [],
      foodList01: [],
      foodList02: [],
      foodList03: [],
      foodList04: [],
      couponList: [],
      dishesList: [],
      brandlList: [],
      foodList01Link: '',
      foodList02Link: '',
      foodList03Link: '',
      foodList04Link: '',
      hotEventsList: [],
      CouponCode: ''
    }
  },
  methods: {
    //* 雪花飄
    // startAnimation () {
    //   var confettiSettings = { target: 'my-canvas' }
    //   var confetti = new ConfettiGenerator(confettiSettings)
    //   confetti.render()
    //* newYD_A 上方5活動
    getTopActivities () {
      /* 電腦版 */
      const urlm = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=newYD_A`
      this.$http.get(urlm).then(res => {
        if (res.data.rtnCode !== 0) {
          this.$swal.fire({
            title: `newYD_A${res.data.rtnMsg}(${res.data.rtnCode})`,
            allowOutsideClick: false,
            confirmButtonColor: '#F8412E',
            confirmButtonText: '確認',
            width: 400,
            customClass: {
              title: 'text-class',
              confirmButton: 'confirm-btn-class'
            }
          })
          return
        }
        if (res.data.rtnCode === 0) {
          this.activitiesImgs = res.data.info
        }
      })
      /* 標題活動連結手機版 */
      const url = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=newYD_m_A`
      this.$http.get(url).then(res => {
        if (res.data.rtnCode !== 0) {
          this.$swal.fire({
            title: `mom_m_A${res.data.rtnMsg}(${res.data.rtnCode})`,
            allowOutsideClick: false,
            confirmButtonColor: '#F8412E',
            confirmButtonText: '確認',
            width: 400,
            customClass: {
              title: 'text-class',
              confirmButton: 'confirm-btn-class'
            }
          })
          return
        }
        if (res.data.rtnCode === 0) {
          this.activitiesImgsMb = res.data.info
        }
      })
    },
    //* newYD_B 拿優惠，領券現折折價券表  */
    getCouponList () {
      const url = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=newYD_B`
      this.$http.get(url).then(res => {
        if (res.data.rtnCode !== 0) {
          this.$swal.fire({
            title: `mom_B${res.data.rtnMsg}(${res.data.rtnCode})`,
            allowOutsideClick: false,
            confirmButtonColor: '#F8412E',
            confirmButtonText: '確認',
            width: 400,
            customClass: {
              title: 'text-class',
              confirmButton: 'confirm-btn-class'
            }
          })
          return
        }
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
        localStorage.setItem('fromEvent', 'event')
        if (document.body.clientWidth < 576) {
        // ? 手機版
          this.$router.push('/membermobilelogin')
        } else {
        // ? web 版
          // this.$router.push('/')
          this.$store.state.loginModal.show()
        }
        return
      }
      const url = `${process.env.VUE_APP_API}/api/coupon/SetCoupon`
      const postData = {
        CouponCode: code
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
    // *newYD_C 招牌年菜
    getDishesList () {
      const url = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=newYD_C`
      this.$http.get(url).then(res => {
        if (res.data.rtnCode !== 0) {
          this.$swal.fire({
            title: `newYD_C${res.data.rtnMsg}(${res.data.rtnCode})`,
            allowOutsideClick: false,
            confirmButtonColor: '#F8412E',
            confirmButtonText: '確認',
            width: 400,
            customClass: {
              title: 'text-class',
              confirmButton: 'confirm-btn-class'
            }
          })
          return
        }
        if (res.data.rtnCode === 0) {
          this.dishesList = res.data.info
        }
      })
    },
    // *newYD_D 總鋪師的手路菜 飯店名菜必點 團員歡聚鍋物 生鮮年貨市集
    getFoodList () {
      /* 電腦版 */
      const url = `${process.env.VUE_APP_API}/api/product/eventproducts?code=newYD_D`
      this.$http.get(url).then(res => {
        if (res.data.rtnCode !== 0) {
          this.$swal.fire({
            title: `newYD_D${res.data.rtnMsg}(${res.data.rtnCode})`,
            allowOutsideClick: false,
            confirmButtonColor: '#F8412E',
            confirmButtonText: '確認',
            width: 400,
            customClass: {
              title: 'text-class',
              confirmButton: 'confirm-btn-class'
            }
          })
          return
        }
        if (res.data.rtnCode === 0) {
          this.foodList = res.data.info
          this.foodList.forEach(item => {
            if (item.code === 'newYD_D_1') {
              this.foodList01Link = item.link
              this.foodList01 = item.products
            } else if (item.code === 'newYD_D_2') {
              this.foodList02Link = item.link
              this.foodList02 = item.products
            } else if (item.code === 'newYD_D_3') {
              this.foodList03Link = item.link
              this.foodList03 = item.products
            } else if (item.code === 'newYD_D_4') {
              this.foodList04Link = item.link
              this.foodList04 = item.products
            }
          })
        }
      })
    },
    // * newYD_E  品牌強檔 */
    getBrandList () {
      const url = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=newYD_E`
      this.$http.get(url).then(res => {
        if (res.data.rtnCode !== 0) {
          this.$swal.fire({
            title: `newYD_E${res.data.rtnMsg}(${res.data.rtnCode})`,
            allowOutsideClick: false,
            confirmButtonColor: '#F8412E',
            confirmButtonText: '確認',
            width: 400,
            customClass: {
              title: 'text-class',
              confirmButton: 'confirm-btn-class'
            }
          })
          return
        }
        if (res.data.rtnCode === 0) {
          this.brandlList = res.data.info
        }
      })
    },
    // * newYD_F 輪播熱門活動
    getHotEvents () {
      const url = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=newYD_F`
      this.$http.get(url)
        .then((res) => {
          if (res.data.rtnCode === 0) {
            this.hotEventsList = res.data.info
          }
        })
    },
    // *newYD_title_coupon 折價券標題
    getCouponTitle () {
      /* 電腦版 */
      const urlm = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=newYD_title_coupon`
      this.$http.get(urlm).then(res => {
        if (res.data.rtnCode !== 0) {
          this.$swal.fire({
            title: `newYD_title_coupon${res.data.rtnMsg}(${res.data.rtnCode})`,
            allowOutsideClick: false,
            confirmButtonColor: '#de0a19',
            confirmButtonText: '確認',
            width: 400,
            customClass: {
              title: 'text-class',
              confirmButton: 'confirm-btn-class'
            }
          })
          return
        }
        if (res.data.rtnCode === 0) {
          this.title = res.data.info
        }
      })
      /* 標題活動連結手機版 */
      const url = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=newYD_m_title_coupon`
      this.$http.get(url).then(res => {
        if (res.data.rtnCode !== 0) {
          this.$swal.fire({
            title: `mom_m_T${res.data.rtnMsg}(${res.data.rtnCode})`,
            allowOutsideClick: false,
            confirmButtonColor: '#de0a19',
            confirmButtonText: '確認',
            width: 400,
            customClass: {
              title: 'text-class',
              confirmButton: 'confirm-btn-class'
            }
          })
          return
        }
        if (res.data.rtnCode === 0) {
          this.titleMb = res.data.info
        }
      })
    },
    // * newYD_title_Dishes 招牌年菜標題
    getDishesTitle () {
      /* 電腦版 */
      const urlm = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=newYD_title_Dishes`
      this.$http.get(urlm).then(res => {
        if (res.data.rtnCode !== 0) {
          this.$swal.fire({
            title: `newYD_title_Dishes${res.data.rtnMsg}(${res.data.rtnCode})`,
            allowOutsideClick: false,
            confirmButtonColor: '#de0a19',
            confirmButtonText: '確認',
            width: 400,
            customClass: {
              title: 'text-class',
              confirmButton: 'confirm-btn-class'
            }
          })
          return
        }
        if (res.data.rtnCode === 0) {
          this.dishestitle = res.data.info
        }
      })
      /* 標題活動連結手機版 */
      const url = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=newYD_m_title_Dishes`
      this.$http.get(url).then(res => {
        if (res.data.rtnCode !== 0) {
          this.$swal.fire({
            title: `newYD_m_title_Dishes${res.data.rtnMsg}(${res.data.rtnCode})`,
            allowOutsideClick: false,
            confirmButtonColor: '#F8412E',
            confirmButtonText: '確認',
            width: 400,
            customClass: {
              title: 'text-class',
              confirmButton: 'confirm-btn-class'
            }
          })
          return
        }
        if (res.data.rtnCode === 0) {
          this.dishestitleMb = res.data.info
        }
      })
    },
    // ?點擊產品觸發紀錄瀏覽高度
    recordHeight () {
      if (this.$store.state.recordEventReadHeight) {
        setTimeout(
          () => [
            // ?資料高度生成需要時間，利用setTimeOut讓視窗滑動不同步，才能順利執行
            window.scrollTo(0, this.$store.state.recordEventReadHeight)
          ],
          500
        )
      }
    },
    // ?點擊產品觸發紀錄瀏覽高度於LocalStorage
    async recordClickHeight (url) {
      var scrollYHeight = window.scrollY
      await window.localStorage.setItem('clickHeight', scrollYHeight)
      setTimeout(() => {
        window.location = url
      }, 500)
    },
    // ?檢查LocalStorage是否有紀錄
    async checkLocalHeight () {
      if (window.localStorage.getItem('clickHeight')) {
        var globalheight = await window.localStorage.getItem('clickHeight')
        setTimeout(() => {
          window.scrollTo(0, globalheight)
          //  !scroll之後的行為會直接被忽略不執行
        }, 300)
        await window.localStorage.removeItem('clickHeight')
      }
    },
    goHyperText (DOM) {
      // ?前往茅點
      const domHeight = DOM.offsetTop
      setTimeout(() => {
        window.scrollTo(0, domHeight)
      }, 500)
    }
  },
  watch: {
    $route (to, from) {
      if (
        to.fullPath.match('/productboard/product/') ||
        to.fullPath.match('/productboard/productList/')
      ) {
        const recordHeight = window.scrollY
        this.$store.commit('getEventRecordHeight', recordHeight)
      } else {
        this.$store.commit('getEventRecordHeight', '')
      }
    }
  },
  created () {
    this.getTopActivities() /* 置頂小電視活動 */
    this.getCouponTitle() /* 折價券活動標題 */
    this.getDishesTitle() /* 年菜活動標題 */
    this.getCouponList() /* 折價券表  */
    this.getDishesList() /* 招牌年菜  */
    this.getFoodList() /* newYD_D_1至4 總鋪師的手路菜 飯店名菜必點 團員歡聚鍋物 生鮮年貨市集 */
    this.getBrandList() /* 品牌強檔 */
    this.getHotEvents() /* 熱門活動 */
  },
  mounted () {
    // this.startAnimation()
    this.getNewToken()
    if (this.$store.state.recordEventReadHeight) {
      // ? 若有點擊產品紀錄，則記錄高度供上一頁返回
      setTimeout(
        () => [
          // ?資料高度生成需要時間，利用setTimeOut讓視窗滑動不同步，才能順利執行
          window.scrollTo(0, this.$store.state.recordEventReadHeight)
        ],
        500
      )
    }
    this.checkLocalHeight()
  },
  updated () {
    this.checkLocalHeight()
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/activity/2022newYearDishes/_site.scss';
@import '@/assets/scss/activity/_hover.min.scss';
//
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
</style>
