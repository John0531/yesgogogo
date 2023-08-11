<template>
  <div>
    <!-- 手機 -->
    <swiper
      class="indexMobileBanner d-md-none h-100"
      :loop="true"
      :spaceBetween="0"
      :initialSlide="1"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false
      }"
      :pagination="{
        clickable: true
      }"
    >
      <swiper-slide v-for="bannerm in bannerList_m" :key="bannerm">
        <a :href="bannerm.targetUrl" target="_blank" class="d-block overflow-hidden text-center h-100"
          >
          <img :src="`${bannerm.image}`" alt="banner image" class="w-100">
        </a>
      </swiper-slide>
    </swiper>
    <!-- PC -->
    <swiper
      class="indexBanner d-none d-md-block h-100"
      :loop="true"
      :spaceBetween="0"
      :initialSlide="1"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false
      }"
      :pagination="{
        clickable: true
      }"
    >
      <swiper-slide v-for="banner in bannerList" :key="banner">
        <a :href="banner.targetUrl" target="_blank" class="d-block overflow-hidden text-center h-100"
          >
          <img :src="`${banner.image}`" alt="banner image" class="w-100">
        </a>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  data () {
    return {
      bannerList: [],
      bannerList_m: []
    }
  },
  methods: {
    getBannerList () {
      // 首頁 banner 清單 get
      // const url = `${process.env.VUE_APP_API}/api/widgets/banner`
      /* PC */
      const url = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=Index_Banner`
      this.$http.get(url).then(res => {
        if (res.data.rtnCode === 0) {
          this.bannerList = res.data.info
        }
      })
      /* 手機 */
      const urlm = `${process.env.VUE_APP_API}/api/widgets/activitybanner?code=Index_m_Banner`
      this.$http.get(urlm).then(res => {
        if (res.data.rtnCode === 0) {
          this.bannerList_m = res.data.info
        }
      })
    }
  },
  mounted () {
    this.getBannerList()
  }
}
</script>

<style lang="scss" scoped>
::v-deep(.swiper-pagination-bullet) {
  width: 6px;
  height: 6px;
  background-color: #fff;
  opacity: 1;
  transition: width 0.6s ease;
  @media (min-width: 576px) {
    width: 10px;
    height: 10px;
  }
}

::v-deep(.swiper-pagination-bullet-active) {
  background-color: #f8412e;
  width: 16px;
  border-radius: 20px;
  @media (min-width: 576px) {
    width: 24px;
  }
}

::v-deep(.swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction){
  bottom: 2px;
  @media (min-width: 768px) {
    bottom: 10px;
  }
}
</style>
