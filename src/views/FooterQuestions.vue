<template>
  <div class="questions">
    <Header></Header>
    <div class="container mt-3 mt-md-5">
      <div class="row justify-content-center">
        <div class="col-md-10">
          <h3 class="pt-lg-3 pb-3 pb-lg-4">常見問題</h3>
          <h4 class="text-primary">一、訂單相關問題</h4>
          <div class="mb-5">
            <h4 class="border-bottom border-dark pb-1">Q：我要如何退/換貨？</h4>
            <p class="mt-2">A：本網站商品屬新鮮食材/品，請您收受商品時，建議到貨時立即檢驗，若有瑕疵損毀、退冰或規格不符之情況，欲辦理換貨，請於收到商品3小時內(以簽收時間算起)與我們聯繫，<a href="#" @click.prevent="contactUs">【聯絡我們】</a>提問留言，或寄信至<a href="mailto:yesgogogo@uitc.com.tw">【客服信箱】</a>，或LINE傳送至<a href="http://line.me/ti/p/@yesgogogo">【LINE官方帳號】</a>。我們將會儘快為您處理，詳細退換貨辦理方法請見<router-link to="/returnexchangepolicy">【退換貨政策】</router-link>。</p>
          </div>
          <div class="mb-5">
            <h4 class="border-bottom border-dark p b-1">Q：付款超過一週仍未收到商品怎麼辦？</h4>
            <p class="mt-2">A：如遇缺貨或是延遲出貨，客服會另外通知您；若超過一週未接獲客服通知亦未收到商品，可能是收貨地點無人簽收商品，退回郵局存局待領；亦可能是寄送地址有誤，導致物品沒有送達收貨地點。此時請您至<a href="#" @click.prevent="contactUs">【聯絡我們】</a>提問或<a href="http://line.me/ti/p/@yesgogogo">【LINE官方帳號】</a>留言，我們將儘速回覆您。</p>
          </div>
          <div class="mb-5">
            <h4 class="border-bottom border-dark pb-1">Q：我訂了幾項商品，為什麼沒有同時送達？</h4>
            <p class="mt-2">A：訂購的商品如非同一家特約廠商所提供，寄送時間及方式將會不同，故同一天訂購的商品，不一定會同日寄到，但會於付款完成後 7個工作天內(不含週六、日及國定假日)送達。部份預購、客製化商品及特殊原因導致無法如期出貨，我們將另行聯繫您確切的出貨時間。</p>
          </div>
          <div class="mb-5">
            <h4 class="border-bottom border-dark pb-1">Q：可以寄送海外或離島嗎？</h4>
            <p class="mt-2">A：很抱歉！目前本網站僅提供台灣本島配送，不提供海外或是離島的寄送服務，請您見諒。送貨地址建議您盡量不要留郵政信箱。</p>
          </div>
          <div class="mb-5">
            <h4 class="border-bottom border-dark pb-1">Q：忘記訂單編號怎麼辦？</h4>
            <p class="mt-2">A：您可以登入會員中心查詢，或提供姓名or手機號碼or會員帳號，由客服人員為您查詢。</p>
          </div>
          <div class="mb-5">
            <h4 class="border-bottom border-dark pb-1">Q：我訂購的商品需低溫冷藏，現在天氣這麼熱，會不會在運送過程中壞掉？</h4>
            <p class="mt-2">A：請放心，您所訂購的商品將以低溫冷藏方式配送，確保新鮮無虞。</p>
          </div>
          <h4 class="text-primary">二、折價券、購物金問題</h4>
          <div class="mb-5">
            <h4 class="border-bottom border-dark pb-1">Q：折價券有使用序號嗎？</h4>
            <p class="mt-2">A：折價券是有金額下限及使用範圍的，若您消費符合使用折價券時，折價券將會自動顯示在結帳畫面「選擇優惠折扣」中，所以無須另外輸入序號。</p>
          </div>
          <div class="mb-5">
            <h4 class="border-bottom border-dark pb-1">Q：請問購物金可以使用在哪些產品？</h4>
            <p class="mt-2">A：購物金除了票券商品與部分商品不得使用之外，其餘的在消費結帳時都可以使用。每筆訂單最高可折抵結帳總金額25%。詳細使用說明可至會員中心的「我的優惠券」→「回饋購物金」內查詢明細。
            </p>
          </div>
          <h4 class="text-primary">三、付款方式</h4>
          <div class="mb-5">
            <p class="mt-2">目前付款方式為：信用卡紅利折抵、信用卡付款、ATM轉帳以及LINE Pay付款，尚未提供貨到付款服務。<br>
            詳細付款細節請見<router-link to="/paymentways">【付款方式】</router-link>。
            </p>
          </div>
          <h4 class="text-primary">四、購買商品、訂購相關</h4>
          <div class="mb-5">
            <h4 class="border-bottom border-dark pb-1">Q：我在yesgogogo購物網所選購的商品，需要再付運費嗎?</h4>
            <p class="mt-2">A：yesgogogo購物網【低溫宅配商品消費未滿$799收取運費$200】、【常溫宅配商品消費未滿$399收取運費$90】，
低溫與常溫宅配商品消費達以上滿額條件則免運費。</p>
          </div>
          <div class="mb-5">
            <h4 class="border-bottom border-dark pb-1">Q：客服人員可以幫我購買嗎？</h4>
            <p class="mt-2">A：可以的。請提供您要購買的商品全名(或網址)、數量，以及您的姓名、手機號碼、E-mail、收件地址、付款方式(ATM轉帳or信用卡刷卡)，客服將於上班時間幫您購買！</p>
          </div>
          <h4 class="text-primary">五、會員帳號問題</h4>
          <div class="mb-5">
            <h4 class="border-bottom border-dark pb-1">Q：忘記密碼怎麼辦？</h4>
            <p class="mt-2">A：請連結至<router-link to="/forgetpassword">【忘記密碼】</router-link>中查詢，我們將傳送一組系統預設密碼至您的E-mail信箱，以利您登入，如仍未收到，請於<a href="http://line.me/ti/p/@yesgogogo">【LINE官方帳號】</a>留言。</p>
          </div>
          <div class="mb-5">
            <h4 class="border-bottom border-dark pb-1">Q：一直無法登入怎麼辦？</h4>
            <p class="mt-2">A：請先確認輸入帳號有無錯誤，若無法確定，請提供您的大名、手機號碼及身分證字號，客服人員將為您解圍。</p>
          </div>
          <div class="mb-5">
            <h4 class="border-bottom border-dark pb-1">Q：收不到OTP驗證碼，請問怎麼辦？</h4>
            <p class="mt-2">A：建議您可以將手機重新開機，或移動至訊號較佳的地點，重新上網註冊取得驗證碼。
            也要請您留意手機是否有阻擋垃圾簡訊的設定；抑或者是您曾經有向您的電信公司反應不要收到垃圾簡訊，這些原因都會影響到您收取手機驗證碼，如果上述狀況都已嘗試卻仍收不到驗證碼，請於上班時間(平日9:00-18:00)撥打02-6601-2888#3924 #3854由專人為您服務。
            </p>
          </div>
          <h4 class="text-primary">六、發票兌獎問題</h4>
          <div class="mb-5">
            <h4 class="border-bottom border-dark pb-1">Q：發票中獎後需16碼兌獎號碼，要去哪裡查詢？</h4>
            <p class="mt-2">A：16碼兌獎號碼只會由關貿發送至訂購人之E-mail給中獎本人，若您為中獎本人，可以從您的E-mail信箱(尤其是垃圾信箱)內查詢。</p>
          </div>
          <div ref="bonus">
            <h4 class="text-primary">七、聯邦卡友紅利點數</h4>
            <div class="mb-5">
              <h4 class="border-bottom border-dark pb-1">Q：請問我有聯邦信用卡的紅利點數，該如何使用？</h4>
              <p class="mt-2">A：在結帳頁面選擇「聯邦紅利折抵」選項，信用卡過卡時會先自動扣除您的紅利點數(聯邦信用卡紅利點數20點可折抵1元)，當紅利點數不夠支付貨款時，不足之金額將由信用卡刷卡支付！</p>
            </div>
            <div class="mb-5">
              <h4 class="border-bottom border-dark pb-1">Q：如果我要退貨，原本使用的紅利點數也會退還嗎？</h4>
              <p class="mt-2">A：會的。待廠商收回產品確認退貨後，我們將協助處理紅利點數的退還。</p>
            </div>
            <div class="mb-5">
              <h4 class="border-bottom border-dark pb-1">Q：原本想用紅利點數折抵商品，卻不小心折抵成刷卡金了怎麼辦？</h4>
              <p class="mt-2">A：有關刷卡金兌換的問題，請撥打信用卡背面電話詢問客服，或撥打02-27192233#9。</p>
            </div>
            <div class="mb-5">
              <h4 class="border-bottom border-dark pb-1">Q：我的帳戶無法顯示紅利折抵怎麼辦？</h4>
              <p class="mt-2">A：下單時系統不會顯示紅利點數，如需確認紅利點數可至聯邦銀行網站查詢。若已確認有紅利點數，結帳付款方式請點選「聯邦紅利折抵」選項，過卡時系統會扣除全額紅利點數，不足金額則將由信用卡刷卡支付！</p>
            </div>
          </div>
          <h4 class="text-primary">八、關於愛心捐</h4>
            <div class="mb-5">
              <h4 class="border-bottom border-dark pb-1">Q：如果沒買到愛心品，請問還有愛心捐嗎?</h4>
              <p class="mt-2">A：有的，全站商品均可產出【愛心捐】(部分商品除外，例如票券、大型家電、或其他專案商品)。每筆訂單消費回饋10%購物金，如果你願意可於結帳時選擇將購物金轉作愛心捐。只是當你購買到【愛心品】時，平台再加碼捐10%。</p>
            </div>
            <div class="mb-5">
              <h4 class="border-bottom border-dark pb-1">Q：如何辨識平台內的商品為愛心品?</h4>
              <p class="mt-2">A：可以從商品頁顯示的【愛心品】標誌確認。另，商品加入購物車後，結帳頁面的商品明細下方也有【愛心品】標誌。</p>
            </div>
            <div class="mb-5">
              <h4 class="border-bottom border-dark pb-1">Q：我自己會員帳戶中的購物金，也可以轉作愛心捐嗎?</h4>
              <p class="mt-2">A：不行，如欲將購物金轉作愛心捐，需在訂單結帳時選擇是否捐出。訂單結帳完成後，無法再異動愛心捐。</p>
            </div>
            <div class="mb-5">
              <h4 class="border-bottom border-dark pb-1">Q：請問愛心捐會有收據嗎?</h4>
              <p class="mt-2">A：因應營所稅之規範，本公司需取得對應匯出愛心捐金額之收據，方能符合財務作業需求。同時，非營利組織之標準作業流程不可重複開立收據，因此無法提供消費者捐款證明，感謝您的體諒。</p>
            </div>
            <div class="mb-5">
              <h4 class="border-bottom border-dark pb-1">Q：請問我的愛心捐明細，可以由哪裡查詢?</h4>
              <p class="mt-2">A：請登入帳戶後，至會員中心＞我的愛心捐中確認。愛心捐紀錄將於訂單完成後10日後匯入系統，即可查詢。</p>
            </div>
            <div class="mb-5">
              <h4 class="border-bottom border-dark pb-1">Q：請問將購物金轉作愛心捐，我會獲得贈品嗎?</h4>
              <p class="mt-2">A：非常感謝您的愛心捐。我們將以每月愛心捐總額，於單筆匯款方式附上消費者愛心捐明細，代表全部參與愛心捐的每一位消費者捐贈非營利組織，以資感謝。</p>
            </div>
            <div class="mb-5">
              <h4 class="border-bottom border-dark pb-1">Q：若結帳時選擇將購物金轉作愛心捐後，是否還可以修改為保留購物金?</h4>
              <p class="mt-2">A：訂單結帳完成後，恕無法再異動愛心捐選項。</p>
            </div>
          <div class="mb-5">
            <p class="mt-2">若您有其他問題或建議，請您加入<a href="http://line.me/ti/p/@yesgogogo">【LINE官方帳號】</a>或至<a href="#" @click.prevent="contactUs">【線上客服】</a>提問留言，我們將儘速回覆您。</p>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import checkToken from '@/assets/js/checkToken.js'
const Header = defineAsyncComponent(() => import(/* webpackChunkName: "header" */'@/components/Header.vue'))
const Footer = defineAsyncComponent(() => import(/* webpackChunkName: "footer" */'@/components/Footer.vue'))

export default {
  components: {
    Header,
    Footer
  },
  methods: {
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
    contactUs () {
      // ?判斷是否有登入
      if (this.getToken()) {
        this.$router.push('/memberboard/contactus')
      } else {
        this.$swal
          .fire({
            title: '請先登入',
            allowOutsideClick: true,
            confirmButtonColor: '#F8412E',
            confirmButtonText: '確認',
            width: 400,
            customClass: {
              title: 'text-class',
              confirmButton: 'confirm-btn-class'
            }
          })
          .then(result => {
            if (result.isConfirmed) {
              if (document.body.clientWidth < 576) {
                // ? 手機版
                this.$router.push('/membermobilelogin')
              } else {
                // ? web 版
                this.$store.state.loginModal.show()
              }
            }
          })
      }
    }
  },
  mounted () {
    if (Object.keys(this.$route.query).length !== 0) {
      if (this.$route.query.anchor === 'bonus') {
        setTimeout(() => {
          this.videoZoneDOM = this.$refs.bonus
          if (document.body.clientWidth > 992) {
            window.scrollTo({ top: this.videoZoneDOM.offsetTop - 178, behavior: 'smooth' })
          } else if (document.body.clientWidth > 576) {
            window.scrollTo({ top: this.videoZoneDOM.offsetTop - 150, behavior: 'smooth' })
          } else {
            window.scrollTo({ top: this.videoZoneDOM.offsetTop - 94, behavior: 'smooth' })
          }
        }, 500)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  *{
    line-height: 2;
  }
  p{
    font-size: 1.25rem;
  }
</style>
