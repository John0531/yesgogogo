<template>
  <div class="icons position-fixed bottom-0 end-0 me-3 mb-2">
    <!--line -->
    <!-- 舊版本的icon,沒有好友送點數的字 $50-->
    <div v-if="!is100 && !isJiao && !isClose" class="position-relative">
      <a  href="http://line.me/ti/p/@yesgogogo" target="_blank"
      ><img
        src="../assets/img/eventline_icon_(1).gif"
        alt="line contact"
        class="d-block mb-2 socialLine"
    /></a>
      <a href="#" @click.prevent="closeEvent" class="d-block closeEvent position-absolute">
        <img src="../assets/img/eventline_close.png" alt="關閉活動" class="closeEventIcon img-fluid">
      </a>
    </div>

    <!-- event icon Line 好友送點數 $100-->
    <div v-if="is100 && !isJiao && !isClose" class="position-relative">
      <a href="http://line.me/ti/p/@yesgogogo" class="d-block" target="_blank"
        ><img
          src="../assets/img/eventline_icon.gif"
          alt="line contact"
          class="d-block mb-2 socialLine"
      /></a>
      <a href="#" @click.prevent="closeEvent" class="d-block closeEvent position-absolute">
        <img src="../assets/img/eventline_close.png" alt="關閉活動" class="closeEventIcon img-fluid">
      </a>
    </div>
    <!--go top -->
    <a href="#" @click.prevent="scollToTop" v-if="showTop && !isJiao"  class="d-block text-center"
      ><img
        src="../assets/img/yesgo_icon_up.svg"
        alt="go to top"
        class="mb-2 social"
    /></a>
    <!-- 椒房殿 -->
    <router-link to="/productboard/product/P221111000001" v-if="showTop && isJiao">
      <img src="https://yesgoimages.s3.ap-northeast-1.amazonaws.com/yesgoevent/jiao/goShop_2.png" alt="立即購買" class="buyJiao">
    </router-link>
    <!--product number -->
    <div class="text-center">
      <div v-if="dataflow" class="d-flex flex-column justify-content-center align-items-center mb-2 fs-lg-5 fs-md-6 fs-7 fw-bolder countIcon mx-auto">
        <div class="showData pt-1 pb-0 pe-2 pe-md-3 pe-sm-4 fs-7 fs-md-6 fs-lg-5" style="color:#fff;">{{this.$store.state.recordReadData}}</div>
        <div class="totalData pt-2 pb-1 ps-2 ps-sm-4 fs-7 fs-md-6 fs-lg-5" style="color:#fff;">{{this.$store.state.pageData}}</div>
      </div>
      <!-- <div v-if="dataflowSearch" class="d-flex flex-column justify-content-center align-items-center mb-2 fs-lg-5 fs-md-6 fs-7 fw-bolder countIcon2 mx-auto">
        <div class="showData pt-1 pb-0 pe-2 pe-md-3 pe-sm-4 fs-7 fs-md-6 fs-lg-5" style="color:#fff;">{{this.$store.state.recordReadData}}</div>
        <div class="totalData pt-2 pb-1 ps-2 ps-sm-4 fs-7 fs-md-6 fs-lg-5" style="color:#fff;">{{this.$store.state.pageData}}</div>
      </div> -->
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  data () {
    return {
      showTop: false,
      dataflow: false,
      dataflowSearch: false,
      is100: false,
      isOpen: false,
      isClose: false
    }
  },
  watch: {
    // ? 監聽路由當進入搜尋頁/館別頁啟動資料計數器
    '$route' (to) {
      if (to.fullPath.match('/productboard/productList/')) {
        this.dataflow = true
        // this.dataflowSearch = false
      } else {
        this.dataflow = false
        // this.dataflowSearch = false
      }
      // ? 商品搜尋列 API 回傳數量(含 S07 外)與實際不合, 先隱藏計數器
      // else if (to.fullPath.match('/productboard/productsearch/')) {
      //   this.dataflowSearch = true
      //   this.dataflow = false
      // }
    }
  },
  methods: {
    scollToTop () {
      window.scroll({
        top: 0,
        behavior: 'smooth'
      })
    },
    showScroll () {
      const windowY = window.scrollY//* 捲軸高度
      const innerHeight = window.innerHeight//* 視窗高
      if (windowY > innerHeight) {
        this.showTop = true
      } else {
        this.showTop = false
      }
    },
    closeEvent () {
      this.isClose = true
      sessionStorage.setItem('closeEvent', true)
    }
  },
  computed: {
    isJiao () {
      return this.$route.fullPath.includes('/JiaoFangDian')
    }
  },
  mounted () {
    if (window.location.href.includes('/productboard/productList/')) {
      this.dataflow = true
    }
    window.addEventListener('scroll', this.showScroll)
    // ?是否已關閉過活動 icon & 過 2023/12/31 隱藏
    const now = moment().format('YYYY/MM/DD HH:mm:ss')
    const eventIcon = sessionStorage.getItem('closeEvent')
    // ? 超過2023/11/1 50元 反之 100元
    if (moment(now, 'YYYY/MM/DD HH:mm:ss').isAfter('2023/10/31 23:59:59')) {
      this.is100 = false
    } else {
      this.is100 = true
    }
    if (eventIcon) {
      this.isClose = true
    } else {
      this.isClose = false
    }
  },
  unmounted () {
    window.removeEventListener('scroll', this.showScroll)
  }
}

</script>

<style lang="scss" scoped>
  .countIcon,.countIcon2{
    background-color: #adb5bd;
    color: #ddd;
    border-radius: 50%;
    height: 97px;
    width: 97px;
    // filter: drop-shadow(.3rem .2rem .3rem   #EDEDED);
    @media (max-width: 768px) {
      width: 80px;
      height: 80px;
    }
      @media (max-width: 576px) {
      width: 50px;
      height: 50px;
    }
  }
  .showData {
    filter: drop-shadow(.25rem .25rem .25rem   #495057);
  }
  .totalData {
    position: relative;
    filter: drop-shadow(.25rem .25rem .25rem   #495057);
    &:after {
      content: '';
      height:.25rem;
      position: absolute;
      top: 0%;
      left: 0%;
      width: 100%;
      // border: 1px solid #fff;
      border-radius: 50px;
      background-color:#fff;
      transform: rotateZ(-25deg);
      @media (max-width: 768px) {
        left: 5%;
        height:.2rem;
      }
      @media (max-width: 576px) {
        top: 6%;
        height:.08rem;
      }
    }
  }

  .icons .socialLine{
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

  .buyJiao {
    width: 100px;
    height: auto;
    @media (min-width: 576px) {
      width: auto;
      height: auto;
    }
  }
</style>
