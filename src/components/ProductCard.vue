<template>

      <div class="card p-0 card-hover " style="border:none;" @mouseenter="setHover(cardData.productId , true)" @mouseleave="setHover(cardData.productId  , false)" >

<!-- @click.prevent="this.$store.commit('getSubCategoryId', search.subCatagory); this.$store.dispatch('getSubCategoryWord');  -->
<!-- , sendSubcategory(cardData.subCatagory) -->
      <router-link :to="`/productboard/product/${cardData.productId}`" @click.prevent="recordHeight() , sendSubcategory(cardData.subCatagory) "   class="text-secondary ">
          <div class="position-relative">
            <div class="imgContainer ratio ratio-1x1" >
              <img
                :src="cardData.productImage"
                class="card-img-top border-0 "
                alt="product image"
              />
            </div>
              <!-- 電腦版 追蹤、購買 icon -->
               <!-- bg-dark opacity-65  -->
             <div class="btnGroupStyle btn-group  position-absolute start-0  bottom-0 w-100 h-20  mbHidden justify-content-center "  style="background-color:rgba(78,77,77,0.6)"   :class=" { 'd-flex' : isHover === cardData.productId  , 'd-none' : isHover !== cardData.productId } "  >

                <button  class="wishlistBtn btn" data-bs-placement="bottom" title="追蹤" @click.prevent="changeWishlist(cardData.productId )" >
                   <!-- 已收藏實心愛心 -->
                   <svg v-if="wishList.find(product=> product.productId === cardData.productId  )" xmlns="http://www.w3.org/2000/svg" width="19.808" height="18.233" viewBox="0 0 19.808 18.233" data-v-35171425=""> <path id="yesgo_icon元件-29" d="M19.44,5.88a4.8,4.8,0,0,0-9.19-1.94A4.8,4.8,0,1,0,2.51,9.31l7.74,8.29L18,9.31A4.78,4.78,0,0,0,19.44,5.88Z" transform="translate(-0.307 -0.355)" fill="#ffffff" stroke="#ffffff" stroke-miterlimit="10" stroke-width="1.35" data-v-35171425=""></path></svg>

                  <!-- 未收藏空心愛心 -->

                    <svg v-else xmlns="http://www.w3.org/2000/svg" width="19.808" height="17.918" viewBox="0 0 19.808 17.918">
                    <path id="yesgo_icon元件-28" d="M19.44,6a4.8,4.8,0,0,0-9.19-1.9A4.8,4.8,0,1,0,2.51,9.47l7.74,8.29L18,9.47A4.8,4.8,0,0,0,19.44,6Z" transform="translate(-0.307 -0.517)" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                    </svg>

                </button>
              <button class="cartBtn btn " @click.prevent="addToCart(cardData.productId  )" data-bs-placement="bottom" title="加入購物車" >

                  <!-- <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-cart2" viewBox="0 0 16 16">
                  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" stroke="#ffffff"  stroke-width="0.7" />
                  </svg> -->

                  <svg version="1.1" id="圖層_1" xmlns="http://www.w3.org/2000/svg" width="23" height="23" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 23 23" style="enable-background:new 0 0 23 23;" xml:space="preserve">

                    <path class="st0" d="M0.7,2.6c0-0.4,0.3-0.7,0.7-0.7h2.2c0.3,0,0.6,0.2,0.7,0.5l0.6,2.3h16.7c0.4,0,0.7,0.3,0.7,0.7
                    c0,0.1,0,0.1,0,0.2l-2.2,8.6c-0.1,0.3-0.4,0.5-0.7,0.5h-13c-0.3,0-0.6-0.2-0.7-0.5L3,3.3H1.4C1,3.3,0.7,3,0.7,2.6z M5.2,6.2L7,13.4
                    h11.8l1.8-7.2H5.2z M7.9,17.7c-0.8,0-1.4,0.6-1.4,1.4s0.6,1.4,1.4,1.4s1.4-0.6,1.4-1.4C9.3,18.3,8.7,17.7,7.9,17.7z M5,19.1
                    c0-1.6,1.3-2.9,2.9-2.9s2.9,1.3,2.9,2.9S9.5,22,7.9,22S5,20.7,5,19.1z M18,17.7c-0.8,0-1.4,0.6-1.4,1.4s0.6,1.4,1.4,1.4
                    s1.4-0.6,1.4-1.4C19.4,18.3,18.7,17.7,18,17.7z M15.1,19.1c0-1.6,1.3-2.9,2.9-2.9s2.9,1.3,2.9,2.9S19.5,22,18,22
                    C16.4,22,15.1,20.7,15.1,19.1z" fill="#FFFFFF" stroke="#FFFFFF"  stroke-width="0.5" stroke-miterlimit="5.75"  />
                  </svg>

              </button>

             </div>
          </div>
            <div class="card-body p-1">

              <p class="card-title card-title-height word-break fw-bolder fs-lg-6 fs-md-7 fs-7 p-1 text-break" >
                {{ cardData.name  }}
              </p>
              <div
                style="display:flex;align-items:center;justify-content:start;"
              >
                <small
                  class="card-text me-1 me-lg-2 fs-lg-6 fs-md-7 fs-7 text-nowrap"
                  style="text-decoration:line-through;width:3.5rem;"
                  >${{  cardData.oldPrice.toLocaleString() }}</small
                >
                <p class=" text-primary mb-0 fs-lg-8 fs-md-6 fs-6">
                  ${{ cardData.price.toLocaleString() }}
                </p>
                <br>

              </div>

              <div class="d-flex justify-content-between align-items-center">
                <div>
                    <p v-if="cardData.isCouponAvailable" class=" d-inline-block bg-primary text-white fs-7 rounded rounded-3 py-lg-1 px-2 h-50 padding-xs me-1 padding-xxs" > 折價券 </p>

                    <!-- 判斷是否為愛心品  -->
                    <p v-if="cardData.isDonativeProduct" class=" d-inline-block bg-primary text-white fs-7 rounded rounded-3 py-lg-1 px-2 h-50 padding-xs padding-xxs" > 愛心品 </p>
                 </div>

                 <!-- 手機版 追蹤、購買 icon -->
                  <div class="btnGroupStyle btn-group d-flex justify-content-end d-lg-none">

                  <button v-if="wishList" class="btn p-0 pe-1" data-bs-placement="bottom" title="追蹤" @click.prevent="changeWishlist(cardData.productId )" >
                   <!-- 已收藏實心愛心 -->
                      <svg v-if="wishList.find(product=> product.productId === cardData.productId )" xmlns="http://www.w3.org/2000/svg" width="19.808" height="18.233" viewBox="0 0 19.808 18.233" data-v-35171425=""> <path id="yesgo_icon元件-29" d="M19.44,5.88a4.8,4.8,0,0,0-9.19-1.94A4.8,4.8,0,1,0,2.51,9.31l7.74,8.29L18,9.31A4.78,4.78,0,0,0,19.44,5.88Z" transform="translate(-0.307 -0.355)" fill="#F8412E" stroke="#F8412E" stroke-miterlimit="10" stroke-width="1.35" data-v-35171425=""></path></svg>

                  <!-- 未收藏空心愛心 -->
                      <svg v-else xmlns="http://www.w3.org/2000/svg" width="19.808" height="17.918" viewBox="0 0 19.808 17.918">
                        <path id="yesgo_icon元件-28" d="M19.44,6a4.8,4.8,0,0,0-9.19-1.9A4.8,4.8,0,1,0,2.51,9.47l7.74,8.29L18,9.47A4.8,4.8,0,0,0,19.44,6Z" transform="translate(-0.307 -0.517)" fill="none" stroke="#6B6B6B" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke-miterlimit="5.75" />
                      </svg>
                  </button>
              <button class=" btn p-0 " @click.prevent="addToCart(cardData.productId  )" data-bs-placement="bottom" title="加入購物車" >

                  <!-- <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 36.245 30.93">
                      <g id="yesgo_icon元件-03" transform="translate(-0.44 -0.44)">
                      <path id="Path_136" data-name="Path 136" d="M34.85,9.71H9.13L12.42,21H31.93L35.22,9.71Z" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                      <path id="Path_137" data-name="Path 137" d="M.94.94H6.49L12.42,21" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                       <path id="Path_138" data-name="Path 138" d="M17,27.5a3.36,3.36,0,1,1-.981-2.382A3.37,3.37,0,0,1,17,27.5Z" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                        <path id="Path_139" data-name="Path 139" d="M34,27.5a3.37,3.37,0,1,1-3.37-3.37A3.37,3.37,0,0,1,34,27.5Z" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                        <line id="Line_28" data-name="Line 28" y1="2.52" x2="0.78" transform="translate(35.28 7.03)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                    </g>
                  </svg> -->

                  <svg version="1.1" id="圖層_1" xmlns="http://www.w3.org/2000/svg" width="23" height="23" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
 viewBox="0 0 23 23" style="enable-background:new 0 0 23 23;" xml:space="preserve">

                      <path class="st0" d="M0.7,2.6c0-0.4,0.3-0.7,0.7-0.7h2.2c0.3,0,0.6,0.2,0.7,0.5l0.6,2.3h16.7c0.4,0,0.7,0.3,0.7,0.7
c0,0.1,0,0.1,0,0.2l-2.2,8.6c-0.1,0.3-0.4,0.5-0.7,0.5H6.4c-0.3,0-0.6-0.2-0.7-0.5L3,3.3H1.4C1,3.3,0.7,3,0.7,2.6z M5.2,6.2L7,13.4
h11.8l1.8-7.2H5.2z M7.9,17.7c-0.8,0-1.4,0.6-1.4,1.4c0,0.8,0.6,1.4,1.4,1.4s1.4-0.6,1.4-1.4C9.3,18.3,8.7,17.7,7.9,17.7z M5,19.1
c0-1.6,1.3-2.9,2.9-2.9s2.9,1.3,2.9,2.9S9.5,22,7.9,22S5,20.7,5,19.1z M18,17.7c-0.8,0-1.4,0.6-1.4,1.4c0,0.8,0.6,1.4,1.4,1.4
c0.8,0,1.4-0.6,1.4-1.4C19.4,18.3,18.7,17.7,18,17.7z M15.1,19.1c0-1.6,1.3-2.9,2.9-2.9c1.6,0,2.9,1.3,2.9,2.9S19.5,22,18,22
C16.4,22,15.1,20.7,15.1,19.1z" fill="#6B6B6B" stroke="#6B6B6B" stroke-width="0.5" stroke-miterlimit="5.75" />
                  </svg>

              </button>

             </div>
        </div>

            </div>
          </router-link>
      </div>

      <!-- 購物車 modal -->
      <ProductOptionModal ref="productOptionModal" :target-item-id="targetItemId"   @remove-id="delId"   > </ProductOptionModal>

</template>

<script>

import ProductOptionModal from './ProductOptionModal.vue'

export default ({
  data () {
    return {
      isHover: '', // ! hover的商品id
      targetItemId: '', // ! 當前點擊之購物車icon商品id
      finalSubId: ''
    }
  },
  components: {
    ProductOptionModal
  },
  emits:
  ['showLogin', 'randerWishlist'],
  props: {
    cardData: { // !從 productList頁 或 productSearch頁 接收來的單一商品資料
      type: Object,
      default: null
    },
    loginStatus: {
      type: Boolean,
      default: null
    },
    wishList: {
      type: Array,
      default: null
    },
    dataNumber: {
      type: Number,
      default: 1
    }

  },
  watch: {
    loginStatus () {
      if (this.loginStatus) {
        this.getWishlist()
      }
    }

  },
  computed: {
    noCoupon () {
      return this.noCouponIdArr.includes(this.cardData.productId)
    }
  },
  methods: {
    recordHeight () { // ?點擊產品觸發紀錄瀏覽高度
      const recordHeight = window.scrollY
      this.$store.commit('getRecordHeight', recordHeight)
      const dataHeight = this.dataNumber
      this.$store.commit('getDataHeight', dataHeight)
    },
    delId () {
      this.targetItemId = ''
    },
    // ! hover後顯示願望&購物車icon
    setHover (targetId, status) {
      if (status === true) {
        this.isHover = targetId
      } else {
        this.isHover = ''
      }
    },
    changeWishlist (targetId) {
      // !先判斷是否有登入 AccessToken || RefreshToken
      if (this.loginStatus) {
        //! 判斷該品項是否已在收藏清單內
        const status = this.wishList.some(product => product.productId === targetId)

        if (!status) {
          //! 取得該商品的資料
          const productDetailUrl = `${process.env.VUE_APP_API}/Api/Product/Details?id=${targetId}`
          this.axios.get(productDetailUrl).then(res => {
            const data = {}
            data.optionId = res.data.info.options[0].optionId
            data.stock = res.data.info.options[0].stock
            data.productId = res.data.info.productId
            data.sellPrice = res.data.info.price

            const url = `${process.env.VUE_APP_API}/api/wishlist/add`
            this.axios.post(url, data).then((res) => {
              this.$swal.fire({
                toast: true,
                position: 'center',
                title: '商品已加入追蹤清單',
                showConfirmButton: false,
                timer: 1500,
                width: 500,
                background: '#F0F0F2',
                padding: 25,
                iconHtml: '<i class="bi bi-suit-heart-fill"></i>',
                iconColor: '#f00'
              })
              document.querySelector('.swal2-icon').setAttribute('style', 'display: flex; color: rgb(255, 0, 0); border: none; font-size:18px')
              this.getWishlist()
              this.$emit('randerWishlist')
            })
          })
        } else {
          //! 若已在收藏清單內，跳出alert

          const url = `${process.env.VUE_APP_API}/api/wishlist/remove`
          this.axios.post(url, { productId: targetId }).then((res) => {
            this.$swal.fire({
              toast: true,
              position: 'center',
              title: '取消追蹤成功',
              showConfirmButton: false,
              timer: 1500,
              width: 500,
              background: '#F0F0F2',
              padding: 25,
              iconHtml: '<i class="bi bi-suit-heart"  ></i>',
              iconColor: '#6B6B6B'
            })
            document.querySelector('.swal2-icon').setAttribute('style', 'display: flex; color: #6B6B6B; border: none; font-size:18px')
            this.getWishlist()
            this.$emit('randerWishlist')
          })

          // document.querySelector('.swal2-icon').setAttribute('style', 'display: flex; color: rgb(255, 0, 0); border: none; font-size:18px')
        }
      } else {
        this.$swal.fire({
          title: '請先登入',
          allowOutsideClick: true,
          confirmButtonColor: '#F8412E',
          confirmButtonText: '確認',
          width: 400,
          customClass: {
            title: 'text-class',
            confirmButton: 'confirm-btn-class'
          }
        }).then((result) => {
          if (result.isConfirmed) {
            this.$emit('showLogin')
          }
        })
      }
    },
    // ! 登入modal要放在父層 不然會跳出多個
    // checkCookie () {
    //   if (AccessToken || RefreshToken) {
    //     this.getWishlist()
    //   }
    // },
    getWishlist () {
      const wishlistUrl = `${process.env.VUE_APP_API}/api/wishlist/list`
      this.axios.get(wishlistUrl)
        .then((res) => {
          this.wishlist = res.data.info
        })
    },

    addToCart (targetId) {
      if (this.loginStatus) {
        this.targetItemId = targetId
        if (this.targetItemId === '') {
          return
        }
        this.$refs.productOptionModal.showModal()
      } else {
        this.$swal.fire({
          title: '請先登入',
          allowOutsideClick: true,
          confirmButtonColor: '#F8412E',
          confirmButtonText: '確認',
          width: 400,
          customClass: {
            title: 'text-class',
            confirmButton: 'confirm-btn-class'
          }
        }).then((result) => {
          if (result.isConfirmed) {
            this.$emit('showLogin')
          }
        })
      }
    },

    sendSubcategory (subCatagoryId) {
      this.finalSubId = subCatagoryId
      if (this.finalSubId.length >= 9) {
        this.finalSubId = subCatagoryId.substring(0, 7)
      }

      this.$store.commit('getSubCategoryId', this.finalSubId)
    }

  },
  mounted () {
  }

})
</script>

<style lang="scss" scoped>

.wishlistBtn,.cartBtn{
  &:hover{
   background:rgba(58, 57, 57, 0.6);
  }
}

.btnGroupStyle{
  &:hover{
  transition: all 1s ease ;}
}

@media (min-width: 1px) and (max-width: 991px) {
  .mbHidden {
    display: none !important;
  }
}

.padding-xs{
padding-top:.1rem;
padding-bottom:.1rem;
}

@media (min-width: 1px) and (max-width: 395px) {
      .padding-xxs{
        padding: 1.5px 3px 1.5px 3px !important;
        border-radius: 0.25rem !important;
      }
}

</style>
