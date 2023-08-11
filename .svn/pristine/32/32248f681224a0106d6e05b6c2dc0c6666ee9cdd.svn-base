<template>
  <!-- 麵包屑 -->
  <!-- <div class="bread" style="align-items:center;">
    <nav aria-label="breadcrumb" class="align-self-center">
      <ol class="breadcrumb">
        <li>
          <span class="loacation m-2"
            ><svg xmlns="http://www.w3.org/2000/svg" width="15.646" height="20.887" viewBox="0 0 15.646 20.887">
        <g id="yesgo_icon元件-05" transform="translate(-0.503 -0.5)">
          <path id="Path_105" data-name="Path 105" d="M8.33,4.77h0a3.19,3.19,0,0,0-2.4,1.1,3.14,3.14,0,0,0,0,4.21,3.19,3.19,0,0,0,2.4,1.1h0a3.21,3.21,0,0,0,0-6.41ZM9.52,9.52A1.95,1.95,0,1,1,7.14,6.43a1.9,1.9,0,0,1,2.38,0,1.94,1.94,0,0,1,0,3.09Z" fill="#f8412e"/>
          <path id="Path_106" data-name="Path 106" d="M8.33.5A7.83,7.83,0,0,0,1.75,12.57a.37.37,0,0,0,.06.1l5.93,8.41a.72.72,0,0,0,1.18,0l5.93-8.41.06-.1A7.84,7.84,0,0,0,8.33.5Zm5.16,11.86-5.16,7.3-5.17-7.3a6.57,6.57,0,1,1,10.33,0Z" fill="#f8412e"/>
        </g>
      </svg></span>
        </li>
        <li class="breadcrumb-item">
          <a class="text-secondary">首頁</a>
        </li>
        <li class="breadcrumb-item">
          <a class="text-secondary">會員中心</a>
        </li>
        <li class="breadcrumb-item">
          <a class="text-secondary">會員基本資料</a>
        </li>
        <li class="breadcrumb-item active text-primary" aria-current="page">我的收藏</li>
      </ol>
    </nav>
  </div> -->
  <div class="col border-bottom border-2 mt-2 fw-bolder fs-5 pb-3 border-secondary">
    追蹤清單
  </div>
  <div class="p-6 bg-white" v-if="isNullCollection" style="height:280px">
    <h3 class="text-center">目前無收藏</h3>
  </div>
  <div v-if="!isNullCollection">
    <div
      class="row orderList mt-1 mb-2 border-bottom border-2"
      v-for="(item, index) in collectList"
      :key="index"
    >
      <div class="col-4 col-lg-2 p-2 mt-lg-2 mt-0 mb-lg-2 mb-0">
        <div
          class="img-fluid img-thumbnail ratio ratio-1x1 position-relative"
          style="border:none;"
        >
          <router-link :to="`/productboard/product/${item.productId}`">
            <img
              :src="item.imageUrl"
              alt=""
              class="position-absolute translate-middle"
              style="height:100%;width:100%;top:50%;left: 50%;"
            />
          </router-link>
        </div>
      </div>
      <div
        class="col-8 col-lg-6 p-4 p-2 mt-lg-2 mt-0 mb-lg-2 mb-0 d-flex flex-column"
      >
        <router-link :to="`/productboard/product/${item.productId}`" class="text-secondary fw-bolder fs-md-6 product-name" style="width:fit-content;">
          {{ item.productName }}-{{item.optionName}}
        </router-link>
        <p class="text-secondary fw-bolder fs-md-6">
          商品編號:{{ item.productId }}
        </p>
      </div>
      <div
        class="col-12 col-lg-4 p-2 mt-lg-2 mt-0 mb-lg-2 mb-0 d-flex flex-column justify-content-end align-items-end"
      >
        <div class="p-lg-3 px-3 py-1">
          <span class="text-secondary fw-bolder fs-md-6 fs-7">訂購金額</span
          ><span class="text-primary mb-0 fw-bolder fs-md-5 fs-6 w-25 p-1"
            >${{ item.price }}</span
          ><span>元</span>
        </div>
        <div class="p-1 w-100 d-flex justify-content-end">
          <button
            type="button"
            class="btn btn-outline-primary text-primary shadow-none me-2 w-30 w-lg-auto w-xl-50 w-xxl-40"
            @click="remove(item.productId)"
          >
            移除
          </button>
          <button
            type="button"
            class="btn btn-primary text-white shadow-none me-2 w-30 w-lg-auto w-xl-50 w-xxl-40"
            @click="purchase(item)"
            v-if="item.canAddToCart"
          >
            購買
          </button>
          <button
            type="button"
            class="btn btn-secondary text-white shadow-none me-2 w-30 w-lg-auto w-xl-50 w-xxl-40"
            v-else
            disabled
          >
            售完補貨中
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      collectList: [],
      productId: '',
      isNullCollection: false
    }
  },
  methods: {
    getCollection () {
      const url = `${process.env.VUE_APP_API}/api/wishlist/list`
      this.axios.get(url).then(res => {
        if (res.data.info.length === 0) {
          // 目前無收藏
          this.collectList = []
          this.isNullCollection = true
        } else {
          this.collectList = res.data.info.reverse()
        }
      })
    },
    remove (index) {
      // 直接console 回傳的index而不是用 陣列.index
      this.$swal.fire({
        title: '您是否確定要移除?',
        showCancelButton: true,
        reverseButtons: true,
        confirmButtonColor: '#F8412E',
        cancelButtonColor: '#4D4D4D',
        confirmButtonText: '是',
        cancelButtonText: '否',
        width: 400,
        customClass: {
          title: 'text-class',
          confirmButton: 'confirm-btn-class',
          cancelButton: 'confirm-btn-class'
        }
      }).then((result) => {
        if (result.isConfirmed) {
          const url = `${process.env.VUE_APP_API}/api/wishlist/remove`
          this.axios.post(url, { productId: index }).then(res => {
            this.getCollection()
          })
        }
      })
    },
    purchase (item) {
      const productData = {
        productId: item.productId,
        optionId: item.optionId,
        quantity: 1,
        ProductName: item.productName,
        CostPrice: item.oldPrice,
        SellPrice: item.price
      }
      const url = `${process.env.VUE_APP_API}/api/newCart/add`
      this.axios.post(url, productData)
        .then((res) => {
          this.$router.push('/checkoutboard/checkoutcartlist')
        })
    }
  },
  mounted () {
    // 生命週期也是函式
    this.getCollection()
  }
}
</script>

<style lang="scss" scoped>
.orderList {
  border-color: #6c757d;
}
//改寫button hover樣式
.btn {
  &:hover {
    color: #fff !important;
  }
}
.product-name{
  &:hover{
    color: #F8412E !important;
  }
}
</style>
