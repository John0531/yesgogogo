<template>
  <div class="Bg">
    <div class="Container" style="overflow:hidden;">
          <div class="position-relative">
                  <div class="headerxl d-none d-lg-block text-center" >
                    <img v-if="theme[0]" class="img-fluid" :src="theme[0].image" alt="主視覺版頭">
                  </div>
                  <div class="header d-lg-none text-center"  >
                    <img v-if="theme_m[0]" class="img-fluid" :src="theme_m[0].image" alt="主視覺版頭m">
                  </div>
              <!-- 第一章背景圖區域 -->
              <div class="activities position-relative">
                  <!-- 各類活動連結 -->
                  <div class="position-absolute w-100 spc-position">
                    <div class="activityTopContainer py-3 d-none d-lg-flex">
                      <div class="row " >
                          <a v-if="events[0]" :href="events[0].targetUrl"  class="col-6  d-block hvr-bob my-3 text-end"><img v-if="events[0]" :src="events[0].image" class="img-fluid" alt=""></a>
                          <a v-if="events[1]" :href="events[1].targetUrl"  class="col-6  d-block hvr-bob my-3 text-start"><img v-if="events[1]" :src="events[1].image" class="img-fluid" alt=""></a>
                          <a v-if="events[2]" :href="events[2].targetUrl"  class="col-6  d-block hvr-bob mb-4 text-end"><img v-if="events[2]" :src="events[2].image" class="img-fluid" alt=""></a>
                          <a v-if="events[3]" :href="events[3].targetUrl"  class="col-6  d-block hvr-bob mb-4 text-start"><img v-if="events[3]" :src="events[3].image" class="img-fluid" alt=""></a>
                      </div>
                    </div>
                    <!-- 各類活動連結 手機-->
                    <div class="activityTopContainer-mb-bg">
                      <div class="pt-2 pt-md-5 px-2  d-flex d-lg-none">
                        <div class="row activityTopContainer-mb py-3 py-md-4 px-2" >
                            <a v-if="events_m[0]" :href="events_m[0].targetUrl"  class="col-12  d-block hvr-bob mb-2 text-center"><img class="img-fluid" v-if="events_m[0]" :src="events_m[0].image" alt=""></a>
                            <a v-if="events_m[1]" :href="events_m[1].targetUrl"  class="col-12  d-block hvr-bob mb-2 text-center"><img class="img-fluid" v-if="events_m[1]" :src="events_m[1].image" alt=""></a>
                            <a v-if="events_m[2]" :href="events_m[2].targetUrl"  class="col-6  d-block hvr-bob  pe-1 text-center"><img class="img-fluid" v-if="events_m[2]" :src="events_m[2].image" alt=""></a>
                            <a v-if="events_m[3]" :href="events_m[3].targetUrl"  class="col-6  d-block hvr-bob  ps-1 text-center"><img class="img-fluid" v-if="events_m[3]" :src="events_m[3].image" alt=""></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- 地方熱銷冠軍 -->
                  <div class="d-flex justify-content-center ">
                    <div class="topsellerContainer position-relative mx-3 spc-top">
                        <div class="row  justify-content-center mb-4 mb-lg-5 px-2 px-lg-5">
                          <a v-if="topSeller[0]" :href="topSeller[0].targetUrl"  class="col-12 col-md-6 d-block hvr-bob mb-2 mb-lg-5" @click.prevent="recordClickHeight(topSeller[0].targetUrl)"><img v-if="topSeller[0]" :src="topSeller[0].image" alt="" class="img-fluid"></a>
                          <a v-if="topSeller[1]" :href="topSeller[1].targetUrl"  class="col-12 col-md-6 d-block hvr-bob mb-2 mb-lg-5" @click.prevent="recordClickHeight(topSeller[1].targetUrl)"><img v-if="topSeller[1]" :src="topSeller[1].image" alt="" class="img-fluid"></a>
                          <a v-if="topSeller[2]" :href="topSeller[2].targetUrl"  class="col-12 col-md-6 d-block hvr-bob mb-2 mb-lg-5" @click.prevent="recordClickHeight(topSeller[2].targetUrl)" ><img v-if="topSeller[2]" :src="topSeller[2].image" alt="" class="img-fluid"></a>
                          <a v-if="topSeller[3]" :href="topSeller[3].targetUrl"  class="col-12 col-md-6 d-block hvr-bob mb-2 mb-lg-5" @click.prevent="recordClickHeight(topSeller[3].targetUrl)"><img v-if="topSeller[3]" :src="topSeller[3].image" alt="" class="img-fluid"></a>
                          <a v-if="topSeller[4]" :href="topSeller[4].targetUrl"  class="col-12 col-md-6 d-block hvr-bob mb-2 mb-lg-5" @click.prevent="recordClickHeight(topSeller[4].targetUrl)"><img v-if="topSeller[4]" :src="topSeller[4].image" alt="" class="img-fluid"></a>
                          <a v-if="topSeller[5]" :href="topSeller[5].targetUrl"  class="col-12 col-md-6 d-block hvr-bob mb-2 mb-lg-5" @click.prevent="recordClickHeight(topSeller[5].targetUrl)"><img v-if="topSeller[5]" :src="topSeller[5].image" alt="" class="img-fluid"></a>
                          <a v-if="topSeller[6]" :href="topSeller[6].targetUrl"  class="col-12 col-md-6 d-block hvr-bob mb-2 mb-lg-5" @click.prevent="recordClickHeight(topSeller[6].targetUrl)"><img v-if="topSeller[6]" :src="topSeller[6].image" alt="" class="img-fluid"></a>
                          <a v-if="topSeller[7]" :href="topSeller[7].targetUrl"  class="col-12 col-md-6 d-block hvr-bob mb-2 mb-lg-5" @click.prevent="recordClickHeight(topSeller[7].targetUrl)"><img v-if="topSeller[7]" :src="topSeller[7].image" alt="" class="img-fluid"></a>
                        </div>
                        <div class="position-absolute center top-0 bg-1 d-none d-lg-block">
                            <img class="img-fluid " src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/afcollection/title_01.png" alt="">
                        </div>
                        <div class="position-absolute center-mb top-0 bg-1  d-block d-lg-none " >
                            <img class="img-fluid " src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/afcollection/title_mb_01.png" alt="">
                        </div>
                    </div>
                  </div>
              </div>
          </div>
          <!-- 第二章圖區域 -->
          <div class="meatVegetable">
            <div class="d-none d-lg-flex  justify-content-center">
                <img class="img-fluid spc-top-mv" src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/afcollection/title-02.png" alt="生鮮肉品.蔬果標題">
            </div>
            <div class="d-block d-lg-none" >
                <img class="img-fluid " src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/afcollection/title_mb_02.png" alt="生鮮肉品.蔬果標題">
            </div>
            <div class="d-flex justify-content-center">
                    <div class="meatVegetableContainer   mx-3">
                        <div class="row justify-content-center mb-4 mb-lg-5">
                            <div class="col-6  col-lg-3 mb-3 mt-2 px-1 px-md-4" v-for="product in foodList01" :key="product+'1'">
                              <div class="prd-item hvr-bob" :class="{ 'sold-out': product.stock === 0 }">
                                  <router-link :to="`/productboard/product/${product.productId}`" class="prd-link text-secondary text-decoration-none">
                                    <span class="d-block prd-img mb-2"
                                      ><img :src="product.productImage" class="img-fluid"
                                    /></span>
                                    <span class="d-block prd-slogan fs-6 fs-md-5 fw-bold">{{ product.slogan }}</span>
                                    <span class="d-block prd-name fs-6 fs-md-5 fw-bold">{{ product.productName }}</span>
                                    <div class="d-flex">
                                      <del class="prd-price fs-7 fs-md-6 me-2 me-md-6 me-lg-5"
                                        >原價 ${{ product.oldPrice &lt; 0 ? 'xxx': product.oldPrice }}
                                      </del>
                                      <span class="d-block prd-sale fs-7 fs-md-5"
                                        >特價$<span class="fs-6 fs-md-4 fw-bold">{{ product.price &lt; 0 ? 'xxx': product.price }}</span></span
                                      >
                                    </div>
                                  </router-link>
                              </div>
                            </div>
                        </div>
                    </div>
                  </div>
          </div>
          <!-- 第三章圖區域 -->
          <div class="riceOil">
            <div class="d-none d-lg-flex  justify-content-center" style="padding-top:75px">
                <img class="img-fluid " src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/afcollection/title-03.png" alt="南北雜貨.米麵油品標題">
            </div>
            <div class="d-block d-lg-none" >
                <img class="img-fluid " src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/afcollection/title_mb_03.png" alt="南北雜貨.米麵油品標題">
            </div>
            <div class="d-flex justify-content-center">
                    <div class="riceOilContainer  mx-3">
                        <div class="row justify-content-center mb-4 mb-lg-5">
                            <div class="col-12  col-lg-6 mb-3 mt-2 px-1 px-md-5" v-for="product in foodList02" :key="product+'1'">
                              <div class="prd-item hvr-bob" :class="{ 'sold-out': product.stock === 0 }">
                                  <router-link :to="`/productboard/product/${product.productId}`" class="d-flex prd-link text-secondary text-decoration-none " >
                                    <div class="w-50 me-1 me-lg-2">
                                      <span class="d-block prd-img mb-2"
                                        ><img :src="product.productImage" class="img-fluid"
                                      /></span>
                                    </div>
                                    <div class="w-50 ms-1 ms-lg-2">
                                      <span class="d-block prd-slogan fs-6 fs-md-5 fw-bold">{{ product.slogan }}</span>
                                      <span class="d-block prd-name-row fs-6 fs-md-3 fs-lg-4 fw-bold mt-4">{{ product.productName }}</span>
                                      <div class="d-flex mt-0 mt-md-5">
                                        <del class="prd-price-riceOil fs-7 fs-md-6 me-1 me-md-6 me-lg-5"
                                          >原價 ${{ product.oldPrice &lt; 0 ? 'xxx': product.oldPrice }}
                                        </del>
                                        <span class="d-block prd-sale fs-7  fs-md-6 fs-lg-5"
                                          >特價$<span class="fs-5 fs-md-1 fs-lg-3 fw-bold">{{ product.price &lt; 0 ? 'xxx': product.price }}</span></span
                                        >
                                      </div>
                                    </div>
                                  </router-link>
                              </div>
                            </div>
                        </div>
                    </div>
                  </div>
                  <!-- 看更多連結 -->
                  <div class="text-center pt-0 pb-4 pt-md-2 pb-md-5 more d-none d-lg-block">
                    <router-link to="/"  class="hvr-bob" >
                          <img
                            src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/afcollection/icon-05.png"
                            alt="看更多商品"
                            class="img-fluid  "
                          />
                    </router-link>
                  </div>
                  <!-- 看更多連結MB -->
                  <div class="text-center pt-0 pb-4 pt-md-2 pb-md-5 d-block d-lg-none">
                    <div to="/" class="hvr-bob d-flex justify-content-center align-items-center" >
                        <router-link to="/">
                          <img
                            src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/afcollection/icon-05.png"
                            alt="看更多商品"
                            class="img-fluid d-none d-lg-block "
                          />
                        </router-link>
                      <div class="w-30">
                        <img
                          src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/afcollection/chicken_mb.png"
                          alt="看更多商品"
                          class="img-fluid d-block d-md-inline d-lg-none"
                        />
                      </div>
                      <router-link to="/" class="w-40">
                        <img
                          src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/afcollection/icon_mb_05.png"
                          alt="看更多商品"
                          class=" img-fluid d-block d-md-inline d-lg-none"
                        />
                      </router-link>
                      <div class="w-30">
                        <img
                          src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/afcollection/fish_mb.png"
                          alt="看更多商品"
                          class=" img-fluid d-block d-md-inline d-lg-none"
                        />
                      </div>
                    </div>
                  </div>
          </div>
    </div>
  </div>
</template>

<script>
// import moment from 'moment'
export default {
  data () {
    return {
      events: [],
      events_m: [],
      foodList: [],
      foodList01: [],
      foodList02: [],
      topSeller: [],
      exist: true,
      theme: [],
      theme_m: []
    }
  },
  methods: {
    /* 上方活動圖片 */
    getEvents () {
      /* 電腦版 */
      const url = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=af_A`
      this.$http.get(url)
        .then((res) => {
          if (res.data.rtnCode !== 0) {
            this.$swal.fire({
              title: `af_A${res.data.rtnMsg}(${res.data.rtnCode})`,
              allowOutsideClick: false,
              confirmButtonColor: '#F8412E',
              confirmButtonText: '確認',
              width: 400,
              customClass: {
                title: 'text-class',
                confirmButton: 'confirm-btn-class'
              }
            })
            return
          }
          this.events = res.data.info
        })
        /* 手機版 */
      const urlm = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=af_m_A`
      this.$http.get(urlm)
        .then((res) => {
          if (res.data.rtnCode !== 0) {
            this.$swal.fire({
              title: `af_m_A${res.data.rtnMsg}(${res.data.rtnCode})`,
              allowOutsideClick: false,
              confirmButtonColor: '#F8412E',
              confirmButtonText: '確認',
              width: 400,
              customClass: {
                title: 'text-class',
                confirmButton: 'confirm-btn-class'
              }
            })
            return
          }
          this.events_m = res.data.info
        })
    },
    getTopSeller () {
      const url = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=af_B`
      this.$http.get(url)
        .then((res) => {
          if (res.data.rtnCode !== 0) {
            this.$swal.fire({
              title: `af_B${res.data.rtnMsg}(${res.data.rtnCode})`,
              allowOutsideClick: false,
              confirmButtonColor: '#F8412E',
              confirmButtonText: '確認',
              width: 400,
              customClass: {
                title: 'text-class',
                confirmButton: 'confirm-btn-class'
              }
            })
            return
          }
          this.topSeller = res.data.info
        })
    },
    getFoodList () {
      const url = `${process.env.VUE_APP_API}/api/product/eventproducts?code=af_C`
      this.$http.get(url)
        .then((res) => {
          if (res.data.rtnCode !== 0) {
            this.$swal.fire({
              title: `af_C${res.data.rtnMsg}(${res.data.rtnCode})`,
              allowOutsideClick: false,
              confirmButtonColor: '#F8412E',
              confirmButtonText: '確認',
              width: 400,
              customClass: {
                title: 'text-class',
                confirmButton: 'confirm-btn-class'
              }
            })
            return
          }
          this.foodList = res.data.info
          this.foodList.forEach((item) => {
            if (item.code === 'af_C_1') {
              this.foodList01 = item.products
            } else if (item.code === 'af_C_2') {
              this.foodList02 = item.products
            }
          })
        })
    },
    recordHeight () {
      // ?點擊產品觸發紀錄瀏覽高度
      if (this.$store.state.recordEventReadHeight) {
        setTimeout(
          () => [
            // ?資料高度生成需要時間，利用setTimeOut讓視窗滑動不同步，才能順利執行
            window.scrollTo(0, this.$store.state.recordEventReadHeight)
          ],
          500
        )
      }
    },
    async recordClickHeight (url) {
      // ?點擊產品觸發紀錄瀏覽高度於LocalStorage
      var scrollYHeight = window.scrollY
      await window.localStorage.setItem('clickHeight', scrollYHeight)
      setTimeout(() => {
        window.location = url
      }, 500)
    },
    async checkLocalHeight () {
      // ?檢查LocalStorage
      if (window.localStorage.getItem('clickHeight')) {
        var globalheight = await window.localStorage.getItem('clickHeight')
        setTimeout(() => {
          window.scrollTo(0, globalheight)
          //  !scroll之後的行為會直接被忽略不執行
        }, 300)
        await window.localStorage.removeItem('clickHeight')
      }
    },
    // // * 置頂Banner時間控制
    // timePass () {
    //   const now = moment().format('YYYY/MM/DD HH:mm:ss')
    //   if (moment(now, 'YYYY/MM/DD HH:mm:ss').isAfter('2022/06/08 00:00:00')) {
    //     this.exist = false
    //   }
    // }
    getThemePic () {
      const url = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=af_theme`
      this.axios.get(url)
        .then((res) => {
          if (res.data.rtnCode !== 0) {
            this.$swal.fire({
              title: `af_theme${res.data.rtnMsg}(${res.data.rtnCode})`,
              allowOutsideClick: false,
              confirmButtonColor: '#F8412E',
              confirmButtonText: '確認',
              width: 400,
              customClass: {
                title: 'text-class',
                confirmButton: 'confirm-btn-class'
              }
            })
            return
          }
          this.theme = res.data.info
        })
        // ? 手機版
      const urlm = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=af_m_theme`
      this.axios.get(urlm)
        .then((res) => {
          if (res.data.rtnCode !== 0) {
            this.$swal.fire({
              title: `af_theme_m${res.data.rtnMsg}(${res.data.rtnCode})`,
              allowOutsideClick: false,
              confirmButtonColor: '#F8412E',
              confirmButtonText: '確認',
              width: 400,
              customClass: {
                title: 'text-class',
                confirmButton: 'confirm-btn-class'
              }
            })
            return
          }
          this.theme_m = res.data.info
        })
    }
  },
  watch: {
    $route (to, from) {
      if (
        to.fullPath.match('/productboard/product/') ||
        to.fullPath.match('/productboard/productList/')
      ) {
        const recordHeight = window.scrollY
        this.$store.commit('getEventRecordHeight', recordHeight)
      } else {
        this.$store.commit('getEventRecordHeight', '')
      }
    }
  },
  mounted () {
    // this.timePass()
    this.getThemePic()
    this.getEvents()/* 上方活動圖片 */
    this.getTopSeller()
    this.getFoodList()
    if (this.$store.state.recordEventReadHeight) {
      // ? 若有點擊產品紀錄，則記錄高度供上一頁返回
      setTimeout(
        () => [
          // ?資料高度生成需要時間，利用setTimeOut讓視窗滑動不同步，才能順利執行
          window.scrollTo(0, this.$store.state.recordEventReadHeight)
        ],
        500
      )
    }
    this.checkLocalHeight()
  },
  updated () {
    this.checkLocalHeight()
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/activity/_hover.min.scss';
@import '@/assets/scss/activity/afcollection/_site.scss';
</style>
