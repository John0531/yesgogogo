<template>
  <div>
    <!-- 抽豪華泡湯溫泉劵 -->
    <div class="background-top">
      <div class="master-container text-center">
        <div class="container-fluid">
          <div class="d-none d-lg-block" style="padding-top: 45.7%;"></div>
          <div class="d-lg-none" style="padding-top: 35%;"></div>
          <!-- 溫泉劵 -->
          <div class="row">
            <!-- 溫泉劵(桌機)  -->
            <div class="col-12 d-none d-lg-block">
              <img
                src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/hotspringticket/Index_xl_ticket.png"
                class="w-100"
                alt=""
              />
            </div>
            <!-- 溫泉劵(手機)  -->
            <div class="col-12 d-lg-none" style="padding-top: 60%;">
              <img
                src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/hotspringticket/Index_xl_ticket_m.png"
                class="w-100"
                alt=""
              />
            </div>
          </div>
          <!-- 看看其他更多活動 -->
          <div class="row">
            <!-- 看看其他更多活動 (桌機) -->
            <div class="col-6 d-none d-lg-block mt-2">
              <img
                src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/hotspringticket/Index_xl_title_b.png"
                alt="看看其他更多活動"
                class="w-100"
              />
            </div>
            <!-- 看看其他更多活動 (手機) -->
            <div class="col-12 d-lg-none">
              <img
                src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/hotspringticket/Index_m_title_b.png"
                alt="看看其他更多活動"
                class="w-100"
              />
            </div>
          </div>
          <!-- 活動四張圖 -->
          <div class="row" v-if="spring_events">
            <div v-if="spring_events[0]" class="col-6 col-lg-3 mb-3">
              <a :href="spring_events[0].targetUrl">
                <img
                  :src="spring_events[0].image"
                  alt="食食如意"
                  class="img-fluid w-100 hvr-wobble-vertical"
                />
              </a>
            </div>
            <div v-if="spring_events[1]" class="col-6 col-lg-3">
              <a
                :href="spring_events[1].targetUrl"
              >
                <img
                  :src="spring_events[1].image"
                  alt="回饋10%"
                  class="img-fluid w-100 hvr-wobble-vertical"
                />
              </a>
            </div>
            <div v-if="spring_events[2]" class="col-6 col-lg-3 mb-5">
              <a :href="spring_events[2].targetUrl">
                <img
                  :src="spring_events[2].image"
                  alt="Line好友"
                  class="img-fluid w-100 hvr-wobble-vertical"
                />
              </a>
            </div>
            <div v-if="spring_events[3]" class="col-6 col-lg-3">
              <a :href="spring_events[3].targetUrl">
                <img
                  :src="spring_events[3].image"
                  alt="5折up"
                  class="img-fluid w-100 hvr-wobble-vertical"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 注意事項 -->
    <div class="background-down">
      <div class="master-container-down">
        <div class="row">
          <div class="col-12 mt-4 d-none d-lg-block">
            <img
              src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/hotspringticket/Index_xl_title_c.png"
              alt=""
            />
          </div>
          <div class="col-12 mt-4 d-lg-none">
            <img
              src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/hotspringticket/Index_m_title_c.png"
              alt=""
              class="w-100"
            />
          </div>
          <div class="col-12 mb-5">
            <div class="d-flex flex-column" style="color: #54221c;">
              <div class="d-flex p-2">
                <div>1.</div>
                <div>
                  活動期間2022/2/16-3/14於yesgogogo單筆消費實付金額滿1000元(扣除折價券、購物金等優惠活動計算)，始符合活動資格，免登記即可參加溫泉券抽獎。
                </div>
              </div>
              <div class="d-flex p-2">
                <div>2.</div>
                <div>
                  本活動於2022/4/15前抽出3名得獎者，並在官方粉絲團公告得獎名單，後續將由專人聯絡通知。
                </div>
              </div>
              <div class="d-flex p-2">
                <div>3.</div>
                <div>
                  活動贈品「烏來璞石麗緻溫泉券」可兌換景緻湯屋1.5小時，使用效期與詳細規範依券面標示為準。
                </div>
              </div>
              <div class="d-flex p-2">
                <div>4.</div>
                <div>
                  參加活動者須為完成訂單始符合認列資格，若因訂單取消、退貨，則該筆訂單不得要求列入計算，不符合活動資格。
                </div>
              </div>
              <div class="d-flex p-2">
                <div>5.</div>
                <div>
                  活動頁呈現之商品名稱、價格、顏色、規格、數量，若與購物車之呈現有所不符，以購物車之內容為準。
                </div>
              </div>
              <div class="d-flex p-2">
                <div>6.</div>
                <div>
                  活動事項皆載明於網頁中，參加本活動者視為同意接受本活動注意事項之規範，參加人不符合或違反本活動規定事項者，不可歸責於本公司，本公司保有取消其參加資格之權利，並對於任何破壞本活動之行為保留相關權利。
                </div>
              </div>
              <div class="d-flex p-2">
                <div>7.</div>
                <div>
                  如有其他未盡事宜，本公司保留修改、變更、暫停或終止及解釋本活動相關事項之權利，悉依本公司相關規定或決定辦理。
                </div>
              </div>
              <div class="d-flex p-2">
                <div>8.</div>
                <div>
                  本公司保留隨時變更、修改或終止本活動及約定條款之權利，若有異動，修改後的活動內容及約定條款將公佈在yesgogogo即食購網站上，若您於任何修改或變更後繼續使用本服務時，視為您已閱讀、瞭解並同意接受該等修改或變更。
                </div>
              </div>
              <div class="d-flex p-2">
                <div>9.</div>
                <div>
                  若遇贈品缺貨，將延後出貨或以等值商品替代，並不得替換現金或其他商品。
                </div>
              </div>
              <div class="d-flex p-2">
                <div>10.</div>
                <div>
                  本活動公佈中獎名單後，請依規定完成兌獎流程，以利贈品寄送或發送，逾期兌獎恕不補發贈品。
                </div>
              </div>
              <div class="d-flex p-2">
                <div>11.</div>
                <div>
                  參加者若因會員資料填寫不完整者，或活動後變更資料(如姓名、手機、地址等)，或手機收訊不良、電信業者遺漏或阻擋企業訊息等情況，導致無法收到商品或簡訊，信件無人領取等，恕不補發。
                </div>
              </div>
              <div class="d-flex p-2">
                <div>12.</div>
                <div>
                  依中華民國所得稅法及其相關法令規定，得獎之獎項價值超過新台幣1,000元者，須納入個人年度所得，並由yesgogogo即食購開立扣繳憑單；超過新台幣20,010元者，得獎者須於領獎時先繳納10%之機會中獎所得稅金(若得獎者為外國人，或居留台灣期間未達183日以上之大陸地區人民者，須於領獎同時扣繳20％之機會中獎所得稅金)始得以領獎。為辦理扣繳憑單開立事宜及確認得獎者之身份，須請得獎者提供身分證正反面影本、護照影本、在台居留證影本或其他可證明得獎者身份之文件影本。(稅務扣繳相關法規規定請參照財政部網站)
                </div>
              </div>
              <div class="d-flex p-2">
                <div>13.</div>
                <div>
                  得獎者所提供之身分證明文件如與參加活動時所登錄之yesgogogo即食購會員帳號資料不符，yesgogogo即食購可要求得獎者提出相關證明文件，否則yesgogogo即食購得取消其得獎資格。
                </div>
              </div>
            </div>
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
      spring_events: [],
      spring_events_m: []
    }
  },
  methods: {
    getSpringEvent () {
      /* 電腦版 */
      const url = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=spring_A`
      this.$http.get(url).then(res => {
        this.spring_events = res.data.info
      })
    }
  },
  mounted () {
    this.getSpringEvent()
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/activity/hotspringticket/_site.scss';
@import '@/assets/scss/helpers/_loading.scss';
</style>
