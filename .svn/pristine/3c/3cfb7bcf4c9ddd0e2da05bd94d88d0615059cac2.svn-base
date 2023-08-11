<template>
  <div>
    <!-- 主視覺 -->
    <div class="text-center bg-BTD">
      <img class="img-fluid d-lg-none" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/2023_birthday/KV_MB.jpg" alt="2023 聯邦刷卡優惠">
      <img class="img-fluid d-none d-lg-inline" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/2023_birthday/KV.jpg" alt="2023 聯邦刷卡優惠">
    </div>
    <!-- 領取生日禮 -->
    <div class="bg-BTDCoupon pb-4 pb-lg-5">
      <div class="container">
        <a href="#" class="btd-hover d-block img-getCoupon mb-4" @click.prevent="getBDCoupon(['05', '07', '10', '18', '30', '50'])">
          <img class="img-fluid w-100" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/2023_birthday/img03.png" alt="領取生日禮一鍵全領">
        </a>
        <div class="px-4 px-sm-7 px-lg-0">
          <div class="row gx-2">
            <div class="col-6 col-lg-4 mb-3">
              <a href="#" class="btd-hover d-block text-center" @click.prevent="getBDCoupon(['05'])">
                <img class="img-fluid" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/2023_birthday/img17.png" alt="領取 50 元生日禮">
              </a>
            </div>
            <div class="col-6 col-lg-4 mb-3">
              <a href="#" class="btd-hover d-block text-center" @click.prevent="getBDCoupon(['07'])">
                <img class="img-fluid" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/2023_birthday/img18.png" alt="領取 70 元生日禮">
              </a>
            </div>
            <div class="col-6 col-lg-4 mb-3">
              <a href="#" class="btd-hover d-block text-center" @click.prevent="getBDCoupon(['10'])">
                <img class="img-fluid" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/2023_birthday/img19.png" alt="領取 100 元生日禮">
              </a>
            </div>
            <div class="col-6 col-lg-4 mb-4">
              <a href="#" class="btd-hover d-block text-center" @click.prevent="getBDCoupon(['18'])">
                <img class="img-fluid" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/2023_birthday/img31.png" alt="領取 180 元生日禮">
              </a>
            </div>
            <div class="col-6 col-lg-4 mb-4">
              <a href="#" class="btd-hover d-block text-center" @click.prevent="getBDCoupon(['30'])">
                <img class="img-fluid" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/2023_birthday/img32.png" alt="領取 300 元生日禮">
              </a>
            </div>
            <div class="col-6 col-lg-4 mb-4">
              <a href="#" class="btd-hover d-block text-center" @click.prevent="getBDCoupon(['50'])">
                <img class="img-fluid" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/2023_birthday/img33.png" alt="領取 500 元生日禮">
              </a>
            </div>
          </div>
        </div>
        <div class="row gx-2 gx-lg-4">
          <div v-if="eventList[0]" class="col-6 mb-3">
            <a href="#" class="btd-hover d-block text-center" @click.prevent="recordClickHeight(eventList[0].targetUrl)">
              <img class="img-fluid w-100" :src="eventList[0].image" alt="LINE 好友 不定期拿好禮">
            </a>
          </div>
          <div v-if="eventList[1]" class="col-6 mb-3">
            <a href="#" class="btd-hover d-block text-center" @click.prevent="recordClickHeight(eventList[1].targetUrl)">
              <img class="img-fluid w-100" :src="eventList[1].image" alt="購物下單 筆筆回饋 10%">
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- 生日響食精選 -->
    <div v-if="bdGift_1" class="bg-BTDfood py-4 py-lg-5">
      <div class="container">
        <h2 class="mb-4 mb-lg-5">
          <img class="img-fluid d-block mx-auto w-70 w-lg-auto" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/2023_birthday/img60.png" alt="生日響食精選 標題">
        </h2>
        <div class="px-3 px-lg-4">
          <div class="row gx-3">
            <div class="col-6 col-lg-3 mb-3 mb-lg-4" v-for="btd in bdGift_1.products" :key="btd">
              <router-link :to="`/productboard/product/${btd.productId}`">
                <div class="card prd-shadow btd-hover rounded-0 h-100 border-0 d-flex flex-column justify-content-between" :class="{ 'sold-out': btd.stock === 0 }">
                  <img :src="btd.productImage" class="img-fluid p-1 p-md-2" :alt="btd.productName">
                  <div class="px-1 pb-1 px-md-2 pb-md-2 pt-0">
                    <p class="card-text text-dark text-center mt-0 prd-name fs-6">{{ btd.productName }}</p>
                    <div class="d-flex justify-content-center align-items-end mb-1 mb-md-2">
                      <del class="sell-oldprice text-dark text-nowrap fs-7 fs-md-6 fs-lg-7 fs-xl-6 mb-1 mb-lg-1 mb-xl-0 mb-xxl-2 me-2 me-md-3">
                        ${{ $currency.currency(btd.oldPrice) }}
                      </del>
                      <span class="prd-price text-nowrap fs-7 fs-md-6 fs-lg-7 fs-xxl-6">
                        特價 $<span class="sell-price">{{ $currency.currency(btd.price) }}</span>
                      </span>
                    </div>
                    <div class="prd-btn text-center text-white py-2 fs-7 fs-md-6 fs-lg-7 fs-xl-6">立即搶購</div>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 壽星好物優惠 -->
    <div v-if="bdGift_2" class="bg-BTDdiscount pt-4 pb-3 pt-lg-5 pb-lg-4">
      <div class="container">
        <h2 class="mb-4 mb-lg-5">
          <img class="img-fluid d-block mx-auto w-70 w-lg-auto" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/2023_birthday/img74.png" alt="壽星好物優惠 標題">
        </h2>
        <div class="px-3 px-lg-4">
          <div class="row gx-3">
            <div class="col-6 col-lg-3 mb-3 mb-lg-4" v-for="btd in bdGift_2.products" :key="btd">
              <router-link :to="`/productboard/product/${btd.productId}`">
                <div class="card prd-shadow btd-hover rounded-0 h-100 border-0 d-flex flex-column justify-content-between" :class="{ 'sold-out': btd.stock === 0 }">
                  <img :src="btd.productImage" class="img-fluid p-1 p-md-2" :alt="btd.productName">
                  <div class="px-1 pb-1 px-md-2 pb-md-2 pt-0">
                    <p class="card-text text-dark text-center mt-0 prd-name fs-6">{{ btd.productName }}</p>
                    <div class="d-flex justify-content-center align-items-end mb-1 mb-md-2">
                      <del class="sell-oldprice text-dark text-nowrap fs-7 fs-md-6 fs-lg-7 fs-xl-6 mb-1 mb-lg-1 mb-xl-0 mb-xxl-2 me-2 me-md-3">
                        ${{ $currency.currency(btd.oldPrice) }}
                      </del>
                      <span class="prd-price text-nowrap fs-7 fs-md-6 fs-lg-7 fs-xxl-6">
                        特價 $<span class="sell-price">{{ $currency.currency(btd.price) }}</span>
                      </span>
                    </div>
                    <div class="prd-BTD-btn text-center text-white py-2 fs-7 fs-md-6 fs-lg-7 fs-xl-6">立即搶購</div>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 看更多商品 -->
    <div class="bg-notice py-4 py-lg-5">
      <div class="container">
        <router-link to="/" class="btd-hover d-block text-center mb-4 mb-lg-5">
          <img class="img-fluid w-60 w-md-50 w-lg-auto" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/2023_birthday/btn_more.gif" alt="看更多商品">
        </router-link>
        <!-- 活動詳情 -->
        <h3 class="fs-5 mb-2 fw-bold">活動詳情</h3>
        <ol>
          <li class="mb-1">本活動皆須註冊或登入 yesgogogo 購物網會員後，即可領取壽星專屬折價券。</li>
          <li class="mb-1">壽星專屬折價券請由本活動頁面上方點選領取。面額為<br>
            $50 一張(消費滿 $51 可使用)<br>
            $70 一張(消費滿 $71 可使用)<br>
            $100 一張(消費滿 $1,000 可使用)<br>
            $180 一張(消費滿 $1,800 可使用)<br>
            $300 一張(消費滿 $2,500 可使用)<br>
            $500 一張(消費滿 $3,300 可使用)</li>
          <li class="mb-1">
            使用效期自獲得日起 2 個月內有效。
            每個會員帳號限領一次。
          </li>
          <li class="mb-1">若訂單取消、退貨或任何不可歸咎於 yesgogogo 購物網之因素導致訂單未成立，恕不補發。</li>
          <li class="mb-1">折價券不得轉贈他人、要求變換現金或商品。</li>
          <li class="mb-1">折價券不可使用於部分商品和電子票券。</li>
          <li class="mb-1">折價券使用期限及規範可至 yesgogogo 購物網登入「會員中心」→「我的優惠券」→「折價券」內查看券面說明。</li>
          <li class="mb-1">本活動頁呈現之商品名稱、價格、顏色、規格、數量，若與購物車之呈現有所不符，以購物車之內容為準。</li>
          <li class="mb-1">活動事項載明於活動網頁中，參加本活動者，視為同意接受本活動注意事項之規範，參加人不符合或違反本活動規定事項者，本公司保有取消其參加資格之權利，並對於任何破壞本活動之行為保留相關權利。</li>
          <li class="mb-1">本公司保留隨時變更、修改、暫停或終止及解釋本活動相關事項及約定條款之權利，若有其他未盡事宜，悉依本公司相關規定或決定辦理。</li>
          <li>本活動若有異動，修改後的活動內容及約定條款將公佈在 yesgogogo 購物網官方網站上，若您於任何修改或變更後繼續使用本服務時，視為您已閱讀、瞭解並同意接受該等修改或變更。</li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
import CouponSvc from '@/assets/js/coupon.js'
import checkToken from '@/assets/js/checkToken.js'

export default {
  data () {
    return {
      bdGift_1: '', // 生日響食精選
      bdGift_2: '', // 壽星好物優惠
      eventList: ''
    }
  },
  methods: {
    getBDCoupon (amount) {
      // * 整理成陣列
      const month = (new Date().getMonth() + 1).toString().padStart(2, '0')
      const date = new Date().getDate().toString().padStart(2, '0')
      const codeList = amount.map((item) => `birthday${item}${month}${date}`)

      CouponSvc.getCoupon(codeList)
    },
    // ?生日響食精選、壽星好物優惠
    getBDGift () {
      const url = `${process.env.VUE_APP_API}/api/product/eventproducts?code=UBBD_B`
      this.$http.get(url)
        .then((res) => {
          if (res.data.rtnCode === 0) {
            res.data.info.forEach((item) => {
              if (item.code === 'UBBD_B_1') {
                this.bdGift_1 = item
              } else if (item.code === 'UBBD_B_2') {
                this.bdGift_2 = item
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
    // ?LINE 好友 不定期拿好禮、購物下單 筆筆回饋 10%
    getEvents () {
      const url = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=UBBD_A`
      this.$http.get(url)
        .then((res) => {
          if (res.data.rtnCode === 0) {
            this.eventList = res.data.info
          }
        })
    },
    // ?小電視及看更多記錄高度
    recordClickHeight (url) {
      // ?點擊產品觸發紀錄瀏覽高度於LocalStorage
      const scrollYHeight = window.scrollY
      localStorage.setItem('clickUBgift', scrollYHeight)
      setTimeout(() => {
        window.location = url
      }, 500)
    },
    checkLocalHeight () {
      // ?檢查LocalStorage
      if (window.localStorage.getItem('clickUBgift')) {
        const globalheight = window.localStorage.getItem('clickUBgift')
        setTimeout(() => {
          window.scrollTo(0, globalheight)
        }, 300)
        localStorage.removeItem('clickUBgift')
      }
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
    this.getNewToken()
    this.getBDGift()
    this.getEvents()
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/activity/2023_birthday/_site.scss';
</style>
