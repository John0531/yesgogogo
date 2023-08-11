<template>
  <!-- <div class="container" > -->
  <!-- 麵包屑 -->

  <div class="bread mt-2" style="align-items:center;">
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
          <router-link to="/">首頁</router-link>
        </li>
        <router-link v-if="this.$store.state.category" :to="{ path: `/productboard/productlist/${this.$store.state.categoryId}`}" class="breadcrumb-item"
          @click.prevent="clearBreadcrumbName"
        >
          {{ this.$store.state.category }}
        </router-link>
        <router-link v-if="this.$store.state.subCategory" :to="{ path: `/productboard/productlist/${this.$store.state.subCategoryId}`}" class="breadcrumb-item">
          {{ this.$store.state.subCategory }}
        </router-link>
      </ol>
    </nav>
  </div>

<!-- 先隱藏 -->
  <BannerInside class="mb-2 d-none">
  </BannerInside>

  <!-- 館架banner -->
  <div v-if="categoryBanner.image">
    <a :href="categoryBanner.targetUrl">
      <img :src="categoryBanner.image" class="img-fluid" alt="">
    </a>
  </div>
  <!-- <div v-else >   </div> -->

  <div class="mt-4" style="height:3em;">
    <!-- 篩選按鈕 -->
    <div class="d-flex flex-row-reverse bd-highlight selectGroup ">
      <div
        class="btn-group w-100 w-lg-auto"
        role="group"
      >
        <!-- <input
            type="radio"
            class="btn-check"
            name="btnradio"
            id="btnradio1"
            autocomplete="off"
            checked
          />
          <label
            class="btn btn-outline-secondary  text-scondary shadow-none fs-6 fs-md-5 px-2   "
            for="btnradio1"
            @click="select_recommend()"
            >館主推薦</label
          > -->
        <input
          type="radio"
          class="btn-check"
          name="btnradio"
          id="btnradio2"
          autocomplete="off"
          checked
        />
        <label
          class="btn btn-outline-secondary  text-scondary shadow-none fs-6 fs-md-5 px-2  "
          for="btnradio2"
          @click="select_recommend()"
          >新上市</label
        >

        <input
          type="radio"
          class="btn-check"
          name="btnradio"
          id="btnradio3"
          autocomplete="off"
        />
        <label
          class="btn btn-outline-secondary text-scondary shadow-none fs-6 fs-md-5 px-2  "
          for="btnradio3"
          @click="select_lowest()"
          >價格低至高</label
        >

        <input
          type="radio"
          class="btn-check"
          name="btnradio"
          id="btnradio4"
          autocomplete="off"
        />
        <label
          class="btn btn-outline-secondary text-scondary shadow-none fs-6 fs-md-5 px-2  "
          for="btnradio4"
          @click="select_highest()"
          >價格高至低</label
        >
      </div>
    </div>
  </div>
  <!-- 商品列 -->

  <div v-if="!isLoading">
    <LoadingProductList></LoadingProductList>
  </div>

  <div v-else class="product_main row mt-4">
    <!-- {{ cp_productsList_2 }} -->
    <div  class="col-12 " v-if="productsList_2.length === 0 " >
        <div class="d-flex justify-content-center align-items-center  fs-1 w-100" style="height:400px;backgroundColor:#dee2e6;border-radius:5px 5px 5px 5px;">目前該館別無任何商品</div>
    </div>

<!-- 購物車 modal 已移進卡片元件內 -->
 <!-- <ProductOptionModal ref="productOptionModal" :target-item-id="targetItemId"   @remove-id="delId"   > </ProductOptionModal> -->

 <!-- 登入 modal -->
 <LoginModal ref="loginModal" > </LoginModal>

    <div
      class="col-6   col-lg-3 "
      v-for="(item) in productsList_2"
      :key="item.productId"
      style="margin-top:15px;"
    >
<!-- 元件化的卡片 -->
<ProductCard  :card-data="item"  :login-status="loginStatus" :wish-list="wishlist" :data-number="dataNumber"   @show-login="showLoginModal" @rander-wishlist="getWishlist" > </ProductCard>

    <!-- 元件化前的卡片結構 start -->

        <!-- <div class="card p-0 card-hover " style="border:none;" @mouseenter="setHover(item.productId , true)" @mouseleave="setHover(item.productId , false)"  >
          <router-link :to="`/productboard/product/${item.productId}`" @click.prevent="push_product()"   class="text-secondary ">
          <div class="position-relative">
            <div class="imgContainer ratio ratio-1x1  " >
              <img
                :src="item.productImage"
                class="card-img-top border-0 "
                alt="product image"
              />
            </div>
             // 電腦版 追蹤、購買 icon
             <div class="btnGroupStyle btn-group  position-absolute start-0  bottom-0 w-100 bg-dark opacity-65 h-20  mbHidden  "  :class=" { 'd-flex' : isHover === item.productId  , 'd-none' : isHover !== item.productId } "  >

                <button class="wishlistBtn btn  " data-bs-placement="bottom" title="追蹤" @click.prevent="addWishlist(item.productId)" >
                   // 已收藏實心愛心
                   <svg v-if="wishlist.find(product=>  product.productId === item.productId  )" xmlns="http://www.w3.org/2000/svg" width="19.808" height="18.233" viewBox="0 0 19.808 18.233" data-v-35171425=""> <path id="yesgo_icon元件-29" d="M19.44,5.88a4.8,4.8,0,0,0-9.19-1.94A4.8,4.8,0,1,0,2.51,9.31l7.74,8.29L18,9.31A4.78,4.78,0,0,0,19.44,5.88Z" transform="translate(-0.307 -0.355)" fill="#ffffff" stroke="#ffffff" stroke-miterlimit="10" stroke-width="1.35" data-v-35171425=""></path></svg>

                  // 未收藏空心愛心
                    <svg v-else xmlns="http://www.w3.org/2000/svg" width="19.808" height="17.918" viewBox="0 0 19.808 17.918">
                    <path id="yesgo_icon元件-28" d="M19.44,6a4.8,4.8,0,0,0-9.19-1.9A4.8,4.8,0,1,0,2.51,9.47l7.74,8.29L18,9.47A4.8,4.8,0,0,0,19.44,6Z" transform="translate(-0.307 -0.517)" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                    </svg>
                </button>
              <button class="cartBtn btn " @click.prevent="addToCart(item.productId)" data-bs-placement="bottom" title="加入購物車" >
                  <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-cart2" viewBox="0 0 16 16">
                  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" stroke="#ffffff"  stroke-width="0.7" />
                  </svg>
              </button>

             </div>
  </div>
            <div class="card-body p-1">
              // 手機版 追蹤、購買 icon
              <div class="btnGroupStyle btn-group d-flex d-lg-none  w-100 bg-dark opacity-25 h-10 "    >

                <button class="wishlistBtn btn  " data-bs-placement="bottom" title="追蹤" @click.prevent="addWishlist(item.productId)" >
                   // 已收藏實心愛心
                   <svg v-if="wishlist.find(product=>  product.productId === item.productId  )" xmlns="http://www.w3.org/2000/svg" width="19.808" height="18.233" viewBox="0 0 19.808 18.233" data-v-35171425=""> <path id="yesgo_icon元件-29" d="M19.44,5.88a4.8,4.8,0,0,0-9.19-1.94A4.8,4.8,0,1,0,2.51,9.31l7.74,8.29L18,9.31A4.78,4.78,0,0,0,19.44,5.88Z" transform="translate(-0.307 -0.355)" fill="#ffffff" stroke="#ffffff" stroke-miterlimit="10" stroke-width="1.35" data-v-35171425=""></path></svg>

                  // 未收藏空心愛心
                    <svg v-else xmlns="http://www.w3.org/2000/svg" width="19.808" height="17.918" viewBox="0 0 19.808 17.918">
                    <path id="yesgo_icon元件-28" d="M19.44,6a4.8,4.8,0,0,0-9.19-1.9A4.8,4.8,0,1,0,2.51,9.47l7.74,8.29L18,9.47A4.8,4.8,0,0,0,19.44,6Z" transform="translate(-0.307 -0.517)" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                    </svg>
                </button>
              <button class="cartBtn btn " @click.prevent="addToCart(item.productId)" data-bs-placement="bottom" title="加入購物車" >
                  <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-cart2" viewBox="0 0 16 16">
                  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" stroke="#ffffff"  stroke-width="0.7" />
                  </svg>
              </button>

             </div>
              <p class="card-title card-title-height word-break fw-bolder fs-lg-6 fs-md-7 fs-7 p-1 text-break" >
                {{ item.name }}
              </p>
              <div
                style="display:flex;align-items:center;justify-content:start;"
              >
                <small
                  class="card-text fs-lg-6 fs-md-7 fs-7 text-nowrap"
                  style="text-decoration:line-through;width:3.5rem;"
                  >${{ item.oldPrice.toLocaleString() }}</small
                >
                <p class="text-primary mb-0 fs-lg-8 fs-md-6 fs-6">
                  ${{ item.price.toLocaleString() }}
                </p>
              </div>
            </div>
          </router-link>
        </div> -->

         <!-- 元件化前的卡片結構 end -->
    </div>
  </div>

  <!-- 資料讀取 loading動畫放在最下層 -->
  <loading :active="underproduct" class="bottom-fixed" id="overlay" backgroundColor= 'transparent' blur="">
    <div class="loadingio-spinner-ellipsis-4hx2p6xfr9s" style="">
      <div class="ldio-2rhuifu0dvy">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </loading>
  <!-- </div> -->
</template>

<script>
// import Banner from '../components/Banner.vue'
import { defineAsyncComponent } from 'vue'
import checkToken from '@/assets/js/checkToken.js'
import ProductCard from '../components/ProductCard.vue'
import LoginModal from '../components/LoginModal.vue'
const LoadingProductList = defineAsyncComponent(() => import(/* webpackChunkName: "loadingProductList" */'@/views/LoadingProductList.vue'))
const BannerInside = defineAsyncComponent(() => import(/* webpackChunkName: "bannerInside" */'@/components/BannerInside.vue'))
const AccessToken = checkToken.getAccessToken()
const RefreshToken = checkToken.getFreshToken()

export default {
  components: {
    // 轉場動畫
    LoadingProductList,
    // 首頁banner
    BannerInside,
    LoginModal,
    ProductCard
  },
  data () {
    return {
      preProductsList: { /* 第一次接商品資料物件 */
        info: {
          products: []
        }
      },
      productsList: { /* 已處理完二次資料，預設最新的為第一筆 */
        info: {
          products: []
        }
      },
      // ? 館架banner圖片
      categoryBanner: {},
      productsList_2: [], /* 已處理三次資料，每20筆顯示一次 */
      sortType: 'price', /* 分類標準 */
      dataNumber: 1, /* 每頁擷取資料基礎參數 */
      categoryId: '', /* 館別傳的參數 */
      isLoading: false, /* 資料Loading動畫偵測項目-灰白色塊 */
      underproduct: false, /*  產品列展開偵測項目 */
      title: '',
      viewData: '4', /* 計數器分子起始值 */
      loginStatus: false,
      wishlist: [] // ! 願望清單資料
    }
  },
  methods: {
    getWishlist () {
      const wishlistUrl = `${process.env.VUE_APP_API}/api/wishlist/list`
      this.axios.get(wishlistUrl)
        .then((res) => {
          this.wishlist = res.data.info
        })
    },
    checkCookie () {
      if (AccessToken || RefreshToken) {
        this.loginStatus = true
        this.getWishlist()
      } else {
        this.loginStatus = false
      }
    },
    showLoginModal () {
      this.$refs.loginModal.showModal()
    },
    select_highest () { // ?篩選從高到低
      this.dataNumber = 1
      this.productsList.info.products.sort((a, b) => {
        return b.price - a.price
      })
      this.get_data()
    },
    select_lowest () { // ?篩選從低至高
      this.dataNumber = 1
      this.productsList.info.products.sort((a, b) => {
        return a.price - b.price
      })
      this.get_data()
    },
    select_new () { // ?篩選最新上架
      this.dataNumber = 1
      this.productsList.info.products.sort((a, b) => {
        return b.date - a.date
      })
      this.get_data()
    },
    select_recommend () { // ?篩選後臺設定排序>簡稱推薦度
      this.dataNumber = 1
      this.productsList.info.products.sort((a, b) => {
        return a.intDisplayOrder - b.intDisplayOrder
      })
      this.productsList.info.products.sort((a, b) => {
        if (a.intDisplayOrder === b.intDisplayOrder) {
          return b.date - a.date
        }
      })
      this.get_data()
    },
    push_product () { // ?點擊跳轉商品明細
      this.recordHeight()
    },
    get_data () { // ? 一次擷取20筆商品列資料
      this.productsList_2 = this.productsList.info.products.slice(
        0,
        20 * this.dataNumber
      )
      this.view_item_listGA() // * 觸發GA追蹤碼
    },
    get_product_list () { // ?1.讀取後端資料庫資料2.資料排序以最新的為第一筆3.vuex記錄館別名稱4.先顯示20筆5.回溯瀏覽高度
      this.categorytId = this.$route.params.categoryId
      const url = `${process.env.VUE_APP_API}/Api/Product/ListedByCategory?member=${this.$route.params.categoryId}`
      this.$http.get(url).then(res => {
        if (res.data.rtnCode === 0 && res.data.info.products.length !== 0) {
          // 1.麵包屑記錄館別名稱
          this.title.textContent = `館別 - ${this.$store.state.category} - ${this.$store.state.subCategory}` // ?<title> 更新為商品名稱
          this.track()
          this.preProductsList = res.data

          // 2.資料排序以最新的為第一筆
          this.preProductsList.info.products.sort((a, b) => {
            return b.date - a.date
          })
          this.productsList = this.preProductsList
          this.select_recommend() // *預設為最推薦(已內含最新上市規則)
          this.categorytId = this.$route.params.categoryId
          // 3.回溯瀏覽高度
          if (this.$store.state.recordReadHeight) { // ? 若有點擊產品紀錄，則記錄高度供上一頁返回
            this.dataNumber = this.$store.state.recordDataHeight
            this.get_data()
            this.isLoading = true
            this.underproduct = false
            setTimeout(() => [// ?資料高度生成需要時間，利用setTimeOut讓視窗滑動不同步，才能順利執行
              window.scrollTo(0, this.$store.state.recordReadHeight)
            ], 500)
          } else {
            this.get_data()
          }
          // 動畫選擇
          if (this.dataNumber === 1) {
            this.isLoading = true
          } else {
            this.underproduct = false
          }
        } else if (res.data.rtnCode === 0 && res.data.info.products.length === 0) {
          this.isLoading = true
          this.underproduct = false
          this.$swal.fire({
            title: `${this.$store.state.subCategory}類目前沒有產品`,
            showConfirmButton: false,
            timer: 1500,
            customClass: {
              title: 'text-class'
            }
          })
        } else {
          this.$swal.fire({
            title: '發生錯誤',
            showConfirmButton: false,
            icon: 'warning',
            timer: 2500,
            customClass: {
              title: 'text-class'
            }
          })
        }
      })
    },
    // * 取得館別banner
    getCategoryBanner () {
      const url = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=banner_${this.$route.params.categoryId}`
      this.axios.get(url)
        .then((res) => {
          // console.log('category bannerInfo', res)
          if (!res.data.info) {
            this.getCommonsBanner()
            return
          }
          const index = res.data.info.findIndex((item) => {
            return item.code === `banner_${this.$route.params.categoryId}`
          })
          if (index === -1) {
            this.getCommonsBanner()
            return
          }
          this.categoryBanner = res.data.info[index]
        })
    },
    // * 取得館別共用banner(後台未設定)
    getCommonsBanner () {
      const url2 = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=banner_commons`
      this.axios.get(url2)
        .then((res) => {
          // console.log('common bannerInfo', res)

          if (res.data.rtnMsg === '查無活動圖片資料' || res.data.rtnCode === 3502) {
            // console.log('無banner')
            this.categoryBanner = ''
            return
          }
          this.categoryBanner = res.data.info[0]
        })
    },
    // * GA追蹤碼
    view_item_listGA () {
      const datatoGA = {
        items: []
      }
      datatoGA.item_list_id = this.$route.params.categoryId
      datatoGA.item_list_name = this.$store.state.subCategory
      datatoGA.items = JSON.parse(JSON.stringify(this.productsList_2))
      if (this.dataNumber > 1) {
        datatoGA.items.splice(0, 20 * (this.dataNumber - 1))
      }
      datatoGA.items.forEach((item) => {
        item.item_id = item.productId
        item.item_name = item.name
        item.id = item.productId
        item.item_list_id = item.subCatagory
        item.discount = item.oldPrice - item.price
        delete item.productId
        delete item.productImage
        delete item.date
        delete item.catagory
        delete item.subCatagory
        delete item.oldPrice
      })
      this.$gtag.event('view_item_list', datatoGA)
    },
    track () {
      // ?使用 set 將商品名稱傳入 GA 的 page_title
      this.$gtag.set({
        page_title: `館別 - ${this.$store.state.category} - ${this.$store.state.subCategory}`
      })
    },
    show_underproduct () { // ?滾動觸發資料loading及動畫
      const windowY = window.scrollY //* 卷軸高度
      const productHeight = window.innerHeight //* 網頁內部視窗高
      const documentHeight = document.body.clientHeight //* 資料高度
      // * 以下為瀏覽商品讀取icon
      this.viewData = Math.floor(((windowY + productHeight) / documentHeight) * this.dataNumber * 20) //* 分子運算
      const totalData = this.productsList.info.products.length //* 分母運算
      if (this.viewData >= totalData) {
        this.viewData = totalData
      }
      this.$store.commit('getReadData', this.viewData)
      this.$store.commit('getPageData', totalData)
      // * 以上為瀏覽商品讀取icon
      const dataShowStardand = windowY + productHeight - documentHeight
      // console.log(dataShowStardand)
      if (dataShowStardand >= -1.5 && dataShowStardand <= 1) { //* 觸底區間觸發
        if (this.productsList_2.length !== this.productsList.info.products.length) {
          this.underproduct = true
          setTimeout(() => {
            this.dataNumber++
            this.get_data()
            this.underproduct = false
          }, 500)
        }
      }
    },
    recordHeight () { // ?點擊產品觸發紀錄瀏覽高度
      const recordHeight = window.scrollY
      this.$store.commit('getRecordHeight', recordHeight)
      const dataHeight = this.dataNumber
      this.$store.commit('getDataHeight', dataHeight)
    },
    clearBreadcrumbName () {
      this.$store.commit('getSubCategoryId', '')
      this.$store.commit('getSubCategory', '')
    }
  },
  watch: {
    /* 監聽路由變化，重渲染館別頁面 */
    '$route' (to) {
      /* 當路由為 /productboard/productList/時，重新呼叫 API 取得館別資料 */

      if (to.fullPath.match('/productboard/productList/')) {
        this.isLoading = false
        this.categorytId = this.$route.params.categoryId

        // ?  Vuex 方法記錄館別名稱 */
        if (this.$route.params.categoryId.length === 5) {
          this.$store.commit('getCategoryId', this.$route.params.categoryId)
          this.$store.dispatch('getCategoryWord') // ?  Vuex 方法記錄館別名稱 */
        } else {
          this.$store.commit('getSubCategoryId', this.$route.params.categoryId)
          this.$store.dispatch('getSubCategoryWord') // ?  Vuex 方法記錄館別名稱 */
        }
        this.title.textContent = `館別 - ${this.$store.state.category} - ${this.$store.state.subCategory}` // ?<title> 更新為商品名稱
        this.track()
        this.getCategoryBanner()
        const url = `${process.env.VUE_APP_API}/Api/Product/ListedByCategory?member=${this.$route.params.categoryId}`
        this.preProductsList = []
        this.productsList = []
        this.productsList_2 = []
        this.dataNumber = 1
        this.axios.get(url).then(res => {
          if (res.data.rtnCode === 0 && res.data.info.products.length !== 0) {
            this.preProductsList = res.data //* 原始api */
            this.preProductsList.info.products.sort((a, b) => {
              return b.date - a.date
            })
            this.productsList = this.preProductsList
            // console.log(this.productsList)
            this.select_recommend() // *預設為最推薦(已內含最新上市規則)
            this.get_data()
            this.show_underproduct()
            // *動畫選擇
            if (this.dataNumber === 1) {
              this.isLoading = true
            } else {
              this.underproduct = false
            }
          } else if (res.data.rtnCode === 0 && res.data.info.products.length === 0) {
            this.isLoading = true
          } else {
            this.productsList_2 = []
            this.underproduct = false
            this.$swal.fire({
              title: '連接未成功',
              showConfirmButton: false,
              timer: 1500,
              customClass: {
                title: 'text-class'
              }
            })
          }
        })
        // *路由變換清空vuex
        this.$store.commit('getReadData', '')
        this.$store.commit('getPageData', '')
        /* 當路由為 回到首頁時，清空瀏覽紀錄 */
      } else if (to.fullPath.length === 1) {
        // *路由變換清空vuex
        this.$store.commit('getReadData', '')
        this.$store.commit('getPageData', '')
        this.$store.commit('getRecordHeight', '')
      }
    }
  },
  mounted () {
    // console.log(this.$route)
    // 1.scroll偵測
    window.addEventListener('scroll', this.show_underproduct)
    // 2.API串接
    this.title = document.querySelector('title') // ?取得 <title> DOM 元素
    if (this.$route.params.categoryId.length === 5) {
      this.$store.commit('getCategoryId', this.$route.params.categoryId)
      this.$store.dispatch('getCategoryWord') // ?  Vuex 方法記錄館別名稱 */
    } else {
      this.$store.commit('getSubCategoryId', this.$route.params.categoryId)
      this.$store.dispatch('getSubCategoryWord') // ?  Vuex 方法記錄館別名稱 */
    }
    this.get_product_list()
    this.getCategoryBanner()

    // ! 確認是否有token
    this.checkCookie()
  },
  unmounted () {
    window.removeEventListener('scroll', this.show_underproduct)
    this.$store.commit('getReadData', '') // *離開館別清空
    this.$store.commit('getPageData', '') // *離開館別清空
  }
  //
}
</script>

<style lang="scss" scoped>

.bread {
  display: flex;
  //width: 200px;
  flex-direction: flex-start;
}

.product_selected {
  max-height: max-content;
  position: relative;
  display: flex;
}

.best_3 {
  max-height: max-content;
  .card-body {
    max-height: max-content;
  }
}

#ProductList_title {
  background-color: #ffffff;
  position: absolute;
  top: -0.5%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  padding: 0 4px 0 4px;
}

.selected {
  &:hover {
    background-color: #6c757d;
    border-color: #6c757d;
    color: #ffffff;
  }
}
//改寫button hover樣式
label.btn {
  &:hover{
    background-color: #F8412E;
    border-color: #F8412E;
  }
}
//改寫button checked和visited樣式
.btn-check:checked + .btn-outline-secondary, .btn-check:active + .btn-outline-secondary, .btn-outline-secondary:active, .btn-outline-secondary.active, .btn-outline-secondary.dropdown-toggle.show{
  background-color: #F8412E;
  border-color: #F8412E;
}

.loadingio-spinner-ellipsis-4hx2p6xfr9s {
  width: 200px;
  height: 150px;
  display: inline-block;
  overflow: hidden;
  position: fixed;
  left:53.5%;
  top:70%;
  // background: #ffffff;
  // opacity: 0.6;
  @media (max-width: 768px){
       left:50%;
        top:68%;
    }
  @media (max-width: 576px){
       left:28%;
        top:40%;
    }
}

.ldio-2rhuifu0dvy div {
  @media (max-width: 576px){
      width: 25px;
      height: 25px;
    }
}

.selectGroup {
  @media (max-width: 576px){
      //  flex-direction:row !important;
      justify-content: center !important;
    }
}
.disabled-link {
  pointer-events: none;
}

// .wishlistBtn,.cartBtn{
//   &:hover{
//     background: rgba(104, 102, 102, 0.8);
//   }
// }

// .btnGroupStyle{
//   &:hover{
//   transition: all 1s ease ;}
// }

// @media (min-width: 1px) and (max-width: 991px) {
//   .mbHidden {
//     display: none !important;
//   }
// }

</style>
