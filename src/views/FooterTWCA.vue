<template>
  <div class="twca">
    <Header></Header>
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-md-10 fs-md-5">
          <h3 class="pt-lg-3 pb-2 pb-lg-3">TWCA認證</h3>
          <p class="mb-5">yesgogogo即食購購物網已擁有TWCA SSL標章，提供您安心購物的環境。</p>
          <h4 class="mb-3">TWCA的SSL標章說明:</h4>
          <p class="mb-5">
            SSL伺服器憑證就像網站在網路上的虛擬身分證。SSL伺服器憑證在發展之初，原本就期望協助網站做到「資料加密」及「網站身分認證」，正確應用SSL伺服器憑證至少能提供基本的安全防護。據聞鄰近的韓國，正準備立法要求凡在網站輸入私密性資料的網站均應安裝SSL伺服器憑證，以要求網站提供基本的安全防護，這點或許值得國內主管機關借鏡。
          </p>
          <p class="mb-5">
            採用符合電子簽章法的SSL憑證產品。目前台灣已發行電子簽章法，要求憑證發行機構須通過經濟部審核，並在網站上公開憑證作業實務基準（CPS），以載明憑證之相關規範。憑證機構違反前述規定時，依電子簽章法第十二條規定，主管機關得處罰款並令其限期改正，為了您的權益著想，請找合法的SSL憑證機構購買SSL憑證。
          </p>
          <p class="mb-5">
            儘量避免多個網站共用憑證。業界目前有所謂的萬用伺服器憑證，目的是節省企業網站的成本，但使用上的安全性當然不如單一網站單一憑證，這種憑證在國外往往只應用於內部伺服器資料交換加密使用。最新的憑證安全管理要求（EV Certificate Guidelines v1.0 , june 2007）已明文禁止使用萬用型SSL伺服器憑證。
          </p>
          <p class="mb-5">
            請全程開啟SSL安全防護。就像買了鎖，卻沒有裝在大門，只鎖了房間的金庫。常見網站在首頁會員登入時沒有開啟SSL防護，直至訂單內容確認完成，要進行付款時才有SSL防護。事實上，會員登入的帳號及密碼也應該列為私密性資料加以保護才對。
          </p>
          <p class="mb-0">
            請安裝具有網路安全機制的專屬SSL標章。SSL憑證機構應該提供具備防偽功能的專屬認證標章以強化網站認證功能。TWCA的SSL標章具有網站安全認證燈號、防拷等多重安全設計以即時認證網站，提供更週全的安全保護。
          </p>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
const Header = defineAsyncComponent(() => import(/* webpackChunkName: "header" */'@/components/Header.vue'))
const Footer = defineAsyncComponent(() => import(/* webpackChunkName: "footer" */'@/components/Footer.vue'))

export default ({
  components: {
    Header,
    Footer
  }
})
</script>
