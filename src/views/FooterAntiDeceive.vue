<template>
  <div class="antideceive">
    <Header></Header>
    <div class="container py-5">
      <div class="bg-primary p-4 p-md-5">
        <h2 class="text-white fw-normal fs-1 ms-5 mb-4">反詐騙
          <span class="title d-block fs-2">重要提醒</span>
        </h2>
        <h5 class="text-white lh-lg fw-normal">感謝您對 yesgogogo 即食購購物網的支持，近日詐騙集團猖獗，詐騙手法日新月異，yesgogogo即食購購物網不會以帳務異常、分期付款設定錯誤、要求ATM轉帳或退款…等名義與您聯繫，若您接獲類似上述通知，請無須理會，並撥打165反詐騙專線詢問或於yesgogogo即食購購物網的客服中心線上提問我們將於上班時間內盡速與您聯繫。</h5>
      </div>
      <h5 class="text-center fw-normal my-4">yesgogogo 即食購購物網特別提出以下注意項目，提醒您切勿受騙：</h5>
      <ul class="list-unstyled">
        <li class="fs-md-5"><i class="bi bi-diamond-fill me-1"></i>本公司不會於<span class="text-primary">非上班時間</span>以電話或簡訊與您確認訂單內容或核對相關資料。</li>
        <li class="fs-md-5"><i class="bi bi-diamond-fill me-1"></i>本公司不會以重複訂購、刷卡錯誤與您聯繫，或要求您依指示轉帳、操作ATM。</li>
        <li class="fs-md-5"><i class="bi bi-diamond-fill me-1"></i>詐騙集團常以竄改來電顯示號碼的方式假冒金融機構，若接獲可疑電話或簡訊，切勿回撥電話或回傳簡訊。</li>
      </ul>
      <div class="text-center d-md-flex justify-content-center mt-4 mb-2">
        <p class="fs-md-5 pe-3">yesgogogo 即食購購物網上班時間</p>
        <p class="fs-md-5 border-start-md border-end-md border-secondary border-4 px-3">週一~週五</p>
        <p class="fs-md-5 ps-3">9:00~12:00、13:30~18:00</p>
      </div>
      <p class="text-center fs-md-5 mb-4">若您有任何問題，請於上班時間撥打客服專線(02)6601-2888#3811 #3944或至客服中心提問求證。</p>
      <div class="d-flex justify-content-center">
        <div class="circle"></div>
        <div class="circle mx-3"></div>
        <div class="circle"></div>
      </div>
      <p class="text-primary fs-2 text-center mt-4">保持冷靜 提高警覺 小心查證</p>
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

<style scoped>
.title{
  text-indent: 4%;
}
.circle{
  background: #F8412E;
  width: 12px;
  height: 12px;
  border-radius: 50%;
}
</style>
