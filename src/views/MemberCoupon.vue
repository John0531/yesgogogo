<template>
  <div class="membercoupon">
    <h1 class="fs-5 fw-bold mb-3 mt-2">折價券</h1>
    <div class="container p-0 mb-5">
      <!-- 折價券歸戶 -->
      <div class="ps-2 ps-md-3">
        <h2 class="fs-5 my-3">折價券歸戶</h2>
        <div class="row">
          <div class="col-md-8 col-lg-6">
            <div class="input-group mb-3">
              <input type="text" class="form-control border-0 bg-lightgray py-1" placeholder="請輸入 yesgogogo 折價券序號" v-model="eventCode">
              <button class="btn btn-secondary py-1 px-3" type="button" @click.prevent="getCouponByCode">歸戶</button>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-light py-4 d-flex justify-content-center align-items-center" v-if="!couponData[0].couponId">
        <h2>目前無折價券可使用</h2>
      </div>
      <div class="row g-4 g-md-2 g-lg-4" v-else>
        <div class="col-md-6" v-for="item in couponData" :key="item.couponId">
          <div class="coupon w-100 ps-0 ps-sm-5 ps-md-0 ps-xl-4 pt-3 pt-md-2 pt-lg-3 pt-xl-4 d-flex">
            <div class="left-div pe-2 pe-md-1 pe-lg-2 pe-xl-4 ps-2 ps-sm-4 ps-md-2 ps-lg-3 d-flex flex-column justify-content-between">
              <span class="coupon-name text-primary d-inline-block fw-bold mt-xl-3 text-center fs-md-7 fs-lg-6">{{item.couponName}}</span>
              <p class="limit ms-xl-0 text-center fs-md-7 fs-lg-6">*部分商品不適用</p>
            </div>
            <div class="right-div ms-2 ms-sm-4 ms-md-2 ms-lg-3 ms-xl-3 ms-xxl-5 d-flex flex-column">
              <p class="fw-bold text-primary text-center discount-price">NT${{item.discountAmount}}</p>
              <h4 class="fs-md-6 fs-lg-5 text-center limit-price">消費滿${{item.limitPrice}}可使用</h4>
              <p class="text-center mt-2 mt-md-2 mt-lg-2 mt-xl-3 fs-md-7 fs-lg-6">使用期限至{{item.endDate}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import checkToken from '@/assets/js/checkToken.js'
import CouponSvc from '@/assets/js/coupon.js'

export default {
  data () {
    return {
      couponData: [
        {
          applicableProduct: [{}]
        }
      ],
      eventCode: ''
    }
  },
  methods: {
    getCoupon () {
      const url = `${process.env.VUE_APP_API}/api/coupon/membercoupon`
      this.axios.get(url)
        .then((res) => {
          if (res.data.rtnCode === 0) {
            this.couponData = res.data.info
            this.couponData = this.couponData.reverse()
          }
        })
    },
    getCouponByCode () {
      CouponSvc.getCoupon([this.eventCode])
        .then((res) => {
          if (res) {
            this.getCoupon()
          }
        })
      // const postData = {
      //   CouponCode: this.eventCode
      // }
      // const url = `${process.env.VUE_APP_API}/Api/Coupon/SetCoupon`
      // this.axios.post(url, postData)
      //   .then((res) => {
      //     if (res.data.rtnCode === 0) {
      //       this.$swal.fire({
      //         title: '您已收到折價券',
      //         allowOutsideClick: true,
      //         confirmButtonColor: '#F8412E',
      //         confirmButtonText: '確認',
      //         width: 400,
      //         customClass: {
      //           title: 'text-class',
      //           confirmButton: 'confirm-btn-class'
      //         }
      //       }).then((result) => {
      //         this.$router.go()
      //       })
      //     } else {
      //       this.$swal.fire({
      //         title: `${res.data.rtnMsg}(${res.data.rtnCode})`,
      //         allowOutsideClick: true,
      //         confirmButtonColor: '#F8412E',
      //         confirmButtonText: '確認',
      //         width: 400,
      //         customClass: {
      //           title: 'text-class',
      //           confirmButton: 'confirm-btn-class'
      //         }
      //       })
      //     }
      //   })
    },
    // !檢查是否有登入且從生日禮活動頁來
    checkFromBirthday () {
      const AccessToken = checkToken.getAccessToken()
      const RefreshToken = checkToken.getFreshToken()
      if ((AccessToken || RefreshToken) && this.$store.state.BirthdayData.fromBirthday === true) {
        const url = `${process.env.VUE_APP_API}/api/members/BirthdayForUB`
        this.axios.post(url, this.$store.state.BirthdayData.dataToApi)
          .then((res) => {
            if (res.data.rtnCode === 0) {
              this.$swal.fire({
                title: '您已收到折價券',
                allowOutsideClick: true,
                confirmButtonColor: '#F8412E',
                confirmButtonText: '確認',
                width: 400,
                customClass: {
                  title: 'text-class',
                  confirmButton: 'confirm-btn-class'
                }
              }).then((result) => {
                this.$router.go()
              })
            } else {
              this.$swal.fire({
                title: `${res.data.rtnMsg}(${res.data.rtnCode})`,
                allowOutsideClick: true,
                confirmButtonColor: '#F8412E',
                confirmButtonText: '確認',
                width: 400,
                customClass: {
                  title: 'text-class',
                  confirmButton: 'confirm-btn-class'
                }
              }).then((result) => {
                this.$router.go()
              })
            }
          })
      }
    }
  },
  watch: {
    '$store.state.isLoginFromBirthday': {
      handler: function (n) {
        if (n === true) {
          this.checkFromBirthday()
        }
      }
    }
  },
  mounted () {
    this.getCoupon()
    this.checkFromBirthday()
  }
}
</script>

<style lang="scss" scoped>
.coupon{
  background-image: url('../assets/img/coupon.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  height: 150px;
  display: flex;
  justify-content: center;
  @media (min-width: 576px){
    height: 180px;
    justify-content: flex-start;
  }
  @media (min-width: 768px){
    height: 110px;
  }
  @media (min-width: 992px){
    height: 150px;
  }
  @media (min-width: 1200px){
    height: 200px;
  }
}
.left-div{
  border-right: 2px dotted #F8412E;
  height: 120px;
  @media (min-width: 576px){
    height: 150px;
  }
  @media (min-width: 768px){
    height: 90px;
  }
  @media (min-width: 992px){
    height: 120px;
  }
  @media (min-width: 1200px){
    height: 150px;
  }
}
.limit{
  width: 100px;
  @media (min-width: 576px){
    width: 130px;
  }
  @media (min-width: 768px){
    width: 80px;
  }
  @media (min-width: 1024px){
    width: 100px;
  }
}
.coupon-name{
  width: 100px;
  @media (min-width: 576px){
    width: 130px;
  }
  @media (min-width: 768px){
    width: 80px;
  }
  @media (min-width: 1024px){
    width: 100px;
  }
}
.discount-price{
  font-size: 36px;
  @media (min-width: 576px){
    font-size: 50px;
  }
  @media (min-width: 768px){
    font-size: 26px;
  }
  @media (min-width: 992px){
    font-size: 40px;
  }
  @media (min-width: 1200px){
    font-size: 50px;
  }
}
.limit-price{
  width: auto;
  @media (min-width: 768px){
    width: auto;
  }
}
</style>
