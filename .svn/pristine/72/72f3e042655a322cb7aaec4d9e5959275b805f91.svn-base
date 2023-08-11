<template>

  <div class="modal fade" id="shareLink" ref="donativeModal">
            <div class="shareModal modal-dialog modal-dialog-centered modal-lg">
              <div class="modal-content">
                <div class="modal-header">

                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <!-- pb-6 pt-4 pt-lg-5 px-4 px-md-5 px-lg-6 -->
                <div class="modal-body pb-6 pt-4 pt-lg-5 px-4 px-md-5 px-lg-6 ">
                   <h4 class="fw-medium text-secondary mb-4 text-center">愛心捐說明</h4>
                 <div class="mb-3" > 1. 於活動期間每筆訂單將獲得結帳總金額10%購物金的消費回饋。會員可選擇該筆訂單的消費回饋10%購物金，(1)全部保留10%購物金在自己帳戶中，或(2) 5%轉作「愛心捐 」+保留5%購物金，或(3) 10%轉作「愛心捐 」。</div>
                 <div class="mb-3"> 2.「愛心捐 」：消費者於訂單結帳當下可選擇將購物金轉作「愛心捐」捐予指定的非營利組織，或保留購物金在自己的帳戶中。如購物金轉作「愛心捐」，yesgogogo將以消費者名義捐出現金予非營利組織。
                     <div class="ms-3 mt-1"> ．愛心捐計算舉例：˙A會員訂單金額$5,000，整筆訂單未包含指定愛心品，折價券折抵$200，實際支付結帳金額$4,800，獲得10%消費回饋($480購物金)。結帳時如選擇購物金10%轉作「愛心捐 」，共捐出$480愛心捐+獲得$0購物金。</div>
                 </div >
                 <div class="mb-3">3. 凡購買指定愛心品，平台加碼捐愛心品結帳總金額10%給非營利組織。如購買愛心品，平台加碼捐10%且您選擇消費回饋10%購物金也全部轉作「愛心捐 」，將捐出最高20%愛心捐。
                      <div class="ms-3 mt-1"> ．愛心捐計算舉例：˙A會員訂單金額$5,000，整筆訂單皆為愛心品，購物金折抵$750，實際支付結帳金額$4,250，如獲得10%消費回饋($425購物金)。當結帳時選擇購物金轉作5%「愛心捐 」+5%購物金，將捐出5%「愛心捐 」($212愛心捐)+保留($213購物金)+愛心品平台加碼捐10%「愛心捐 」($425愛心捐)，共捐出$637愛心捐+獲得$213購物金。</div>
                </div>

                 <div class="mb-3">4. 「愛心捐 」以實際支付結帳金額計算，實際支付結帳金額為該筆訂單結帳總金額扣除折價券、購物金、滿額折扣等優惠折抵後的「實付金額」。</div>

                 <div class="mb-3">5. 須完成訂單始符合認列資格，若因訂單取消、退貨、非商品瑕疵之換貨，則該筆訂單不得要求列入計算。</div>

                 <div class="mb-3">6. 更多「愛心捐 」相關資訊請前往 <a href="/questions"> 常見問題 </a>。</div>

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
