<template>
  <div class="rights">
    <Header></Header>
    <div class="container mt-3 my-md-5">
      <div class="row justify-content-center">
        <div class="col-md-10">
          <h3 class="pt-lg-3 pb-2 pb-lg-4">會員權益聲明</h3>
          <p class="mb-5">親愛的會員您好，非常感謝您使用本平台的服務，本平台將根據以下之會員服務條款(以下簡稱本條款)，提供會員便利的交易。為了保障您的權益，請務必詳讀本條款，在您註冊成為本平台會員、或開始使用本服務時，即視為您已經閱讀、瞭解並同意接受本條款及「隱私權保護政策」之所有內容，並視為您已確認詳閱並同意個人資料保護告知暨同意事項。
          如您不同意本條款之全部或部分內容，請勿註冊，並請立即停止使用本服務。本條款之具體約定內容如後：
          </p>
          <h4 class="mb-2">一、會員資料</h4>
          <div class="d-flex mb-2"><p>1.<span class="ms-2">在您使用本服務之前，必須提供正確個人資料，並加入成為本平台會員，無須支付任何費用；在加入完成後，使用本服務及參加與本服務相關之活動。如個人資料有異動，請務必即時更新，以保障您的權益。如因會員未正確更新個人資料，致未能收到本公司寄發之會員權益、消費優惠、活動內容等相關資訊，或變更、終止會員權益、消費優惠、活動內容之通知，會員同意在此情形下，視為會員已經收到該等資訊或通知。</span></p></div>
          <div class="d-flex mb-5"><p>2.<span class="ms-2">隱私權保護聲明：會員之個人資料受到本平台隱私權條款之保護與規範。</span></p></div>
          <div class="mb-5">
            <h4 class="mb-2">二、服務內容的變更</h4>
            <p>會員同意本平台得隨時調整、變更、修改或終止本服務及本條款，於本平台公告後生效，不再另行個別通知。</p>
            <p>會員因參與本平台活動及使用本平台服務，而與本平台所發生之權利義務關係，均以本條款最新修訂之版本為準。</p>
          </div>
          <div class="mb-5">
            <h4 class="mb-2">三、平台個人資料保護告知及暨同意事項：</h4>
            <p>為提供會員最完善的服務，並保護會員個人資料，本平台謹此依個人資料保護法(下稱個資法)規定，告知您如下事項：</p>
            <div class="d-flex my-2">
              (一)<p class="ms-1">蒐集之目的、個人資料類別、利用期間、地區、對象及方式<br>為提供會員有關本平台各項消費優惠、商品、服務、活動及最新資訊，並有效管理會員資料、進行服務與調查、滿意度及消費統計分析調查(下稱蒐集目的)，本平台將於上開蒐集目的消失前，在完成上開蒐集目的之必要地區內，蒐集、處理、利用您填載於本平台會員申請之個人資料、消費與交易資料，或日後經您同意而提供之其他個人資料。在上開蒐集目的範圍內，本平台可能會將您全部或部分個人資料，提供予合作廠商。<br>例：當會員使用本服務進行線上消費，本公司需透過宅配貨運等合作廠商，方能完成貨品或相關贈品之配送，故當會員完成線上交易，即表示會員同意並授權本公司得將會員提供之個人資料(如收件人姓名、配送地址、電話…等)提供予宅配及貨運合作廠商，以利完成貨品或相關贈品之配送。</p>
            </div>
            <div class="d-flex">
              (二)<p class="ms-1">注意事項：<br>您同意以電子文件作為行使個資法書面同意之方式。如您不同意提供個人資料，或要求刪除或停止蒐集、處理您的個人資料，您瞭解本平台可能因此無法進行網路會員資格審核及相關處理作業，或提供您完善的網路服務，尚請見諒。</p>
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
  *{
    line-height: 2;
  }
  p{
    font-size: 1.25rem;
  }
</style>
