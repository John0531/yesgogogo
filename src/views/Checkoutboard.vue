<template>
  <div>
    <Header></Header>
    <div class="checkoutboard bg-light">
      <div v-if="showCartBar&&$store.state.cartBarInfo.isShow" class="text-center text-primary p-2 position-fixed w-100 z-index-10 fs-md-6" style="background-color:#ffdcd7;">
        {{$store.state.cartBarInfo.text}}&nbsp;&nbsp;
        <span v-if="$store.state.cartBarInfo.canUse" style="color:#6cc236;"><img class="mb-1" src="@/assets/img/cart_confirm.svg" alt="" style="width:16px;height:auto;">已符合</span>
        <span v-else style="color:#1479fb;">( ! )未符合 差{{$store.state.cartBarInfo.difference}}元享優惠</span>
      </div>
      <div v-if="showCartBar&&$store.state.cartBarInfo.isShow" class="cartborad-space"></div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10">
              <router-view ></router-view>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  data () {
    return {
      showCartBar: false
    }
  },
  components: {
    Header,
    Footer
  },
  watch: {
    '$route' () {
      if (this.$route.fullPath === '/checkoutboard/checkoutcart') {
        this.showCartBar = true
      } else {
        this.showCartBar = false
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .container {
    min-height: calc(100vh - 298px);
  }
  .cartborad-space{
    height: 32px;
    @media (max-width: 768px) {
      height: 40px;
    }
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity:0;
  }
</style>
