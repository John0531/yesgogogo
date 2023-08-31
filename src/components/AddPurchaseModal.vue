<template>

  <div class="modal fade" id="shareLink" ref="addPurchaseModal" data-bs-backdrop="static">
    <div class="shareModal modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body pb-6 pt-4 pt-lg-5 px-lg-6 ">
                <div class="container">
                    <div class="row justify-content-center">
                        <div v-for="item in imgAdd" :key="item" class="col-12 d-lg-block d-none">
                            <img :src="item" class="img-fluid" alt="愛心捐加價購圖片PC">
                        </div>
                        <div v-for="item in imgAddm" :key="item" class="col-12 d-lg-none d-block">
                            <img :src="item" class="img-fluid" alt="愛心捐加價購圖片MB">
                        </div>
                        <div class="d-flex justify-content-center my-4">
                            <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/advOnSaleinfo/swiss+diamond-PNG.png" class="w-50" alt="品牌圖片">
                        </div>
                        <div class="mb-3 "> <p class="first-line-indent">感謝您的訂購，恭喜您已獲得滿額加價購資格，可以市價<span class="text-primary fw-bold">2折優惠價</span>購買<span class="text-primary fw-bold">瑞士原裝頂級鑽石鍋</span>。如欲購買可至yesgogogo LINE官方帳號索取購買連結，或來電洽詢客服人員(02-6601-2888 #3924)</p>
                        </div>
                        <div class="d-flex justify-content-around col-12 col-lg-10">
                            <div class="col-lg-6 me-3">
                                <a href="https://www.yesgogogo.com/productboard/productList/S072697" class="btn text-white cardBtn d-block bg-primary" target="_blank">
                                    <span class="d-lg-inline-flex d-none">鑽石鍋商品介紹</span>
                                    <span class="d-lg-none">鑽石鍋介紹</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" ><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" fill="white"/></svg>
                                </a>
                            </div>
                            <div class="col-lg-6 ms-3">
                                <a href="https://page.line.me/yesgogogo?openQrModal=true" class="btn text-white cardBtn d-block bg-primary" target="_blank">
                                    <span>前往LINE官方</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" ><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" fill="white"/></svg>
                                </a>
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

import Modal from 'bootstrap/js/dist/modal'

export default {

  data () {
    return {
      addPurchaseModal: '' //* 加價購Modal
    }
  },
  props: {
    imgAdd: Array,
    imgAddm: Array
  },
  methods: {

    openModal () {
      this.addPurchaseModal.show()
    },
    hideModal () {
      this.addPurchaseModal.hide()
    }
  },
  mounted () {
    this.addPurchaseModal = new Modal(this.$refs.addPurchaseModal) //* 加價購Modal
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
