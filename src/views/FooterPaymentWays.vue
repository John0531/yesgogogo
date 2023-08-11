<template>
  <div>
    <Header></Header>
     <div class="container">
      <div class="row align-items-center justify-content-center">
        <div class="col-12 col-md-10 my-5">
          <h3>付款方式</h3>
          <h4 class=" my-5">我們提供以下三種付款方式：</h4>
          <div>
            <h4 class="">信用卡付款</h4>
            <div class="py-3 ">
              <div class="fs-md-5 fs-6 text-break word">您可使用一般信用卡付款服務。目前yesgogogo即食購僅接受台灣地區發行的Visa、MasterCard、或JCB，尚無法支援國外信用卡付款。付款頁面使用「聯邦銀行金流」，網頁將會轉往信用卡授權頁面；交易全程使用安全加密，且信用卡資料將不會儲存於網站，您可以安心使用信用卡付款。</div>
            </div>
          </div>
          <div>
            <h4 class="">LINE Pay 付款</h4>
            <div class="py-3 ">
              <div class="fs-md-5 fs-6 text-break word">yesgogogo即食購支援LINE Pay付款。</div>
            </div>
          </div>
          <div>
            <h4 class="">ATM轉帳</h4>
            <div class="py-3 ">
              <div class="fs-md-5 fs-6 text-break word">若訂單之付款方式為ATM轉帳者，皆可使用ATM逕行轉帳(銀行代碼803)或至金融機構臨櫃匯款/劃撥付款(入款銀行名稱:聯邦商業銀行803 營業部0021 戶名：聯邦網通科技股份有限公司)，於結帳最後步驟顯示該筆訂單轉帳資訊(每筆訂單均有專屬轉帳付款帳號)，且該訂單將保留5天，逾期未付款訂單自動失效。</div>
            </div>
          </div>
          <div class="mt-5 mt-md-6">
            <h4 class="">提醒您：</h4>
            <div class="py-3 ">
              <div class="d-flex justify-content-center"><span class="fs-md-5 fs-6">1.</span><div class="fs-md-5 fs-6 text-break word">轉帳付款期限不受假日影響，例假日、國定假日，均可進行付款。一旦付款成功後，系統會再發出「付款成功通知信」，若您是使用免費信箱，通知信可能會落到垃圾信匣內，還請您留意。</div></div>
              <div class="d-flex "><span class="fs-md-5 fs-6">2.</span><div class="fs-md-5 fs-6 text-break word">提醒您，付款逾期、帳號或金額輸入錯誤等因素，導致款項無法順利入帳完成，訂單也會失效。</div></div>
              <div class="fs-md-5 fs-6 text-break word p-4">以上依付款方式，yesgogogo即食購購物網須待款項確定入帳後，方可出貨。</div>
              <div class="d-flex justify-content-center"><i class="bi bi-diamond-fill me-1 mt-1"></i><div class="fs-md-5 fs-6 text-break word">完成訂購手續，不代表交易已經完成或契約已經成立，倘若交易條件有誤、商品無存貨、服務無法提供、或有其他正當理由之情形，廠商得於您訂購後三個工作日內拒絕該筆交易。所有付款亦適用前述確認機制。</div></div>
            </div>
          </div>
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

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss" scoped>
div.word {
    text-align: justify;
  }
</style>
