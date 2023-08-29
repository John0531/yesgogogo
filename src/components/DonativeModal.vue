<template>

  <div class="modal fade" id="shareLink" ref="donativeModal">
            <div class="shareModal modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg">
              <div class="modal-content">
                <div class="modal-header">

                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <!-- pb-6 pt-4 pt-lg-5 px-4 px-md-5 px-lg-6 -->
                <div class="modal-body pb-6 pt-4 pt-lg-5 px-4 px-md-5 px-lg-6 ">
                   <h4 class="fw-medium text-secondary mb-4 text-center">愛心捐說明</h4>
                    <div class="position-relative text-start">
                        <div>
                            <span class="donationActDate">活動期間: 2023/9/1-2023/12/31</span>
                            <ol class="donationCont">
                                <li>於活動期間每筆訂單將獲得結帳總金額10%購物金的消費回饋。會員可選擇該筆訂單的消費回饋10%購物金，(1) 10%購物金全部保留在自己帳戶中，或(2)
                                    5%轉作「愛心捐」+ 保留5%購物金，或(3) 10%轉作「愛心捐」。
                                </li>
                                <li>「愛心捐」：消費者於訂單結帳當下可選擇將購物金轉作「愛心捐」捐予指定之非營利組織，或保留購物金在自己的帳戶中。如購物金轉作「愛心捐」，yesgogogo將捐出等值現金予非營利組織。<br>
                                    ．愛心捐計算舉例：A會員訂單金額$5,000，整筆訂單未包含指定愛心品，折價券折抵$200，實際支付結帳金額$4,800，獲得10%消費回饋($480購物金)。結帳時如選擇購物金10%轉作「愛心捐
                                    」，共捐出$480愛心捐+獲得$0購物金。
                                </li>
                                <li>凡購買指定愛心品，平台加碼捐愛心品結帳總金額10%給非營利組織。如購買愛心品，平台加碼捐10%且您選擇消費回饋10%購物金也全部轉作「愛心捐」，將捐出最高20%愛心捐。<br>
                                    ．愛心捐計算舉例：A會員訂單金額$5,000，整筆訂單皆為愛心品，購物金折抵$750，實際支付結帳金額$4,250，如獲得10%消費回饋($425購物金)。當結帳時選擇購物金的5%轉作「愛心捐」+保留5%購物金，將捐出5%「愛心捐」($212愛心捐)+保留($213購物金)+愛心品平台加碼捐10%「愛心捐」($425愛心捐)，共捐出$637愛心捐+獲得$213購物金。
                                </li>
                                <li>為配合非營利組織標準作業流程，本公司將每月愛心捐總額，以單筆匯款方式附上消費者愛心捐明細，代表全部參與愛心捐的每一位消費者捐贈非營利組織。</li>
                                <li>因應營所稅之規範，本公司需取得對應匯出愛心捐金額之收據，方能符合財務作業需求。同時，非營利組織之標準作業流程不可重複開立收據，因此無法提供消費者捐款證明，感謝您的體諒。
                                </li>
                                <li>「愛心捐」以實際支付結帳金額計算，實際支付結帳金額為該筆訂單結帳總金額扣除折價券、購物金、滿額折扣等優惠折抵後的「實付金額」。</li>
                                <li>須完成訂單始符合認列資格，若因訂單取消、退貨、非商品瑕疵之換貨，則該筆訂單不得要求列入計算。</li>
                                <li>活動事項載明於活動網頁中，參加本活動者，視為同意接受本活動注意事項之規範，參加人不符合或違反本活動規定事項者，本公司保有取消其參加資格之權利，並對於任何破壞本活動之行為保留相關權利。
                                </li>
                                <li>本公司保留隨時變更、修改、暫停或終止及解釋本活動相關事項及約定條款之權利，若有其他未盡事宜，悉依本公司相關規定或決定辦理。</li>
                                <li>本活動若有異動，修改後的活動內容及約定條款將公佈在yesgogogo購物網官方網站上，若您於任何修改或變更後繼續使用本服務時，視為您已閱讀、瞭解並同意接受該等修改或變更。
                                </li>
                                <li>更多「愛心捐」相關資訊請前往<a href="/questions">常見問題</a>。</li>
                            </ol>
                        </div>
                    </div>

                 <!-- <a href="/questions"> 常見問題 </a> -->

                <!-- position-relative -->
                  <!-- <div class="text-center">
                    <button type="button" @click.prevent="hideModal" class="btn btn-primary py-1 px-7 rounded-0 text-white">了解</button>
                  </div> -->

                </div>
              </div>
            </div>
          </div>

</template>

<script>

import Modal from 'bootstrap/js/dist/modal'

export default {

  data () {
    return {
      donativeModal: '' //! 愛心捐Modal
    }
  },
  methods: {

    openModal () {
      this.donativeModal.show()
    },
    hideModal () {
      this.donativeModal.hide()
    }
  },
  mounted () {
    this.donativeModal = new Modal(this.$refs.donativeModal) //! 愛心捐Modal
  }

}
</script>

<style scoped>

   /* 有調整的 css */
        .shareModal {
            max-width: 700px;
        }

        /* 愛心捐說明 */
        span.donationActDate {
            margin-left: 10px;
        }

        ol.donationCont {
            text-align: justify;
        }

        ol.donationCont li {
            padding-bottom: 10px;
        }

</style>
