<template>
  <div>
    <EventHeader v-if="isWeb"></EventHeader>
    <router-view></router-view>
    <Footer v-if="isWeb"></Footer>
    <div class="socialIcons position-fixed bottom-0 end-0 me-2 mb-2">
      <!-- event icon Line 好友送點數 50 -->
      <div v-if="!isClose" class="position-relative">
        <a href="http://line.me/ti/p/@yesgogogo"
          ><img
            src="../assets/img/eventline_icon_(1).gif"
            alt="line contact"
            class="d-block mb-2 socialLine"
        /></a>
        <a href="#" @click.prevent="closeEvent" class="d-block closeEvent position-absolute">
          <img src="../assets/img/eventline_close.png" alt="關閉活動" class="closeEventIcon img-fluid">
        </a>
      </div>
      <!-- to Top -->
      <div v-if="showTop">
        <div class="row g-0">
          <div class="col">
            <a href="#" class="d-block text-center" @click.prevent="scollToTop"
              ><img src="../assets/img/yesgo_icon_up.svg" class="img-fluid toTop"
            /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
const Footer = defineAsyncComponent(() => import(/* webpackChunkName: "footer" */'@/components/Footer.vue'))
const EventHeader = defineAsyncComponent(() => import(/* webpackChunkName: "eventheader" */'@/components/EventHeader.vue'))

export default {
  data () {
    return {
      showTop: false,
      isClose: false,
      isWeb: true
    }
  },
  components: {
    Footer,
    EventHeader
  },
  methods: {
    scollToTop () {
      window.scroll({
        top: 0,
        behavior: 'smooth'
      })
    },
    showScroll () {
      const windowY = window.scrollY //* 捲軸高度
      const innerHeight = window.innerHeight //* 視窗高
      if (windowY > innerHeight) {
        this.showTop = true
      } else {
        this.showTop = false
      }
    },
    closeEvent () {
      this.isClose = true
      sessionStorage.setItem('closeEvent', true)
    },
    detectBrowser () {
      const detect = window.navigator.userAgent
      if (detect.includes('yesgoApp')) {
        this.isWeb = false
      }
    }
  },
  mounted () {
    this.detectBrowser()
    window.addEventListener('scroll', this.showScroll)
  },
  unmounted () {
    window.removeEventListener('scroll', this.showScroll)
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/all';
@import '@/assets/scss/all.scss';
@import '@/assets/scss/activity/_animate.min.scss';
@import '@/assets/scss/activity/_hover.min.scss';
@import '@/assets/scss/activity/_ygg-comp.scss';
@import '@/assets/scss/activity/_font.scss';
.socialIcons {
  z-index: 51 !important;
  .toTop{
    width: 50px;
    height: 50px;
    @media (min-width: 768px) {
      width: 80px;
      height: 80px;
    }
    @media (min-width: 992px) {
      width: 97px;
      height: 97px;
    }
  }
}

.socialIcons .socialLine{
  width: 100px;
  height: auto;
  @media (min-width: 576px) {
    width: 150px;
  }
}

.closeEvent{
  top: -12px;
  right: -2px;
  width: 20px;
  .closeEventIcon{
    height: auto;
  }
  @media (min-width: 768px) {
    top: -12px;
    right: 2px;
    width: 24px;
  }
}
</style>
