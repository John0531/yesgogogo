<template>
  <!-- 主視覺 -->
  <div class="d-none d-lg-block text-center">
    <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/superpopup/Index_xl_2up_kv.png" alt="超級閃購" class="img-fluid">
  </div>
  <div class="d-lg-none text-center">
    <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/superpopup/Index_lg_2up_kv.png" alt="超級閃購" class="img-fluid">
  </div>
  <div class="bg-pop">
    <!-- 敬請期待 -->
    <div class="container">
      <div v-if="comingBn">
        <img :src="comingBn.image" alt="敬請期待 banner" class="img-fluid mb-3 mb-md-5">
      </div>
      <div v-else>
        <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/superpopup/newNotify.png" alt="敬請期待 banner" class="img-fluid mb-3 mb-md-5">
      </div>
    </div>
    <!-- 熱門活動 -->
    <div class="container py-3 py-md-5">
      <h2>
        <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/superpopup/mb-bg_c01.png" alt="熱門活動標題" class="img-fluid d-block d-lg-none">
        <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/superpopup/bg_c01.png" alt="熱門活動標題" class="img-fluid d-none d-lg-block">
      </h2>
      <div class="bg-hot px-4 pt-2">
        <div class="hotEvents">
          <swiper
            class="hotSwiper swiper h-100"
            :slidesPerView="2"
            :spaceBetween="15"
            :watchOverflow=true
            :breakpoints="{
              768: {
                slidesPerView: 3,
                spaceBetween: 24,
              }
            }"
            :pagination="{
              el: '.swiper-pagination',
              type: 'bullets',
              clickable: true
            }"
          >
            <swiper-slide v-for="hot in hotEventsList" :key="hot.productId">
              <a href="#" @click.prevent="recordClickHeight(hot.targetUrl)" class="d-block prd-hover pt-2">
                <img :src="hot.image" class="img-fluid" alt="theme">
              </a>
            </swiper-slide>
          </swiper>
          <div class="swiper-pagination text-center swiperPagination"></div>
        </div>
      </div>
      <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/superpopup/mb-bg_c03.png" alt="熱門活動底部" class="img-fluid d-block d-lg-none">
      <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/superpopup/bg_c03.png" alt="熱門活動底部" class="img-fluid d-none d-lg-block">
    </div>
    <!-- 看更多商品 -->
    <div class="text-center w-40 w-lg-20 mx-auto pt-3 pb-5 pt-md-5 pb-lg-9">
      <router-link to="/">
        <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/superpopup/button-more.png" class="img-fluid" alt="看更多商品">
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      hotEventsList: '',
      comingBn: ''
    }
  },
  methods: {
    // * 熱門活動
    getHotEvents () {
      const url = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=pop_B`
      this.$http.get(url)
        .then((res) => {
          if (res.data.rtnCode === 0) {
            this.hotEventsList = res.data.info
            this.checkLocalHeight()
          }
        })
    },
    // * 敬請期待
    getComingBn () {
      const url = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=pop_D`
      this.$http.get(url)
        .then((res) => {
          if (res.data.rtnCode === 0) {
            this.comingBn = res.data.info[0]
          }
        })
    },
    // ?小電視及看更多記錄高度
    recordClickHeight (url) {
      // ?點擊產品觸發紀錄瀏覽高度於LocalStorage
      const scrollYHeight = window.scrollY
      localStorage.setItem('clickpopcomingHeight', scrollYHeight)
      setTimeout(() => {
        window.location = url
      }, 500)
    },
    checkLocalHeight () {
      // ?檢查LocalStorage
      if (window.localStorage.getItem('clickpopcomingHeight')) {
        const globalheight = window.localStorage.getItem('clickpopcomingHeight')
        setTimeout(() => {
          window.scrollTo(0, globalheight)
        }, 300)
        localStorage.removeItem('clickpopcomingHeight')
      }
    }
  },
  mounted () {
    this.getHotEvents()
    this.getComingBn()
  },
  updated () {
    this.checkLocalHeight()
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/activity/weekendpopup/_siteSuper.scss';
img{
  object-fit: fill;
  vertical-align: middle;
}

::v-deep(.hotSwiper>.swiper-pagination-bullets){
  bottom: 3px;
  @media (min-width: 768px) {
    bottom: 6px;
  }
}

::v-deep(.hotEvents .swiper-pagination){
  position: static;
}

::v-deep(.hotEvents .swiper-pagination-bullet) {
  margin: 0 3px;
  background-color: #fff;
  opacity: .8;
}

::v-deep(.hotEvents .swiper-pagination-bullet-active){
  position: relative;
  z-index: 10;
  background-color: #FFF9D2;
  opacity: 1;
}
</style>
