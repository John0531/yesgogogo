<template>
  <div>
    <!-- 視覺 -->
    <div class="header d-none d-md-block"></div>
    <div class="d-md-none">
      <img
        src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/memberbonus/2023Index_lg_02.jpg"
        class="img-fluid"
      />
    </div>

    <!-- 活動按鈕 -->
    <div class="btn-6">
      <div class="container">
        <div class="row">
          <div class="text-center">
            <img
              src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/memberbonus/banner_00.png"
              alt="100元"
              class="img-fluid"
            />
          </div>
        </div>
      </div>
      <!-- 電腦版 -->
      <div class="container">
        <div class="row">
          <div class="col-12 hvr-bob text-center">
            <router-link to="/register">
              <img
                :src="events.link"
                alt="新會員(新)"
                class="img-fluid"
              />
            </router-link>
          </div>
          <div class="col-12 hvr-bob text-center" ref="tenprecentbonus">
            <router-link to="/">
              <img
                src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/memberbonus/2023banner_02.png"
                alt="10%(新)"
                class="img-fluid"
              />
            </router-link>
          </div>
        </div>
      </div>
      <div class="container pb-5">
        <div class="row">
          <div class="col-12">
            <table class="text-white table-fontSize">
              <tbody>
                <tr>
                  <td colspan="2">《活動詳情》</td>
                </tr>
                <tr>
                  <td colspan="2">
                    活動期間:
                    <span>{{ events.title }}</span>
                    <br />【yesgogogo 會員好禮】
                  </td>
                </tr>
                <tr>
                  <td nowrap="nowrap" valign="top">1.</td>
                  <td>
                    <p>活動期間 yesgogogo 新註冊會員，可享有總價值 $800 之電子折價券，將於成為會員後當日歸戶至會員帳戶內，使用效期 2 個月內有效。每個會員帳號限領一次。</p>
                  </td>
                </tr>
                <tr>
                  <td nowrap="nowrap" valign="top">2.</td>
                  <td>
                    <p>
                      折價券面額為 $100×3張(消費滿$101可使用)、$200×1張(消費滿$1,800可使用)、$300×1張(消費滿$2,500可使用)。
                    </p>
                  </td>
                </tr>
                <tr>
                  <td nowrap="nowrap" valign="top">3.</td>
                  <td>
                    折價券使用期限及規範，可至 yesgogogo 購物網登入會員中心的「我的優惠券」→「折價券」內查看券面說明。
                  </td>
                </tr>
                <tr>
                  <td nowrap="nowrap" valign="top">4.</td>
                  <td>
                    使用折價券時，若訂單取消、退貨或任何不可歸咎於 yesgogogo 購物網之因素導致訂單未成立，恕不補發。
                  </td>
                </tr>
                <tr>
                  <td nowrap="nowrap" valign="top">5.</td>
                  <td>
                    折價券不得轉贈他人、要求變換現金或商品，限票券與部分專案商品不得使用。
                  </td>
                </tr>
                <tr>
                  <td nowrap="nowrap" valign="top">6.</td>
                  <td>
                    每筆訂單消費不限金額，享購物金 10% 回饋無上限。每 1 購物金等同於新台幣 1 元(1購物金=1元)，可於下次消費抵用，最高折抵結帳金額25%。(限票券與部分專案商品不得使用)。
                  </td>
                </tr>
                <tr>
                  <td nowrap="nowrap" valign="top">7.</td>
                  <td>
                    回饋購物金將於訂單完成(即訂單內所有商品出貨)起算 15 日後發送至會員帳戶內，若訂單取消、退貨或任何不可歸咎於 yesgogogo 之因素導致訂單未成立，恕不補發。
                  </td>
                </tr>
                <tr>
                  <td nowrap="nowrap" valign="top">8.</td>
                  <td>
                    購物金可至會員中心的「我的優惠券」→「購物金回饋」內查詢明細。
                  </td>
                </tr>
                <tr>
                  <td nowrap="nowrap" valign="top">9.</td>
                  <td>折價券及購物金於結帳時僅能擇一使用，恕無法併用。</td>
                </tr>
                <tr>
                  <td nowrap="nowrap" valign="top">10.</td>
                  <td>
                    購物金回饋為活動贈品，屬無償取得，故購物金回饋折抵部分不計入發票開立金額，開立發票之金額是以該訂單「購買時實際支付的金額」來計算。
                  </td>
                </tr>
                <tr>
                  <td nowrap="nowrap" valign="top">11.</td>
                  <td>
                    本活動以實際交易計算，若因付款失敗、交易取消、退貨，該筆交易將不列入計算範圍。如有其他未盡事宜， yesgogogo 購物網保留隨時修改、變更、取消本活動之權利，亦有權對本活動之所有事宜做出解釋或決定。
                  </td>
                </tr>
                <tr>
                  <td nowrap="nowrap" valign="top">12.</td>
                  <td>
                    活動事項載明於活動網頁中，參加本活動者，視為同意接受本活動注意事項之規範，參加人不符合或違反本活動規定事項者，本公司保有取消其參加資格之權利，並對於任何破壞本活動之行為保留相關權利。
                  </td>
                </tr>
                <tr>
                  <td nowrap="nowrap" valign="top">13.</td>
                  <td>
                    本公司保留隨時變更、修改、暫停或終止及解釋本活動相關事項及約定條款之權利，若有其他未盡事宜，悉依本公司相關規定或決定辦理。
                  </td>
                </tr>
                <tr>
                  <td nowrap="nowrap" valign="top">14.</td>
                  <td>
                    本活動若有異動，修改後的活動內容及約定條款將公佈在 yesgogogo 購物網官方網站上，若您於任何修改或變更後繼續使用本服務時，視為您已閱讀、瞭解並同意接受該等修改或變更。
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default ({
  data () {
    return {
      title: '',
      isNotExpired: true,
      events: ''
    }
  },
  methods: {
    getEvent () {
      const url = `${process.env.VUE_APP_API}/api/product/eventproducts?code=2023_memberbonus`
      this.$http.get(url)
        .then((res) => {
          if (res.data.rtnCode === 0) {
            this.events = res.data.info[0]
          }
        })
    }
  },
  watch: {
    '$route' (to) {
      if (to.fullPath.match('/activity/2023_memberbonus')) {
        if (this.$route.params.hashposition || this.$route.params.id === 'tenpercent') {
          setTimeout(() => {
            window.scrollTo({ top: this.title.offsetTop, behavior: 'smooth' })
          }, 500)
        }
      }
    }
  },
  mounted () {
    this.getEvent()
    this.title = this.$refs.tenprecentbonus
    // ?進入頁面後導到回饋10%的活動位置
    if (this.$route.params.hashposition || this.$route.params.id === 'tenpercent') {
      // setTimeout是為了等待圖片渲染完成
      setTimeout(() => {
        window.scrollTo({ top: this.title.offsetTop, behavior: 'smooth' })
      }, 500)
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/activity/_hover.min.scss';
.header {
    background-image: url("https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/memberbonus/2023Index_xl_02.png");
    background-repeat: no-repeat;
    background-position: center top;
    height: 700px;
    box-sizing: border-box;
    margin: 0;
    background-color: #990000;
}

.btn-6 {
    background-image: url("https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/memberbonus/bg.png");
    background-repeat: repeat;
    background-position: center top;
    box-sizing: border-box;
    margin: 0;
    background-color: #990000;
}

@media (min-width: 576px) {
    .btn-6 {
        background-position: top center;
        /* background-repeat: no-repeat; */
        margin-top: 0px;
    }
}

/* 注意事項 */
.noticeTable{
    margin: 0 20px 30px 0px;
    font-size: 0.9em;
    color: #fff;
    line-height: 1.5em;
}

.dtl-event {
  background-color: #e5d3ac;
  color: #a12d2d;
  font-size: 2em;
  font-weight: bold;
}

.dtl-notes {
  color: #ffffff;
}

.dtl-details {
  background-color: #fbe1c9;
  color: #aa332b;
  font-size: 1.3em;
}

@media (max-width: 767px) {
  .dtl-event {
    font-size: 1.5em;
  }
}

.table-fontSize{
  font-size: 0.9em;
}
</style>
