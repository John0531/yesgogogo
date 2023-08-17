<template>
  <div class="checkoutcart">
    <div class="row justify-content-center">
      <!-- 步驟圖 -->
      <CardProgress :step="status">
          <template #step1>
          </template>
          <template #step2>
          </template>
          <template #step3>
          </template>
      </CardProgress>
      <!-- 沒有token, 未登入的狀態 -->
      <div v-if="!isLogin">
        <section class="my-5">
          <div class="card rounded-0">
            <div class="card-header fw-bold bg-gray px-4 py-3">
              <h4>訂單資訊</h4>
            </div>
            <div class="card-body py-1 px-2 px-md-4 py-4">
              請於登入後到會員專區 - 訂單查詢確認
            </div>
          </div>
          <div class="row justify-content-center mt-3">
            <div class="col-md-6">
              <div class="d-grid gap-2">
                <router-link to="/" class="btn btn-primary text-white">
                  繼續購物
                </router-link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <!-- 有token, 已登入狀態 -->
      <div v-else class="col-md-12 my-5">
        <!-- S01:尚未付款 S04:付款完成 S05:訂單完成 -->
        <div v-if="(userOrder.orderStatus !== 'S01' && userOrder.orderStatus !== 'S04' && userOrder.orderStatus !== 'S05') && !userOrder.vAccount && userOrder.paymentMethod !== 'P10'" class="alert alert-danger" role="alert">
          <i class="bi bi-x-circle"></i> {{ userOrder.orderStatusName }}
        </div>
        <div v-if="(userOrder.orderStatus === 'S01' || userOrder.orderStatus === 'S04' || userOrder.orderStatus === 'S05') && !userOrder.vAccount && userOrder.paymentMethod !== 'P10'" class="alert alert-success" role="alert">
          <i class="bi bi-check-circle"></i> {{ userOrder.orderStatus === 'S01' || userOrder.orderStatus === 'S04' ? '若您已成功付款，請於 20 分鐘後至會員專區 - 訂單查詢確認訂單狀態' : userOrder.orderStatusName }}
        </div>
        <!-- line 活動公告 -->
        <!-- line 活動公告 PC-->
        <div v-if="event" class="d-none d-md-block mb-4">
          <a :href="event.targetUrl">
            <img :src="event.image" alt="LINE好友領購物金" class="img-fluid">
          </a>
        </div>
        <!-- line 活動公告 mobile-->
        <div v-if="event_m" class="d-md-none mb-3">
          <a :href="event_m.targetUrl">
            <img :src="event_m.image" alt="LINE好友領購物金" class="img-fluid">
          </a>
        </div>
        <div class="card rounded-0">
          <div class="card-header fw-bold bg-gray px-4 py-3">
            <h4>線上付款回覆資訊</h4>
          </div>
          <div class="card-body py-1 px-2 px-md-4">
            <table class="table onlinePay-table mb-0">
              <tbody>
                <tr>
                  <th scope="row" width="25%">訂單編號</th>
                  <td>{{ userOrder.orderNo }}</td>
                </tr>
                <tr>
                  <th scope="row">訂購時間</th>
                  <td v-if="userOrder.shoppingDate">{{ userOrder.shoppingDate.split('T')[0] }}  {{ userOrder.shoppingDate.split('T')[1].split('.')[0] }}</td>
                </tr>
                <tr>
                  <th scope="row">付款方式</th>
                  <td>{{ userOrder.paymentMethodName }}</td>
                </tr>
                <tr>
                  <th scope="row" :class="{ 'border-0': !userOrder.vAccount }">付款狀態</th>
                  <td v-if="!!userOrder.vAccount || userOrder.paymentMethod === 'P10'" class="text-primary align-middle" :class="{ 'border-0': !userOrder.vAccount }">
                    {{ userOrder.orderStatusName }}
                  </td>
                  <td v-else class="text-primary align-middle" :class="{ 'border-0': !userOrder.vAccount }">
                    {{ userOrder.orderStatus === 'S01' || userOrder.orderStatus === 'S04' ? '若您已成功付款，請於 20 分鐘後至會員專區 - 訂單查詢確認訂單狀態' : userOrder.orderStatusName }}
                  </td>
                </tr>
                <tr v-if="!!userOrder.vAccount">
                  <th scope="row" class="align-middle">銀行代號&名稱</th>
                  <td class="text-primary">803 聯邦商業銀行 營業部(0021)</td>
                </tr>
                <tr v-if="!!userOrder.vAccount">
                  <th scope="row">轉帳帳號</th>
                  <td class="text-primary">{{ userOrder.vAccount }}</td>
                </tr>
                <tr v-if="!!userOrder.vAccount">
                  <th scope="row">轉帳金額</th>
                  <td><span class="text-primary">{{ $currency.currency(userOrder.paidAmount) }}</span> 元</td>
                </tr>
                <tr v-if="!!userOrder.vAccount || userOrder.paymentMethod === 'P10'">
                  <th scope="row" class="align-middle border-0">交易說明</th>
                  <td v-if="userOrder.paymentMethod === 'P10'" class="border-0">
                    親愛的會員您好：<br>以下為您的購物明細及收件資訊，本訂單將於３－５天內出貨。提醒您保持聯絡電話的暢通，物流士將會與您聯繫後續收貨及付款事宜。
                    <p class="text-primary">
                      近來詐騙事件猖獗，請消費者提防詐騙，本商城不會要求客戶提供金融相關資訊，更不會要求 ATM 退費，請務必注意！感謝您的訂購。
                    </p>
                  </td>
                  <td v-else class="border-0">
                    親愛的會員您好：<br>本訂單轉帳帳號為本訂單專屬，請抄下銀行代號、轉帳帳號及轉帳金額，並於繳款期限內進行付款，一經確認您的款項匯入本公司帳戶，
                    <p class="text-primary">
                      近來詐騙事件猖獗，請消費者提防詐騙，本商城不會要求客戶提供金融相關資訊，更不會要求 ATM 退費，請務必注意！
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="card rounded-0 mt-5">
          <div class="card-header fw-bold bg-gray px-4 py-3">
            <h4>本次訂購明細</h4>
          </div>
          <div class="card-body p-0">
            <table class="table text-center mb-0">
              <tbody>
                <tr>
                  <td class="ps-3 ps-md-4 text-start" width="40%">
                    商品資料
                  </td>
                  <td class="d-none d-md-table-cell">規格</td>
                  <td>單價</td>
                  <td>數量</td>
                  <td class="d-none d-md-table-cell">小計</td>
                  <td class="pe-4 d-none d-md-table-cell">配送方式</td>
                </tr>
                <tr v-for="item in userOrder.product" :key="item">
                  <td class="ps-3 ps-md-4 text-start">
                    {{ item.productNo }}
                  </td>
                  <td class="d-none d-md-table-cell">{{ item.option }}</td>
                  <td>${{ $currency.currency(item.price / item.quantity) }}</td>
                  <td>{{ item.quantity }}</td>
                  <td class="d-none d-md-table-cell">${{ $currency.currency(item.price) }}</td>
                  <td class="pe-4 d-none d-md-table-cell">宅配</td>
                </tr>
              </tbody>
            </table>
            <div class="px-2 px-md-4">
              <table class="table text-end mb-0">
                <tbody>
                  <tr>
                    <td width="65%">
                      本次訂單共買
                      <span class="text-primary" v-if="userOrder.product">{{ userOrder.product.length }}</span> 件，小計：
                    </td>
                    <td><span class="text-primary">{{ $currency.currency(userOrder.payableAmount) }}</span>元</td>
                  </tr>
                  <tr>
                    <td class="text-end align-middle">折扣優惠：</td>
                    <td><span class="text-primary">{{ $currency.currency(userOrder.payableAmount - userOrder.paidAmount - userOrder.bonus) }}</span>元</td>
                  </tr>
                  <tr v-if="userOrder.bonus">
                    <td class="text-end align-middle">紅利折抵：</td>
                    <td><span class="text-primary">{{ $currency.currency(userOrder.bonus) }}</span>元</td>
                  </tr>
                  <tr>
                    <td class="text-end align-middle">應付總金額應付(註)：</td>
                    <td>
                      <p class="text-primary d-inline">
                        $ <span class="fs-5 fw-bold">{{ $currency.currency(userOrder.paidAmount) }}</span>
                      </p>
                      元
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2" class="text-primary text-end">
                      <small
                        >註：使用信用卡結帳時，此頁之紅利折抵、應付總金額為參考值，實際金額以線上授權完畢後為準。</small
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <table class="table table-bordered mt-5 mb-0">
          <tbody>
            <tr>
              <th
                scope="row"
                class="align-middle bg-gray fw-bold px-1 px-sm-3 px-md-4 py-3"
              >
                <h4>收件人資料</h4>
              </th>
              <td class="align-middle bg-white px-2 px-sm-3 px-md-4 py-3">
                <table class="table receiver-table table-borderless mb-0">
                  <tbody>
                    <tr>
                      <td width="20%" class="ps-0">姓名</td>
                      <td>{{ userOrder.consigneeName }}</td>
                    </tr>
                    <tr>
                      <td class="ps-0">地址</td>
                      <td>{{ userOrder.city }}{{ userOrder.district }}{{ userOrder.address }}</td>
                    </tr>
                    <tr>
                      <td class="pb-0 ps-0">手機</td>
                      <td class="pb-0">{{ userOrder.consigneePhone }}</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
        <!-- 愛心捐 -->
        <div class="card rounded-0 mt-5" v-if="isLove">
          <div class="card-header fw-bold bg-gray px-4 py-3">
            <h4>愛心捐明細</h4>
          </div>
          <div class="card-body p-0">
            <table class="table text-center mb-0">
              <tbody>
                <tr>
                  <td class="ps-3 ps-md-4 text-start" width="40%">購物金轉作愛心捐</td>
                  <td class="ps-3 ps-md-4 text-start" width="40%">{{ isShopHeart }}</td>
                </tr>
                <tr>
                  <td class="ps-3 ps-md-4 text-start" width="40%">愛心品平台加碼愛心捐</td>
                  <td class="ps-3 ps-md-4 text-start" width="40%">{{ isShopHeartBonus }}</td>
                </tr>
                <tr>
                  <td class="ps-3 ps-md-4 text-start" width="40%">愛心捐總計</td>
                  <td class="ps-3 ps-md-4 text-start text-primary" width="40%">{{ isLoveTotal }}</td>
                </tr>
              </tbody>
            </table>
            <div class="px-2 px-md-4">
              <table class="table text-end mb-0">
                <tbody>
                  <tr>
                    <td class="text-end align-middle">愛心捐總計:</td>
                    <td>
                      <p class="text-primary d-inline">
                        $ <span class="fs-5 fw-bold">{{ $currency.currency(isLoveTotal) }}</span>
                      </p>
                      元
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2" class="text-primary text-end">
                      <small
                        >*本站將捐出以上愛心捐金額給非營利組織，感謝您也參與其中。</small
                      >
                      <br>
                      <small
                        >
                      *捐款金額以訂單實付金額的比例計算%。</small
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="row justify-content-center mt-5">
          <div class="col-md-6">
            <div class="d-grid gap-2">
              <router-link to="/" class="btn btn-primary text-white">
                繼續購物
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="modal animate-Modal fade" id="animateModal" tabindex="-1" aria-labelledby="animateModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-fullscreen">
        <div class="modal-content">
            <div class="modal-body">
                <div class="animeBox">
                    <div class="heart"></div>
                </div>
            </div>
        </div>
    </div>
  </div> -->
</template>

<script>
import countryName from '@/assets/country.json'
import checkToken from '@/assets/js/checkToken.js'
import CardProgress from '@/components/CardProgress.vue'
// import anime from '@/assets/js/anime.min.js'
import Modal from 'bootstrap/js/dist/modal'

export default {
  components: {
    CardProgress
  },
  data () {
    return {
      orderId: '', // ?訂單編號
      countryName, // ?縣市鄉鎮代碼 json
      userOrder: {}, // ? API 取得的訂單明細
      isLogin: false, // ?判斷是否登入
      event: '', // ?活動廣告 pc
      event_m: '', // ?活動廣告 mobile
      status: '3',
      isLove: false
      // animateModal: null
    }
  },
  methods: {
    getOrder () {
      // ?會員訂單資訊查詢 API
      const url = `${process.env.VUE_APP_API}/api/members/orders?orderno=${this.orderId}`
      this.$http.get(url)
        .then((res) => {
          if (res.data.rtnCode === 0) {
            this.userOrder = res.data.info[0]
            // ?轉換縣市、鄉鎮代碼為中文
            this.userOrder.city = this.countryName[this.countryName.findIndex((item) => item.Country === this.userOrder.city)].CountryName
            this.userOrder.district = this.countryName[this.countryName.findIndex((item) => item.District === this.userOrder.district)].DistrictName
            // ?將購買商品傳入 Facebook pixel
            this.purchaseFbq()
            // *將購買商品傳入 GA
            this.purchaseGA()
            // *將購物車icon清零
            this.$store.dispatch('getCartNum')
          } else {
            // ?未成功回傳訂單明細
            this.$router.push({ name: 'notfound', params: { msg: `${res.data.rtnMsg}(${res.data.rtnCode})` } })
          }
        })
    },
    purchaseFbq () {
      // ? Facebook Pixel 傳入總價格(在訂單確認頁面生成時送出)
      window.fbq('track', 'Purchase', {
        content_type: 'product',
        value: this.userOrder.paidAmount,
        currency: 'TWD'
      })
    },
    // * GA追蹤碼
    purchaseGA () {
      const datatoGA = {
        currency: 'TWD',
        value: this.userOrder.paidAmount,
        transaction_id: this.userOrder.orderNo,
        city: this.userOrder.city,
        paymethod: this.userOrder.paymentMethodName,
        items: JSON.parse(JSON.stringify(this.userOrder.product))
      }
      datatoGA.items.forEach(item => {
        item.item_id = item.id
        item.name = item.productNo
        item.item_name = item.productNo
        item.currency = 'TWD'
        item.item_variant = item.option
        delete item.productNo
        delete item.shipmentStatus
        delete item.shipoutDate
        delete item.shipping
        delete item.shippingNo
      })
      this.$gtag.event('purchase', datatoGA)
      // ? google 廣告追蹤
      const datatoAds = {
        send_to: 'AW-11034505753/yKqhCND614MYEJnk1I0p',
        value: this.userOrder.paidAmount,
        currency: 'TWD',
        transaction_id: this.userOrder.orderNo
      }
      this.$gtag.event('conversion', datatoAds)
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
    // * Banner
    getEvents () {
      // mobile
      const urlm = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=order_m_ad`
      this.$http.get(urlm)
        .then((res) => {
          if (res.data.rtnCode === 0) {
            this.event_m = res.data.info[0]
          }
        })
      // pc
      const url = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=order_ad`
      this.$http.get(url)
        .then((res) => {
          if (res.data.rtnCode === 0) {
            this.event = res.data.info[0]
          }
        })
    },
    //* 愛心捐動畫
    // openHeart () {
    //   const container = document.querySelector('.animeBox')

    //   for (let i = 0; i <= 100; i++) {
    //     const hearts = document.createElement('div')
    //     hearts.classList.add('heart')
    //     container.appendChild(hearts)
    //   }
    //   this.animateHearts()
    //   this.animateModal.show()
    //   this.heartAnime.play()
    // },
    // animateHearts () {
    //   this.heartAnime = anime({
    //     targets: '.heart',
    //     translateX: function () {
    //       return anime.random(-1000, 1000)
    //     },
    //     translateY: function () {
    //       return anime.random(-500, 500)
    //     },
    //     rotate: 25,
    //     scale: function () {
    //       return anime.random(1, 2)
    //     },
    //     easing: 'easeInOutBack',
    //     duration: 2500,
    //     delay: anime.stagger(10),
    //     complete: () => {
    //       anime({
    //         targets: '.heart',
    //         opacity: 0, // 添加透明度从1到0的动画
    //         easing: 'easeInOutSine', // 使用渐变的缓动函数
    //         duration: 3000, // 透明度渐变的持续时间
    //         complete: () => {
    //           this.hideHeart()
    //         }
    //       })
    //     }
    //   })
    // },
    // hideHeart () {
    //   this.animateModal.hide()
    //   console.log('env', process.env.NODE_ENV)
    //   if (process.env.NODE_ENV === 'production') {
    //     localStorage.removeItem('isLove')
    //   }
    //   this.heartAnime.pause()
    // },
    //* 愛心捐
    isHeart () {
      const isLoveValue = sessionStorage.getItem('isLove')
      const pointToDonateValue = sessionStorage.getItem('pointToDonate')

      if (isLoveValue === 'true' || pointToDonateValue === 'true') {
        this.isLove = true
        // this.openHeart()
      }
    }

  },
  watch: {
    isOverTime (newQuestion, oldQuestion) {
      if (newQuestion) {
        this.removeHeartDiv()
      }
    }
  },
  mounted () {
    this.getEvents()
    // ?判斷是否有登入
    if (this.getToken()) {
      this.isLogin = true
      this.orderId = this.$route.params.oid
      this.getOrder()
    } else {
      this.isLogin = false
      if (document.body.clientWidth < 576) {
        // ? 手機版
        this.$router.push('/membermobilelogin')
      } else {
        // ? web 版
        this.$store.state.loginModal.show()
      }
    }
    // ?判斷是否是愛心捐
    this.animateModal = new Modal(document.getElementById('animateModal'))
    this.isHeart()
  },
  computed: {
    isLoveTotal () {
      if (this.userOrder && this.userOrder.donates) {
        return this.userOrder.donates.reduce((total, donate) => total + donate.donateAmt, 0)
      } else {
        return 0 // 或其他合适的默认值
      }
    },
    isShopHeart () {
      let totalShopHeart = 0

      if (this.userOrder && this.userOrder.donates && Array.isArray(this.userOrder.donates)) {
        for (const donate of this.userOrder.donates) {
          if (donate.donateType === 1) {
            totalShopHeart += donate.donateAmt
          }
        }
      }

      return totalShopHeart
    },

    isShopHeartBonus () {
      let totalShopHeart = 0

      if (this.userOrder && this.userOrder.donates && Array.isArray(this.userOrder.donates)) {
        for (const donate of this.userOrder.donates) {
          if (donate.donateType === 2) {
            totalShopHeart += donate.donateAmt
          }
        }
      }

      return totalShopHeart
    }

  }
}
</script>

<style lang="scss" scoped>
.progress-bar {
  background-color: #e9ecef;
}
.step {
  pointer-events: none;
}
.step1 {
  bottom: -100%;
  left: -25%;
  font-weight: bold;
}
.step2,
.step3 {
  bottom: -100%;
  left: -50%;
  font-weight: bold;
}

.onlinePay-table th,
.onlinePay-table td {
  padding-top: 12px;
  padding-bottom: 12px;
}

.receiver-table td {
  padding-top: 0;
}

.card-header {
  border-radius: 0;
}

</style>
