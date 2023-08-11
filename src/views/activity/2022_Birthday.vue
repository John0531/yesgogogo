<template>
  <div class="birthday">
    <!-- Banner -->
    <div id="point_00" >
      <div class="birthday-header d-none d-lg-block"></div>
      <div class="d-lg-none"><img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/2022_birthday/Index_lg_02.png" class="img-fluid" /></div>
    </div>
    <!-- 活動內容 -->
    <div class="bg-star">
      <div class="container-md">
        <!-- 活動說明 title -->
        <div ref="point01">
          <div class="pt-md-5 pt-3 text-center d-none d-md-block">
            <a>
              <img class="img-fluid" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/2022_birthday/title_01.png" alt="滿$51折$50" />
            </a>
          </div>
          <div class="pt-4 text-center d-md-none">
            <a>
              <img class="img-fluid" style="width:80%" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/2022_birthday/title_01_m.png" alt="滿$51折$50m" />
            </a>
          </div>
        </div>
        <!-- 桌機板 -->
        <div class="row pt-md-4 justify-content-center d-none d-md-flex">
          <div class="col-md-2 hvr-bob pb-3 pb-md-0">
            <a class="claim-cpn" data-cpn="CPN-1" @click.prevent="getCoupon('50a')">
              <img class="img-fluid hand hvr-bob" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/2022_birthday/icon-01.png" alt="$50折價券" />
            </a>
          </div>
          <div class="col-md-2 hvr-bob pb-3 pb-md-0">
            <a class="claim-cpn" data-cpn="CPN-2" @click.prevent="getCoupon('50b')">
              <img class="img-fluid hand hvr-bob" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/2022_birthday/icon-01.png" alt="$50折價券" />
            </a>
          </div>
          <div class="col-md-2 hvr-bob pb-3 pb-md-0">
            <a class="claim-cpn" data-cpn="CPN-3" @click.prevent="getCoupon('100')">
              <img class="img-fluid hand hvr-bob" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/2022_birthday/icon-02.png" alt="$100折價券" />
            </a>
          </div>
          <div class="col-md-2 hvr-bob pb-3 pb-md-0">
            <a class="claim-cpn" data-cpn="CPN-3" @click.prevent="getCoupon('300')">
              <img class="img-fluid hand hvr-bob" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/2022_birthday/icon-03.png" alt="$300折價券" />
            </a>
          </div>
          <div class="col-md-2 hvr-bob pb-3 pb-md-0">
            <a class="claim-cpn" data-cpn="CPN-3" @click.prevent="getCoupon('500')">
              <img class="img-fluid hand hvr-bob" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/2022_birthday/icon-04.png" alt="$500折價券" />
            </a>
          </div>
        </div>
        <!-- 手機板 -->
        <div class="row pt-3 justify-content-center d-md-none gx-2">
          <div class="col-4 hvr-bob pb-3">
            <a class="claim-cpn" data-cpn="CPN-1" @click.prevent="getCoupon('50a')">
              <img class="img-fluid hand hvr-bob" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/2022_birthday/icon-01_m.png" alt="$50折價券" />
            </a>
          </div>
          <div class="col-4 hvr-bob pb-3">
            <a class="claim-cpn" data-cpn="CPN-1" @click.prevent="getCoupon('50b')">
              <img class="img-fluid hand hvr-bob" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/2022_birthday/icon-01_m.png" alt="$50折價券" />
            </a>
          </div>
          <div class="col-4 hvr-bob pb-3">
            <a class="claim-cpn" data-cpn="CPN-1" @click.prevent="getCoupon('100')">
              <img class="img-fluid hand hvr-bob" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/2022_birthday/icon-02_m.png" alt="$100折價券" />
            </a>
          </div>
          <div class="col-6 hvr-bob pb-4">
            <a class="claim-cpn" data-cpn="CPN-1" @click.prevent="getCoupon('300')">
              <img class="img-fluid hand hvr-bob" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/2022_birthday/icon-03_m.png" alt="$300折價券" />
            </a>
          </div>
          <div class="col-6 hvr-bob pb-4">
            <a class="claim-cpn" data-cpn="CPN-1" @click.prevent="getCoupon('500')">
              <img class="img-fluid hand hvr-bob" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/2022_birthday/icon-04_m.png" alt="$500折價券" />
            </a>
          </div>
        </div>
        <!-- 活動說明 title -->
        <div ref="point02">
          <div id="point_02" class="text-center pt-md-5 pt-2 pb-md-3 pb-2 d-none d-md-block">
            <a>
              <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/2022_birthday/title_02.png" alt="推薦壽星美食"  class="img-fluid" />
            </a>
          </div>
          <div id="point_02" class="text-center pt-md-5 pt-2 pb-md-3 pb-2 d-md-none">
            <a>
              <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/2022_birthday/title_02_m.png" style="width:80%" alt="推薦壽星美食m" class="img-fluid" />
            </a>
          </div>
        </div>
        <!-- 卡片 -->
        <div class="px-sm-1 px-xxl-5 mx-xxl-5 mt-3 mt-md-0">
          <div id="20210101-110ubbday" class="row g-2 g-md-4">
            <!-- v-for 跑迴圈 -->
            <div class="col-6 col-md-4 col-lg-3" v-for="item in dataList" :key="item.productId">
                <div id="tmpl-item" class="col-6 col-lg-3 mb-3 w-100">
                  <div class="prd-item hvr-bob" :class="{ 'sold-out': item.stock === 0 }">
                    <a href="#" @click.prevent="this.$router.push(`/productboard/product/${item.productId}`)">
                      <a class="prd-link text-secondary text-decoration-none">
                        <span class="d-block prd-img mb-2"><img :src="item.productImage" class="img-fluid" /></span>
                        <span class="d-block prd-name">{{item.productName}}</span>
                        <span class="d-block prd-sale">特價<span class="prd-sale-price" v-if="item.price >= 0">${{item.price}}</span><span class="prd-sale-price" v-else>xxx</span></span>
                        <span class="d-block prd-price mb-2">原價 <span class="prd-msrp" v-if="item.oldPrice >= 0">{{item.oldPrice}}</span><span class="prd-msrp" v-else>xxx</span></span>
                        <span class="d-block prd-limited p-2">立即搶購</span>
                      </a>
                    </a>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 活動說明 -->
    <div id="point_03" class="pb-2">
      <div class="container-md">
        <div class="row justify-content-center">
          <div class="col-md-10">
            <hr style="border-top: 1px solid #fff;">
            <div class="col-sm-auto mb-2">
              <div class="dtl-details-2 px-5 py-1 text-center d-inline-block">活動說明</div>
            </div>
            <ul class="d-inline-block" style="color: #827b84; line-height: 1.7;">
              <li>本活動皆須註冊或登入yesgogogo即食購會員後，即可領取壽星專屬折價券。</li>
              <li>壽星專屬折價券</li>
              <li>每個會員帳號限回饋各個面額折價券各乙次。</li>
              <li>若訂單取消、退貨或任何不可歸咎於yesgogogo即食購之因素導致訂單未成立，恕不補發。</li>
              <li>折價券不得轉贈他人、要求變換現金或商品。</li>
              <li>折價券不可使用於部分商品和電子票券。</li>
              <li>折價券使用期限及規範可至<router-link to="/memberboard/memberorder">yesgogogo即食購會員中心</router-link>的「我的優惠券」→「折價券」內查看所領取到的折價券。</li>
              <li>本活動頁呈現之商品名稱、價格、顏色、規格、數量，若與購物車之呈現有所不符，以購物車之內容為準。</li>
              <li>本活動頁之商品不定期更換。</li>
              <li>活動事項載明於活動網頁中，參加本活動者，視為同意接受本活動注意事項之規範，參加人不符合或違反本活動規定事項者，本公司保有取消其參加或得獎資格之權利，並對於任何破壞本活動之行為保留相關權利。</li>
              <li>本公司保留修改、變更、暫停或終止及解釋本活動相關事項之權利。若有其他未盡事宜，悉依本公司相關規定或決定辦理。</li>
              <li> 其他問題請於上班時間(周一至周五 8:30~12:00、13:30~18:00，國定假日除外)，洽line客服人員(ID：<a href="http://line.me/ti/p/@yesgogogo">@yesgogogo</a>)。</li>
            </ul>
          </div>
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
      dataList: []
    }
  },
  methods: {
    getData () {
      const url = `${process.env.VUE_APP_API}/api/product/eventproducts?code=20220101UBBD`
      this.$http.get(url)
        .then((res) => {
          if (res.data.rtnCode === 0) {
            this.dataList = res.data.info[0].products
          }
        })
    },
    getCoupon (code) {
      // ? 檢查Token是否過期(3小時)
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
      const toVuexData = {
        fromBirthday: true,
        dataToApi: {
          CouponType: code
        }
      }
      this.$store.commit('getBirthdayData', toVuexData)
      this.$router.push('/memberboard/membercoupon')
    },
    // * 前往指定的高度位置
    topoint01 () {
      const element = this.$refs.point01
      const top = element.offsetTop
      window.scrollTo({ top: top, behavior: 'smooth' })
    },
    topoint02 () {
      const element = this.$refs.point02
      const top = element.offsetTop
      window.scrollTo({ top: top, behavior: 'smooth' })
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
  mounted () {
    this.getData()
    this.getNewToken()
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/all.scss';
@import '@/assets/scss/activity/2022_birthday/_site.scss';
@import '@/assets/scss/activity/_animate.min.scss';
@import '@/assets/scss/activity/_hover.min.scss';
@import '@/assets/scss/activity/_ygg-comp.scss';
@import '@/assets/scss/activity/_font.scss';
.birthday {
    background: #e9d3be center center repeat;
}
.dtl-details-2 {
  background-color: #a76038;
  color: #f6cba8;
  font-size: 1.3em;
}
.bg-star{
  background: url("https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/2022_birthday/Index_xl_04.png")top center no-repeat;
}
</style>
