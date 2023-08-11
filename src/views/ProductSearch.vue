<template>
  <div class="userboard my-2">
    <nav aria-label="breadcrumb" class="d-flex">
      <ol class="breadcrumb ms-3 mb-md-2 ms-md-0">
        <li>
          <img class="location me-2" src="../assets/img/yesgo_icon05.svg" />
        </li>
        <li class="breadcrumb-item">
          <router-link to="/">首頁</router-link>
        </li>
        <li class="breadcrumb-item">
          搜尋結果
        </li>
        <li class="breadcrumb-item">
          {{ this.$route.params.keyword }}
        </li>
      </ol>
    </nav>
    <table class="table table-light border"  :class=" { 'd-none' : notFoundKeyword === true }  " >
      <tbody>
        <tr>
          <td scope="row" width="15%" class="text-primary align-middle text-center py-2 py-lg-3 px-0">
            <span class="d-block border-end border-primary fw-bold lh-1">館別</span>
          </td>
          <td class="align-middle p-2 p-lg-3">
            <div class="d-md-flex justify-content-between align-items-center">
              <div class="d-flex align-items-center flex-wrap">
                <div class="form-check form-check-inline me-4 me-lg-5 my-2" v-for="item in categoryShow" :key="item">
                  <input class="form-check-input" type="checkbox" :id="`id${item.code}`" :value="item.code" v-model="checkedList">
                  <!-- <label class="form-check-label" :for="`id${item.code}`">{{ item.name }}({{ item.count }})</label> -->
                  <label class="form-check-label" :for="`id${item.code}`">{{ item.name }}</label>
                </div>
              </div>
              <div class="d-flex justify-content-end">
                <button ref="moreCategory" class="btn-seeMore btn border bg-white pe-4" @click="seeMore($event)">+ 看更多</button>
              </div>
            </div>
            <div class="d-flex justify-content-end">
              <button ref="lessCategory" class="btn-seeMore btn border text-center bg-white px-4 d-none" @click="seeLess($event)">取消</button>
            </div>
          </td>
        </tr>
        <!-- <tr>
          <td scope="row" class="text-primary text-center align-middle py-3 px-0">
            <span class="d-block border-end border-primary fw-bold lh-1">子館別</span>
          </td>
          <td class="align-middle p-3">
            <div class="d-flex justify-content-between align-items-center">
              <ul class="list-group list-group-horizontal border-0 flex-wrap">
              <li class="list-group-item bg-light px-2 me-2" v-for="sub in subCategoryShow" :key="sub">
                <a href="#" class="text-secondary" @click.prevent="filterResults('subCategory', sub.code)">{{ sub.name }}({{ sub.count }})</a>
              </li>
            </ul>
            <button ref="moreSubcategory" class="btn-seeMore btn border bg-white pe-4" @click="seeMore('subCategory', $event)">+ 看更多</button>
            </div>
            <div class="d-flex justify-content-end">
              <button ref="lessSubcategory" class="btn-seeMore btn border text-center bg-white px-4 d-none" @click="seeLess('subCategory', $event)">取消</button>
            </div>
          </td>
        </tr> -->
      </tbody>
    </table>
    <div class="d-lg-flex justify-content-end align-items-center mt-4 mt-lg-5 mb-3"    >
      <!-- <p>共 {{ $currency.currency(this.resultsCopy.length) }} 件商品</p> -->
      <div
      :class=" { 'd-none' : notFoundKeyword === true }  "
        class="btn-group sort-btn-group mt-2 mt-lg-0 w-100 w-lg-auto"
        role="group"
        aria-label="Basic radio toggle button group"
      >
        <!-- date目前無法排序先關閉 -->
        <input type="radio" class="btn-check" name="btnradio" id="btnradio1" />
        <label
          class="btn btn-outline-secondary text-scondary shadow-none px-3 px-lg-7"
          for="btnradio1"
          @click="sortNewest"
          >新上市</label
        >
        <input type="radio" class="btn-check" name="btnradio" id="btnradio2" />
        <label
          class="btn btn-outline-secondary text-scondary shadow-none px-3 px-lg-7"
          for="btnradio2"
          @click="sortLowPrice"
          >價格低至高</label
        >
        <input type="radio" class="btn-check" name="btnradio" id="btnradio3" />
        <label
          class="btn btn-outline-secondary text-scondary shadow-none px-3 px-lg-7"
          for="btnradio3"
          @click="sortHighPrice"
          >價格高至低</label
        >
      </div>
    </div>

    <LoginModal ref="loginModal"    > </LoginModal>

    <div v-if="isLoading">
      <LoadingProductSearch></LoadingProductSearch>
    </div>

<div class="d-flex justify-content-center align-items-center flex-column" v-else-if="notFoundKeyword"> <p class="my-2"> 很抱歉，查無 <span class="text-primary"> {{ this.$route.params.keyword  }} </span> 相關商品</p>
  <router-link to="/" class="btn btn-primary text-light">回首頁</router-link>
  </div>

    <div v-else class="row">
      <div
        class="col-6 col-md-4 col-lg-3 mb-3"
        v-for="(search) in resultsPage"
        :key="search.productId"
      >

      <!-- 元件化的卡片 -->
          <ProductCard :cardData="search"  :login-status="loginStatus"  :wish-list="wishlist"
      @show-login="showLoginModal"  @rander-wishlist="getWishlist"    > </ProductCard>

      <!-- 原本的卡片結構 start -->

        <!-- <div class="card card-hover border-0 h-100">
          <router-link
            :to="`/productboard/product/${search.productId}`"
            class="d-block text-secondary"
            @click.prevent="this.$store.commit('getSubCategoryId', search.subCatagory); this.$store.dispatch('getSubCategoryWord');this.recordHeight()"
          >
            <div class="ratio ratio-1x1">
              <img
                :src="search.productImage"
                class="card-img-top"
                alt="product image"
              />
            </div>
            <div class="card-body px-0 py-1">
              <h5 class="card-title card-title-height fs-lg-6 fs-md-7 fs-7 p-1 mb-1">
                {{ search.name }}
              </h5>
              <p class="card-text fs-md-5 fs-6 mb-1 text-primary">
                <del class="text-secondary me-2 fs-md-6 fs-7"
                  >
                    ${{ $currency.currency(search.oldPrice) }}</del
                >
                ${{ $currency.currency(search.price) }}
              </p>
            </div>
          </router-link>
        </div> -->

       <!-- 原本的卡片結構 end -->

      </div>
    </div>
    <!-- 資料讀取 loading動畫放在最下層 -->
    <loading
      :active="underlist"
      class="bottom-fixed"
      id="overlay"
      backgroundColor="transparent"
      blur=""
    >
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
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

import ProductCard from '../components/ProductCard.vue'
import LoginModal from '../components/LoginModal.vue'
import checkToken from '@/assets/js/checkToken.js'
const LoadingProductSearch = defineAsyncComponent(() => import(/* webpackChunkName: "loadingProductSearch" */'@/views/LoadingProductSearch.vue'))
const AccessToken = checkToken.getAccessToken()
const RefreshToken = checkToken.getFreshToken()

export default {
  data () {
    return {
      results: [], // ?搜尋資料
      resultsCopy: [], // ?複製搜尋資料
      resultsPage: [], // ?每頁累積資料
      dataNumber: 1, // ?累積頁數
      underlist: false, // ? loading 更多商品的動畫開關
      menuList: [], // ?館別清單
      category: [], // ?館別中文
      categoryShow: [], // ?畫面顯示館別個數
      checkedList: [], // ?館別中文
      keyword: '', // ?使用者輸入的搜尋文字
      isLoading: false, // ?進場動畫開關
      notFoundKeyword: false, // ! 無關鍵字狀態
      loginStatus: false, // !登入狀態(傳入卡片元件裡)
      wishlist: [] // ! 願望清單資料
    }
  },
  components: {
    LoadingProductSearch,
    ProductCard, // ! 卡片元件
    LoginModal // ! 登入modal
  },
  methods: {
    // ! 取得追蹤清單
    getWishlist () {
      const wishlistUrl = `${process.env.VUE_APP_API}/api/wishlist/list`
      this.axios.get(wishlistUrl)
        .then((res) => {
          this.wishlist = res.data.info
        })
    },
    showLoginModal () {
      this.$refs.loginModal.showModal()
    },
    checkCookie () {
      if (AccessToken || RefreshToken) {
        this.loginStatus = true
        this.getWishlist() // 已移到卡片元件內
      } else {
        this.loginStatus = false
      }
    },
    // ! 少了回傳為空值的判斷 -> 查無關鍵字的顯示
    getResults () {
      // ?取得關鍵字搜尋結果
      this.keyword = this.$route.params.keyword

      if (this.keyword !== '') {
        const url = `${process.env.VUE_APP_API}/api/product/searchbyname?keyword=${this.keyword}`
        this.isLoading = true
        // const url = 'https://mocki.io/v1/c30f565a-3d45-4c9c-ad2f-0c3336090923'
        this.$http.get(url).then(res => {
          this.isLoading = false

          if (res.data.rtnCode === 0) {
            if (res.data.info.results.length === 0 || res.data.info.categories.length === 0) {
              this.notFoundKeyword = true
            } else {
              this.notFoundKeyword = false
              this.results = res.data.info.results
              this.resultsCopy = this.results
              this.categories = res.data.info.categories
              const datatoGA = {
                items: this.results
              }
              this.$gtag.event('view_search_results', datatoGA)
              this.getCategories()
              if (this.dataNumber === 1) {
                this.isLoading = false
              } else {
                this.underproduct = false
              }
              if (this.$store.state.recordReadHeight > 0) { // ? 若有點擊產品紀錄，則記錄高度供上一頁返回
              // const windowHeight =
                this.dataNumber = this.$store.state.recordDataHeight
                this.get_data()
                this.isLoading = false
                this.underproduct = false
                setTimeout(() => [// ?資料高度生成需要時間，利用setTimeOut讓視窗滑動不同步，才能順利執行
                  window.scrollTo(0, this.$store.state.recordReadHeight)
                ], 500)
              // document.body.offsetHeight = windowHeight
              } else {
                this.get_data()
              }
            }
          } else {
            this.$swal.fire({
              title: `${res.data.rtnMsg}(${res.data.rtnCode})`,
              confirmButtonColor: '#F8412E',
              customClass: {
                title: 'text-class'
              }
            })
            this.underlist = false
          }
        })
      }
    },
    show_underlist () {
      // ?瀏覽器高度偵測
      const windowY = window.scrollY //* 卷軸高度
      const productHeight = window.innerHeight //* 網頁內部視窗高
      const documentHeight = document.body.clientHeight /* 資料高度 */
      // * 以下為瀏覽商品讀取icon
      let viewData = Math.floor(((windowY + productHeight) / documentHeight) * this.dataNumber * 20)
      // const totalData = this.results.length
      if (viewData >= this.resultsCopy.length) {
        viewData = this.resultsCopy.length
      }
      this.$store.commit('getReadData', viewData)
      this.$store.commit('getPageData', this.resultsCopy.length)
      // * 以上為瀏覽商品讀取icon
      const dataShowStardand = windowY + productHeight - documentHeight
      if (dataShowStardand >= -1.5 && dataShowStardand <= 1) {
        /* 觸底觸發 */
        if (this.resultsPage.length !== this.resultsCopy.length) {
          this.underlist = true
          setTimeout(() => {
            this.underlist = false
            this.dataNumber++
            this.get_data()
          }, 800)
        }
      }
    },
    get_data () {
      // ?一次顯示 20 筆商品
      this.resultsPage = this.resultsCopy.slice(0, 20 * this.dataNumber)
    },
    sortHighPrice () {
      // ?價格由高到低排序
      this.dataNumber = 1
      this.resultsCopy.sort((a, b) => {
        return b.price - a.price
      })
      this.get_data()
    },
    sortLowPrice () {
      // ?價格由低到高排序
      this.dataNumber = 1
      this.resultsCopy.sort((a, b) => {
        return a.price - b.price
      })
      this.get_data()
    },
    sortNewest () {
      // ?新上市排序
      this.dataNumber = 1
      this.resultsCopy.sort((a, b) => {
        return b.date - a.date
      })
      this.get_data()
    },
    getCategories () {
      // ?比對館別 id 對應館別中文
      this.menuList = this.$store.state.menuList
      this.categories.forEach((item) => {
        this.menuList.forEach((item1) => {
          if (item1.categoryCode === item.code) {
            this.category.push({
              code: item.code,
              name: item1.name,
              count: item.count
            })
          }
        })
      })
      this.categoryShow = this.category.slice(0, 3)
      // 子館別清單
      // 撈出搜尋結果的子館別清單
      // const list = []
      // this.subCategory = []
      // this.categories.forEach((item) => {
      //   list.push(item.subCategories)
      // })
      // // 撈出所有館別內有搜尋到的館別的子館別清單
      // const sublist = []
      // this.menuList.forEach((item) => {
      //   this.category.forEach((item2) => {
      //     if (item2.code === item.categoryCode) {
      //       item.subCategories.forEach((item3) => {
      //         sublist.push(item3)
      //       })
      //     }
      //   })
      // })
      // // 取得子館別清單
      // list.forEach((item) => {
      //   sublist.forEach((item2) => {
      //     if (item.code === item2.categoryCode) {
      //       this.subCategory.push({
      //         code: item.code,
      //         count: item.count,
      //         name: item2.name
      //       })
      //     }
      //   })
      // })
      // this.subCategoryShow = this.subCategory.slice(0, 3)
    },
    seeMore ($event) {
      // ?看更多 Button 顯示全部
      $event.target.classList.add('d-none')
      this.categoryShow = this.category
      this.$refs.lessCategory.classList.remove('d-none')
    },
    seeLess ($event) {
      // ?看更多 Button 顯示較少(3 筆)
      $event.target.classList.add('d-none')
      this.categoryShow = this.category.slice(0, 3)
      this.$refs.moreCategory.classList.remove('d-none')
    },
    recordHeight () {
      const recordHeight = window.scrollY
      // const offsetHeight = document.body.offsetHeight
      // const scrollHeight = scrollHeight
      this.$store.commit('getRecordHeight', recordHeight)
      const dataHeight = this.dataNumber
      this.$store.commit('getDataHeight', dataHeight)
    }
  },
  watch: {
    // ?監聽路由變化，重渲染館別頁面
    $route (to) {
      if (to.fullPath.match('/productboard/productsearch/')) {
        this.getResults()
        this.checkedList = []
        this.category = []
        this.dataNumber = 1
        this.$store.commit('getRecordHeight', []) // 每次重新搜尋，清空瀏覽高度
        this.notFoundKeyword = false
      }
    },
    checkedList () {
      // ?重新取得篩選商品
      this.resultsCopy = []
      this.checkedList.forEach((item) => {
        this.results.forEach((item1) => {
          if (item === item1.catagory) {
            this.resultsCopy.push(item1)
          }
        })
      })
      this.dataNumber = 1
      this.get_data()
      // ?取消排序選項樣式
      const sortGroup = document.querySelectorAll('.sort-btn-group .btn-check')
      sortGroup.forEach((item) => {
        if (item.checked === true) {
          item.checked = false
        }
      })
    }
  },
  mounted () {
    this.getResults()
    window.addEventListener('scroll', this.show_underlist)
    this.checkCookie()
  },
  unmounted () {
    window.removeEventListener('scroll', this.show_underlist)
  }
}
</script>

<style lang="scss" scoped>
.btn-check:checked + .btn-outline-secondary,
.btn-check:hover + .btn-outline-secondary,
.btn-check:active + .btn-outline-secondary,
.btn-outline-secondary:active,
.btn-outline-secondary.active,
.btn-outline-secondary.dropdown-toggle.show {
  background-color: #f8412e;
  border-color: #f8412e;
}
.btn-seeMore{
  white-space: nowrap;
}
.form-check-input[type="checkbox"]{
  border-radius: 50%;
}
.form-check-input:checked + .form-check-label{
  color: #f8412e;
}
// .card-title-height{
//   height: 4.5rem;
//   @media (max-width: 768px) {
//     height: 3.5rem;
//   }
//   @media (max-width: 576px) {
//     height: 2.5rem;
//   }
// }
.loadingio-spinner-ellipsis-4hx2p6xfr9s {
  width: 200px;
  height: 150px;
  display: inline-block;
  overflow: hidden;
  position: fixed;
  left:55%;
  top:70%;
  @media (max-width: 768px){
       left:28%;
        top:45%;
    }
}
</style>
