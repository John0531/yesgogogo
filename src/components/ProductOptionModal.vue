<template>
  <div class="modal" tabindex="-1" ref="productOptionModal">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">請選擇商品規格</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body"  >
    <div class="ratio ratio-1X1" v-if="isLoading" >
       <div class="d-flex justify-content-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
    </div>
        <div v-if=" !productDetail.productOtherImg  || productDetail.productOtherImg.length <= 1 " class="ratio ratio-1x1">
          <!-- 單一圖 -->
              <img :src="productDetail.productImage" alt="商品圖片">
        </div>
          <!-- 多圖 -->
        <div v-else-if="productDetail.productOtherImg !== null || productDetail.productOtherImg.length > 1"     class=" productOtherImgSwiper">
            <swiper
              :navigation="{
                nextEl: '#js-next1',
                prevEl: '#js-prev1'
              }"
              :pagination="{
                el: '#pagination',
                type: 'fraction'
              }"
            >
              <swiper-slide v-for="item in productDetail.productOtherImg" :key="item">
                <div class="ratio ratio-1x1">
                  <img v-if="!item.imageUrl" :src="item.imgFilePath" alt="" class="w-100">
                  <!-- <iframe v-else class="video" :src="`${item.imageUrl}?autoplay=1`"></iframe> -->
                </div>
              </swiper-slide>
               <div id="js-prev1" class="swiper-button-prev" ></div>
            <div id="js-next1" class="swiper-button-next"></div>
            </swiper>
            <div id="pagination" class="swiper-pagination-fraction"></div>
        </div>

        <hr>
        <h6> {{ productDetail.name }} </h6>
        <p class="text-primary text-end"> NT$ <span class="fs-3">  {{ productDetail.price }} </span> </p>
       <label for="optionSelect" class="form-label mt-3 mb-1" >品項</label>
      <select  id="optionSelect" class="form-select" aria-label="Default select example" v-model="currentOption" @change="changeOption" >

            <option value=""  selected disabled hidden>請選擇品項</option>
           <option v-for=" item in productDetail.options
" :key="item.optionId" :value="item.optionName" >  {{ item.optionName }} </option>

      </select>
      <label for="optionNum" class="form-label mt-3 mb-1">數量</label>
      <span class="text-danger fw-bold" v-if="currentStockNum===0" > (此商品暫無庫存) </span>
      <div class="input-group mb-3 number" >
          <button type="button" class="btn border" @click.prevent="minusNum" :class="{ disabled : currentNum <= 1 }" > - </button>
          <input type="number" class="form-control bg-white" aria-label="Amount (to the nearest dollar)" id="num" min="1" readonly v-model.number="currentNum" >
          <button type="button" class="btn border" @click.prevent="addNum"  :class="{ disabled : currentStockNum === currentNum }"  > + </button></div>
      </div>
      <div class="modal-footer">

        <button @click.prevent="addOptionToCart" :class="{ disabled:  currentStockNum === 0  || currentOption=== '' }" type="button" class="btn btn-primary text-white">加入購物車</button>
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
      productOptionModal: '',
      productDetail: {},
      currentNum: 1,
      currentStockNum: 1,
      currentOption: '',
      currentOptionDetail: {},
      isLoading: false

    }
  },
  props: ['targetItemId'],
  watch: {
    targetItemId () {
      if (this.targetItemId) {
        this.getTargetItemDetail()
      }
    }

  },
  methods: {
    showModal () {
      this.productOptionModal.show()
    },
    hideModal () {
      this.productOptionModal.hide()
    },
    getTargetItemDetail () {
      this.isLoading = true
      this.axios.get(`${process.env.VUE_APP_API}/Api/Product/Details?id=${this.targetItemId}`)
        .then((res) => {
          this.productDetail = res.data.info
          this.isLoading = false
        })
    },
    changeOption () {
      this.currentOptionDetail = this.productDetail.options.find(item => item.optionName === this.currentOption)
      this.currentStockNum = this.currentOptionDetail.stock
      if (this.currentOptionDetail.stock === 0) {
        this.currentNum = this.currentOptionDetail.stock
      } else {
        this.currentNum = 1
      }
    },
    minusNum () {
      this.currentNum--
      if (this.currentNum < 1) {
        this.currentNum = 1
      }
    },
    addNum () {
      this.currentNum++
    },
    clearOptionData () {
      this.currentNum = 1
      this.currentStockNum = 1
      this.currentOption = ''
      this.currentOptionDetail = {}
      this.productDetail = {}
      this.$emit('removeId') //! 把外層的id清掉
    },
    addOptionToCart () {
      const data = {}
      data.productId = this.productDetail.productId
      data.optionId = this.currentOptionDetail.optionId
      data.quantity = this.currentNum
      data.ProductName = this.productDetail.name
      data.CostPrice = this.productDetail.oldPrice
      data.SellPrice = this.productDetail.price

      const url = `${process.env.VUE_APP_API}/api/newCart/add`
      this.axios.post(url, data)
        .then((res) => {
          if (res.data.rtnCode === 0) {
            this.$swal.fire({
              toast: true,
              position: 'center',
              icon: 'success',
              title: '商品已成功加入購物車',
              showConfirmButton: false,
              timer: 1500,
              width: 500,
              background: '#F0F0F2',
              padding: 25
            })
            this.currentNum = 1
            this.currentOption = ''

            const cartItemTotal = res.data.info.items.reduce((acc, cur) => { return acc + cur.quantity }, 0)

            this.$store.commit('getcartIconNum', cartItemTotal)
            this.hideModal()

            // ! 下面為product.vue 購物車fn 的程式碼(需修改) 可參考 ( 好像不用這段了 )
            // this.$store.commit('getcartIconNum', this.allProductNum)
            // * 記住商品類別
            //     sessionStorage.setItem('cartType', this.data.shippingInfo.shippingTypeName)
            //     if (this.data.areas !== null) {
            //       sessionStorage.setItem('cartType', '超值滿額配')
            //     }
          }
        }

        )
    }

  },
  mounted () {
    this.productOptionModal = new Modal(this.$refs.productOptionModal, { backdrop: 'static' })

    // ! modal 關閉時清空選項的值
    this.$refs.productOptionModal.addEventListener('hidden.bs.modal', this.clearOptionData)
  }
}
</script>

<style lang="scss" scoped>

/* productOtherImgSwiper style */

.productOtherImgSwiper{
  position: relative;
}

::v-deep(.productOtherImgSwiper .swiper-button-next){
  right: 10;

}

::v-deep(.productOtherImgSwiper .swiper-button-prev){
  left: 10;

}

::v-deep(.productOtherImgSwiper .swiper-pagination-fraction){
  position: absolute;
  z-index: 10;
  width: fit-content;
  right: 10px;
  left: auto;
  bottom: 5px;
  color: #fff;
  background-color: rgba(0,0,0,0.3);
  border-radius: 30%;
  padding: 5px;
  font-size: 14px;
}

 .swiper-button-next,.swiper-button-prev {
width: 10px;
height: 10px;
}

::v-deep(.productOtherImgSwiper .swiper-button-next:after),::v-deep(.productOtherImgSwiper .swiper-button-prev:after){
  border-radius: 50%;
  font-size: 1rem;
  padding: 10px  ;
  color: #fff;
  background-color: rgba(0,0,0,0.3);
}

</style>
