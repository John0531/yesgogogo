<template>
  <div>
    <div style="background-color:#2c4d32">
      <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongzilottery/kv.jpg" class="img-fluid mx-auto d-none d-lg-block" alt="">
      <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongzilottery/kv_mb.jpg" class="img-fluid mx-auto d-block d-lg-none" alt="">
    </div>
    <div style="background-color:#c39c4d" class="py-4 py-md-6">
      <div class="container bg-1">
        <div class="img-group-1">
          <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongzilottery/product_1.png" class="img-fluid w-90 pb-5 d-none d-lg-block hvr-bob" alt="">
          <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongzilottery/product_2.png" class="img-fluid w-90 pb-5 d-none d-lg-block hvr-bob" alt="">
          <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongzilottery/product_3.png" class="img-fluid w-90 pb-5 d-none d-lg-block hvr-bob" alt="">
          <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongzilottery/product_1_mb.png" class="img-fluid pb-4 pb-ssm-7 pb-sm-5 d-block d-lg-none hvr-bob" alt="">
          <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongzilottery/product_2_mb.png" class="img-fluid pb-4 pb-ssm-7 pb-sm-5 d-block d-lg-none hvr-bob" alt="">
          <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongzilottery/product_3_mb.png" class="img-fluid pb-4 pb-ssm-7 pb-sm-5 d-block d-lg-none hvr-bob" alt="">
        </div>
      </div>
    </div>
    <div style="background-color:#2c4d32" class="py-5 py-md-6">
      <div class="container bg-2">
        <div class="img-group-2">
          <div class="row gy-4 gy-ssm-7 gy-sm-5 gy-lg-0">
            <div class="col-lg-4 d-none d-lg-block" v-for="item in imgData" :key="item.code">
              <a href="#" @click.prevent="recordClickHeight(item.targetUrl)" class="hvr-bob">
                <img :src="item.image" class="img-fluid" alt="">
              </a>
            </div>
            <div class="col-lg-4 d-lg-none" v-for="item in imgData_m" :key="item.code">
              <a href="#" @click.prevent="recordClickHeight(item.targetUrl)" class="hvr-bob">
                <img :src="item.image" class="img-fluid" alt="">
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="background-color:#2c4d32">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-11 border-top border-white text-white pt-3 px-3 pb-6">
            <p class="ps-3 pb-3">注意事項</p>
            <ol>
              <li>於活動期間2022/5/10-6/7於yesgogogo單筆消費實付金額滿1000元(扣除折價
                  券、購物金等優惠活動計算)，始符合活動資格，免登記即可參加抽獎。</li>
              <li>獎項說明：「一金富貴好運金粽」為純金999金粽子，抽1名 ; 「二斤南門市場豆沙甜
                  粽」為知名立家甜粽120g/顆共10顆，抽2名 ; 「三斤鮮綠生活澎拜海陸箱」內容為
                  紐西蘭沙朗牛4包、鯖魚一夜干5包、檸檬香茅蝦*1盒，抽2名。</li>
              <li>本活動於2022/7/10前共抽出5名的得獎者，並在官方粉絲團公告得獎名單，後續
                  將由專人聯絡通知。</li>
              <li>參加活動者須為完成訂單始符合認列資格，若因訂單取消、退貨，則該筆訂單不
                  得要求列入計算，不符合活動資格。</li>
              <li>活動頁呈現之商品名稱、價格、顏色、規格、數量，若與購物車之呈現有所不符，
                  以購物車之內容為準。</li>
              <li>活動事項皆載明於網頁中，參加本活動者視為同意接受本活動注意事項之規範，
                  參加人不符合或違反本活動規定事項者，不可歸責於本公司，本公司保有取消其
                  參加資格之權利，並對於任何破壞本活動之行為保留相關權利。</li>
              <li>如有其他未盡事宜，本公司保留修改、變更、暫停或終止及解釋本活動相關事項
                  之權利，悉依本公司相關規定或決定辦理。</li>
              <li>本公司保留隨時變更、修改或終止本活動及約定條款之權利，若有異動，修改後
                  的活動內容及約定條款將公佈在yesgogogo即食購網站上，若您於任何修改或變
                  更後繼續使用本服務時，視為您已閱讀、瞭解並同意接受該等修改或變更。</li>
              <li>若遇贈品缺貨，將延後出貨或以等值商品替代，並不得替換現金或其他商品。</li>
              <li>本活動公佈中獎名單後，請依規定完成兌獎流程，以利贈品寄送或發送，逾期兌
                  獎恕不補發贈品。</li>
              <li>參加者若因會員資料填寫不完整者，或活動後變更資料(如姓名、手機、地址等)，
                  或手機收訊不良、電信業者遺漏或阻擋企業訊息等情況，導致無法收到商品或簡
                  訊，信件無人領取等，恕不補發。
                  </li>
              <li>依中華民國所得稅法及其相關法令規定，得獎之獎項價值超過新台幣1,000元者，
                  須納入個人年度所得，並由yesgogogo即食購開立扣繳憑單；超過新台幣20,010
                  元者，得獎者須於領獎時先繳納10%之機會中獎所得稅金(若得獎者為外國人，或
                  居留台灣期間未達183日以上之大陸地區人民者，須於領獎同時扣繳20％之機會
                  中獎所得稅金)始得以領獎。為辦理扣繳憑單開立事宜及確認得獎者之身份，須請
                  得獎者提供身分證正反面影本、護照影本、在台居留證影本或其他可證明得獎者
                  身份之文件影本。(稅務扣繳相關法規規定請參照財政部網站)
                  </li>
              <li>得獎者所提供之身分證明文件如與參加活動時所登錄之yesgogogo即食購會員
                  帳號資料不符，yesgogogo即食購可要求得獎者提出相關證明文件，否則
                  yesgogogo即食購得取消其得獎資格。</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imgData: [],
      imgData_m: []
    }
  },
  methods: {
    getImages () {
      const url = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=zongzigift`
      this.axios.get(url)
        .then((res) => {
          this.imgData = []
          this.imgData_m = []
          res.data.info.forEach(item => {
            if (item.code.includes('m')) {
              this.imgData_m.push(item)
            } else {
              this.imgData.push(item)
            }
          })
        })
    },
    // ?小電視及看更多記錄高度
    recordClickHeight (url) {
      // ?點擊產品觸發紀錄瀏覽高度於LocalStorage
      const scrollYHeight = window.scrollY
      localStorage.setItem('clickHeight2', scrollYHeight)
      setTimeout(() => {
        window.location = url
      }, 300)
    },
    checkLocalHeight () {
      // ?檢查LocalStorage
      if (window.localStorage.getItem('clickHeight2')) {
        const globalheight = window.localStorage.getItem('clickHeight2')
        setTimeout(() => {
          window.scrollTo(0, globalheight)
        }, 300)
        localStorage.removeItem('clickHeight2')
      }
    }
  },
  mounted () {
    this.getImages()
  },
  updated () {
    this.checkLocalHeight()
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/activity/_hover.min.scss';
  .bg-1{
    background-image: url('https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongzilottery/frame_1.png');
    @media (max-width:991px) {
      background-image: url('https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongzilottery/frame_1_mb.png');
    }
    background-size: cover;
    @media (max-width:575px) {
      background-size: 95%;
      background-position: top center;
      background-repeat: no-repeat;
    }
  }
  .img-group-1{
    padding: 300px 0px 160px 90px;
    @media (max-width:1399px) {
      padding: 250px 0px 143px 90px;
    }
    @media (max-width:1199px) {
      padding: 220px 0px 105px 90px;
    }
    @media (max-width:991px) {
      padding: 200px 20px 134px 25px;
    }
    @media (max-width:767px) {
      padding: 158px 20px 73px 25px;
    }
    @media (max-width:575px) {
      padding: 25vw 5vw 18vw 4vw;
    }
    @media (max-width:429px) {
      padding: 29vw 5vw 18vw 4vw;
    }
  }
  .bg-2{
    background-image: url('https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongzilottery/frame_2.png');
    @media (max-width:991px) {
      background-image: url('https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/zongzilottery/frame_2_mb.png');
    }
    background-size: cover;
    @media (max-width:575px) {
      background-size: 95%;
      background-position: top center;
      background-repeat: no-repeat;
    }
  }
  .img-group-2{
    padding: 228px 35px 123px 35px;
    @media (max-width:1399px) {
      padding: 202px 35px 107px 35px;
    }
    @media (max-width:1199px) {
      padding: 175px 35px 92px 35px;
    }
    @media (max-width:991px) {
      padding: 156px 25px 89px 25px;
    }
    @media (max-width:767px) {
      padding: 111px 20px 60px 20px;
    }
    @media (max-width:575px) {
      padding: 21vw 4vw 11vw 4vw;
    }
  }
</style>
